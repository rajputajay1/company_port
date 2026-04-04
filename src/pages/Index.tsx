import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Zap, Shield, Globe, Users,
  ChevronLeft, ChevronRight, Star,
  Code2, Cpu, Cloud, Lock, CheckCircle,
  TrendingUp, Award, Rocket,
  AppleIcon,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import SEO from "@/components/SEO";

/* ─── Animated Counter ─────────────────────────── */

function CounterNumber({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = end / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="text-center group">
      <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 transition-transform duration-300 group-hover:scale-110">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm font-medium">{label}</div>
    </div>
  );
}

/* ─── Typing Effect ─────────────────────────────── */
const phrases = ["Web Applications", "Cloud Solutions", "Mobile Applications", "AI-Powered Tools"];
function TypingText() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIdx]);

  return (
    <span>
      <span className="text-gradient">{displayed}</span>
      <span className="cursor-blink" />
    </span>
  );
}

/* ─── Data ──────────────────────────────────────── */
const services = [
  {
    icon: Globe,
    gradient: "from-violet-500 to-purple-600",
    shadow: "shadow-violet-500/25",
    title: "Web Development",
    desc: "Modern, lightning-fast web apps built with the latest stack — React, Next.js, TypeScript.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    icon: Cloud,
    gradient: "from-cyan-400 to-blue-500",
    shadow: "shadow-cyan-400/25",
    title: "Cloud Solutions",
    desc: "Scalable infrastructure on AWS, Azure & GCP — built for reliability and growth.",
    tags: ["Render", "AWS"],
  },
  {
    icon: Smartphone  ,
    gradient: "from-emerald-400 to-green-600",
    shadow: "shadow-emerald-400/25",
    title: "Application Development",
    desc: "High-performance mobile and cross-platform apps built using modern frameworks.",
    tags: ["Flutter", "React Native", "Android"],
  }
 
];

const features = [
  { icon: Rocket, text: "Rapid delivery in 30-day sprints" },
  { icon: Shield, text: "Enterprise-grade security" },
  { icon: TrendingUp, text: "High Availability" },
  { icon: Users, text: "Dedicated support team" },
];

const testimonials = [
  {
    name: "Rajesh Khanna",
    role: "Proprietor, RK Exports",
    avatar: "RK",
    color: "from-blue-500 to-indigo-600",
    text: "Working with Sycobytes was the best decision for our digital transformation. They delivered a high-quality inventory management system that has significantly streamlined our operations.",
    rating: 5,
  },
  {
    name: "Anjali Sharma",
    role: "Marketing Head, FabStyle",
    avatar: "AS",
    color: "from-emerald-400 to-teal-500",
    text: "The web application developed by the team is sleek, fast, and very user-friendly. Our customer engagement has increased by 40% since the launch. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "CEO, TechSolutions India",
    avatar: "VS",
    color: "from-amber-400 to-orange-600",
    text: "Professionalism and technical expertise at its best. They understood our requirements perfectly and delivered a robust solution within the promised timeframe.",
    rating: 5,
  },
];

const techStack = [
  { label: "React / Next.js" }, { label: "Node.js" }, { label: "TypeScript" },
  { label: "AWS / GCP" }, { label: "Python / FastAPI" }, { label: "PostgreSQL" },
  { label: "Docker / K8s" }, { label: "GraphQL" },{ label: "HTML / CSS" },{ label: "Bootstrap" },{label: "PHP"},{label: "Laravel"},{label: "Wordpress"},{label:"MySQL"},{label:"MongoDB"}
];

/* ─── Page ──────────────────────────────────────── */
const Index = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <SEO 
        title="Sycobytes – Web Development & IT Solutions Company"
        description="Sycobytes provides professional web development, mobile apps, and custom IT solutions to grow your business online. Fast, secure, and scalable services."
        keywords="web development company, website design, IT services, software development, app development, digital solutions, Sycobytes"
        ogTitle="Sycobytes – Web Development & IT Solutions Company"
        ogDescription="Grow your business with high-quality websites, apps, and IT solutions by Sycobytes."
        twitterTitle="Sycobytes – Web Development Company"
        twitterDescription="Professional websites, apps & IT solutions to grow your business."
      />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden sm:pt-20 pt-10">

        {/* Mesh gradient background */}
        <div className="absolute inset-0 hero-mesh pointer-events-none" />

        {/* Floating orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float-1 animate-pulse-orb" />
          <div className="absolute top-1/3 right-1/5 w-[28rem] h-[28rem] bg-accent/12 rounded-full blur-3xl animate-float-2" />
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl animate-float-3" />
          <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-pink-400/8 rounded-full blur-2xl animate-float-4" />
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">

            {/* Badge */}
            <div className="animate-fade-in-up mb-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold badge-gradient shimmer">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Sycobytes Technologies Solutions
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up leading-[1.05]"
              style={{ animationDelay: "0.1s" }}
            >
              We Build
              <br />
              <TypingText />
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              From startups to enterprises — we craft digital experiences that drive growth,
              delight users, and stand the test of time.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button asChild size="lg" className="rounded-2xl btn-glow text-base px-10 h-14 font-semibold tracking-wide">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-2xl text-base px-10 h-14 font-semibold border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
              >
                <Link to="/projects">Explore Projects</Link>
              </Button>
            </div>

            {/* Social proof */}
            <div
              className="mt-14 flex flex-wrap items-center justify-center gap-6 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex -space-x-3">
                {["SC","JW","MG","AR","PK"].map((init, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background flex items-center justify-center text-xs font-bold text-white"
                    style={{ zIndex: 5 - i }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">Trusted by <span className="text-foreground font-semibold">100+ clients</span></p>
              </div>
              <div className="hidden sm:block w-px h-8 bg-border" />
              <div className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">500+</span> Projects Shipped
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
          <svg viewBox="0 0 1440 96" preserveAspectRatio="none" className="w-full h-full fill-background">
            <path d="M0,96 C480,0 960,0 1440,96 L1440,96 L0,96 Z" />
          </svg>
        </div>
      </section>

      {/* ── Stats Bar ───────────────────────────── */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass neon-border rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y-2 md:divide-y-0 md:divide-x divide-border/20 relative z-10">
              <CounterNumber end={100} label="Happy Clients" />
              <CounterNumber end={500} label="Projects Shipped" />
              <CounterNumber end={5} label="Years Experience" />
              <CounterNumber end={10} label="Team Members" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Marquee ─────────────────────────── */}
      <section className="py-12 border-y border-border/40 bg-muted/5 overflow-hidden">
        <div className="flex animate-marquee-slow whitespace-nowrap">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center gap-2 mx-12 text-muted-foreground/40 hover:text-primary/60 transition-colors cursor-default">
              <CheckCircle size={16} />
              <span className="text-xl font-bold tracking-tighter uppercase">{tech.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ────────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <SectionHeading
            badge="What We Do"
            title="Services Built to Scale"
            description="End-to-end technology solutions designed to accelerate your business, today and tomorrow."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i + 1}>
                <div className="glass rounded-3xl p-8 hover-lift hover-glow group relative overflow-hidden neon-border">
                  {/* Shimmer on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                    style={{ background: `linear-gradient(135deg, hsl(var(--primary)/0.04) 0%, transparent 60%)` }} />

                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} ${service.shadow} shadow-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                    {service.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/services"
                    className="text-primary text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-3 transition-all duration-200 underline-offset-4 hover:underline"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────── */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text */}
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 badge-gradient">
                  Why Sycobytes Technologies
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  The Partner You've <span className="text-gradient">Always Needed</span>
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-10">
                  We don't just write code. We become an extension of your team, understanding
                  your goals and building solutions that genuinely move the needle.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((f) => (
                    <div key={f.text} className="flex items-start gap-3 p-4 rounded-2xl glass border border-border/30 hover-lift group">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <f.icon size={18} className="text-primary" />
                      </div>
                      <span className="text-sm font-medium leading-snug">{f.text}</span>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="mt-10 rounded-2xl btn-glow font-semibold px-9">
                  <Link to="/about">About Our Team <ArrowRight className="ml-2" size={16} /></Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Right: Tech stack visual */}
            <ScrollReveal delay={2}>
              <div className="relative">
                <div className="glass neon-border rounded-3xl p-8 grid grid-cols-2 gap-4">
                  {techStack.map((tech, i) => (
                    <div
                      key={tech.label}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-muted/40 hover:bg-primary/8 transition-all duration-300 hover-lift cursor-default group"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <CheckCircle size={16} className="text-primary shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm font-semibold">{tech.label}</span>
                    </div>
                  ))}
                </div>
                {/* Floating badge */}
                <div className="absolute -top-5 -right-5 glass neon-border rounded-2xl px-4 py-3 flex items-center gap-2 shadow-xl">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs font-bold text-foreground">All Systems Operational</span>
                </div>
                <div className="absolute -bottom-5 -left-5 glass neon-border rounded-2xl px-4 py-3 shadow-xl">
                  <div className="text-xs text-muted-foreground">Avg. Delivery</div>
                  <div className="text-lg font-bold text-gradient">28 days</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <SectionHeading
            badge="Testimonials"
            title="Clients Love Working With Us"
            description="Don't take our word for it — here's what our partners say."
          />

          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="glass neon-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
                {/* Decorative quote */}
                <div className="absolute top-6 right-8 text-8xl font-serif text-primary/10 leading-none select-none">"</div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-lg md:text-xl leading-relaxed mb-8 text-foreground/90 font-medium">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${testimonials[currentTestimonial].color} flex items-center justify-center text-white font-bold text-sm`}>
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <div className="font-bold">{testimonials[currentTestimonial].name}</div>
                      <div className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center gap-3">
                    {/* Dots */}
                    <div className="flex gap-1.5">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentTestimonial(i)}
                          className={`h-2 rounded-full transition-all duration-300 ${i === currentTestimonial ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30"}`}
                          aria-label={`Testimonial ${i + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      onClick={() => setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      aria-label="Previous"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      onClick={() => setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                      className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      aria-label="Next"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ──────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-violet-600 to-accent opacity-95" />
              {/* Orbs inside */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
              </div>
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10 text-white">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 mb-6 border border-white/30">
                  <Zap size={12} />  Limited slots available for Q2 2025
                </span>
                <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
                  Ready to Build Something<br />
                  <span className="underline decoration-white/50 decoration-wavy underline-offset-4">Extraordinary?</span>
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  Let's turn your vision into reality. Talk to our team today — no commitment required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-2xl font-bold px-10 h-14 bg-white text-primary hover:bg-white/90 shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105"
                  >
                    <Link to="/contact">Book a Free Call <ArrowRight className="ml-2" size={18} /></Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-2xl font-semibold px-10 h-14 border-white/40 text-primary hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                  >
                    <Link to="/projects">See Our Work</Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </>
  );
};

export default Index;
