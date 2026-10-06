import { useEffect, useRef } from "react";

export default function useReveal() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll(".reveal");
    const timers = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("show");

          timers.push(
            setTimeout(() => {
              entry.target.style.transitionDelay = "0ms";
            }, 1000)
          );

          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    items.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 50, 300)}ms`;
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return sectionRef;
}