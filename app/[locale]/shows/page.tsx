import { getAllShows } from '@/lib/supabase-requests'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

export default async function ShowsPage() {
    let shows: any[] = []

    try {
        shows = await getAllShows()
    } catch (error) {
        console.error('Error fetching shows:', error)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
            <div className="container mx-auto px-4 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        All Shows
                    </h1>
                    <p className="text-xl text-gray-300">
                        Discover our collection of romantic dramas and telenovelas
                    </p>
                </div>

                {shows.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {shows.map((show) => (
                            <Link
                                key={show.id}
                                href={`/show/${show.id}`}
                                className="group block"
                            >
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                                    <div className="relative h-64">
                                        <img
                                            src={`/shows/${show.title.toLowerCase().replace(/\s+/g, '-')}.jpg`}
                                            alt={`${show.title} poster`}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement
                                                target.src = '/shows/show1.png'
                                            }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <Play className="w-16 h-16 text-white" />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-300 transition-colors">
                                            {show.title}
                                        </h3>
                                        {show.summary && (
                                            <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                                                {show.summary}
                                            </p>
                                        )}
                                        <div className="flex items-center text-pink-400 font-medium">
                                            View Details
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Play className="w-12 h-12 text-white" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            No Shows Available
                        </h3>
                        <p className="text-gray-300 mb-6">
                            Check back later for new content or contact support if you believe this is an error.
                        </p>
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                            Go Home
                        </Link>
                    </div>
                )}

                {/* Bottom CTA */}
                <div className="text-center mt-16 p-8 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Want to watch these shows?
                    </h3>
                    <p className="text-gray-200 mb-6">
                        Download the Idilio.TV app and start streaming today.
                    </p>
                    <a
                        href="https://apps.apple.com/app/idilio-tv/id1234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                        Download App
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                </div>
            </div>
        </div>
    )
} 