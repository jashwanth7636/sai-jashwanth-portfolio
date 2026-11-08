import React, { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0 && barRef.current) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            barRef.current.style.width = `${Math.min(100, Math.max(0, currentProgress))}%`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container" aria-hidden="true">
      <div
        ref={barRef}
        className="scroll-progress-bar"
        style={{ width: "0%" }}
      />
    </div>
  );
}

