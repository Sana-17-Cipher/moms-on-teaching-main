"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import styles from "./contact.module.css";

const curricula = [
  "CBSE",
  "ICSE / ISC",
  "IGCSE",
  "Kerala State",
  "Other / Not sure",
];

export default function ContactForm() {
  const [emailLink, setEmailLink] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    for (const fieldName of ["parent", "phone", "location"]) {
      const input = form.elements.namedItem(fieldName);

      if (input instanceof HTMLInputElement) {
        input.setCustomValidity(
          input.value.trim() ? "" : "Please complete this field.",
        );

        if (!input.checkValidity()) {
          input.reportValidity();
          return;
        }
      }
    }

    const data = new FormData(form);

    function getValue(name: string) {
      return String(data.get(name) ?? "").trim();
    }

    const subject = "Free demo enquiry — Moms on Teaching";

    const message = [
      "Hello Moms on Teaching,",
      "",
      "I would like to request a free demo lesson.",
      "",
      `Parent's name: ${getValue("parent")}`,
      `Phone number: ${getValue("phone")}`,
      `Curriculum: ${getValue("curriculum")}`,
      `State / location: ${getValue("location")}`,
      "",
      "Learning needs:",
      getValue("message") ||
        "I would like to discuss this with your team.",
      "",
      "Please contact me to discuss a suitable teacher and demo time.",
      "",
      "Thank you.",
    ].join("\n");

    const href =
      "mailto:info@momsonteaching.com" +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(message)}`;

    setEmailLink(href);
    window.location.href = href;
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onChange={() => setEmailLink(null)}
      aria-labelledby="demo-form-heading"
    >
      <h2 id="demo-form-heading">Request a free demo</h2>

      <p className={styles.formIntro}>
        A few details to help us find the right starting point.
      </p>

      <div className={styles.fields}>
        <label className={styles.field}>
          <span>Parent’s name</span>
          <input
            type="text"
            name="parent"
            autoComplete="name"
            placeholder="Your name"
            required
            maxLength={80}
            onInput={(event) =>
              event.currentTarget.setCustomValidity("")
            }
          />
        </label>

        <label className={styles.field}>
          <span>Phone number</span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            placeholder="Include country code"
            required
            minLength={7}
            maxLength={25}
            onInput={(event) =>
              event.currentTarget.setCustomValidity("")
            }
          />
        </label>

        <label className={styles.field}>
          <span>Curriculum</span>
          <select name="curriculum" defaultValue="" required>
            <option value="" disabled>
              Select curriculum
            </option>

            {curricula.map((curriculum) => (
              <option key={curriculum} value={curriculum}>
                {curriculum}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span>State / location</span>
          <input
            type="text"
            name="location"
            placeholder="Kerala, India"
            required
            maxLength={100}
            onInput={(event) =>
              event.currentTarget.setCustomValidity("")
            }
          />
        </label>

        <label className={`${styles.field} ${styles.fullWidth}`}>
          <span>
            How can we help? <small>(optional)</small>
          </span>
          <textarea
            name="message"
            rows={4}
            maxLength={1200}
            placeholder="Your child’s class, subjects and any learning needs"
          />
        </label>
      </div>

      <div className={styles.submitRow}>
        <button
          type="submit"
          className={styles.submit}
          aria-describedby="contact-submit-note"
        >
          Request a free demo <span aria-hidden="true">↗</span>
        </button>

        <p id="contact-submit-note" className={styles.formNote}>
          Opens your email app. Review your enquiry and press Send there.
        </p>
      </div>

      {emailLink && (
        <div className={styles.status} role="status">
          Complete your enquiry by sending it from your email app.
          If it didn’t open,{" "}
          <a href={emailLink}>open the email draft again</a>
          {" "}or contact{" "}
          <a href="mailto:info@momsonteaching.com">
            info@momsonteaching.com
          </a>.
        </div>
      )}
    </form>
  );
}