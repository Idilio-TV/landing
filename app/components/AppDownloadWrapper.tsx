"use client";

import React, { useState, useEffect } from 'react';
import DownloadAppModal from './DownloadAppModal';

export default function AppDownloadWrapper() {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        // Show modal immediately when component mounts
        setShowModal(true);
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <DownloadAppModal
            isOpen={showModal}
            onClose={handleCloseModal}
            iosAppStoreUrl="https://apps.apple.com/us/app/idilio-tv/id6749875422"
            androidPlayStoreUrl="https://play.google.com/store/apps/details?id=com.stvrae.idilio&pcampaignid=web_share"
        />
    );
}
