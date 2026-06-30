"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/projects", label: "Work", match: "/projects" },
  { href: "/#about", label: "About" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/blog", label: "Blog", match: "/blog" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const { dark, mounted, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenu(false), [pathname]);

  const isActive = (m?: string) => !!m && pathname.startsWith(m);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md shadow-sm shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="font-display font-bold text-xl tracking-tight relative z-10">
          <span className="text-zinc-900 dark:text-white">abhay</span>
          <span className="text-grad">.dev</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nl transition-colors ${
                  isActive(l.match)
                    ? "on text-accent-light font-medium"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            aria-label={dark ? "Light mode" : "Dark mode"}
          >
            {mounted && !dark ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            )}
          </button>

          <Link
            href="/#contact"
            className="hidden md:inline-flex items-center gap-2 shimmer bg-grad text-white text-sm font-medium px-5 py-2 rounded-full hover:brightness-110 transition-all"
          >
            Hire me
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>

          <button
            onClick={() => setMenu((v) => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800"
            aria-expanded={menu}
            aria-label="Toggle menu"
          >
            {!menu ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {menu && (
        <div className="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
          <ul className="flex flex-col px-6 py-5 gap-4 text-sm font-medium" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMenu(false)}
                  className={`block transition-colors ${
                    isActive(l.match)
                      ? "text-accent-light font-medium"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-accent"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-zinc-100 dark:border-zinc-900">
              <Link
                href="/#contact"
                onClick={() => setMenu(false)}
                className="inline-flex shimmer bg-grad text-white font-medium text-sm px-5 py-2.5 rounded-full"
              >
                Hire me →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
