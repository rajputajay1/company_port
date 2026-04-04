import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";
import { useTheme } from "next-themes";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Mail, href: "#", label: "Email" },
];

export function Footer() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
             <Link to="/" className="group flex items-center">
            <div className={`relative transition-all duration-500 mt-2 group-hover:scale-105 shrink-0 flex items-center ${
              mounted && resolvedTheme === "dark" 
                ? "h-12 md:h-14 lg:h-16" 
                : "h-10 md:h-12 lg:h-14"
            }`}>
              <img
                src={mounted && resolvedTheme === "dark" ? "/darkLogo.png" : "/logo.png"}
                alt="Sycobytes Technologies"
                className="h-full w-auto object-contain select-none shadow-glow-sm py-1"
              />
            </div>
          </Link>
            <p className="text-muted-foreground leading-relaxed max-w-md mb-6">
              Empowering businesses with cutting-edge technology solutions. We transform ideas into powerful digital experiences that drive growth and innovation.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Chandigarh, India</li>
              <li>sycobytestechnology@gmail.com</li>
              <li>+91 6280386102</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sycobytes Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
