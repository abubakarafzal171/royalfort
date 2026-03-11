import { motion } from "framer-motion";
import {
  TreePine,
  Route,
  Lightbulb,
  Droplets,
  Lock,
  Shield,
  Landmark,
  Volleyball,
  Building,
  Wifi,
  Flame,
  Car,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import playground from "@/assets/playground.jpg";
import parkAerial from "@/assets/park-aerial.jpg";
import boulevard from "@/assets/boulevard.jpg";
import monumentNight from "@/assets/monument-night.jpg";

const amenities = [
  {
    icon: Route,
    title: "Wide Carpet Roads",
    desc: "Beautifully paved wide roads ensuring smooth travel throughout the society",
    img: boulevard,
  },
  {
    icon: TreePine,
    title: "Landscaped Parks",
    desc: "Lush green parks with jogging tracks and seating areas for families",
    img: parkAerial,
  },
  {
    icon: Volleyball,
    title: "Children's Playground",
    desc: "Modern, safe playground equipment for children of all ages",
    img: playground,
  },
  {
    icon: Landmark,
    title: "Grand Entrance Gate",
    desc: "Majestic fort-style entrance gate with 24/7 manned security",
    img: monumentNight,
  },
  {
    icon: Lightbulb,
    title: "Underground Electricity",
    desc: "Modern underground electrical system with decorative street lighting",
  },
  {
    icon: Droplets,
    title: "Sewage & Drainage",
    desc: "Complete underground sewage system and proper drainage infrastructure",
  },
  {
    icon: Lock,
    title: "24/7 Security",
    desc: "Gated community with CCTV surveillance and trained security personnel",
  },
  {
    icon: Shield,
    title: "TMA Approved",
    desc: "Fully approved by Town Municipal Administration — legal and secure investment",
  },
  {
    icon: Building,
    title: "Commercial Area",
    desc: "Dedicated commercial zone for shops, markets, and business establishments",
  },
  {
    icon: Wifi,
    title: "Fiber Optic Ready",
    desc: "Infrastructure prepared for high-speed internet connectivity",
  },
  {
    icon: Flame,
    title: "Sui Gas Provision",
    desc: "Gas pipeline infrastructure planned for residential convenience",
  },
  {
    icon: Car,
    title: "Parking Spaces",
    desc: "Ample parking areas designed throughout the society",
  },
];

const Amenities = () => (
  <>
    <SEOHead
      title="Amenities | Royal Fort Housing Scheme Sahiwal — World-Class Facilities"
      description="Discover the premium amenities at Royal Fort Housing Scheme Sahiwal: wide carpet roads, parks, playground, 24/7 security, underground electricity, sewage system, and more."
      canonical="https://royalfort.site/amenities"
      ogImage="https://royalfort.site/logo.png"
      twitterImage="https://royalfort.site/logo.png"
      url="https://royalfort.site/amenities"
      schema={{
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        name: "Royal Fort Housing Scheme",
        url: "https://royalfort.site",
        image: "https://royalfort.site/logo.png",
        description:
          "World-class amenities including parks, playgrounds, carpet roads, 24/7 security, underground electricity, and modern infrastructure.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Harappa Road",
          addressLocality: "Sahiwal",
          addressCountry: "Pakistan",
        },
        telephone: "+923004968586",
        openingHours: "Mo-Su 08:00-18:00",
      }}
    />
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img
        src={parkAerial}
        alt="Royal Fort park aerial view"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4"
        >
          Amenities
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="gold-line w-32 mx-auto"
        />
      </div>
    </section>

    {/* Amenities Grid */}
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Premium Living"
          title="World-Class Amenities"
          description="Royal Fort Housing Scheme offers a complete package of modern amenities for comfortable and luxurious living"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((a, i) => (
            <AnimatedSection key={a.title} delay={i * 0.08}>
              <div className="luxury-card overflow-hidden group h-full">
                {a.img && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={a.img}
                      alt={a.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <a.icon className="text-primary" size={20} />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {a.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Amenities;
