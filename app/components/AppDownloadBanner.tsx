"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

interface Props {
  targetId: string;
  type: 'show' | 'player';
}

export function AppDownloadBanner({ targetId, type }: Props) {
  const [isMobile, setIsMobile] = useState(false);
  const [platform, setPlatform] = useState<'ios' | 'android' | null>(null);
  const [mounted, setMounted] = useState(false);
  const params = useParams();
  const locale = (params?.locale as string) || 'es';

  useEffect(() => {
    setMounted(true);
    const ua = navigator.userAgent;
    const isMobileDevice = /iPhone|iPad|iPod|Android/i.test(ua);
    setIsMobile(isMobileDevice);
    setPlatform(/iPhone|iPad|iPod/i.test(ua) ? 'ios' : /Android/i.test(ua) ? 'android' : null);

    if (isMobileDevice) {
      const urlParams = new URLSearchParams(window.location.search);
      
      // Capturar TODOS los query params dinámicamente
      const allParams: Record<string, string> = {};
      urlParams.forEach((value, key) => {
        allParams[key] = value;
      });

      const deepLinkData = {
        path: `/${locale}/${type}/${targetId}`,
        targetId,
        type,
        locale,
        rawUrl: window.location.href,
        // Incluir todos los query params (UTMs y cualquier otro)
        ...allParams,
      };

      // Save deep link to Supabase via API
      fetch('/api/deep-link/pending', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(deepLinkData),
      }).catch((error) => {
        console.error('[AppDownloadBanner] Error saving deep link:', error);
      });
    }
  }, [targetId, type, locale]);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted || !isMobile) return null;

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
