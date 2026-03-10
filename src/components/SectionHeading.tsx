import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => (
  <AnimatedSection className="text-center mb-16">
    {subtitle && (
      <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
        {subtitle}
      </p>
    )}
    <h2 className={`font-heading text-3xl md:text-5xl font-bold mb-4 ${light ? "text-foreground" : "gold-gradient-text"}`}>
      {title}
    </h2>
    <div className="ornament my-6">
      <span className="w-2 h-2 bg-primary rotate-45 inline-block" />
    </div>
    {description && (
      <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
        {description}
      </p>
    )}
  </AnimatedSection>
);

export default SectionHeading;
