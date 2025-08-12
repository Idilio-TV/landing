import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { Toaster } from "react-hot-toast"
import { Analytics } from "@vercel/analytics/next"
import Footer from "../../components/Footer"
import CookiesBanner from "../../components/CookiesBanner"
import TermsContent from "./TermsContent"

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('Terms');
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default function Terms() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Toaster />
            <Analytics />

            <TermsContent />

            <Footer />
            <CookiesBanner />
        </main>
    )
} 