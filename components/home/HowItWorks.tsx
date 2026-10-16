"use client";

import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    number: "01",
    title: "Tell us about your child",
    description:
      "Share their class, subjects and what feels difficult right now. We’ll listen and understand the support they need.",
  },
  {
    number: "02",
    title: "Meet their Teacher-Mom",
    description:
      "Meet a suitable teacher and try a demo lesson. Give your child time to ask questions and feel comfortable.",
  },
  {
    number: "03",
    title: "Build a rhythm together",
    description:
      "Agree on learning goals and a schedule that fits your family. Then take it one lesson at a time.",
  },
];

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  function move(direction: number) {
    setActive((current) => {
      return (current + direction + steps.length) % steps.length;
    });
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next: number;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        next = (index + 1) % steps.length;
        break;

      case "ArrowLeft":
      case "ArrowUp":
        next = (index - 1 + steps.length) % steps.length;
        break;

      case "Home":
        next = 0;
        break;

      case "End":
        next = steps.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    setActive(next);
    buttons.current[next]?.focus();
  }

  return (
    <section
      className={styles.section}
      aria-labelledby="how-it-works-heading"
    >
      <div className={styles.inner}>
        <header className={styles.heading}>
          <span className={styles.eyebrow}>
            FROM HELLO TO “NOW I GET IT”
          </span>

          <h2 id="how-it-works-heading">
            A simple start. A thoughtful journey.
          </h2>

          <p>Three small steps towards more confident learning.</p>
        </header>

        <div className={styles.cards}>
          {steps.map((step, index) => {
            const isActive = active === index;

            return (
              <article
                key={step.number}
                className={`${styles.card} ${
                  isActive ? styles.active : ""
                }`}
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") {
                    setActive(index);
                  }
                }}
              >
                <button
                  ref={(element) => {
                    buttons.current[index] = element;
                  }}
                  id={`journey-trigger-${index}`}
                  type="button"
                  className={styles.trigger}
                  aria-expanded={isActive}
                  aria-controls={`journey-panel-${index}`}
                  aria-label={`Step ${index + 1}: ${step.title}`}
                  onClick={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <span className={styles.number}>{step.number}</span>

                  <span className={styles.triggerLabel}>
                    Step {step.number}
                  </span>

                  <span className={styles.indicator} aria-hidden="true">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`journey-panel-${index}`}
                  role="region"
                  aria-labelledby={`journey-trigger-${index}`}
                  aria-hidden={!isActive}
                  className={styles.panel}
                >
                  <div className={styles.panelInner}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>

                <span className={styles.watermark} aria-hidden="true">
                  {step.number}
                </span>
              </article>
            );
          })}
        </div>

        <div className={styles.controls}>
          <span className={styles.counter} aria-live="polite">
            Step {active + 1} of {steps.length}
          </span>

          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrow}
              onClick={() => move(-1)}
              aria-label="Show previous step"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m14 6-6 6 6 6" />
              </svg>
            </button>

            <button
              type="button"
              className={styles.arrow}
              onClick={() => move(1)}
              aria-label="Show next step"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m10 6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}