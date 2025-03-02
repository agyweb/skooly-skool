"use client";

import { useLenisStore } from "@/store/lenis-slice";
import Lenis from "lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  const { setLenis } = useLenisStore();

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // Your scroll event handling here
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Store the Lenis instance in the global store
    setLenis(lenis);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleLogoClick = (e: any) => {
      e.preventDefault();
      lenis.scrollTo(0, {
        duration: 1,
        easing: (t) => Math.sin((t * Math.PI) / 2),
      });
    };

    document.querySelectorAll(".logo").forEach((logo) => {
      logo.addEventListener("click", handleLogoClick);
    });

    document.querySelectorAll(".navLink").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        const target = href ? document.querySelector(href) : null;
        if (!target) return;

        const offsetTop = (target as HTMLElement).offsetTop - 80;

        lenis.scrollTo(offsetTop, {
          duration: 1,
          easing: (t) => Math.sin((t * Math.PI) / 2),
        });
      });
    });

    // Clean up
    return () => {
      lenis.destroy();
    };
  }, [setLenis]);

  return null;
}
