/* eslint-disable @next/next/no-img-element */
const team = [
    { name: "Gabriela Tafur", role: "Directora General", image: "/team/gabriela.jpeg", link: "" },
    { name: "Esteban Ramírez", role: "Director de Tecnología", image: "/team/esteban.jpeg", link: "" },
    { name: "Anónimo", role: "Directora de Contenido", image: "/team/blurry.jpeg", link: "" },
    { name: "Diego Arbeláez", role: "Director de Producción", image: "/team/diego.jpeg", link: "" },

]

export default function Team() {
    return (
        <section className="py-20 px-6 text-center bg-black w-screen text-white">
            <h1 className="text-3xl font-bold mb-8">¿Quiénes Somos?</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center">
                {team.map((member, i) => (
                    <MemberLayout {...member} idx={i} key={i} />
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

function MemberLayout({ name, role, idx, image }: { name: string; role: string; idx: number; image: string }) {
    return (
        <div className={`h-100 w-full hover:shadow box-border rounded-2xl p-6 flex flex-col items-center justify-center text-center ${bg_colors[idx]} transition-colors`}>
            <div>
                <div className="w-full flex justify-center">
                    <img src={image} alt={name} className="w-full h-auto max-w-[15em] object-cover rounded-lg mb-4" />
                </div>
                <div>

                    <h2 className="text-3xl font-bold ml-2">{name}</h2>
                    <p className={`${txt_colors[idx]} max-w-2xl mx-auto text-xl font-bold`}>{role}</p>
                </div>
            </div>
        </div>
    )
}
