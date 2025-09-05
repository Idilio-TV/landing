import { notFound } from 'next/navigation'
import { getShowById, getShowIdsForStaticGeneration } from '@/lib/supabase-requests'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import ShowPageClient from '@/app/[locale]/show/[id]/ShowPageClient'

// Generate static params for all shows
export async function generateStaticParams() {
    try {
        const showIds = await getShowIdsForStaticGeneration()
        const locales = ['en', 'es']

        const params = []
        for (const locale of locales) {
            for (const id of showIds) {
                params.push({
                    locale,
                    id,
                })
            }
        }

        return params
    } catch {
        console.error('Error generating static params')
        return []
    }
}

// Generate metadata for each show
export async function generateMetadata({ params }: { params: Promise<{ locale: string; id: string }> }): Promise<Metadata> {
    const { id } = await params
    const t = await getTranslations('Show')

    try {
        const show = await getShowById(id)
        if (!show) {
            return {
                title: t('showNotFound'),
                description: t('showNotFoundDescription'),
            }
        }

        return {
            title: `${show.title} - Idilio.TV`,
            description: show.summary || `Watch ${show.title}  on Idilio.TV`,
            openGraph: {
                title: show.title,
                description: show.summary || `Watch ${show.title} on Idilio.TV`,
                type: 'website',
            },
        }
    } catch {
        return {
            title: t('showTitle'),
            description: t('showDescription'),
        }
    }
}

interface ShowPageProps {
    params: Promise<{ locale: string; id: string }>;
}

export default async function ShowPage({ params }: ShowPageProps) {
    const { id } = await params
    const show = await getShowById(id)
    if (!show) {
        notFound()
    }

    return <ShowPageClient show={show} />
} 