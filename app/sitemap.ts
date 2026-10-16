export const dynamic = "force-static";
export default function sitemap() { return ['', 'about', 'programmes', 'pricing', 'gallery', 'videos', 'blog', 'contact', 'faq'].map(p => ({ url: `https://momsonteaching.com/${p ? p + '/' : ''}`, lastModified: new Date() })); }
