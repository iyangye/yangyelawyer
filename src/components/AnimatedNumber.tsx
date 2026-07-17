import { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";

function easeOutQuart(t: number) {
  return 1 - Math.pow(1 - t, 4);
}

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function AnimatedNumber({
  value,
  suffix = "",
  duration = 1200,
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [started, value, duration]);

  return (
    <ScrollReveal threshold={0.5} onVisible={() => setStarted(true)}>
      <span className="font-display text-5xl font-medium text-ink tabular-nums md:text-6xl">
        {count}
        {suffix}
      </span>
    </ScrollReveal>
  );
}
