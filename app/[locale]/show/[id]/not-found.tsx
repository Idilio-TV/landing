import Link from 'next/link'
import { Home } from 'lucide-react'

export default function ShowNotFound() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center px-4">
                <div className="mb-8">
                    <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        Show Not Found
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        The show you&apos;re looking for doesn&apos;t exist or has been removed.
                    </p>
                </div>

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Go Home
                    </Link>

                    <div className="text-gray-400">
                        <p>Or explore our other shows</p>
                    </div>
                </div>
            </div>
        </div>
    )
} 