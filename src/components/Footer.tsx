import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-paper py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          © {new Date().getFullYear()} 杨也. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
          aria-label="返回顶部"
        >
          <span>返回顶部</span>
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
        </button>
      </div>
    </footer>
  );
}
