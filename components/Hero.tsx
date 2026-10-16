"use client";

import Link from "next/link";
import { useState } from "react";

const tilePath =
  "M0 0H40C50 0 42-8 42-16C42-40 78-40 78-16C78-8 70 0 80 0H120V40C120 50 112 42 104 42C80 42 80 78 104 78C112 78 120 70 120 80V120H80C70 120 78 112 78 104C78 80 42 80 42 104C42 112 50 120 40 120H0V80C0 70-8 78-16 78C-40 78-40 42-16 42C-8 42 0 50 0 40Z";

type LearningDoodleProps = {
  kind: "bulb" | "book" | "pencil" | "medal";
  className: string;
};

function LearningDoodle({ kind, className }: LearningDoodleProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`learning-doodle ${className}`}
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "bulb" && (
        <path
          d="
            M35 65C35 52 23 48 23 33
            A27 27 0 0 1 77 33
            C77 48 65 52 65 65Z
            M35 72H65
            M39 80H61L56 87H44Z
            M44 65V42
            C30 22 28 49 49 46
            C70 49 70 24 57 42V65
            M50 0V7
            M6 33H14
            M86 33H94
            M13 7L20 14
            M80 14L87 7
          "
        />
      )}

      {kind === "book" && (
        <path
          d="
            M50 22C38 12 23 12 9 15V76
            C24 73 36 74 50 84
            C64 74 76 73 91 76V15
            C77 12 62 12 50 22V84
            M18 29C28 27 35 29 41 33
            M18 41C28 39 35 41 41 45
            M59 33C66 29 74 27 82 29
            M59 45C66 41 74 39 82 41
            M18 54L39 58
            M60 58L81 54
          "
        />
      )}

      {kind === "pencil" && (
        <path
          d="
            M20 69L64 13
            Q70 6 78 13L86 20
            Q92 26 86 34L42 89L14 96Z
            M20 69L42 89
            M58 20L80 40
            M26 76L70 23
            M14 96L20 81
          "
        />
      )}

      {kind === "medal" && (
        <>
          <path
            d="
              M17 8H83L67 48H33Z
              M30 8L43 40
              M70 8L57 40
              M27 59L34 54L36 45L46 46L53 40
              L60 47L70 47L72 57L79 64L73 72
              L72 82L62 83L54 90L46 83L36 83
              L34 73L27 67Z
            "
          />
          <circle cx="53" cy="65" r="15" />
          <path d="M46 65L51 70L61 59" />
        </>
      )}
    </svg>
  );
}

export function Hero() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      className="hero puzzle-hero"
      aria-labelledby="home-hero-heading"
      onPointerLeave={() => setActive(null)}
    >
      <svg
        className="puzzle-field"
        viewBox="0 0 1920 720"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
        onPointerLeave={() => setActive(null)}
        onPointerCancel={() => setActive(null)}
        onPointerUp={(event) => {
          if (event.pointerType !== "mouse") {
            setActive(null);
          }
        }}
      >
        {Array.from({ length: 126 }, (_, index) => (
          <path
            key={index}
            d={tilePath}
            transform={`translate(
              ${(index % 18) * 120 - 60}
              ${Math.floor(index / 18) * 120}
            )`}
            className={
              active === index
                ? "puzzle-tile is-active"
                : "puzzle-tile"
            }
            onPointerEnter={() => setActive(index)}
            onPointerDown={() => setActive(index)}
          />
        ))}
      </svg>

      <div className="hero-wash" aria-hidden="true" />

      <div className="hero-lineart" aria-hidden="true">
        <LearningDoodle kind="bulb" className="icon-bulb" />
        <LearningDoodle kind="medal" className="icon-medal" />
        <LearningDoodle kind="book" className="icon-book" />
        <LearningDoodle kind="pencil" className="icon-pencil" />
      </div>

      <div className="hero-copy">
        <span className="hero-pill">
          <span aria-hidden="true">✧</span>
          {" "}A LITTLE CARE. A WORLD OF POSSIBILITY.
        </span>

        <h1 id="home-hero-heading">
          Learning that feels like <span>“I can!”</span>
        </h1>

        <p className="hero-subtitle">
          One child. One Teacher-Mom. A world of confidence.
        </p>

        <p className="hero-description">
          Personalised online tuition for <strong>KG–Class 12</strong>,
          <br className="desktop-break" /> with patient guidance at
          your child’s pace.
        </p>

        <div className="actions">
          <Link className="button hero-demo" href="/contact/">
            <span aria-hidden="true">✧</span>
            {" "}Experience a free demo
          </Link>
        </div>

        <p className="demo-caption">
          Meet a caring teacher. Discover the right fit.
        </p>

        <div className="hero-bottom-note">
          Small steps today. Stronger foundations for tomorrow.
        </div>
      </div>

      <svg
        className="hero-wave"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="
            M0 30
            C150 52 270 52 420 30
            C570 8 650 12 790 32
            C940 54 1040 14 1180 22
            C1290 28 1370 44 1440 30
            L1440 80 L0 80 Z
          "
        />
      </svg>
    </section>
  );
}