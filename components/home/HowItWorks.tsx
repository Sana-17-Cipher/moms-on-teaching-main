import Link from 'next/link';
import { Puzzle } from '../Puzzle';
import { Programmes } from '../Programmes';
import { FAQ } from '../FAQ';
export function HowItWorks() { return <section className="section steps"><span className="eyebrow">FROM HELLO TO “NOW I GET IT”</span><h2>A simple start. A thoughtful journey.</h2><div className="three">{[['01', 'Tell us about your child', 'Share their class, subjects and what feels difficult right now.'], ['02', 'Meet their Teacher-Mom', 'Discuss a suitable teacher and try a demo lesson.'], ['03', 'Build a rhythm together', 'Agree on learning goals and a schedule, then take it one lesson at a time.']].map(([n, t, d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>; }
