import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import './globals.css';
import '../styles/theme.css';
import "./globals.css";
import "../styles/theme.css";
import "../styles/navigation.css";
import "../styles/hero-motion.css";
export const metadata: Metadata = { metadataBase: new URL('https://momsonteaching.com'), title: { default: 'Moms on Teaching | One-to-One Online Tuition in Kerala & GCC', template: '%s | Moms on Teaching' }, description: 'Patient, personalised online tuition for KG to Class 12. Explore CBSE, ICSE, IGCSE and Kerala State syllabus support with caring Teacher-Moms.', openGraph: { type: 'website', siteName: 'Moms on Teaching', images: ['/images/hero2.png'] } };
export default function Layout({ children }: {
    children: React.ReactNode;
}) { return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header />{children}<Footer /><Script src="https://www.googletagmanager.com/gtag/js?id=G-YKYVH5SZ2G" strategy="afterInteractive"/><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-YKYVH5SZ2G');`}</Script></body></html>; }
