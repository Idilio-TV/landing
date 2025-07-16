"use client";

import React, { useEffect } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    useEffect(() => {
        let closingEv: any = null;
        let insideEv: any = null;
        if (isOpen) {
            document.body.style.overflow = "hidden";
            closingEv = document.addEventListener("mousedown", (e) => {
                onClose();
            });

            insideEv = document.getElementById("modal")?.addEventListener("mousedown", (e) => {
                e.stopPropagation();
            });

        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = ""
            if (closingEv) document.removeEventListener("mousedown", closingEv);
            if (insideEv) document.removeEventListener("mousedown", insideEv);
        };

    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000088] bg-opacity-70">
            <div id="modal" className="bg-white text-black p-6 rounded-xl max-w-md w-full shadow-lg relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 cursor-pointer hover:text-gray-700"
                >
                    ✕
                </button>
                {children}
            </div>
        </div>
    );
}
