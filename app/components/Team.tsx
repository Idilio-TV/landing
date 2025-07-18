"use client";

import { useState } from "react";
import './MemberCard.css';
import { useTranslations } from 'next-intl';

/* eslint-disable @next/next/no-img-element */

export default function Team() {
    const t = useTranslations('Team');
    const team = ["Gabriela", "Esteban", "Lorena", "Diego"] as const;
    const images: Record<typeof team[number], string> = {
        "Gabriela": "/team/gabriela.jpeg",
        "Esteban": "/team/esteban.jpeg",
        "Lorena": "/team/blurry.jpeg",
        "Diego": "/team/diego.jpeg",
    }
    return (
        <section className="py-20 px-6 text-center bg-black w-screen text-white">
            <h1 className="text-3xl font-bold mb-8">{t('title')}</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center">
                {team.map((member, i) => (
                    <MemberLayout
                        name={t(`${member}Name`)}
                        role={t(`${member}Role`)}
                        image={images[member]}
                        description={t(`${member}Description`)}
                        idx={i} key={i}
                    />
                ))}
            </div>
        </section>
    )
}

const bg_colors = [
    "bg-main-green-100",
    "bg-main-red-100",
    "bg-main-pink-100",
    "bg-main-green-400",
]

const txt_colors = [
    "text-main-green-400",
    "text-main-red-200",
    "text-main-pink-200",
    "text-main-green-100",
]

type MemberProps = {
    name: string;
    role: string;
    idx: number;
    image: string;
    description: string;
};

function MemberLayout({ name, role, idx, image, description }: MemberProps) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="flip-card"
            onClick={() => setFlipped(!flipped)}
        >
            <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>
                {/* Front of the card */}
                <div className={`flip-card-front h-100 w-full rounded-2xl p-6 flex flex-col items-center justify-center text-center ${bg_colors[idx]} transition-colors`}>
                    <div className="w-full flex justify-center">
                        <img src={image} alt={name} className="w-full h-auto max-w-[15em] object-cover rounded-lg mb-4" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold ml-2">{name}</h2>
                        <p className={`${txt_colors[idx]} max-w-2xl mx-auto text-xl font-bold`}>{role}</p>
                    </div>
                </div>

                {/* Back of the card */}
                <div className={`flip-card-back h-100 w-full rounded-2xl p-6 flex flex-col items-center justify-center text-center ${bg_colors[idx]} text-white`}>
                    <p className="text-base max-w-prose">{description}</p>
                </div>
            </div>
        </div>
    );
}
