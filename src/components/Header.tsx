import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Career", path: "/career" },
  { label: "Contact", path: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl shadow-lg shadow-primary/5 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="group flex items-center">
            <div className="relative h-12 lg:h-14 transition-all duration-300 group-hover:scale-105 shrink-0 flex items-center justify-center dark:bg-white dark:px-2.5 dark:py-1 dark:rounded-xl dark:shadow-sm overflow-hidden border border-transparent dark:border-white/10">
              <img
                src="/logo.png"
                alt="Sycobytes Technologies"
                className="h-full w-auto object-contain select-none mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 group/nav ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {location.pathname === link.path && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary animate-pulse" />
                )}
                {/* Magnetic-like background pill */}
                <span className="absolute inset-0 rounded-xl bg-primary/5 scale-75 opacity-0 transition-all duration-300 group-hover/nav:scale-100 group-hover/nav:opacity-100 -z-0" />
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-300 hover:rotate-[15deg] glass border-none"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
            </button>
            <Button asChild className="hidden lg:inline-flex btn-glow rounded-xl font-bold px-6 shadow-xl shadow-primary/20" size="sm">
              <Link to="/contact" className="flex items-center gap-2">
                Work with us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border animate-fade-in-up shadow-xl">
          <nav className="container mx-auto px-4 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-3 rounded-xl btn-glow font-semibold">
              <Link to="/contact">Get Started →</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
