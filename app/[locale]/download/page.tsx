import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import DownloadPageClient from './DownloadPageClient';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('DownloadPage');
    return {
        title: t('title'),
        description: t('description'),
        openGraph: {
            title: t('title'),
            description: t('description'),
            type: 'website',
        },
    };
}

export default function DownloadPage() {
    return <DownloadPageClient />;
}
