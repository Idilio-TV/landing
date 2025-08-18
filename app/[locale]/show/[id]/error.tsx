'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function ShowError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error('Show page error:', error)
    }, [error])

    return (
        <div className="min-h-screen bg-black flex items-center justify-center">
            <div className="text-center px-4 max-w-md">
                <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="w-12 h-12 text-white" />
                </div>

                <h1 className="text-3xl font-bold text-white mb-4">
                    Something went wrong
                </h1>

                <p className="text-gray-300 mb-8">
                    We encountered an error while loading the show. Please try again or contact support if the problem persists.
                </p>

                <div className="space-y-4">
                    <button
                        onClick={reset}
                        className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 mr-4"
                    >
                        <RefreshCw className="w-5 h-5 mr-2" />
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-200"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Go Home
                    </Link>
                </div>

                {process.env.NODE_ENV === 'development' && (
                    <details className="mt-8 text-left">
                        <summary className="text-gray-400 cursor-pointer mb-2">
                            Error Details (Development)
                        </summary>
                        <pre className="bg-black/50 p-4 rounded text-xs text-red-400 overflow-auto">
                            {error.message}
                            {error.stack}
                        </pre>
                    </details>
                )}
            </div>
        </div>
    )
} 