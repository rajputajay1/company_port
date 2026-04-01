import { useState } from "react";

import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { 
  Mail, Phone, MapPin, Linkedin, Twitter, 
  Github, Send, MessageCircle, Clock, Globe2,
  CheckCircle2, Building, Building2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const officeLocations = [
  {
    city: "Chandigarh",
    address: "SCO 123, Sector 17, Chandigarh, India",
    icon: Building,
    phone: "+91 7837243545",
    email: "sycobytestechnology@gmail.com",
    timezone: "IST (UTC+5:30)"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const response = await fetch("http://localhost:5000/api/contact/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to connect to the server. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 hero-mesh pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold badge-gradient shimmer mb-6">
                <MessageCircle size={14} className="text-primary" />
                Available 24/7 for you
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 leading-[1.1]">
                Let's Start a <br className="hidden sm:block" />
                <span className="text-gradient">Conversation</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Whether you have a specific project in mind or just want to explore 
                the possibilities, our door is always open.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 max-w-6xl mx-auto">
            
            {/* Contact Details (Left) */}
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal>
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold font-sans tracking-tight">Reach Out <span className="text-gradient">Directly</span></h2>
                  
                  <div className="grid gap-6">
                    <div className="glass neon-border rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 hover-lift transition-all group">
                       <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <Mail className="text-primary" size={20} />
                       </div>
                       <div>
                          <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">General Inquiries</div>
                          <div className="text-base md:text-lg font-bold break-all sm:break-normal">sycobytestechnology@gmail.com</div>
                       </div>
                    </div>
                    
                    <div className="glass neon-border rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 hover-lift transition-all group">
                       <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                          <Phone className="text-emerald-500" size={20} />
                       </div>
                       <div>
                          <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Customer Support</div>
                          <div className="text-base md:text-lg font-bold">+91 7837243545</div>
                       </div>
                    </div>

                    <div className="glass neon-border rounded-2xl p-5 md:p-6 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 hover-lift transition-all group">
                       <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                          <Clock className="text-amber-500" size={20} />
                       </div>
                       <div>
                          <div className="text-[10px] md:text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Response Time</div>
                          <div className="text-base md:text-lg font-bold">Within 4 Hours</div>
                       </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={1}>
                <div className="space-y-6">
                  <h3 className="font-bold text-xl">Follow Our Journey</h3>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, color: "hover:text-blue-600", label: "LinkedIn" },
                      { icon: Twitter, color: "hover:text-sky-400", label: "Twitter" },
                      { icon: Github, color: "hover:text-foreground", label: "GitHub" }
                    ].map((social) => (
                      <a 
                        key={social.label} 
                        href="#" 
                        className={`w-12 h-12 sm:w-14 sm:h-14 glass rounded-2xl flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-xl ${social.color}`}
                        aria-label={social.label}
                      >
                        <social.icon size={20} className="sm:size-[24px]" />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form (Right) */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={2}>
                <div className="glass-dark neon-border rounded-[1.5rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 relative overflow-hidden group">
                  {/* Decorative background circle */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-700" />
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl font-bold mb-8">Send Us A <span className="text-gradient">Message</span></h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                         <div className="space-y-2">
                           <label className="text-xs font-bold text-muted-foreground uppercase ml-1">Full Name</label>
                           <Input 
                             placeholder="John Doe" 
                             value={formData.name}
                             required
                             onChange={(e) => handleChange("name", e.target.value)}
                             className="rounded-xl h-14 glass border-none ring-1 ring-border/50 focus:ring-primary/50 transition-all" 
                           />
                         </div>
                         <div className="space-y-2">
                           <label className="text-xs font-bold text-muted-foreground uppercase ml-1">Email Address</label>
                           <Input 
                             type="email" 
                             placeholder="john@example.com" 
                             value={formData.email}
                             required
                             onChange={(e) => handleChange("email", e.target.value)}
                             className="rounded-xl h-14 glass border-none ring-1 ring-border/50 focus:ring-primary/50 transition-all" 
                           />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-muted-foreground uppercase ml-1">Subject</label>
                         <Input 
                           placeholder="How can we help?" 
                           value={formData.subject}
                           required
                           onChange={(e) => handleChange("subject", e.target.value)}
                           className="rounded-xl h-14 glass border-none ring-1 ring-border/50 focus:ring-primary/50 transition-all" 
                         />
                      </div>
                      <div className="space-y-2">
                         <label className="text-xs font-bold text-muted-foreground uppercase ml-1">Message</label>
                         <Textarea 
                           placeholder="Describe your project, timeline, and goals..." 
                           value={formData.message}
                           required
                           onChange={(e) => handleChange("message", e.target.value)}
                           className="rounded-2xl min-h-[160px] glass border-none ring-1 ring-border/50 focus:ring-primary/50 p-6 transition-all" 
                         />
                      </div>
                      <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full rounded-2xl h-16 btn-glow font-bold text-lg shadow-2xl shadow-primary/30"
                      >
                        {loading ? "Sending..." : "Send Your Message"}
                        {!loading && <Send size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </Button>
                      <p className="text-center text-xs text-muted-foreground font-medium pt-2">
                         Privacy protected. No spam, ever.
                      </p>
                    </form>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
   

      {/* FAQ Call-to-action */}
      <section className="py-16 md:py-24">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
               <h3 className="text-3xl font-bold mb-6">Need Immediate Help?</h3>
               <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed font-medium">
                  Check our documentation or chat with our automated advisor for instant 
                  answers to common questions.
               </p>
               <div className="flex flex-wrap justify-center gap-6">
                  {["Fast Onboarding", "Dedicated PM", "Clear Roadmap", "Weekly Reports"].map(feat => (
                    <div key={feat} className="flex items-center gap-2 font-bold text-sm">
                       <CheckCircle2 size={16} className="text-emerald-500" />
                       {feat}
                    </div>
                  ))}
               </div>
            </ScrollReveal>
         </div>
      </section>
    </>
  );
};

export default Contact;




  //  <section className="py-24 bg-muted/20 relative">
  //       <div className="container mx-auto px-4 lg:px-8">
  //         <SectionHeading 
  //           badge="Locations" 
  //           title="Our Global Presence" 
  //           description="We're a global team with offices in major tech hubs around the world."
  //         />
          
  //         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
  //           {officeLocations.map((office, i) => (
  //             <ScrollReveal key={office.city} delay={i + 1}>
  //               <div className="glass neon-border rounded-[2.5rem] p-10 group hover-lift transition-all duration-300">
  //                 <div className="flex items-center gap-4 mb-8">
  //                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
  //                       <office.icon size={32} />
  //                    </div>
  //                    <div>
  //                      <h3 className="text-3xl font-bold">{office.city}</h3>
  //                      <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">
  //                         <Globe2 size={12} className="text-primary" /> {office.timezone}
  //                      </div>
  //                    </div>
  //                 </div>
                  
  //                 <div className="space-y-6 pt-4 border-t border-border/40">
  //                   <div className="flex items-start gap-4">
  //                      <MapPin className="text-primary mt-1 shrink-0" size={18} />
  //                      <div className="font-medium text-muted-foreground leading-relaxed">{office.address}</div>
  //                   </div>
  //                   <div className="flex items-center gap-4">
  //                      <Phone className="text-primary shrink-0" size={18} />
  //                      <div className="font-bold underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all">{office.phone}</div>
  //                   </div>
  //                   <div className="flex items-center gap-4">
  //                      <Mail className="text-primary shrink-0" size={18} />
  //                      <div className="font-bold">{office.email}</div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </ScrollReveal>
  //           ))}
  //         </div>
  //       </div>
  //     </section>