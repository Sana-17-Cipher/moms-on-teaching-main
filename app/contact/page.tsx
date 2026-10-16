import Link from 'next/link';
import { pages } from '../../data/pages';
import { programmes } from '../../data/programmes';
import { videos } from '../../data/videos';
import { Enquiry } from '../../components/EnquiryForm';
import { Puzzle } from '../../components/Puzzle';
import { FAQ } from '../../components/FAQ';
import { CTA } from '../../components/CTA';
import { PageHero } from '../../components/PageHero';
const content = pages.contact;
export const metadata = { title: content[0], description: content[2], alternates: { canonical: '/contact/' } };
export default function Page() { return <main id="main"><PageHero label="contact" title={content[1]} description={content[2]}/><section className="section contact"><div><span className="eyebrow">A CONVERSATION, NOT A COMMITMENT</span><h2>Say hello.<br />We’ll take it from here.</h2><p>Whether you have a subject in mind or just want to understand the options, we’re happy to help.</p><div className="contactlinks"><a href="tel:+917012092344">Call us <b>+91 70120 92344 ↗</b></a><a href="mailto:info@momsonteaching.com">Email us <b>info@momsonteaching.com ↗</b></a><a href="https://wa.me/917012092344">Message us <b>Chat on WhatsApp ↗</b></a></div><p>Based in Thrissur, Kerala.<br />Teaching online across Kerala and the GCC.</p></div><Enquiry /></section></main>; }
