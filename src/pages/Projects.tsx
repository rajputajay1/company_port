import { Link } from "react-router-dom";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ArrowRight, ExternalLink, Code2, Sparkles, MonitorSmartphone, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "StaySmart - PG Management",
    category: "SaaS / Management",
    desc: "A SaaS-based PG Management System with Super Admin and Owner dashboards for student, staff, and rent management. Integrated subscription plans, secure authentication, and automated email notifications for seamless operations.",
    image: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=1200",
    tags: ["MERN Stack", "Razorpay", "Node.js", "Express", "MongoDB"],
    link: "https://mansion-muse-hub.vercel.app/",
    icon: Building2,
    gradient: "from-blue-500 to-indigo-600",
    shadow: "shadow-blue-500/20"
  },
  {
    title: "ReelRoster - Movie Hub",
    category: "Web Application",
    desc: "Enhanced the Movies web app by adding advanced search, dynamic pagination, and real-time API integration, along with skeleton loading states for smooth data transitions, resulting in a faster, more responsive, and user-friendly experience.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    tags: ["React.js", "TMDB API", "Dynamic Pagination", "Skeleton Loading"],
    link: "https://boisterous-sunshine-25c834.netlify.app/",
    icon: MonitorSmartphone,
    gradient: "from-purple-500 to-pink-600",
    shadow: "shadow-purple-500/20"
  },
  {
    title: "iwood - Influencer Platform",
    category: "Event-driven Platform",
    desc: "Designed an interactive event-driven platform where influencers showcase products through live sessions and events, implemented skeleton loaders to improve experience during API latency, and integrated REST APIs for dynamic product data.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Influencer Marketing", "REST API", "Skeleton Loading"],
    link: "https://iwood.in/",
    icon: Sparkles,
    gradient: "from-cyan-400 to-teal-500",
    shadow: "shadow-cyan-400/20"
  }
];

const Projects = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-mesh pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold badge-gradient shimmer mb-6">
                <Code2 size={14} className="text-primary" />
                Proven Track Record
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                Our Featured <span className="text-gradient">Work</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Explore a selection of our most impactful projects. We transform complex business requirements into elegant, scalable digital experiences.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i + 1}>
                <div className="group relative rounded-[2rem] overflow-hidden glass hover-glow transition-all duration-500 hover:-translate-y-2 border border-border/50">
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute top-6 left-6 z-20">
                      <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg bg-gradient-to-r ${project.gradient}`}>
                        <project.icon size={14} />
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 relative">
                    <div className="absolute right-8 top-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg text-white hover:scale-110 transition-transform">
                        <ExternalLink size={20} />
                      </a>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 pr-12 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-md border border-border/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to start your next big project?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 w-3/4 mx-auto">
              Whether you need a cutting-edge mobile app, a complex web platform, or AI integration, our team is ready to deliver.
            </p>
            <Button asChild size="lg" className="rounded-2xl btn-glow font-bold px-10 h-14">
              <Link to="/contact">Let's Talk About Your Project <ArrowRight className="ml-2" size={18} /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Projects;
