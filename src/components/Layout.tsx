import { type ReactNode, useEffect, useRef } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--x", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" />
      
      {/* Global Noise Overlay */}
      <div className="noise" />
      
      {/* Global Mouse Spotlight */}
      <div ref={spotlightRef} className="spotlight" />
      
      <Header />
      <main className="flex-1 transition-opacity duration-500">{children}</main>
      <Footer />
    </div>
  );
}
