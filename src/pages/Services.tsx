import { Link } from "react-router-dom";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Globe, Smartphone, Cloud, Brain, Shield, BarChart3, 
  ArrowRight, CheckCircle, Zap, ShieldCheck, Cpu, 
  Layers, Rocket, MessageSquare, Code2,Palette, 
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";


const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Enterprise-grade web applications built with Next.js, React, and TypeScript. We focus on SEO, performance, and accessibility.",
    gradient: "from-blue-500 to-cyan-500",
    shadow: "shadow-blue-500/20",
    features: ["Custom UI/UX", "Full-Stack Dev", "API Integration"]
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    desc: "Native and cross-platform apps that feel premium. We use Flutter and React Native to reach users on any device.",
    gradient: "from-purple-500 to-indigo-600",
    shadow: "shadow-purple-500/20",
    features: ["iOS & Android", "Real-time Sync", "Offline Mode"]
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "Scalable, secure, and cost-effective cloud infrastructure. Expertise in AWS, Azure, and Google Cloud Platform.",
    gradient: "from-cyan-400 to-blue-600",
    shadow: "shadow-cyan-400/20",
    features: ["DevOps Automation", "Serverless", "Security Compliance"]
  },
  {
    icon: Brain,
    title: "AI & Innovation",
    desc: "Custom AI solutions, from chatbots to predictive analytics. We integrate LLMs and ML models into your workflow.",
    gradient: "from-amber-400 to-orange-600",
    shadow: "shadow-amber-400/20",
    features: ["GPT Integration", "Data Analysis", "Process Automation"]
  },
  {
    icon: Palette,
    title: "Web Design",
    desc: "Modern and user-focused UI/UX design that improves engagement and conversions across all devices.",
    gradient: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/20",
    features: ["UI/UX Design", "Responsive Layout", "Design Systems"]
  },
  {
    icon: Globe ,
    title: "WordPress Development",
    desc: "Custom WordPress websites, themes, and plugins optimized for speed, SEO, and easy content management.",
    gradient: "from-indigo-500 to-blue-600",
    shadow: "shadow-indigo-500/20",
    features: ["Custom Themes", "WooCommerce", "SEO Optimization"]
  },
  {
    icon: Settings,
    title: "SaaS Development",
    desc: "Build scalable SaaS platforms with modern technologies like Next.js, Node.js, and cloud-native infrastructure.",
    gradient: "from-green-400 to-emerald-600",
    shadow: "shadow-green-400/20",
    features: ["Multi-Tenant Apps", "Subscription Systems", "API Platforms"]
  },
  {
    icon: BarChart3,
    title: "Digital Strategy",
    desc: "Strategic consulting to align your technology with business goals and help you stay ahead of the competition.",
    gradient: "from-teal-400 to-emerald-600",
    shadow: "shadow-teal-400/20",
    features: ["ROI Focused", "Market Analysis", "Tech Roadmap"]
  },
  {
  icon: Palette,
  title: "UI & UX Design",
  desc: "Beautiful, user-centered interfaces designed to deliver seamless and engaging digital experiences across all devices.",
  gradient: "from-pink-500 to-rose-500",
  shadow: "shadow-pink-500/20",
  features: ["User Research", "Wireframing", "Interactive Prototypes"]
}
];

const processSteps = [
  { icon: MessageSquare, title: "Discovery", desc: "We listen to your goals and analyze your requirements deeply." },
  { icon: Layers, title: "Planning", desc: "Design & architecture phase where we plot the roadmap." },
  { icon: Code2, title: "Development", desc: "Our experts build with clean code and iterative feedback." },
  { icon: Rocket, title: "Launch", desc: "Quality assurance and deployment to production." },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-mesh pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold badge-gradient shimmer mb-6">
                <Zap size={14} className="text-primary" />
                Expert Solutions for Modern Problems
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                Our <span className="text-gradient">Core Services</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                From high-performance web apps to enterprise-grade AI, we deliver technology 
                that moves the needle for your business.
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-full fill-background">
            <path d="M0,64 C480,0 960,0 1440,64 L1440,64 L0,64 Z" />
          </svg>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i + 1}>
                <div className="glass neon-border rounded-[2rem] p-8 h-full hover-lift hover-glow group transition-all duration-500">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} ${service.shadow} shadow-lg flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map(feat => (
                      <li key={feat} className="flex items-center gap-2 text-sm font-medium">
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-full rounded-xl group/btn hover:border-primary/50 transition-all duration-300">
                    <Link to="/contact" className="flex items-center justify-center">
                      Get Started <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-muted/20 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading 
            badge="Methodology" 
            title="How We Deliver Success" 
            description="Our proven 4-step process ensures your project is delivered on time, within budget, and above expectations."
          />
          
          <div className="relative mt-16">
            {/* Desktop Connectors */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 -translate-y-1/2 -z-10" />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.title} delay={i + 1}>
                  <div className="glass neon-border rounded-3xl p-8 text-center bg-background group hover-lift transition-all duration-300">
                    <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                      <step.icon size={32} className="text-primary" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center border-4 border-background">
                        0{i + 1}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-20 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-indigo-600 to-accent opacity-95" />
              <div className="relative z-10 text-white max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Ready to Transform Your <br />
                  <span className="underline decoration-white/30 decoration-wavy underline-offset-8">Digital Presence?</span>
                </h2>
                <p className="text-white/80 text-lg mb-12 leading-relaxed">
                  Join hundreds of forward-thinking companies that have scaled their 
                  business with our expert solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-2xl font-bold px-12 h-16 bg-white text-primary hover:bg-white/90 shadow-2xl transition-all duration-300 hover:scale-105">
                    <Link to="/contact">Discuss Your Project</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-2xl font-semibold px-12 h-16 border-white/40 text-primary hover:bg-white/10 backdrop-blur-sm">
                    <Link to="/about">About Our Experts</Link>
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

export default Services;
