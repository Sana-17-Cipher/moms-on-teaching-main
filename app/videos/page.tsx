import Link from 'next/link';
import { pages } from '../../data/pages';
import { programmes } from '../../data/programmes';
import { videos } from '../../data/videos';
import { Enquiry } from '../../components/EnquiryForm';
import { Puzzle } from '../../components/Puzzle';
import { FAQ } from '../../components/FAQ';
import { CTA } from '../../components/CTA';
import { PageHero } from '../../components/PageHero';
const content = pages.videos;
export const metadata = { title: content[0], description: content[2], alternates: { canonical: '/videos/' } };
export default function Page() { return <main id="main"><PageHero label="videos" title={content[1]} description={content[2]}/><section className="section video-section"><div className="channel-feature"><div className="play-symbol" aria-hidden="true">▶</div><div><span className="eyebrow">OUR YOUTUBE CHANNEL</span><h2>See more of our world.</h2><p>Visit Moms on Teaching on YouTube to watch the videos shared by our team.</p><a className="button" href="https://www.youtube.com/@MomsonteachingTutions" target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a></div></div>{videos.length > 0 ? <div className="video-grid">{videos.map(v => <article key={v.id}><iframe src={`https://www.youtube-nocookie.com/embed/${v.id}`} title={v.title} loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen/><div><h3>{v.title}</h3><p>{v.description}</p></div></article>)}</div> : <div className="video-note"><h3>A collection to return to.</h3><p>Selected videos will be added here soon. You can explore the channel in the meantime.</p></div>}</section><CTA /></main>; }
