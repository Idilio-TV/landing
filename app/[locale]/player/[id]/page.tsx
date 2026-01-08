import { notFound } from 'next/navigation'
import { getEpisodeById } from '@/lib/supabase-requests'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import PlayerPageClient from '@/app/[locale]/player/[id]/PlayerPageClient'

interface PlayerPageProps {
    params: Promise<{ locale: string; id: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }): Promise<Metadata> {
    const { id } = await params
    const t = await getTranslations('Player')

    try {
        const episode = await getEpisodeById(id)
        if (!episode) {
            return {
                title: t('episodeNotFound'),
                description: t('episodeNotFoundDescription'),
            }
        }

        const episodeTitle = episode.title || `${t('episode')} ${episode.number}`
        const showTitle = episode.show?.title || 'Idilio.TV'

        return {
            title: `${episodeTitle} - ${showTitle} - Idilio.TV`,
            description: episode.description || `${t('watchEpisode')} ${episodeTitle} ${t('onIdilioTV')}`,
            openGraph: {
                title: episodeTitle,
                description: episode.description || `${t('watchEpisode')} ${episodeTitle}`,
                type: 'website',
            },
        }
    } catch {
        return {
            title: t('episodeTitle'),
            description: t('episodeDescription'),
        }
    }
}

export default async function PlayerPage({ params }: PlayerPageProps) {
    const { id } = await params
    const episode = await getEpisodeById(id)
    if (!episode) {
        notFound()
    }

    return <PlayerPageClient episode={episode} />
}
