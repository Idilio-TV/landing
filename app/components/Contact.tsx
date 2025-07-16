"use client";

import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "" });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const validate = () => {
        const newErrors = { name: "", email: "" };
        let isValid = true;

        if (name.trim() === "") {
            newErrors.name = "El nombre es obligatorio.";
            isValid = false;
        }

        // ✅ Correct email regex (basic but effective)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === "") {
            newErrors.email = "El correo es obligatorio.";
            isValid = false;
        } else if (!emailRegex.test(email)) {
            newErrors.email = "El formato del correo no es válido.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            try {
                setButtonDisabled(true);
                await fetch("/api/subscribe", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim(),
                        message: message.trim(),
                    }),
                });
                toast.success("¡Te escribimos pronto!");
                setName("");
                setEmail("");
                setMessage("");
            } catch {
                toast.error("Hubo un error al suscribirte.");
            } finally {
                setButtonDisabled(false);
            }

        }
    };

    return (
        <section className="py-20 px-6 bg-black text-white w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-6">Escríbenos</h2>
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-3xl p-4 ">
                <input type="text" placeholder="Nombre" value={name}
                    onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded" />
                {errors.name && (
                    <p className="text-red-600 mt-1">{errors.name}</p>
                )}
                <input type="email" placeholder="Correo" value={email}
                    onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded" />
                {errors.email && (
                    <p className="text-red-600 mt-1">{errors.email}</p>
                )}
                <textarea value={message}
                    onChange={(e) => setMessage(e.target.value)} placeholder="Mensaje" rows={4} className="w-full border border-gray-300 px-4 py-2 rounded" />
                <button disabled={buttonDisabled} type="submit" className="bg-main-green-100 hover:bg-main-green-200 text-white px-6 py-2 rounded font-semibold">
                    Enviar
                </button>
            </form>
        </section>
    )
}

