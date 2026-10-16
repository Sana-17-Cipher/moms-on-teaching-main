import type { ReactNode } from "react";

export function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, ReactNode> = {
    Phone: (
      <path d="m5 3 4 1 1 5-3 2c2 3 3 4 6 6l2-3 5 1 1 4c-1 4-7 3-12-2S1 5 5 3Z" />
    ),

    Email: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="1" />
        <path d="m3 6 9 7 9-7" />
      </>
    ),

    WhatsApp: (
      <>
        <path d="M20.5 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l1.8-5a8.5 8.5 0 1 1 15.7-4.5Z" />
        <path d="m8 7 2 3-1 1 4 4 1-1 3 1c-1 4-5 2-8-1S5 8 8 7Z" />
      </>
    ),

    Facebook: (
      <>
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="currentColor"
          stroke="none"
        />
        <path
          d="M13 21v-9h3l.5-3H13V7.5c0-1 .5-1.5 1.5-1.5H17V3h-3c-3 0-5 2-5 5v1H7v3h2v9"
          fill="#0e182d"
          stroke="none"
        />
      </>
    ),

    Instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r=".9"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    YouTube: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path
          d="m10 9 5 3-5 3Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    LinkedIn: (
      <>
        <path
          d="M5 10v10M10 20V10h4v2c3-4 7-2 7 2v6M14 20v-6"
          strokeWidth="2.8"
        />
        <circle
          cx="5"
          cy="5"
          r="1.7"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    Reddit: (
      <>
        <ellipse cx="12" cy="14" rx="9" ry="6" />
        <path d="m12 8 2-5 5 1M8 17q4 3 8 0M3 10C-1 7 0 15 3 14M21 10c4-3 4 5 0 4" />
        <circle cx="20" cy="4" r="2" />
        <circle cx="8" cy="13" r="1" fill="currentColor" />
        <circle cx="16" cy="13" r="1" fill="currentColor" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}