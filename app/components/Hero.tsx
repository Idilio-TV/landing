"use client";

import Modal from "./Modal";
import { useState } from "react";
import ValidatedForm from "./ValidatedForm";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section className=" flex bg-black gap-4 justify-center min-h-screen text-white items-center px-4 py-12">
                <div className="justify-items-start md:max-w-1/2">
                    <div className="flex w-1/1 justify-center flex-row md:flex-row items-center gap-4">
                        <div className="flex w-1/2 md:w-1/1 overflow-hidden">
                            <img className="object-contain max-h-[7em]" src="/logo_idilio.jpeg" alt="idilio.tv" />
                        </div>

                        <div className="md:hidden w-1/2 flex relative aspect-[290/623] overflow-hidden shadow-lg">
                            <div className="absolute inset-2 md:rounded-4xl rounded-xl  overflow-hidden">
                                <video
                                    src="/romantic1.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute max-w-[none] left-[-34vw] h-full object-cover"
                                />
                            </div>
                            <img className="absolute max-w-[none] h-full object-cover" src="/phonebg.png" alt="samsung phone" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mt-8">
                        El futuro del entretenimiento está aquí
                    </h1>

                    <h2 className="text-2xl md:text-2xl mt-8">
                        Descubre historias emocionantes, contenido exclusivo y una experiencia única, solo en{" "}
                        <span className="text-main-green-100">idilio.tv</span>
                    </h2>

                    <button onClick={() => setIsModalOpen(true)} className="mt-6 cursor-pointer bg-main-green-100 hover:bg-main-green-200 text-white px-6 py-3 rounded-md text-lg font-medium transition">
                        Sé el primero en enterarte
                    </button>
                </div>

                <div className="hidden md:flex w-1/2 md:w-1/3 lg:w-2/7 max-w-1/2 relative aspect-[290/623] overflow-hidden shadow-lg">
                    <div className="absolute inset-2 rounded-4xl overflow-hidden">
                        <video
                            src="/romantic1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute max-w-[none] left-[-23vw] h-full object-cover"
                        />
                    </div>
                    <img className="absolute max-w-[none] h-full object-cover" src="/phonebg.png" alt="samsung phone" />
                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">¡Gracias por tu interés!</h2>
                    <p className="text-lg mb-6">Déjanos tus datos y te enviaremos noticias y actualizaciones sobre idilio.tv.</p>
                    <ValidatedForm closeForm={() => setIsModalOpen(false)} />
                </div>
            </Modal>
        </>

    )
}