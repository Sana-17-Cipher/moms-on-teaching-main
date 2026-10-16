
import "../styles/navigation.css";
import Link from "next/link";
import { socials } from "../data/navigation";
import { SocialIcon } from "./SocialIcon";

const quickLinks = [
  ["About Us", "/about/"],
  ["Services", "/programmes/"],
  ["Pricing", "/pricing/"],
  ["FAQ", "/faq/"],
  ["Contact", "/contact/"],
];

const programmes = [
  "CBSE",
  "ICSE",
  "IGCSE",
  "IB",
  "KG–Class 12",
];

const socialLinks = [
  ["WhatsApp", "https://wa.me/917012092344"],
  ["Email", "mailto:info@momsonteaching.com"],
  ...["Facebook", "Instagram", "YouTube", "LinkedIn", "Reddit"].map(
    (name) => socials.find(([label]) => label === name)!
  ),
];

export function Footer() {
  return (
    <footer className="mot-footer">
      <div className="mot-footer-grid">
        <div className="mot-footer-about">
          <Link
            href="/"
            className="mot-footer-brand"
            aria-label="Moms on Teaching home"
          >
            <img
              src="/images/mot-logo.png"
              alt=""
              width={60}
              height={60}
            />

            <span>
              Moms on
              <br />
              Teaching
            </span>
          </Link>

          <p>
            From KG to Class 12, we provide 1-on-1 online tutoring
            across CBSE, ICSE, IGCSE, IB, and US School Support.
          </p>

          <div
            className="mot-social-links"
            aria-label="Social and contact links"
          >
            {socialLinks.map(([name, href]) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                target={name === "Email" ? undefined : "_blank"}
                rel={
                  name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>

        <div className="mot-footer-column">
          <h2>Quick Links</h2>

          {quickLinks.map(([label, href]) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </div>

        <div className="mot-footer-column">
          <h2>Programmes</h2>

          {programmes.map((label) => (
            <Link
              key={label}
              href={
                label === "IB"
                  ? "https://gulf.momsonteaching.com/services/"
                  : "/programmes/"
              }
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="mot-footer-column">
          <h2>Resources</h2>

          <a href="https://momsonteaching.com/en">
            Official Website
          </a>

          <a href="https://gulf.momsonteaching.com/">
            GCC Website
          </a>

          <a href="https://momsonteaching.com/ml/insights-blogs-ml">
            Blog
          </a>
        </div>

        <div className="mot-footer-column mot-footer-contact">
          <h2>Contact Us</h2>

          <a href="tel:+917012092344">
            <span className="mot-contact-icon">
              <SocialIcon name="Phone" />
            </span>

            <span>+917012092344</span>
          </a>

          <a href="mailto:info@momsonteaching.com">
            <span className="mot-contact-icon">
              <SocialIcon name="Email" />
            </span>

            <span>info@momsonteaching.com</span>
          </a>
        </div>
      </div>

      <div className="mot-footer-bottom">
        <span>
          © {new Date().getFullYear()} Moms on Teaching. All rights
          reserved.
        </span>

        <div>
          <a href="https://momsonteaching.com/en/privacy-policy-en">
            Privacy Policy
          </a>

          <a href="https://momsonteaching.com/en/terms-conditions-en">
            Terms of Use
          </a>

          <a href="/sitemap.xml">Site Map</a>
        </div>
      </div>
    </footer>
  );
}