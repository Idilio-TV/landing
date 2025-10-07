import { getTranslations } from 'next-intl/server';
import { getAllShowsWithPosters } from '@/lib/supabase-requests';
import { Show, Content } from '@/lib/supabase';
import Link from 'next/link';

export default async function ContentSection() {
    const t = await getTranslations('Content');

    let shows: (Show & { poster?: Content })[] = [];
    try {
        shows = await getAllShowsWithPosters();
    } catch (error) {
        console.error('Error fetching shows:', error);
    }

    return (
        <section className="py-20 px-6 mx-auto text-center bg-black w-screen text-white">
            <h1 className="text-3xl font-bold mb-8">{t("title")}</h1>

            {shows.length > 0 ? (
                <div className="text-center w-full bg-black text-white grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto">
                    {shows.map((show) => (
                        <ShowCard key={show.id} show={show} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-400">
                    <p>No shows available at the moment.</p>
                </div>
            )}
        </section>
    )
}

function ShowCard({ show }: { show: Show & { poster?: Content } }) {
    return (
        <Link href={`/show/${show.id}`} className="group">
            <div className="w-full max-w-xs bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors duration-300 hover:scale-105 transform">
                <div className="aspect-[3/4] relative overflow-hidden">
                    {show.poster?.picture_id ? (
                        <img
                            src={show.poster.picture_id}
                            alt={show.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                            <span className="text-gray-400 text-sm">No poster available</span>
                        </div>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-green-400 transition-colors">
                        {show.title}
                    </h3>
                    {show.summary && (
                        <p className="text-gray-400 text-sm line-clamp-3">
                            {show.summary}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    )
}