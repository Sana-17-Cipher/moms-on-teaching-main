"use client";
import "../styles/navigation.css";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav } from "../data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    function handleOutsideClick(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    const desktop = window.matchMedia("(min-width: 1281px)");

    function handleResize() {
      if (desktop.matches) setOpen(false);
    }

    document.addEventListener("keydown", handleKey);
    document.addEventListener("pointerdown", handleOutsideClick);
    desktop.addEventListener("change", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("pointerdown", handleOutsideClick);
      desktop.removeEventListener("change", handleResize);
    };
  }, [open]);

  return (
    <header className="mot-header" ref={headerRef}>
      <Link
        href="/"
        className="mot-brand"
        aria-label="Moms on Teaching home"
      >
        <img
          src="/images/mot-logo.png"
          alt=""
          width={48}
          height={48}
        />

        <span>Moms on Teaching</span>
      </Link>

      <button
        ref={buttonRef}
        type="button"
        className="mot-menu-toggle"
        aria-expanded={open}
        aria-controls="mot-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          {open ? (
            <path d="m6 6 12 12M18 6 6 18" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <nav
        id="mot-navigation"
        aria-label="Main navigation"
        className={`mot-navigation${open ? " is-open" : ""}`}
      >
        {nav.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}

        <Link
          href="/contact/"
          className="mot-demo-button"
          onClick={() => setOpen(false)}
        >
          Book Free Demo
          <span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}