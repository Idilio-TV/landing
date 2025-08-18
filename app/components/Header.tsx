import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-black text-white flex justify-between items-center px-6 py-4 shadow-md">
            <div className="flex items-center space-x-8">
                <div className="h-16 flex overflow-hidden">
                    <Link href="/">
                        <img className="h-[200%] mt-[-25%]" src="/logo_idilio.jpeg" alt="idilio.tv" />
                    </Link>
                </div>

                <nav className="hidden md:flex space-x-6">
                    <Link href="/" className="hover:text-pink-300 transition-colors">
                        Home
                    </Link>
                    <Link href="/shows" className="hover:text-pink-300 transition-colors">
                        Shows
                    </Link>
                </nav>
            </div>

            <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
                Suscríbete
            </button>
        </header>
    )
}
