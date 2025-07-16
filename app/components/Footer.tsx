import React from "react";

export default function Footer() {
    return (
        <footer className="bg-black text-white px-6 py-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                <div className="text-center md:text-left">
                    <p>© 2025 Idilio. Hecho con pasión en Latinoamérica</p>
                </div>
                <div className="flex space-x-4">
                    {/* <a href="/terms" className="hover:underline">
                        Términos
                    </a>
                    <a href="/privacy" className="hover:underline">
                        Privacidad
                    </a> */}
                </div>
            </div>
        </footer>
    );
}
