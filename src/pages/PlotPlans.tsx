import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import boulevard from "@/assets/boulevard.jpg";

const residentialPlots = [
  {
    size: "4 Marla",
    sqft: "1080 sq ft",
    type: "Residential",
    features: [
      "Ideal for small families",
      "Affordable starter home",
      "Access to all society amenities",
    ],
  },
  {
    size: "5 Marla",
    sqft: "1350 sq ft",
    type: "Residential",
    features: [
      "Most popular plot size",
      "Perfect for modern family homes",
      "Corner & regular plots available",
    ],
    popular: true,
  },
  {
    size: "6 Marla",
    sqft: "1620 sq ft",
    type: "Residential",
    features: [
      "Extra space for parking & lawn",
      "Premium residential block",
      "Ideal for stylish houses",
    ],
  },
  {
    size: "7 Marla",
    sqft: "1890 sq ft",
    type: "Residential",
    features: [
      "Spacious family living",
      "Wide road access",
      "High investment potential",
    ],
  },
  {
    size: "10 Marla",
    sqft: "2700 sq ft",
    type: "Residential",
    features: [
      "Luxury living standard",
      "Double story house potential",
      "Prime sector locations",
    ],
    popular: true,
  },
  {
    size: "20 Marla",
    sqft: "5400 sq ft",
    type: "Residential",
    features: [
      "Premium estate plots",
      "Perfect for luxury villas",
      "Exclusive sector availability",
    ],
  },
];

const commercialPlots = [
  {
    size: "2.5 Marla",
    sqft: "675 sq ft",
    type: "Commercial",
    features: [
      "Ideal for shops & offices",
      "Located on main commercial roads",
      "High business potential",
    ],
  },
  {
    size: "5 Marla",
    sqft: "1350 sq ft",
    type: "Commercial",
    features: [
      "Perfect for plazas & showrooms",
      "Main boulevard location",
      "Excellent investment opportunity",
    ],
    popular: true,
  },
];

const PlotPlans = () => (
  <>
    <SEOHead
      title="Plot Plans & Sizes | Royal Fort Housing Scheme Sahiwal"
      description="Explore residential and commercial plots at Royal Fort Housing Scheme Sahiwal including 4, 5, 6, 7, 10, and 20 Marla plots. Contact us for booking and details."
    />

    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img
        src={boulevard}
        alt="Royal Fort boulevard"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4"
        >
          Plot Plans
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="gold-line w-32 mx-auto"
        />
      </div>
    </section>

    {/* Residential Plots */}
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Choose Your Plot"
          title="Residential Plot Sizes"
          description="Select from a variety of residential plot sizes designed for comfortable and luxurious living."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {residentialPlots.map((plot, i) => (
            <AnimatedSection key={plot.size} delay={i * 0.1}>
              <div
                className={`luxury-card p-8 h-full relative ${plot.popular ? "border-primary/50" : ""}`}
              >
                {plot.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs uppercase px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                <p className="text-sm tracking-[0.2em] uppercase text-primary mb-2">
                  {plot.type}
                </p>

                <h3 className="font-heading text-4xl font-bold gold-gradient-text mb-1">
                  {plot.size}
                </h3>

                <p className="text-muted-foreground text-sm mb-6">
                  {plot.sqft}
                </p>

                <ul className="space-y-3 mb-8">
                  {plot.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block text-center rounded-md w-full ${plot.popular ? "btn-gold" : "btn-outline-gold"}`}
                >
                  Inquire Now
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Commercial Plots */}

        <SectionHeading
          subtitle="Business Opportunities"
          title="Commercial Plot Sizes"
          description="Premium commercial plots available for shops, offices, and plazas."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {commercialPlots.map((plot, i) => (
            <AnimatedSection key={plot.size} delay={i * 0.1}>
              <div
                className={`luxury-card p-8 h-full relative ${plot.popular ? "border-primary/50" : ""}`}
              >
                {plot.popular && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs uppercase px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                <p className="text-sm tracking-[0.2em] uppercase text-primary mb-2">
                  {plot.type}
                </p>

                <h3 className="font-heading text-4xl font-bold gold-gradient-text mb-1">
                  {plot.size}
                </h3>

                <p className="text-muted-foreground text-sm mb-6">
                  {plot.sqft}
                </p>

                <ul className="space-y-3 mb-8">
                  {plot.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block text-center rounded-md w-full ${plot.popular ? "btn-gold" : "btn-outline-gold"}`}
                >
                  Inquire Now
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PlotPlans;
