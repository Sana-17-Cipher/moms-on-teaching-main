import type { Metadata } from "next";
import Link from "next/link";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Moms on Teaching: a global community of Teacher-Moms offering personalised one-to-one online tuition with patience, professional expertise and genuine care.",
  alternates: {
    canonical: "/about/",
  },
};

const values = [
  {
    number: "01",
    title: "Patience that makes space for questions",
    description:
      "Children learn at their own pace. Our approach values encouragement, empathy and the time to understand.",
  },
  {
    number: "02",
    title: "Perspective across curricula",
    description:
      "With support for Indian and international curricula, learning can stay connected to your child’s educational path.",
  },
  {
    number: "03",
    title: "Attention to the individual",
    description:
      "One child and one teacher, with lessons shaped around the questions, concepts and goals that matter to them.",
  },
];

export default function AboutPage() {
  return (
    <main id="main" className={styles.page}>
      <section className={styles.hero} aria-labelledby="about-heading">
        <div className={`${styles.container} ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>OUR STORY</span>

            <h1 id="about-heading">
              A global community.
              <br />
              Built around <em>every child.</em>
            </h1>

            <p>
              Every child deserves someone who understands how they
              learn. That simple belief is where Moms on Teaching began.
            </p>

            <Link className={styles.textLink} href="#our-beginning">
              Read our story <span aria-hidden="true">↓</span>
            </Link>
          </div>

          <aside
            className={styles.belief}
            aria-label="The belief behind Moms on Teaching"
          >
            <svg
              className={styles.beliefPuzzle}
              viewBox="0 0 200 200"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="
                  M35 45H78
                  C86 45 80 38 80 31
                  C80 9 120 9 120 31
                  C120 38 114 45 122 45
                  H165V88
                  C165 96 172 90 179 90
                  C201 90 201 130 179 130
                  C172 130 165 124 165 132
                  V175H122
                  C114 175 120 168 120 161
                  C120 139 80 139 80 161
                  C80 168 86 175 78 175
                  H35V132
                  C35 124 42 130 49 130
                  C71 130 71 90 49 90
                  C42 90 35 96 35 88Z
                "
              />
            </svg>

            <span className={styles.eyebrow}>
              THE BELIEF BEHIND IT ALL
            </span>

            <p className={styles.beliefQuote}>
              A little understanding.
              <br />
              The right guidance.
              <br />
              <em>Room to grow.</em>
            </p>

            <p className={styles.beliefCaption}>
              Professional expertise, with genuine care.
            </p>

            <span className={styles.signature}>Moms on Teaching</span>
          </aside>
        </div>
      </section>

      <section
        id="our-beginning"
        className={`${styles.section} ${styles.beginning}`}
        aria-labelledby="beginning-heading"
      >
        <div className={`${styles.container} ${styles.storyGrid}`}>
          <div>
            <span className={styles.eyebrow}>01 / WHY WE BEGAN</span>

            <h2 id="beginning-heading">
              Learning is personal.
              <br />
              <em>The guidance should be, too.</em>
            </h2>
          </div>

          <div className={styles.prose}>
            <p>
              Every child brings a different set of questions, strengths
              and ambitions to a lesson. We believe their learning should
              make space for all of them.
            </p>

            <p>
              Moms on Teaching brings together personalised one-to-one
              online tuition and educators who combine professional
              expertise with genuine care. Our purpose is simple: to
              help children learn in a way that respects their pace and
              supports their individual goals.
            </p>
          </div>
        </div>
      </section>

      <section
        className={styles.section}
        aria-labelledby="teachers-heading"
      >
        <div className={styles.container}>
          <div className={styles.peopleHeading}>
            <span className={styles.eyebrow}>
              02 / THE PEOPLE BEHIND THE LESSONS
            </span>

            <h2 id="teachers-heading">
              Educators by profession.
              <br />
              <em>Teacher-Moms at heart.</em>
            </h2>

            <div className={styles.peopleIntro}>
              <p>
                We are a community of Teacher-Moms: educators who bring
                teaching expertise and an understanding of children to
                one-to-one learning.
              </p>

              <p>
                Alongside supporting families, our mission is to create
                meaningful work-from-home opportunities for qualified
                Teacher-Moms around the world.
              </p>
            </div>
          </div>

          <div className={styles.values}>
            {values.map((value) => (
              <article className={styles.valueCard} key={value.number}>
                <span className={styles.number} aria-hidden="true">
                  {value.number}
                </span>

                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.purpose}`}
        aria-labelledby="purpose-heading"
      >
        <div className={styles.container}>
          <div className={styles.purposeHeading}>
            <span className={styles.eyebrow}>
              03 / WHAT KEEPS US MOVING
            </span>

            <h2 id="purpose-heading">
              Growing a community.
              <br />
              <em>Keeping the care.</em>
            </h2>
          </div>

          <div className={styles.purposeGrid}>
            <article className={styles.purposeItem}>
              <span className={styles.purposeMark} aria-hidden="true">
                ↗
              </span>

              <h3>Our mission</h3>

              <p>
                To provide every child with personalised one-on-one
                learning while creating meaningful work-from-home
                opportunities for qualified Teacher-Moms around the world.
              </p>
            </article>

            <article className={styles.purposeItem}>
              <span className={styles.purposeMark} aria-hidden="true">
                ✧
              </span>

              <h3>Our vision</h3>

              <p>
                To build a global learning community where children
                thrive academically and educators empower families
                through compassionate, personalised teaching.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.cta}`}
        aria-labelledby="about-contact-heading"
      >
        <div className={styles.container}>
          <span className={styles.eyebrow}>
            THE NEXT CHAPTER STARTS WITH A CONVERSATION
          </span>

          <h2 id="about-contact-heading">
            Tell us about <em>your child.</em>
          </h2>

          <p>
            Their questions. Their interests. The things they find
            difficult. Let’s explore the support that could help them
            move forward.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primaryButton} href="/contact/">
              Let’s talk <span aria-hidden="true">↗</span>
            </Link>

            <Link className={styles.secondaryButton} href="/programmes/">
              Explore our classes <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}