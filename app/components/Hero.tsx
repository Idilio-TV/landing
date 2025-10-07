"use client";

import Modal from "./Modal";
import { useState } from "react";
import ValidatedForm from "./ValidatedForm";
import { useTranslations } from 'next-intl';
import MuxPlayer from "@mux/mux-player-react";
import Image from "next/image";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations('Hero');

    return (
        <>
            <section className=" flex bg-black gap-4 justify-center min-h-screen text-white items-center px-4 py-12">
                <div className="justify-items-start md:max-w-1/2">
                    <div className="flex w-1/1 justify-center flex-row md:flex-row items-center gap-4">
                        <div className="flex w-1/2 md:w-1/1 overflow-hidden">
                            <Image className="object-contain max-h-[7em]" src="/branding/IDENTIFICADOR_Logotipo a color letra blanca sin fondo.png" alt="idilio.tv" width={100} height={100} />
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
                            <Image className="absolute max-w-[none] h-full object-cover" src="/phonebg.png" alt="samsung phone" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mt-8">
                        {t('title')}
                    </h1>

                    <h2 className="text-2xl md:text-2xl mt-8">
                        {t('subtitle')}{" "}
                        <span className="text-main-green-100">idilio.tv</span>
                    </h2>

                    <button onClick={() => setIsModalOpen(true)} className="mt-6 cursor-pointer bg-main-green-100 hover:bg-main-green-200 text-white px-6 py-3 rounded-md text-lg font-medium transition">
                        {t('button')}
                    </button>
                </div>

                <div className="hidden md:flex w-1/2 md:w-1/3 lg:w-2/7 max-w-1/2 relative aspect-[290/623] overflow-hidden shadow-lg">
                    <div className="absolute inset-2 rounded-4xl overflow-hidden">
                        <MuxPlayer
                            playbackId="P01iBu9C00FO1l6yOaYYU3cww1yWldnjjJP3n02fDR800vo"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute max-w-[none] left-[-23vw] h-full object-cover"
                            style={{
                                width: '100%',
                                // height: '100%',
                                left: 0,
                                "--media-object-fit": "cover",
                                "--media-object-position": "center",
                                "--controls": 'none',
                                objectFit: 'cover',
                            } as React.CSSProperties & {
                                "--media-object-fit": string;
                                "--media-object-position": string;
                                "--controls": string;
                            }}
                            metadata={{
                                video_id: "video-id-54321",
                                video_title: "Test video title",
                                viewer_user_id: "user-id-007",
                            }}
                        />
                        {/* <video
                            src="/romantic1.mp4"
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="absolute max-w-[none] left-[-23vw] h-full object-cover"
                        /> */}
                    </div>
                    <Image className="absolute max-w-[none] h-full object-cover" src="/phonebg.png" alt="samsung phone" />
                </div>
            </section>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">{t('modalTitle')}</h2>
                    <p className="text-lg mb-6">{t('modalText')}</p>
                    <ValidatedForm closeForm={() => setIsModalOpen(false)} />
                </div>
            </Modal>
        </>

    )
}