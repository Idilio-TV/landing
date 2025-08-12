import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Toaster } from "react-hot-toast"
import { Analytics } from "@vercel/analytics/next"
import Footer from "../../components/Footer"
import CookiesBanner from "../../components/CookiesBanner"
import PrivacyContent from "./PrivacyContent"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('Privacy');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default function Privacy() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Toaster />
            <Analytics />

            <PrivacyContent />

            <Footer />
            <CookiesBanner />
        </main>
    )
} 