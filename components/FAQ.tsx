import Link from 'next/link';
import { programmes } from '../data/programmes';
import { faqs } from '../data/faqs';
export function FAQ() { return <div className="faq">{faqs.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div>; }
