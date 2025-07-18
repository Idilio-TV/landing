import Hero from "../components/Hero"
import ContentSection from "../components/ContentSection"
import Team from "../components/Team"
import Shows from "../components/Shows"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import CookiesBanner from "../components/CookiesBanner"
import { Toaster } from "react-hot-toast"
import { Analytics } from "@vercel/analytics/next"
import Head from "next/head"
import { useTranslations } from 'next-intl';


export default function Home() {
  const t = useTranslations('Home');
  return (
    <main className="bg-black text-white">
      <Head>
        <title>
          {t('title')}
        </title>
        <meta
          name="description"
          content={t('description')}
          key="desc"
        />
      </Head>
      <Toaster />
      <Analytics />
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
