import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "关于", href: "#about" },
  { label: "服务", href: "#skills" },
  { label: "联系", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-editorial ${
          isScrolled
            ? "border-b border-border bg-paper/90 py-4 backdrop-blur-md"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-display text-lg font-semibold tracking-tight text-ink"
          >
            {profile.name}
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="editorial-link font-mono text-xs uppercase tracking-widest"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 md:hidden"
            aria-label="打开菜单"
          >
            <Menu className="h-5 w-5 text-ink" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-paper transition-transform duration-500 ease-editorial md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container flex h-full flex-col">
          <div className="flex items-center justify-between py-6">
            <span className="font-display text-lg font-semibold">{profile.name}</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2"
              aria-label="关闭菜单"
            >
              <X className="h-5 w-5 text-ink" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-start justify-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-display-md text-ink transition-colors hover:text-accent"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
