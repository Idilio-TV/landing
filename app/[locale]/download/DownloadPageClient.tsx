"use client";

import { useState } from 'react';
import { ArrowRight, Download, Smartphone, Wifi, Star, QrCode } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useDeviceDetection } from '@/app/hooks/useDeviceDetection';
import DownloadAppModal from '@/app/components/DownloadAppModal';

export default function DownloadPageClient() {
    const t = useTranslations('DownloadPage');
    const { type, isMobile } = useDeviceDetection();
    const [showDownloadModal, setShowDownloadModal] = useState(false);

    // App store URLs
    const iosAppStoreUrl = "https://apps.apple.com/app/id6749875422";
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

    const features = [
        {
            icon: Smartphone,
            title: t('feature1Title'),
            description: t('feature1Description'),
        },
        {
            icon: Wifi,
            title: t('feature2Title'),
            description: t('feature2Description'),
        },
        {
            icon: Star,
            title: t('feature3Title'),
            description: t('feature3Description'),
        },
    ];

    return (
        <>
            <div className="min-h-screen bg-black">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-br from-purple-900 via-black to-black">
                    <div className="container mx-auto px-4 py-20">
                        <div className="text-center max-w-4xl mx-auto">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                {t('heroTitle')}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                                {t('heroSubtitle')}
                            </p>

                            <div className="space-y-4">
                                <button
                                    onClick={handleDownloadClick}
                                    className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                                >
                                    <Download className="w-5 h-5 mr-2" />
                                    {t('downloadNow')}
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </button>

                                <p className="text-gray-300 text-sm">
                                    {t('availableOn')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="py-20 bg-gray-900">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                {t('featuresTitle')}
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {features.map((feature, index) => (
                                <div key={index} className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm">
                                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <feature.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Instructions Section */}
                <div className="py-20 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                {t('instructionsTitle')}
                            </h2>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            {isMobile ? (
                                <div className="text-center space-y-6">
                                    <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
                                        <QrCode className="w-6 h-6" />
                                        <span className="text-lg font-semibold">{t('mobileInstructions')}</span>
                                    </div>
                                    <p className="text-gray-300 text-lg">
                                        {t('mobileDescription')}
                                    </p>
                                    <button
                                        onClick={handleDownloadClick}
                                        className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                                    >
                                        <Download className="w-5 h-5 mr-2" />
                                        {t('downloadNow')}
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            ) : (
                                <div className="text-center space-y-8">
                                    <div className="flex items-center justify-center space-x-2 text-green-600 mb-4">
                                        <QrCode className="w-6 h-6" />
                                        <span className="text-lg font-semibold">{t('desktopInstructions')}</span>
                                    </div>
                                    <p className="text-gray-300 text-lg mb-8">
                                        {t('desktopDescription')}
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold text-white">{t('iosInstructions')}</h3>
                                            <div className="bg-white/5 rounded-lg p-6">
                                                <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                                                    <QrCode className="w-16 h-16 text-gray-400" />
                                                </div>
                                                <p className="text-gray-300 text-sm">Scan with iPhone camera</p>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-xl font-semibold text-white">{t('androidInstructions')}</h3>
                                            <div className="bg-white/5 rounded-lg p-6">
                                                <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                                                    <QrCode className="w-16 h-16 text-gray-400" />
                                                </div>
                                                <p className="text-gray-300 text-sm">Scan with Android camera</p>
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleDownloadClick}
                                        className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                                    >
                                        <QrCode className="w-5 h-5 mr-2" />
                                        {t('showQRCodes')}
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Final CTA Section */}
                <div className="py-20 bg-gradient-to-r from-purple-900 to-black">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-4xl font-bold text-white mb-6">
                                {t('finalCtaTitle')}
                            </h2>
                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                {t('finalCtaDescription')}
                            </p>
                            <button
                                onClick={handleDownloadClick}
                                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                            >
                                <Download className="w-5 h-5 mr-2" />
                                {t('getStartedNow')}
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </button>
                        </div>
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
