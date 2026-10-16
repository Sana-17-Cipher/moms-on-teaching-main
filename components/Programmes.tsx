import Link from 'next/link';
import { programmes } from '../data/programmes';
import { faqs } from '../data/faqs';
export function Programmes() { return <div className="cards">{programmes.map((p, i) => <article className={'program card' + i} key={p.name}><svg className="draw-border" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><rect x=".6" y=".6" width="98.8" height="98.8" rx="4" pathLength="1"/></svg><div className="programtop"><span className="symbol">{p.symbol}</span><span>0{i + 1}</span></div><div className="eyebrow">{p.tag}</div><h3>{p.name}</h3><h4>{p.text}</h4><p>{p.body}</p><Link href={'/programmes/#programme-' + i}>Explore programme <span>↗</span></Link></article>)}</div>; }
