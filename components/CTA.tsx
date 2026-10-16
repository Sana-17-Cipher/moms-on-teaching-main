import Link from 'next/link';
import { programmes } from '../data/programmes';
import { faqs } from '../data/faqs';
export function CTA() { return <section className="cta"><span className="eyebrow">THE NEXT CHAPTER STARTS SMALL</span><h2>Let’s find their<br /><em>“I can do this.”</em></h2><p>Meet a teacher. Ask your questions. Take the first step together.</p><Link className="button" href="/contact/">Book a free demo ↗</Link><span className="cta-star" aria-hidden="true">✳</span></section>; }
