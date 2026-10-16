import Link from 'next/link';
import { pages } from '../../data/pages';
import { programmes } from '../../data/programmes';
import { videos } from '../../data/videos';
import { Enquiry } from '../../components/EnquiryForm';
import { Puzzle } from '../../components/Puzzle';
import { FAQ } from '../../components/FAQ';
import { CTA } from '../../components/CTA';
import { PageHero } from '../../components/PageHero';
const content = pages.gallery;
export const metadata = { title: content[0], description: content[2], alternates: { canonical: '/gallery/' } };
export default function Page() { return <main id="main"><PageHero label="gallery" title={content[1]} description={content[2]}/><section className="section"><div className="galleryempty"><Puzzle /><h2>Our scrapbook is taking shape.</h2><p>Photos and stories will be added here soon.<br />For now, discover how we support each learner.</p><Link className="button" href="/programmes/">Explore our programmes ↗</Link></div></section><CTA /></main>; }
