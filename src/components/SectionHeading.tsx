import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ badge, title, description }: SectionHeadingProps) {
  return (
    <ScrollReveal className="text-center mb-16">
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
