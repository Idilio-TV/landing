import Link from 'next/link';

export default function PlayerNotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Episodio no encontrado</h1>
                <p className="text-gray-400 mb-8">
                    El episodio que buscas no existe o ha sido eliminado.
                </p>
                <Link
                    href="/shows"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                    Ver todos los shows
                </Link>
            </div>
        </div>
    );
}
