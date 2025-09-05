import Hero from "../components/Hero"
import ContentSection from "../components/ContentSection"
import Team from "../components/Team"
import Shows from "../components/Shows"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import CookiesBanner from "../components/CookiesBanner"
import AppDownloadWrapper from "../components/AppDownloadWrapper"
import { Toaster } from "react-hot-toast"
import { Analytics } from "@vercel/analytics/next"
import { Metadata } from "next"
import { getTranslations } from "next-intl/server"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Home');
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Toaster />
      <Analytics />
      <AppDownloadWrapper />
      <Hero />
      <ContentSection />
      <Team />
      <Shows />
      <Contact />
      <Footer />
      <CookiesBanner />
    </main>
  )
}
