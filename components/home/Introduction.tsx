export function Introduction() {
  return (
    <section
      className="mot-introduction"
      aria-labelledby="introduction-heading"
    >
      <div className="mot-introduction__inner">
        <div>
          <span className="eyebrow">
            PERSONAL ATTENTION. REAL CONNECTION.
          </span>

          <h2 id="introduction-heading">
            Every child learns differently.
            <br />
            <em>We make room for that.</em>
          </h2>
        </div>

        <p>
          Some children need a concept explained another way.
          Some need a little more time to ask questions. With a
          dedicated Teacher-Mom, learning becomes a conversation
          shaped around your child—helping them understand more,
          build confidence, and enjoy making progress.
        </p>
      </div>

      <svg
        className="mot-introduction__wave"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="
            M0 34
            C160 12 270 16 420 36
            C570 56 690 48 830 28
            C980 8 1090 18 1210 36
            C1310 50 1380 44 1440 30
            L1440 80 L0 80 Z
          "
        />
      </svg>
    </section>
  );
}