"use client";

import { useEffect } from "react";

export default function MotionLayer() {
  useEffect(() => {
    const images = Array.from(document.querySelectorAll("main img:not([data-motion=\"off\"])"));
    const reveals = Array.from(document.querySelectorAll("[data-reveal]"));
    const parallax = Array.from(document.querySelectorAll("[data-parallax='true']"));

    images.forEach((img) => img.classList.add("dm-motion-image"));
    reveals.forEach((el) => el.classList.add("dm-motion-reveal"));

    if (!("IntersectionObserver" in window)) {
      [...images, ...reveals].forEach((el) => el.classList.add("dm-in-view"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("dm-in-view");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
      );

      [...images, ...reveals].forEach((el) => observer.observe(el));
    }

    let ticking = false;
    const updateParallax = () => {
      const vh = window.innerHeight || 1;
      parallax.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const delta = (center - vh / 2) / vh;
        const offset = Math.max(-28, Math.min(28, delta * -34));
        el.style.setProperty("--dm-parallax", `${offset}px`);
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
