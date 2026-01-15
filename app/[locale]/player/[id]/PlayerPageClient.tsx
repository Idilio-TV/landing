"use client";

import { Download, ArrowRight, Play } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDeviceDetection } from '@/app/hooks/useDeviceDetection';
import DownloadAppModal from '@/app/components/DownloadAppModal';
import { AppDownloadBanner } from '@/app/components/AppDownloadBanner';
import { useState } from 'react';
import { EpisodeWithShow } from '@/lib/supabase-requests';

interface PlayerPageClientProps {
    episode: EpisodeWithShow;
}

export default function PlayerPageClient({ episode }: PlayerPageClientProps) {
    const t = useTranslations('Player');
    const { type, isMobile } = useDeviceDetection();
    const [showDownloadModal, setShowDownloadModal] = useState(false);

    // App store URLs
    const iosAppStoreUrl = "https://apps.apple.com/app/idilio-tv/id6749875422";
    const androidPlayStoreUrl = "https://play.google.com/store/apps/details?id=com.stvrae.idilio";

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

    const episodeTitle = episode.title || `${t('episode')} ${episode.number}`;
    const showTitle = episode.show?.title || '';

    return (
        <>
            <div className="min-h-screen bg-black">
                <div className="container mx-auto px-4 py-8">
                    {/* Hero Section */}
                    <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                        {/* Placeholder for episode thumbnail */}
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-purple-900 to-black rounded-lg shadow-2xl flex items-center justify-center">
                                <Play className="w-24 h-24 text-white opacity-50" />
                            </div>
                        </div>

                        {/* Episode Info */}
                        <div className="space-y-6">
                            {showTitle && (
                                <p className="text-lg text-purple-400 font-semibold">
                                    {showTitle}
                                </p>
                            )}
                            
                            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                {episodeTitle}
                            </h1>

                            {episode.season && (
                                <p className="text-lg text-gray-300">
                                    {t('season')} {episode.season.number} • {t('episode')} {episode.number}
                                </p>
                            )}

                            {episode.description && (
                                <p className="text-lg text-gray-200 leading-relaxed">
                                    {episode.description}
                                </p>
                            )}

                            {/* Call to Action */}
                            <div className="space-y-4">
                                <button
                                    onClick={handleDownloadClick}
                                    className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    {t('watchInApp')}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </button>

                                <p className="text-sm text-gray-300">
                                    {t('availableOn')}
                                </p>
                            </div>
                        </div>
                    </div>

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

            {/* App Download Banner for mobile - saves deep link data */}
            <AppDownloadBanner targetId={episode.id} type="player" />
        </>
    );
}
