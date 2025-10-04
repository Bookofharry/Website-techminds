import React, { useMemo } from "react";
import "./marque.css"

/**
 * Marquee
 * Props:
 * - items: ReactNode[]           // content to scroll (texts, chips, logos, etc.)
 * - direction: "left" | "right"  // scroll direction
 * - speed: number                // pixels/second (default 80)
 * - gap: string                  // gap between items (Tailwind or CSS value, default "1.25rem")
 * - pauseOnHover: boolean        // pause animation on hover
 * - gradientWidth: string        // e.g., "48px" | "10%" (edge fade), default "60px"
 * - className: string            // extra classes for container
 */
export default function Marquee({
  items = [],
  direction = "left",
  speed = 80,
  gap = "1.25rem",
  pauseOnHover = true,
  gradientWidth = "60px",
  className = "",
}) {
  // duration is trackWidth / speed; we estimate via a CSS variable and let it be tuned
  // We’ll set a fallback duration based on item count & speed to feel natural
  const duration = useMemo(() => {
    const base = Math.max(12, Math.min(40, (items.length || 6) * (140 / speed)));
    return `${base}s`;
  }, [items.length, speed]);

  const dirClass = direction === "right" ? "marquee--right" : "marquee--left";
  const pauseClass = pauseOnHover ? "marquee--pause-on-hover" : "";
  const styleVars = {
    // CSS vars the CSS file uses
    "--marquee-gap": gap,
    "--marquee-duration": duration,
    "--marquee-gradient": gradientWidth,
  };

  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className={`marquee ${dirClass} ${pauseClass} ${className}`} style={styleVars}>
      <div className="marquee__fade marquee__fade--left" aria-hidden />
      <div className="marquee__fade marquee__fade--right" aria-hidden />

      <div className="marquee__track">
        {doubled.map((node, i) => (
          <div className="marquee__item" key={i}>
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}
