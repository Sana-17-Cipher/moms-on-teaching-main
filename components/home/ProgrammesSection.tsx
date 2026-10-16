import Link from 'next/link';
import { Puzzle } from '../Puzzle';
import { Programmes } from '../Programmes';
import { FAQ } from '../FAQ';
export function ProgrammesSection() { return <section className="section programmes"><div className="sectionhead"><div><span className="eyebrow">A STARTING POINT FOR EVERY LEARNER</span><h2>Where shall we begin?</h2></div><Link className="textlink" href="/programmes/">All programmes ↗</Link></div><Programmes /></section>; }
