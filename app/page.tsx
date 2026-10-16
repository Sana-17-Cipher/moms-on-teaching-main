import { Hero } from '../components/Hero';
import { CTA } from '../components/CTA';
import { Introduction } from '../components/home/Introduction';
import { ProgrammesSection } from '../components/home/ProgrammesSection';
import { TeacherMoms } from '../components/home/TeacherMoms';
import { HowItWorks } from '../components/home/HowItWorks';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { VideoPreview } from '../components/home/VideoPreview';
import { HomeFAQ } from '../components/home/HomeFAQ';
export const metadata = { alternates: { canonical: '/' } };
export default function Home() { return <main id="main"><Hero /><div className="curricula"><span>Learning that fits their school</span><b>CBSE</b><i>✳</i><b>ICSE</b><i>✳</i><b>IGCSE</b><i>✳</i><b>Kerala State</b></div><Introduction /><ProgrammesSection /><TeacherMoms /><HowItWorks /><GalleryPreview /><VideoPreview /><HomeFAQ /><CTA /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'EducationalOrganization', name: 'Moms on Teaching', url: 'https://momsonteaching.com', email: 'info@momsonteaching.com', telephone: '+917012092344', areaServed: ['Kerala', 'GCC'] }) }}/></main>; }
