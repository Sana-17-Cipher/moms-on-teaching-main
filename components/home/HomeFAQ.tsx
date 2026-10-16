import Link from 'next/link';
import { Puzzle } from '../Puzzle';
import { Programmes } from '../Programmes';
import { FAQ } from '../FAQ';
export function HomeFAQ() { return <section className="section faqsection"><div><span className="eyebrow">LET’S CLEAR THINGS UP</span><h2>On your mind?</h2><p>We’re here to help you find the right fit.</p><Link className="textlink" href="/contact/">Talk to our team ↗</Link></div><FAQ /></section>; }
