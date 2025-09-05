"use client";

import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { useDeviceDetection } from '../hooks/useDeviceDetection';
import { QrCode } from 'lucide-react';
import { useTranslations } from 'next-intl';

// App Store Icon Component
const AppStoreIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
);

// Google Play Store Icon Component
const PlayStoreIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
    </svg>
);

interface DownloadAppModalProps {
    isOpen: boolean;
    onClose: () => void;
    iosAppStoreUrl?: string;
    androidPlayStoreUrl?: string;
}

// QR Code component (simple implementation)
const QRCode: React.FC<{ url: string; size?: number; scanText: string }> = ({ url, size = 150, scanText }) => {
    // For demo purposes, we'll use a simple QR code generator
    // In production, you might want to use a library like 'qrcode' or 'react-qr-code'
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;

    return (
        <div className="flex flex-col items-center space-y-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={qrCodeUrl}
                alt="QR Code"
                className="border border-gray-200 rounded-lg"
                width={size}
                height={size}
            />
            <p className="text-xs text-gray-600 text-center">{scanText}</p>
        </div>
    );
};

export default function DownloadAppModal({
    isOpen,
    onClose,
    iosAppStoreUrl = "https://apps.apple.com/us/app/idilio-tv/id6749875422",
    androidPlayStoreUrl = "https://play.google.com/store/apps/details?id=com.stvrae.idilio&pcampaignid=web_share"
}: DownloadAppModalProps) {
    const { type, isMobile } = useDeviceDetection();
    const [showModal, setShowModal] = useState(false);
    const t = useTranslations('DownloadModal');

    useEffect(() => {
        if (isOpen) {
            setShowModal(true);
        }
    }, [isOpen]);

    const handleClose = () => {
        setShowModal(false);
        onClose();
    };

    const handleDownload = (url: string) => {
        window.open(url, '_blank');
        handleClose();
    };

    const renderMobileDownload = () => {
        if (type === 'ios') {
            return (
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-blue-600">
                        <AppStoreIcon className="w-6 h-6" />
                        <span className="text-lg font-semibold">{t('downloadForIphone')}</span>
                    </div>
                    <button
                        onClick={() => handleDownload(iosAppStoreUrl)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                    >
                        <AppStoreIcon className="w-5 h-5" />
                        <span>{t('downloadFromAppStore')}</span>
                    </button>
                </div>
            );
        } else if (type === 'android') {
            return (
                <div className="text-center space-y-4">
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                        <PlayStoreIcon className="w-6 h-6" />
                        <span className="text-lg font-semibold">{t('downloadForAndroid')}</span>
                    </div>
                    <button
                        onClick={() => handleDownload(androidPlayStoreUrl)}
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
                    >
                        <PlayStoreIcon className="w-5 h-5" />
                        <span>{t('downloadFromPlayStore')}</span>
                    </button>
                </div>
            );
        }
        return null;
    };

    const renderDesktopDownload = () => {
        return (
            <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-2 text-gray-700">
                    <QrCode className="w-6 h-6" />
                    <span className="text-lg font-semibold">{t('title')}</span>
                </div>
                <p className="text-gray-600">{t('subtitle')}</p>

                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-3">
                        <div className="flex items-center justify-center space-x-2 text-blue-600">
                            <AppStoreIcon className="w-5 h-5" />
                            <span className="font-medium">iOS</span>
                        </div>
                        <QRCode url={iosAppStoreUrl} size={120} scanText={t('scanToDownload')} />
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center justify-center space-x-2 text-green-600">
                            <PlayStoreIcon className="w-5 h-5" />
                            <span className="font-medium">Android</span>
                        </div>
                        <QRCode url={androidPlayStoreUrl} size={120} scanText={t('scanToDownload')} />
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        {t('visitStoresDirectly')}
                    </p>
                    <div className="flex space-x-4 mt-2 justify-center">
                        <button
                            onClick={() => handleDownload(iosAppStoreUrl)}
                            className="text-blue-600 hover:text-blue-700 text-sm underline flex items-center space-x-1"
                        >
                            <AppStoreIcon className="w-4 h-4" />
                            <span>{t('appStore')}</span>
                        </button>
                        <button
                            onClick={() => handleDownload(androidPlayStoreUrl)}
                            className="text-green-600 hover:text-green-700 text-sm underline flex items-center space-x-1"
                        >
                            <PlayStoreIcon className="w-4 h-4" />
                            <span>{t('playStore')}</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Modal isOpen={showModal} onClose={handleClose}>
            <div className="p-2">
                {isMobile ? renderMobileDownload() : renderDesktopDownload()}
            </div>
        </Modal>
    );
}
