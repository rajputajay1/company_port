import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  MapPin, Clock, Briefcase, Heart, Coffee, 
  GraduationCap, Dumbbell, Sparkles, Star, 
  ArrowRight, Users, Zap, CheckCircle2 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const positions = [
  { 
    title: "Senior Product Designer", 
    dept: "Design", 
    location: "Remote / New York", 
    type: "Full-time", 
    salary: "$120k - $160k",
    tags: ["Figma", "Design Systems"]
  },
  { 
    title: "Full Stack Engineer", 
    dept: "Engineering", 
    location: "Global Remote", 
    type: "Full-time", 
    salary: "$110k - $150k",
    tags: ["Next.js", "Node.js"]
  },
  { 
    title: "Cloud Operations Expert", 
    dept: "Infrastructure", 
    location: "London Office", 
    type: "Full-time", 
    salary: "$130k - $170k",
    tags: ["AWS", "Kubernetes"]
  },
  { 
    title: "AI Researcher", 
    dept: "Innovation Lab", 
    location: "San Francisco", 
    type: "Full-time", 
    salary: "$150k - $200k",
    tags: ["PyTorch", "LLMs"]
  },
];

const perks = [
  { 
    icon: Heart, 
    title: "Wellbeing First", 
    desc: "Premium health, dental, and vision for you and your family.",
    gradient: "from-rose-400 to-pink-600"
  },
  { 
    icon: Coffee, 
    title: "Flexible Work", 
    desc: "Work from anywhere in the world. We offer a remote-first culture.",
    gradient: "from-amber-400 to-orange-500"
  },
  { 
    icon: GraduationCap, 
    title: "Growth Budget", 
    desc: "$2,500 annual budget for courses, conferences, and books.",
    gradient: "from-blue-400 to-indigo-600"
  },
  { 
    icon: Dumbbell, 
    title: "Gym & Fitness", 
    desc: "Monthly stipend for gym memberships or fitness equipment.",
    gradient: "from-emerald-400 to-teal-600"
  },
];

const Career = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handleApply = (role: string) => {
    setSelectedRole(role);
    setDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDialogOpen(false);
    toast.success("Application received! Our talent team will contact you shortly.");
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-mesh pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold badge-gradient shimmer mb-6">
                <Sparkles size={14} className="text-primary" />
                We're Hiring Passionate Builders
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                Build the Future <br />
                With <span className="text-gradient">NexGen Team</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
                Help us redefine what's possible in technology. We're looking for thinkers 
                and doers who value innovation, integrity, and autonomy.
              </p>
              <div className="flex justify-center gap-4">
                <Button asChild size="lg" className="rounded-2xl btn-glow px-10 h-16 font-bold shadow-xl shadow-primary/20">
                  <a href="#positions">View Openings</a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats/Culture Row */}
      <section className="py-12 relative z-10 -mt-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="glass neon-border rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="grid md:grid-cols-3 gap-12 text-center relative z-10">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">100%</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Remote Friendly</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">28 Days</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Paid Time Off</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gradient">Top 1%</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Global Talent</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions Grid */}
      <section id="positions" className="py-24 scroll-mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading 
            badge="Join Us" 
            title="Exciting Opportunities" 
            description="Find a role that challenges you and allows you to make a global impact."
          />
          
          <div className="grid gap-6 max-w-4xl mx-auto mt-16">
            {positions.map((pos, i) => (
              <ScrollReveal key={pos.title} delay={i + 1}>
                <div className="glass neon-border rounded-[2rem] p-8 flex flex-col md:flex-row md:items-center justify-between gap-8 hover-lift hover-glow group transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{pos.title}</h3>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-primary/10 text-primary border border-primary/20 tracking-widest uppercase">
                        {pos.dept}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-muted-foreground">
                      <div className="flex items-center gap-1.5"><MapPin size={16} className="text-primary" /> {pos.location}</div>
                      <div className="flex items-center gap-1.5"><Clock size={16} className="text-primary" /> {pos.type}</div>
                      <div className="flex items-center gap-1.5 font-bold text-foreground">{pos.salary}</div>
                    </div>
                    <div className="flex gap-2">
                      {pos.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-semibold opacity-60">#{tag}</span>
                      ))}
                    </div>
                  </div>
                  <Button 
                    onClick={() => handleApply(pos.title)} 
                    className="rounded-2xl btn-glow px-10 h-14 font-bold shrink-0 shadow-lg"
                  >
                    Apply Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-24 bg-muted/20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading 
            badge="Perks & Benefits" 
            title="Beyond The Paycheck" 
            description="We care about our team as humans, not just resources. Here is what we offer."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {perks.map((perk, i) => (
              <ScrollReveal key={perk.title} delay={i + 1}>
                <div className="glass neon-border rounded-3xl p-8 text-center group hover-lift transition-all duration-300 h-full">
                  <div className={`w-16 h-16 rounded-[1.25rem] bg-gradient-to-br ${perk.gradient} shadow-lg flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    <perk.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold badge-gradient">
                  Our Culture
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Where <span className="text-gradient">Autonomy</span> <br />
                  Meets Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We don't believe in micromanagement. We hire the best and give them 
                  the tools and freedom to do their best work. 
                </p>
                <ul className="space-y-4 pt-4">
                  {["Monthly team off-sites", "Open communication", "Zero bureaucracy", "Continuous learning"].map(item => (
                    <li key={item} className="flex items-center gap-3 font-semibold">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle2 size={14} className="text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="relative">
                <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden neon-border">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')] opacity-40 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-700 bg-cover bg-center" />
                   <div className="text-4xl font-bold text-white z-10 text-center px-8 drop-shadow-2xl">
                     Work is about <br />
                     <span className="text-gradient">The People</span>
                   </div>
                </div>
                {/* Floating badges */}
                <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 shadow-2xl animate-float-1">
                   <Users className="text-primary mb-2" />
                   <div className="text-sm font-bold">50+ Global Members</div>
                </div>
                <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-2xl animate-float-2">
                   <Zap className="text-amber-500 mb-2" />
                   <div className="text-sm font-bold">Fast-Paced Growth</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Application Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-lg glass-dark border-border/50 rounded-[2rem] p-0 overflow-hidden">
          <div className="p-8 pb-0">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">Apply for <span className="text-gradient">{selectedRole}</span></DialogTitle>
              <DialogDescription className="text-base">
                Join our mission. Your future starts here.
              </DialogDescription>
            </DialogHeader>
          </div>
          <form onSubmit={handleSubmit} className="p-8 space-y-5">
            <div className="space-y-4">
              <Input placeholder="Full Name" required className="rounded-xl h-12 glass border-none ring-1 ring-border/50 focus:ring-primary/50" />
              <Input type="email" placeholder="Email Address" required className="rounded-xl h-12 glass border-none ring-1 ring-border/50 focus:ring-primary/50" />
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase ml-1">Resume (PDF)</label>
                <Input type="file" accept=".pdf" required className="rounded-xl h-12 glass border-none ring-1 ring-border/50 focus:ring-primary/50 py-2.5" />
              </div>
              <Textarea placeholder="Tell us why you're a good fit..." className="rounded-xl min-h-[140px] glass border-none ring-1 ring-border/50 focus:ring-primary/50 p-4" />
            </div>
            <Button type="submit" className="w-full rounded-2xl h-14 btn-glow font-bold text-lg">Send Application</Button>
          </form>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Career;
