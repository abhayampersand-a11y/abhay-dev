"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Adds the `visible`/`in` class to every `.reveal` element when it scrolls
 * into view — the React equivalent of the original Alpine IntersectionObserver.
 * Re-runs on route change so newly rendered elements animate in too.
 */
export default function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible", "in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => {
      // reset for client navigations
      el.classList.remove("visible", "in");
      io.observe(el);
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
