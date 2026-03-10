import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import boulevard from "@/assets/boulevard.jpg";

const plots = [
  { size: "4 Marla", sqft: "1,125 sq ft", type: "Residential", features: ["Ideal for small families", "Budget-friendly option", "All amenities included"] },
  { size: "5 Marla", sqft: "1,406 sq ft", type: "Residential", features: ["Most popular choice", "Perfect family home", "Corner & regular available"], popular: true },
  { size: "6 Marla", sqft: "1,688 sq ft", type: "Residential", features: ["Spacious layout", "Extra room potential", "Premium locations"] },
  { size: "7 Marla", sqft: "1,969 sq ft", type: "Residential", features: ["Generous living space", "Garden area included", "Wide frontage"] },
  { size: "10 Marla", sqft: "2,812 sq ft", type: "Residential", features: ["Luxury living", "Double story potential", "Prime locations"], popular: true },
  { size: "20 Marla", sqft: "5,625 sq ft", type: "Residential", features: ["Premium estate", "Maximum space", "Exclusive sector"] },
];

const PlotPlans = () => (
  <>
    <SEOHead
      title="Plot Plans & Sizes | Royal Fort Housing Scheme Sahiwal — 4 to 20 Marla"
      description="Explore available plot sizes at Royal Fort Housing Scheme Sahiwal: 4 Marla, 5 Marla, 6 Marla, 7 Marla, 10 Marla, and 20 Marla residential plots. Contact for pricing."
    />

    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img src={boulevard} alt="Royal Fort boulevard" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4"
        >
          Plot Plans
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="gold-line w-32 mx-auto" />
      </div>
    </section>

    {/* Plots */}
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Choose Your Plot"
          title="Available Sizes"
          description="Select from a variety of plot sizes to match your dream home requirements. All plots come with complete infrastructure and amenities."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plots.map((plot, i) => (
            <AnimatedSection key={plot.size} delay={i * 0.1}>
              <div className={`luxury-card p-8 h-full relative ${plot.popular ? "border-primary/50" : ""}`}>
                {plot.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-body tracking-wider uppercase px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}
                <p className="text-sm tracking-[0.2em] uppercase text-primary font-body mb-2">{plot.type}</p>
                <h3 className="font-heading text-4xl font-bold gold-gradient-text mb-1">{plot.size}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plot.sqft}</p>
                <ul className="space-y-3 mb-8">
                  {plot.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="tel:03004968586" className={`block text-center rounded-md w-full ${plot.popular ? "btn-gold" : "btn-outline-gold"}`}>
                  Inquire Now
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.3}>
          <div className="mt-16 luxury-card p-10 text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Our team will help you find the perfect plot based on your budget and requirements. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:03004968586" className="btn-gold rounded-md flex items-center justify-center gap-2">
                <Phone size={16} />
                0300-4968586
              </a>
              <Link to="/contact" className="btn-outline-gold rounded-md">
                Send Inquiry
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default PlotPlans;
