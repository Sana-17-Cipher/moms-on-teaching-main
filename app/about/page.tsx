import Link from 'next/link';
import { pages } from '../../data/pages';
import { programmes } from '../../data/programmes';
import { videos } from '../../data/videos';
import { Enquiry } from '../../components/EnquiryForm';
import { Puzzle } from '../../components/Puzzle';
import { FAQ } from '../../components/FAQ';
import { CTA } from '../../components/CTA';
import { PageHero } from '../../components/PageHero';
const content = pages.about;
export const metadata = { title: content[0], description: content[2], alternates: { canonical: '/about/' } };
export default function Page() { return <main id="main"><PageHero label="about" title={content[1]} description={content[2]}/><section className="section about"><img src="/images/hero2.png" alt="Learning comfortably at home" width="1536" height="1024"/><div><span className="eyebrow">INDIVIDUAL LEARNING. SHARED PURPOSE.</span><h2>See the child.<br />Then shape the lesson.</h2><p>Learning is personal. A child’s confidence, questions and pace all deserve a place in the lesson. That belief is at the heart of Moms on Teaching.</p><p>Our Teacher-Moms offer focused online support across school subjects, foundations and exam revision. We help learners work through challenges one manageable step at a time.</p><p>For parents, that means a partner in the learning journey: someone to discuss goals with, understand progress and plan the next step.</p><Link className="textlink" href="/programmes/">Find the right support ↗</Link></div></section><CTA /></main>; }
