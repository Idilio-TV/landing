"use client";

import { useState } from 'react';
import { ArrowRight, Play, Download } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDeviceDetection } from '@/app/hooks/useDeviceDetection';
import DownloadAppModal from '@/app/components/DownloadAppModal';
import { ShowWithEpisodes } from '@/lib/supabase';

interface ShowPageClientProps {
    show: ShowWithEpisodes;
}

export default function ShowPageClient({ show }: ShowPageClientProps) {
    const t = useTranslations('Show');
    const { type, isMobile } = useDeviceDetection();
    const [showDownloadModal, setShowDownloadModal] = useState(false);

    // App store URLs
    const iosAppStoreUrl = "https://apps.apple.com/us/app/idilio-tv/id6749875422";
    const androidPlayStoreUrl = "https://play.google.com/store/apps/details?id=com.stvrae.idilio&pcampaignid=web_share";

    const handleDownloadClick = () => {
        if (isMobile) {
            // Redirect mobile users directly to the appropriate store
            if (type === 'ios') {
                window.open(iosAppStoreUrl, '_blank');
            } else if (type === 'android') {
                window.open(androidPlayStoreUrl, '_blank');
            } else {
                // Fallback for other mobile devices - show modal
                setShowDownloadModal(true);
            }
        } else {
            // Show modal for desktop users
            setShowDownloadModal(true);
        }
    };

    return (
        <>
            <div className="min-h-screen bg-black">
                <div className="container mx-auto px-4 py-8">
                    {/* Hero Section */}
                    <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                        {/* Poster */}
                        <div className="relative">
                            {show.poster?.picture_id ? (
                                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={show.poster.picture_id}
                                        alt={`${show.title} poster`}
                                        className="w-full h-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                            ) : (
                                <div className="w-full h-96 bg-black rounded-lg shadow-2xl flex items-center justify-center">
                                    <Play className="w-24 h-24 text-white opacity-50" />
                                </div>
                            )}
                        </div>

                        {/* Show Info */}
                        <div className="space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                {show.title}
                            </h1>

                            {show.summary && (
                                <p className="text-lg text-gray-200 leading-relaxed">
                                    {show.summary}
                                </p>
                            )}

                            {/* Call to Action */}
                            <div className="space-y-4">
                                <button
                                    onClick={handleDownloadClick}
                                    className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    {t('downloadApp')}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </button>

                                <p className="text-sm text-gray-300">
                                    {t('availableOn')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Episodes Section */}
                    {show.seasons && show.seasons.length > 0 && (
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-white text-center mb-8">
                                {t('episodes')}
                            </h2>

                            {show.seasons.map((season) => (
                                <div key={season.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">
                                        {t('season')} {season.number}
                                    </h3>

                                    {season.episodes && season.episodes.length > 0 ? (
                                        <div className="grid gap-4">
                                            {season.episodes.map((episode) => (
                                                <div
                                                    key={episode.id}
                                                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-semibold text-sm">
                                                            {episode.number}
                                                        </div>
                                                        <div>
                                                            <h4 className="text-white font-medium">
                                                                {episode.title || `${t('episode')} ${episode.number}`}
                                                            </h4>
                                                            {episode.description && (
                                                                <p className="text-gray-300 text-sm mt-1">
                                                                    {episode.description}
                                                                </p>
                                                            )}
                                                        </div>
                                                    </div>

                                                    <div className="text-gray-400 text-sm">
                                                        {episode.title ? t('available') : t('comingSoon')}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-400 text-center py-8">
                                            {t('episodesComingSoon')}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Bottom CTA */}
                    <div className="text-center mt-16 p-8 bg-gray-800 rounded-2xl">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            {t('readyToWatch')}
                        </h3>
                        <p className="text-gray-200 mb-6">
                            {t('downloadAppDescription')}
                        </p>
                        <button
                            onClick={handleDownloadClick}
                            className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                        >
                            <Download className="w-5 h-5 mr-2" />
                            {t('getTheApp')}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Download App Modal */}
            <DownloadAppModal
                isOpen={showDownloadModal}
                onClose={() => setShowDownloadModal(false)}
                iosAppStoreUrl={iosAppStoreUrl}
                androidPlayStoreUrl={androidPlayStoreUrl}
            />
        </>
    );
}
