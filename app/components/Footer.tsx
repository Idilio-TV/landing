"use client";

import React, { FormEvent, useState } from "react";
import Modal from "./Modal";
import toast from "react-hot-toast";

export default function Footer() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.trim(),
                    email: email.trim(),
                    message: `${linkedin.trim()} - ${message.trim()}`,
                }),
            });
            toast.success("¡Te escribimos pronto!");
            setIsModalOpen(false);
            setName("");
            setEmail("");
            setLinkedin("");
            setMessage("");
        } catch {
            toast.error("Hubo un error al suscribirte.");
        }

    };
    return (
        <footer className="bg-black text-white px-6 py-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <div className="text-center md:text-left">
                    <p>© 2025 Idilio. Hecho con pasión en Latinoamérica</p>
                </div>
                <div className="flex space-x-4">
                    <a onClick={() => setIsModalOpen(true)} className="hover:underline text-md">
                        Únete al equipo
                    </a>
                    {/* <a href="/terms" className="hover:underline">
                        Términos
                    </a>
                    <a href="/privacy" className="hover:underline">
                        Privacidad
                    </a> */}
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">¡Únete a la Transformación del Entretenimiento!</h2>
                    <p className="text-lg mb-6">Déjanos tus datos y te escribiremos.</p>
                    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-3xl p-4 ">
                        <input type="text" placeholder="Nombre" value={name}
                            onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded" />
                        <input type="email" placeholder="Correo" value={email}
                            onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded" />

                        <input type="text" placeholder="LinkedIn" value={linkedin}
                            onChange={(e) => setLinkedin(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded" />
                        <textarea value={message}
                            onChange={(e) => setMessage(e.target.value)} placeholder="Mensaje" rows={4} className="w-full border border-gray-300 px-4 py-2 rounded" />
                        <button type="submit" className="bg-main-green-100 hover:bg-main-green-200 text-white px-6 py-2 rounded font-semibold">
                            Enviar
                        </button>
                    </form>
                </div>
            </Modal>
        </footer>
    );
}
