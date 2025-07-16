
export default function Header() {
    return (
        <header className="bg-black text-white flex justify-between items-center  px-6 py-4 shadow-md">
            <div className="h-16 flex overflow-hidden"><img className="h-[200%] mt-[-25%]" src="/logo_idilio.jpeg" alt="idilio.tv" /></div>
            <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">Suscríbete</button>
        </header>
    )
}
