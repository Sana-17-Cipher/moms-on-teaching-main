# Moms on Teaching — Next.js website

Editable Next.js App Router project with TypeScript and static export.
Brand: navy #172547 and warm cream #FFFAE7, sampled from your references. Yellow accents highlight hovered puzzle pieces.

## Start locally

Use Node.js 20.9 or newer (Node 22 LTS recommended).

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Stop with Ctrl+C.

## Build for Hostinger

```bash
npm run build
```

Upload the CONTENTS of `out/` to `public_html/`. Do not upload the source folder or node_modules as your website. A prebuilt out folder is included; rebuild it after making changes.

IMPORTANT: your current Drupal site serves Malayalam articles under /ml/. Keep those routes available or migrate those articles before replacing Drupal; the new blog page links to the existing articles. Back up the old site, preserve its URLs where possible, and configure redirects (for example /en/ to /).

## Where to edit

| Change | File |
| --- | --- |
| Main brand colours and colour overrides | styles/theme.css |
| Layout, spacing and responsive rules | app/globals.css |
| Home page section order | app/page.tsx |
| Puzzle hero, headline, button and hover interaction | components/Hero.tsx |
| Navbar and mobile menu | components/Header.tsx |
| Footer | components/Footer.tsx |
| Navigation and social URLs | data/navigation.ts |
| Introduction section | components/home/Introduction.tsx |
| Homepage programme section | components/home/ProgrammesSection.tsx |
| Programme cards and line drawing on hover | components/Programmes.tsx |
| Teacher-Moms section | components/home/TeacherMoms.tsx |
| How it works section | components/home/HowItWorks.tsx |
| Home gallery preview | components/home/GalleryPreview.tsx |
| Home video preview | components/home/VideoPreview.tsx |
| Home FAQ section | components/home/HomeFAQ.tsx |
| Shared FAQ answers | data/faqs.ts |
| Programme names, descriptions and lists | data/programmes.ts |
| Page headings and SEO descriptions | data/pages.ts |
| About page | app/about/page.tsx |
| Programmes page | app/programmes/page.tsx |
| Pricing page | app/pricing/page.tsx |
| Gallery page | app/gallery/page.tsx |
| Blog page | app/blog/page.tsx |
| Videos page | app/videos/page.tsx |
| Contact page | app/contact/page.tsx |
| FAQ page | app/faq/page.tsx |
| WhatsApp enquiry form | components/EnquiryForm.tsx |
| Shared call to action | components/CTA.tsx |
| Shared inner-page heading | components/PageHero.tsx |
| YouTube video entries | data/videos.ts |
| Images and logo | public/images/ |
| Analytics and global SEO | app/layout.tsx |
| Search engine sitemap | app/sitemap.ts |
| Robots instructions | app/robots.ts |

## Add YouTube videos

Add real video IDs and descriptions in data/videos.ts:

```ts
export const videos = [
  {
    id: 'YOUR_VIDEO_ID',
    title: 'Your real video title',
    description: 'A brief description of the video.',
  },
];
```

The ID is the value after `v=` in a YouTube watch URL. Only include published videos that allow embedding. The page automatically creates responsive embeds. Until you add entries, it displays the channel link and a clear coming-soon message.

## Existing configuration

- Google Analytics: G-YKYVH5SZ2G, using next/script afterInteractive.
- Production URL for canonical tags and sitemap: https://momsonteaching.com.
- WhatsApp and phone: +91 70120 92344.
- Email: info@momsonteaching.com.
- All five supplied social links are in data/navigation.ts.
- Form opens a prepared WhatsApp message; the visitor must press Send in WhatsApp. No backend submission or email service is configured.
- Google Fonts are loaded from the web; local fallback fonts are configured.
- Puzzle hover changes only the tile under the pointer. Touch users can tap pieces. Reduced-motion preferences disable transitions.
- Card outlines animate on hover and keyboard focus; touch users see complete outlines.

## Still for you to add

Gallery photos, actual video IDs, confirmed pricing and any English blog articles. Legal/consent content should be added using your actual business policies. No fabricated testimonials or exact pricing are included.

## Verification

Production static build and TypeScript passed. Browser and real-device visual QA was unavailable, so check the layouts and interactions on your target devices before making it the public production site.
