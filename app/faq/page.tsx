import Link from 'next/link';
import { pages } from '../../data/pages';
import { programmes } from '../../data/programmes';
import { videos } from '../../data/videos';
import { Enquiry } from '../../components/EnquiryForm';
import { Puzzle } from '../../components/Puzzle';
import { FAQ } from '../../components/FAQ';
import { CTA } from '../../components/CTA';
import { PageHero } from '../../components/PageHero';
const content = pages.faq;
export const metadata = { title: content[0], description: content[2], alternates: { canonical: '/faq/' } };
export default function Page() { return <main id="main"><PageHero label="faq" title={content[1]} description={content[2]}/><section className="section narrow"><FAQ /></section><CTA /></main>; }
