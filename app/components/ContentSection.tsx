import { Timer, Download, Star, CircleDollarSign, BookA, Drama } from "lucide-react";
import { JSX } from "react";


export default function ContentSection() {
    return (
        <section className="py-20 px-6 mx-auto text-center bg-black w-screen text-white">
            <h1 className="text-3xl font-bold mb-8">Características Únicas</h1>

            <div className="text-center w-full bg-black text-white grid sm:grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-10 justify-items-center">
                <ContentBox title="Episodios Cortos" text="Disfruta de tu contenido favorito en pequeñas porciones" icon={<Timer size={50} color="#5ac254" />} />
                <ContentBox title="Descarga Offline" text="Descarga tus capítulos favoritos para verlos en cualquier momento" icon={<Download size={50} color="#5ac254" />} />
                <ContentBox title="Contenido Exclusivo" text="Series y películas originales que no encontrarás en ningún otro lugar" icon={<Star size={50} color="#5ac254" />} />
                <ContentBox title="Capítulos Gratis" text="Para que disfrutes sin compromiso de nuestras series" icon={<CircleDollarSign size={50} color="#5ac254" />} />
                <ContentBox title="Hecho en Español" text="La primera plataforma de microdramas escritos y producidos en español" icon={<BookA size={50} color="#5ac254" />} />
                <ContentBox title="Calidad Inigualable" text="Guiones, actuaciones y producciones de la más alta calidad" icon={<Drama size={50} color="#5ac254" />} />
            </div>
        </section>
    )
}

function ContentBox({ title, text, icon }: { title: string; text: string; icon: JSX.Element }) {
    return (
        <div className="h-80 w-full  hover:shadow box-border rounded-3xl p-6 flex flex-col items-center justify-center text-center bg-gray-900 hover:bg-gray-800 transition-colors">
            <div className="flex grow-1 items-center justify-center mb-4">
                {icon}

            </div>
            <div className="grow-1">
                <h2 className="text-2xl font-bold ml-2">{title}</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    {text}
                </p>
            </div>
        </div>
    )
}