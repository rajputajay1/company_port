import { Link } from "react-router-dom";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Target, Eye, Heart, Lightbulb, Users, Award,
  Linkedin, Twitter, Github,
  ArrowRight, MapPin, Globe, CheckCircle,
  Rocket, Star, TrendingUp, Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

/* ── Team Data ───────────────────────────────────── */

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    initials: "AJ",
    gradient: "from-violet-500 to-purple-700",
    shadow: "shadow-violet-400/30",
    bio: "15+ years building scalable products at Google & Stripe.",
    location: "Chandigarh, India",
    skills: ["Strategy", "Vision", "Leadership"],
  },
  {
    name: "Emily Zhang",
    role: "Chief Technology Officer",
    initials: "EZ",
    gradient: "from-cyan-400 to-blue-600",
    shadow: "shadow-cyan-400/30",
    bio: "Former lead engineer. Shipped 50+ production systems.",
    location: "Chandigarh, India",
    skills: ["Architecture", "Cloud", "AI/ML"],
  },
  {
    name: "Marcus Rivera",
    role: "Head of Design",
    initials: "MR",
    gradient: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-400/30",
    bio: "Creative designer with a passion for pixel-perfect UX.",
    location: "Chandigarh, India",
    skills: ["UI/UX", "Branding", "Motion"],
  },
  {
    name: "Priya Patel",
    role: "Lead Engineer",
    initials: "PP",
    gradient: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-400/30",
    bio: "Full-stack wizard. Open-source contributor with 3k+ GitHub stars.",
    location: "Chandigarh, India",
    skills: ["React", "Node.js", "DevOps"],
  },
  {
    name: "David Kim",
    role: "Security Architect",
    initials: "DK",
    gradient: "from-emerald-400 to-teal-600",
    shadow: "shadow-emerald-400/30",
    bio: "Veteran security expert. Protected $2B+ in transactions.",
    location: "Chandigarh, India",
    skills: ["SOC2", "PenTest", "SIEM"],
  },
  {
    name: "Sophia Laurent",
    role: "VP of Product",
    initials: "SL",
    gradient: "from-indigo-400 to-violet-600",
    shadow: "shadow-indigo-400/30",
    bio: "Product strategist who has launched 20+ B2B SaaS products.",
    location: "Chandigarh, India",
    skills: ["Roadmap", "Growth", "Analytics"],
  },
];

/* ── Values Data ─────────────────────────────────── */
const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    desc: "We push boundaries with creative, cutting-edge solutions that challenge the status quo.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: Users,
    title: "True Collaboration",
    desc: "We embed ourselves in your team, sharing goals, challenges, and victories together.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Heart,
    title: "Radical Integrity",
    desc: "Honest communication, transparent pricing, and ethical practices in everything we do.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Award,
    title: "Relentless Excellence",
    desc: "We hold ourselves to the highest standards — because your business deserves nothing less.",
    gradient: "from-cyan-400 to-blue-600",
  },
];

/* ── Timeline ─────────────────────────────────────── */
const milestones = [
  { year: "2021", title: "Company Founded", desc: "Started as a small creative team with a big vision." },
  { year: "2022", title: "First 20 Clients", desc: "Successfully delivered our first major digital projects." },
  { year: "2023", title: "Team Expansion", desc: "Grew our core engineering and design departments." },
  { year: "2024", title: "Security First", desc: "Implementing advanced security protocols for all clients." },
  { year: "2025", title: "AI Division Launch", desc: "Launched dedicated AI & ML practice area." },
  { year: "2026", title: "100+ Happy Clients", desc: "Grown to serve diverse businesses across the country." },
];

/* ── Stats ─────────────────────────────────────────── */
const stats = [
  // { icon: Globe, value: "30+", label: "Countries Served" },
  { icon: Users, value: "100+", label: "Happy Clients" },
  { icon: Rocket, value: "500+", label: "Projects Shipped" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
];

/* ── Page ──────────────────────────────────────────── */
const About = () => {
  return (
    <>
      <SEO 
        title="About Sycobytes – Web Development Experts"
        description="Learn about Sycobytes, a trusted web development and IT solutions company delivering innovative and scalable digital products."
        keywords="about Sycobytes, web development company, IT experts, software company India"
      />

      {/* ── Hero ─────────────────────────────────── */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 hero-mesh pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/12 rounded-full blur-3xl animate-float-2" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float-3" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold badge-gradient shimmer mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Our Story & People
              </span>
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up leading-[1.05]"
              style={{ animationDelay: "0.1s" }}
            >
              Driving Innovation
              <br />
              Since <span className="text-gradient">2021</span>
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We believe that great technology should be within reach for every business. 
              Our dedicated team specializes in crafting tailored digital experiences that 
              solve real-world problems and help our partners grow in a digital-first world.
            </p>

            {/* Quick stats */}
            <div
              className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {stats.map((s) => (
                <div key={s.label} className="glass neon-border rounded-2xl p-5 hover-lift group">
                  <s.icon size={20} className="text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full fill-background">
            <path d="M0,64 C480,0 960,0 1440,64 L1440,64 L0,64 Z" />
          </svg>
        </div>
      </section>

      {/* ── Story + Timeline ─────────────────────── */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left: Story */}
            <ScrollReveal>
              <div>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5 badge-gradient">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  From a Small Team to a <span className="text-gradient">Global Force</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5 text-base">
                  Founded in Chandigarh by engineers who believed that great technology shouldn't be
                  gatekept behind enterprise pricing, Sycobytes Technologies started as a small team with
                  a mission to level the playing field.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                  Over 5 years, we've scaled to a dedicated team, shipped 500+ products,
                  and established ourselves as the partner of choice for ambitious companies.
                </p>

                {/* Story visual card */}
                <div className="glass neon-border rounded-3xl p-6 relative overflow-hidden group hover-lift">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl" />
                  <div className="relative flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-black text-lg shrink-0 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                      5+
                    </div>
                    <div>
                      <div className="font-bold text-lg">Years of Excellence</div>
                      <div className="text-muted-foreground text-sm">Trusted by startups, scale-ups & Fortune 500s</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Timeline */}
            <ScrollReveal delay={2}>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />
                <div className="space-y-8">
                  {milestones.map((m, i) => (
                    <div key={m.year} className="relative flex gap-5 items-start group">
                      {/* Dot */}
                      <div className="relative z-10 w-12 h-12 rounded-2xl glass neon-border flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-all duration-300 group-hover:scale-110">
                        <span className="text-xs font-black text-primary">{m.year}</span>
                      </div>
                      {/* Content */}
                      <div className="glass neon-border rounded-2xl p-4 flex-1 group-hover:border-primary/40 transition-all duration-300 hover-lift">
                        <div className="font-bold text-base mb-1 group-hover:text-gradient transition-all">{m.title}</div>
                        <div className="text-sm text-muted-foreground">{m.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────── */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <SectionHeading
            badge="Purpose"
            title="Mission & Vision"
            description="The north star that guides every decision we make."
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="glass neon-border rounded-3xl p-8 md:p-10 h-full hover-lift hover-glow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center mb-6 shadow-lg shadow-violet-400/30 group-hover:scale-110 transition-transform duration-300">
                  <Target className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To empower businesses of every size with innovative technology solutions that drive
                  real growth, genuine efficiency, and lasting competitive advantage.
                </p>
                <div className="space-y-2">
                  {["Build for scale", "Ship with quality", "Measure everything"].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle size={14} className="text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="glass neon-border rounded-3xl p-8 md:p-10 h-full hover-lift hover-glow group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-400/30 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To become the world's most trusted technology partner — shaping a future where
                  advanced technology is accessible, understandable, and beneficial to all.
                </p>
                <div className="space-y-2">
                  {["Global reach, local feel", "AI-first mindset", "Ethical by design"].map(item => (
                    <div key={item} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle size={14} className="text-accent shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────── */}
      

      {/* ── Values ───────────────────────────────── */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <SectionHeading
            badge="Our Values"
            title="What We Stand For"
            description="The principles that guide every line of code, every design decision, and every client conversation."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i + 1}>
                <div className="glass neon-border rounded-3xl p-7 text-center hover-lift hover-glow group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-3xl`} />
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-lg mb-3 group-hover:text-gradient transition-all duration-300">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] overflow-hidden p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-violet-600 to-accent opacity-95" />
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
              </div>
              <div className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative z-10 text-white">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/20 mb-6 border border-white/30">
                  <Users size={12} /> Join 200+ companies that trust Sycobytes Technologies
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                  Ready to Work with
                  <br />a World-Class Team?
                </h2>
                <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                  Let's build something great together. Talk to us today — no commitment required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild size="lg"
                    className="rounded-2xl font-bold px-10 h-14 bg-white text-primary hover:bg-white/90 shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <Link to="/contact">Start a Conversation <ArrowRight className="ml-2" size={18} /></Link>
                  </Button>
                  <Button
                    asChild size="lg" variant="outline"
                    className="rounded-2xl font-semibold px-10 h-14 border-white/40 text-primary hover:bg-white/10 backdrop-blur-sm"
                  >
                    <Link to="/services">See Our Services</Link>
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

export default About;








// <section className="py-24 relative overflow-hidden">
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />
//         <div className="container mx-auto px-4 lg:px-8 relative">
//           <SectionHeading
//             badge="Our Team"
//             title="The Minds Behind Sycobytes Technologies"
//             description="A diverse squad of builders, thinkers, and innovators united by a love for great technology."
//           />

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {team.map((member, i) => (
//               <ScrollReveal key={member.name} delay={i + 1}>
//                 <div className="glass neon-border rounded-3xl p-7 hover-lift hover-glow group relative overflow-hidden">
//                   <div className={`absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />

//                   <div className="flex items-start gap-4 mb-5">
//                     <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} ${member.shadow} shadow-lg flex items-center justify-center text-white text-xl font-bold shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
//                       {member.initials}
//                     </div>
//                     <div>
//                       <h3 className="font-bold text-lg leading-tight group-hover:text-gradient transition-all duration-300">
//                         {member.name}
//                       </h3>
//                       <p className="text-primary text-xs font-semibold mt-0.5">{member.role}</p>
//                       <div className="flex items-center gap-1 mt-1 text-muted-foreground">
//                         <MapPin size={11} />
//                         <span className="text-xs">{member.location}</span>
//                       </div>
//                     </div>
//                   </div>

               
//                   <p className="text-muted-foreground text-sm leading-relaxed mb-5">{member.bio}</p>

//                   <div className="flex flex-wrap gap-2">
//                     {member.skills.map((skill) => (
//                       <span key={skill} className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-primary/8 text-primary border border-primary/15">
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>