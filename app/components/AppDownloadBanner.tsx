"use client";

import { useEffect, useState } from 'react';

interface Props {
  targetId: string;
  type: 'show' | 'player';
}

export function AppDownloadBanner({ targetId, type }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | null>(null);

  useEffect(() => {
    const ua = navigator.userAgent;
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(ua);
    setIsMobile(isMobileDevice);
    setPlatform(/iPhone|iPad|iPod/i.test(ua) ? 'ios' : /Android/i.test(ua) ? 'android' : null);

    if (isMobileDevice) {
      const params = new URLSearchParams(window.location.search);
      const data = {
        path: `/${type}/${targetId}`,
        targetId,
        type,
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_content: params.get('utm_content'),
        timestamp: new Date().toISOString(),
      };
      const serialized = JSON.stringify(data);
      localStorage.setItem('pending_deep_link', serialized);
      document.cookie = `pending_deep_link=${encodeURIComponent(serialized)}; max-age=604800; path=/`;
    }
  }, [targetId, type]);

  if (!isMobile) return null;

  const appStoreUrl = 'https://apps.apple.com/app/idilio-tv/id6749875422';
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.stvrae.idilio';

  const handleOpenApp = () => {
    const deepLink = `idiliotv://${type}/${targetId}`;
    const storeUrl = platform === 'ios' ? appStoreUrl : playStoreUrl;

    window.location.href = deepLink;
    setTimeout(() => {
      window.location.href = storeUrl;
    }, 1500);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 z-50">
      <button
        onClick={handleOpenApp}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-xl font-bold transition-colors"
      >
        Ver en la app
      </button>
    </div>
  );
}
