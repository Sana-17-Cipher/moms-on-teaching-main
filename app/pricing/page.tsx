import Link from 'next/link';
import { pages } from '../../data/pages';
import { programmes } from '../../data/programmes';
import { videos } from '../../data/videos';
import { Enquiry } from '../../components/EnquiryForm';
import { Puzzle } from '../../components/Puzzle';
import { FAQ } from '../../components/FAQ';
import { CTA } from '../../components/CTA';
import { PageHero } from '../../components/PageHero';
const content = pages.pricing;
export const metadata = { title: content[0], description: content[2], alternates: { canonical: '/pricing/' } };
export default function Page() { return <main id="main"><PageHero label="pricing" title={content[1]} description={content[2]}/><section className="section pricing"><div><span className="eyebrow">CLEAR FEES. THOUGHTFUL PLANNING.</span><h2>Pay for the attention<br />your child needs.</h2><p>Tuition is billed by the hour. The rate and recommended hours depend on your child’s school level, subjects and learning goals.</p><p>We’ll discuss the applicable fee and schedule with you before lessons begin. Contact our team for a current quote.</p><Link className="button" href="/contact/">Ask about tuition fees ↗</Link></div><div className="paper"><h3>What shapes your plan?</h3>{['Your child’s class and curriculum', 'The subjects they need help with', 'Foundation, school or revision support', 'A schedule that works for your family'].map((x, i) => <p key={x}><b>0{i + 1}</b> {x}</p>)}</div></section><CTA /></main>; }
