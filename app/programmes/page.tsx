import Link from 'next/link';
import { pages } from '../../data/pages';
import { programmes } from '../../data/programmes';
import { videos } from '../../data/videos';
import { Enquiry } from '../../components/EnquiryForm';
import { Puzzle } from '../../components/Puzzle';
import { FAQ } from '../../components/FAQ';
import { CTA } from '../../components/CTA';
import { PageHero } from '../../components/PageHero';
const content = pages.programmes;
export const metadata = { title: content[0], description: content[2], alternates: { canonical: '/programmes/' } };
export default function Page() { return <main id="main"><PageHero label="programmes" title={content[1]} description={content[2]}/><section className="section programme-list">{programmes.map((p, i) => <article id={'programme-' + i} key={p.name}><span className="symbol">{p.symbol}</span><div><span className="eyebrow">{p.tag}</span><h2>{p.name}</h2><p>{p.body}</p><ul>{p.items.map(x => <li key={x}>{x}</li>)}</ul><Link className="button" href="/contact/">Discuss this programme ↗</Link></div></article>)}</section><CTA /></main>; }
