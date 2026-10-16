import Link from 'next/link';
import { Puzzle } from '../Puzzle';
import { Programmes } from '../Programmes';
import { FAQ } from '../FAQ';
export function VideoPreview() { return <section className="section home-video"><div className="video-sketch" aria-hidden="true"><span>▶</span><svg viewBox="0 0 100 100" className="draw-border" preserveAspectRatio="none"><rect x=".6" y=".6" width="98.8" height="98.8" rx="4" pathLength="1"/></svg></div><div><span className="eyebrow">A WINDOW INTO OUR WORLD</span><h2>More stories.<br /><em>One click away.</em></h2><p>Meet Moms on Teaching beyond the page. Explore videos and updates on our YouTube channel.</p><Link className="textlink" href="/videos/">Explore our videos ↗</Link></div></section>; }
