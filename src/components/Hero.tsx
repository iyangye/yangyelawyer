import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { profile } from "@/data/profile";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    const about = document.querySelector("#about");
    if (about) about.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-20 md:px-8 lg:px-16">
      <div className="container relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p
              className={`mt-4 font-display text-2xl italic text-muted md:text-3xl lg:text-4xl transition-all duration-700 ease-editorial ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "100ms" }}
            >
              {profile.englishName}
            </p>

            <p
              className={`mt-8 max-w-2xl font-body text-lg leading-relaxed text-ink md:text-xl transition-all duration-700 ease-editorial ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {profile.tagline}
            </p>

            <p
              className={`mt-4 font-mono text-sm uppercase tracking-widest text-muted transition-all duration-700 ease-editorial ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              {profile.subTagline}
            </p>
          </div>

          <div className="md:col-span-5">
            <div
              className={`relative w-full max-w-md transition-all duration-1000 ease-editorial ${
                loaded ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative overflow-hidden border border-ink">
                <img
                  src={`${import.meta.env.BASE_URL}hero.jpg`}
                  alt="杨也律师"
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className={`absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-all duration-700 hover:text-accent ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{ transitionDelay: "600ms" }}
        aria-label="向下滚动"
      >
        <span>Scroll</span>
        <ChevronDown className="h-5 w-5 animate-float" />
      </button>
    </section>
  );
}
