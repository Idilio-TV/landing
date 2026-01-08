'use client';

export default function PlayerError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center text-white">
                <h2 className="text-2xl font-bold mb-4">Algo salió mal</h2>
                <p className="text-gray-400 mb-6">{error.message}</p>
                <button
                    onClick={reset}
                    className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                >
                    Intentar de nuevo
                </button>
            </div>
        </div>
    );
}
