import Link from 'next/link';
import { pages } from '../../data/pages';
import { programmes } from '../../data/programmes';
import { videos } from '../../data/videos';
import { Enquiry } from '../../components/EnquiryForm';
import { Puzzle } from '../../components/Puzzle';
import { FAQ } from '../../components/FAQ';
import { CTA } from '../../components/CTA';
import { PageHero } from '../../components/PageHero';
const content = pages.blog;
export const metadata = { title: content[0], description: content[2], alternates: { canonical: '/blog/' } };
export default function Page() { return <main id="main"><PageHero label="blog" title={content[1]} description={content[2]}/><section className="section"><div className="three blogcards">{[['01', 'Learning routines', 'Helping children feel ready for a new school year'], ['02', 'Thoughtful technology', 'AI tutors and the value of a human connection'], ['03', 'Exam confidence', 'Supporting children through exam worries']].map(([n, t, d]) => <article key={n}><span>{n}</span><div className="eyebrow">{t}</div><h2>{d}</h2><p>Explore this topic in our Malayalam learning and parenting collection.</p><a className="textlink" href="https://momsonteaching.com/ml/insights-blogs-ml">Browse Malayalam articles ↗</a></article>)}</div><p className="fine">Articles are hosted on our existing Malayalam blog. English article pages have not been added yet.</p></section><CTA /></main>; }
