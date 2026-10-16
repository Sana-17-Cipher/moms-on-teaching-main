import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Request a Free Demo",
  description:
    "Contact Moms on Teaching for personalised one-to-one online tuition. Tell us about your child and request a free demo lesson.",
  alternates: {
    canonical: "/contact/",
  },
};

function PuzzlePiece({ className }: { className: string }) {
  return (
    <svg
      className={className}
      viewBox="-40 -40 190 190"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="
          M0 0H40
          C50 0 42-8 42-16
          C42-40 78-40 78-16
          C78-8 70 0 80 0
          H120V40
          C120 50 112 42 104 42
          C80 42 80 78 104 78
          C112 78 120 70 120 80
          V120H80
          C70 120 78 112 78 104
          C78 80 42 80 42 104
          C42 112 50 120 40 120
          H0V80
          C0 70-8 78-16 78
          C-40 78-40 42-16 42
          C-8 42 0 50 0 40Z
        "
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main id="main" className={styles.page}>
      <div className={styles.container}>
        <div className={styles.sheet}>
          <div className={styles.decorations} aria-hidden="true">
            <PuzzlePiece
              className={`${styles.piece} ${styles.pieceOne}`}
            />
            <PuzzlePiece
              className={`${styles.piece} ${styles.pieceTwo}`}
            />
            <PuzzlePiece
              className={`${styles.piece} ${styles.pieceThree}`}
            />
            <PuzzlePiece
              className={`${styles.piece} ${styles.pieceFour}`}
            />
          </div>

          <div className={styles.layout}>
            <section
              className={styles.info}
              aria-labelledby="contact-heading"
            >
              <span className={styles.eyebrow}>
                EVERY CONNECTION STARTS WITH A HELLO
              </span>

              <h1 id="contact-heading" className={styles.title}>
                Contact us<span>.</span>
              </h1>

              <p className={styles.lead}>
                Let’s find their
                <br />
                <em>missing piece.</em>
              </p>

              <p className={styles.intro}>
                A tricky subject. A little more confidence. A fresh
                start. Tell us what your child needs, and we’ll help
                you find the right support.
              </p>

              <a
                className={styles.whatsapp}
                href="https://wa.me/917012092344"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp <span aria-hidden="true">↗</span>
              </a>

              <dl className={styles.details}>
                <div>
                  <dt>Email us</dt>
                  <dd>
                    <a href="mailto:info@momsonteaching.com">
                      info@momsonteaching.com
                    </a>
                  </dd>
                </div>

                <div>
                  <dt>Call us</dt>
                  <dd>
                    <a href="tel:+917012092344">
                      +91 70120 92344
                    </a>
                  </dd>
                </div>
              </dl>

              <div className={styles.socials}>
                <a
                  href="https://www.youtube.com/@MomsonteachingTutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Moms on Teaching on YouTube"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <rect
                      x="2"
                      y="5"
                      width="20"
                      height="14"
                      rx="4"
                      fill="currentColor"
                    />
                    <path d="m10 9 5 3-5 3Z" fill="#ffffff" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/moms.on.teaching"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Moms on Teaching on Instagram"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                      stroke="none"
                    />
                  </svg>
                </a>

                <span>A little closer to our community.</span>
              </div>
            </section>

            <ContactForm />
          </div>
        </div>

        <p className={styles.appNote}>
          <span aria-hidden="true" />
          A little closer to learning. Our mobile app is coming soon.
        </p>
      </div>
    </main>
  );
}