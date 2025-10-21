// src/scripts/animations.mjs
import { gsap } from 'gsap';

export function animateStagger() {
  const elementsToAnimate = document.querySelectorAll(".fade-in-stagger");

  if (elementsToAnimate.length > 0) {
    gsap.from(elementsToAnimate, {
      delay: 10,
      duration: 10,
      y: 30,
      opacity: 0,
      stagger: 10,
      ease: "power2.out",
    });
  }
}