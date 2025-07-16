"use client";
import React, { useState, useEffect } from "react";

export default function CookiesBanner() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem("cookiesAccepted");
        if (!hasAccepted) setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-gray-900 text-white p-4 rounded-xl shadow-sm shadow-gray-400 z-50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-center md:text-left">
                Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestro uso de cookies.
            </p>
            <button
                onClick={handleAccept}
                className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition"
            >
                Aceptar
            </button>
        </div>
    );
}
