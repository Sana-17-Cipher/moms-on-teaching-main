import Link from "next/link";
import styles from "./GalleryPreview.module.css";

export function GalleryPreview() {
  return (
    <section
      className={styles.section}
      aria-labelledby="gallery-preview-heading"
    >
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>BEYOND THE LESSON</span>

          <h2 id="gallery-preview-heading">
            Room for moments
            <br />
            worth remembering.
          </h2>

          <p>
            Our gallery is getting ready for classroom stories
            and community celebrations.
          </p>

          <Link className={styles.link} href="/gallery/">
            Visit the gallery <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className={styles.puzzle}>
          <svg
            viewBox="0 0 400 400"
            className={styles.shape}
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="
                M84 70
                H158
                C170 70 163 59 163 48
                C163 12 237 12 237 48
                C237 59 230 70 242 70
                H316
                Q330 70 330 84
                V158
                C330 170 341 163 352 163
                C388 163 388 237 352 237
                C341 237 330 230 330 242
                V316
                Q330 330 316 330
                H242
                C230 330 237 319 237 308
                C237 272 163 272 163 308
                C163 319 170 330 158 330
                H84
                Q70 330 70 316
                V242
                C70 230 81 237 92 237
                C128 237 128 163 92 163
                C81 163 70 170 70 158
                V84
                Q70 70 84 70
                Z
              "
            />
          </svg>

          <div className={styles.puzzleText}>
            <span>Our learning<br />scrapbook</span>
            <small>COMING SOON</small>
          </div>
        </div>
      </div>
    </section>
  );
}
