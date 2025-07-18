"use client";
import { useState } from "react";
import Modal from "./Modal";
import ValidatedForm from "./ValidatedForm";
import { useTranslations } from 'next-intl';

const showThemes: { [k: string]: string[] } = {
    "tpe": ["kidnapping", "revenge", "family"],
    "hdp": ["betrayal", "family", "fLove"],
    "etm": ["romance", "crime", "family"],
    "aet": ["romance", "sports"],
    "lei": ["revenge", "mistery", "murder"],
    "ethy": ["fLove", "aMarriage"],
    "lve": ["romance", "sClasses"]
}

export default function Shows() {
    const t = useTranslations('Shows');
    const shows = ["tpe", "hdp", "etm", "aet", "lei", "ethy", "lve"];
    return (
        <section className="py-20 flex flex-col px-6 bg-black w-screen text-center text-white ">
            <h1 className="text-3xl font-bold pb-8">{t('title')}</h1>
            <div className="flex flex-col max-w-5xl mx-auto">
                {shows.map((show, idx) => (
                    <Show
                        title={t(`${show}Title`)}
                        desc={t(`${show}Desc`)}
                        img={t(`${show}Img`)}
                        themes={showThemes[show].map(theme => t(`themes.${theme}`))}
                        key={idx} />
                ))}
            </div>
        </section>
    )
}

function Show({ title, desc, img, themes }: { title: string; desc: string; img: string; themes?: string[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const t = useTranslations('Shows');
    return (
        <>
            <div className="bg-gray-900 mb-6 flex md:flex-row flex-col p-4 justify-center items-center rounded-lg shadow overflow-hidden">
                <img src={img} alt={title} className="rounded-lg h-60 object-cover" />
                <div className="p-6 text-left">
                    <h3 className="text-2xl font-bold mb-2 text-left">{title}</h3>
                    <p className="text-gray-300 text-left">{desc}</p>
                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap">
                        {themes?.map((theme, idx) => (
                            <span key={idx} className="inline-block cursor-default hover:bg-gray-500 bg-gray-700 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2">
                                {theme}
                            </span>
                        ))}
                    </div>

                    <a onClick={() => setIsModalOpen(true)} className="mt-4 inline-block bg-main-green-100 hover:bg-main-green-200 cursor-pointer text-white px-4 py-2 rounded-md transition">
                        {t('button')}
                    </a>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">{t('modalTitle')}</h2>
                    <p className="text-lg mb-6">{t('modalText')}</p>
                    <ValidatedForm closeForm={() => setIsModalOpen(false)} interest={title} />
                </div>
            </Modal>
        </>
    )
}