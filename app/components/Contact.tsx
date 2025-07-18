"use client";

import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { useTranslations } from 'next-intl';

export default function Contact() {
    const t = useTranslations('ModalForm');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({ name: "", email: "" });
    const [buttonDisabled, setButtonDisabled] = useState(false);

    const validate = () => {
        const newErrors = { name: "", email: "" };
        let isValid = true;

        if (name.trim() === "") {
            newErrors.name = t("nameRequired");
            isValid = false;
        }

        // ✅ Correct email regex (basic but effective)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.trim() === "") {
            newErrors.email = t("emailRequired");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            newErrors.email = t("emailInvalid");
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
                toast.success(t("successMessage"));
                setName("");
                setEmail("");
                setMessage("");
            } catch {
                toast.error(t("errorMessage"));
            } finally {
                setButtonDisabled(false);
            }

        }
    };

    return (
        <section className="py-20 px-6 bg-black text-white w-full flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center mb-6">{t("contactTitle")}</h2>
            <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-3xl p-4 ">
                <input type="text" placeholder={t("name")} value={name}
                    onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded" />
                {errors.name && (
                    <p className="text-red-600 mt-1">{errors.name}</p>
                )}
                <input type="email" placeholder={t("email")} value={email}
                    onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 px-4 py-2 rounded" />
                {errors.email && (
                    <p className="text-red-600 mt-1">{errors.email}</p>
                )}
                <textarea value={message}
                    onChange={(e) => setMessage(e.target.value)} placeholder={t("message")} rows={4} className="w-full border border-gray-300 px-4 py-2 rounded" />
                <button disabled={buttonDisabled} type="submit" className="bg-main-green-100 hover:bg-main-green-200 text-white px-6 py-2 rounded font-semibold">
                    {t("submit")}
                </button>
            </form>
        </section>
    )
}

