import Link from 'next/link';
import { Puzzle } from '../Puzzle';
import { Programmes } from '../Programmes';
import { FAQ } from '../FAQ';
export function GalleryPreview() { return <section className="section gallerystrip"><div><span className="eyebrow">BEYOND THE LESSON</span><h2>Room for moments<br />worth remembering.</h2><p>Our gallery is getting ready for classroom stories and community celebrations.</p><Link className="textlink" href="/gallery/">Visit the gallery ↗</Link></div><div className="gallerytile"><Puzzle /><span>Our learning scrapbook<br /><b>Coming soon</b></span></div></section>; }
