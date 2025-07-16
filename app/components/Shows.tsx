"use client";
import { useState } from "react";
import Modal from "./Modal";
import ValidatedForm from "./ValidatedForm";

const shows = [
    { title: "Todo Por Ella", desc: "Mónica tenía una vida sencilla, feliz, plena con su hija Elisa… hasta que la traición irrumpió como un puñal. Su esposo Tomás, encandilado por la ambición y por Emilia —una mujer capaz de todo por quedarse con su poder—, desató una pesadilla que pondrá en peligro lo más sagrado: la vida de su hija...", themes: ["Secuestro", "Venganza", "Familia"], img: "/shows/todo-por-ella.jpeg" },
    { title: "Herencia del Patriarca", desc: "En la Mansión Kopel, la sangre pesa… pero los secretos pesan más. En el cumpleaños número 75 del magnate Germán Kopel, una noticia inesperada reordena todo el tablero familiar: él está por morir. Pero antes de irse, debe nombrar a su sucesor. Y lo que parecía una celebración se convierte en una despiadada guerra de herederos. Mientras los hijos y yernos pelean por el trono empresarial, el verdadero escándalo se cuece en silencio: Lorena, la prometida del patriarca, esconde un amor prohibido con su hijo menor, Santiago. Un romance que ninguno ha podido enterrar… y que amenaza con incendiarlo todo.", themes: ["Traición", "Familia", "Amor Prohibido"], img: "/shows/herencia-del-patriarca.jpeg", },
    { title: "Enamoradas del Motociclista Mafioso", desc: "Joaquín, un hombre marcado por un pasado oscuro, reaparece con su chaqueta de cuero, su moto rugiendo y un corazón que aún late por Natalia, una mujer noble que lo creyó todo perdido. Pero el amor no viene solo. Lo acompaña Ema, su hermana gemela, seductora, ambiciosa, capaz de todo por quedarse con el trono del Gran King… y con Joaquín. Y al acecho: Carlos, un mafioso sin alma, sediento de venganza, dispuesto a matar por el poder.", themes: ["Romance", "Crimen", "Familia"], img: "/shows/enamoradas-de-motociclista.jpg" },
    { title: "Aún Eres tu", desc: "Dicen que el primer amor nunca se olvida... pero ¿qué pasa cuando regresa convertido en una estrella mundial del fútbol, y tú ya no eres la misma? Isabel tenía su vida resuelta: un prometido perfecto, una carrera en ascenso, un pasado enterrado. Hasta que volvió Julián. Más guapo. Más famoso. Más decidido a recuperarla. Lo que empezó como una sesión de fotos… se convertirá en una batalla entre la razón y el corazón. Entre lo que duele... y lo que aún late.", themes: ["Romance", "Deporte"], img: "/shows/aun-eres-tu.jpg" },
    { title: "La Enfermera Infiltrada", desc: "Una muerte disfrazada de accidente. Una enfermera que vuelve… para vengar a su hermana. Una casa donde todos ocultan algo. Incluso el hombre que podría salvarla… o destruirla. Valeria entró a servir. Pero vino a descubrir la verdad. Y no va a parar hasta encontrar al asesino. Aunque eso le rompa el corazón. Aunque eso le cueste la vida. ¿Hasta dónde llegarías por amor a tu hermana?", themes: ["Venganza", "Misterio", "Asesinato"], img: "/shows/enfermera-infiltrada.jpg" },
    { title: "Entre tu Hermano y yo", desc: "Natalia fue entregada como parte de un contrato. Su destino: convertirse en la esposa perfecta del hombre que compró su libertad. Pero cuando el amor verdadero aparece en el lugar más impensado —en los ojos del hermano menor de su prometido—, todo se desmorona. En una mansión de lujo y reglas estrictas, donde cada beso es una traición y cada mirada un abismo, se libra una guerra secreta: la de una mujer que se atreve a amar al único hombre que no debía tocar.", themes: ["Amor Prohibido", "Matrimonio Arreglado"], img: "/shows/hermano-y-yo.jpg" },
    { title: "La Veterana Enamorada del Mecánico Multibillonario", desc: "Ella vendía postres en un Renault 12 destartalado. Él, oculto tras una chaqueta de mecánico, era dueño de un imperio. Y sin saberlo, los unía un pasado que nadie se atrevía a nombrar… Mónica solo quería ganarse la vida con dignidad. Carlos solo fue por un merengón. Andrés, el hijo enfermo de ambos —aunque aún nadie lo sabía— solo quería verlos juntos antes de morir. Pero cuando el amor llega disfrazado, no hay mentira que lo detenga.", themes: ["Romance", "Clases Sociales"], img: "/shows/veterana-y-mecanico.jpg" },
]

export default function Shows() {
    return (
        <section className="py-20 flex flex-col px-6 bg-black w-screen text-center text-white ">
            <h1 className="text-3xl font-bold pb-8">Próximamente</h1>
            <div className="flex flex-col max-w-5xl mx-auto">
                {shows.map((show, idx) => (
                    <Show {...show} key={idx} />
                ))}
            </div>
        </section>
    )
}

function Show({ title, desc, img, themes }: { title: string; desc: string; img: string; themes?: string[] }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
                        Me Interesa
                    </a>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">¡Gracias por tu interés!</h2>
                    <p className="text-lg mb-6">Déjanos tus datos y te enviaremos noticias y actualizaciones sobre idilio.tv.</p>
                    <ValidatedForm closeForm={() => setIsModalOpen(false)} interest={title} />
                </div>
            </Modal>
        </>
    )
}