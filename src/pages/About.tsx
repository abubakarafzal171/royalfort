import { motion } from "framer-motion";
import { Shield, Users, Award, Target } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import aerialGate from "@/assets/aerial-gate.jpg";
import mainGate from "@/assets/main-gate.jpg";
import bookingOffice from "@/assets/booking-office.jpg";

const stats = [
  { value: "500+", label: "Plots Available" },
  { value: "TMA", label: "Approved" },
  { value: "24/7", label: "Security" },
  { value: "100%", label: "Development" },
];

const values = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    desc: "All documentation is verified and TMA approved. We believe in complete transparency with our clients.",
  },
  {
    icon: Users,
    title: "Customer First",
    desc: "Our team is dedicated to providing exceptional service and support throughout your buying journey.",
  },
  {
    icon: Award,
    title: "Quality Infrastructure",
    desc: "We use the best materials and construction practices to ensure long-lasting, premium quality.",
  },
  {
    icon: Target,
    title: "Strategic Location",
    desc: "Located on Old Harappa Road, in front of APS School — one of the most accessible locations in Sahiwal.",
  },
];

const About = () => (
  <>
    <SEOHead
      title="About Royal Fort Housing Scheme Sahiwal | TMA Approved by Al-Kareem Associates"
      description="Learn about Royal Fort Housing Scheme Sahiwal — a TMA approved luxury housing society by Al-Kareem Associates Burewala. Discover our vision, values, and commitment to quality."
      canonical="https://royalfort.site/about"
      ogImage="https://royalfort.site/logo.png"
      twitterImage="https://royalfort.site/logo.png"
      url="https://royalfort.site/about"
      schema={{
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        name: "Royal Fort Housing Scheme",
        url: "https://royalfort.site",
        logo: "https://royalfort.site/logo.png",
        telephone: "+923004968586",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Old Harappa Road",
          addressLocality: "Sahiwal",
          addressCountry: "Pakistan",
        },
      }}
    />

    {/* Hero Banner */}
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <img
        src={aerialGate}
        alt="Aerial view of Royal Fort Housing Scheme"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4"
        >
          About Us
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="gold-line w-32 mx-auto"
        />
      </div>
    </section>

    {/* Stats */}
    <section className="bg-card py-12">
      <div className="container-luxury px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <AnimatedSection key={s.label} delay={i * 0.1}>
            <div className="text-center">
              <p className="font-heading text-4xl font-bold gold-gradient-text">
                {s.value}
              </p>
              <p className="text-muted-foreground text-sm mt-2 uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <img
              src={mainGate}
              alt="Royal Fort main entrance gate with towers"
              className="rounded-xl w-full h-[400px] object-cover"
              loading="lazy"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
              Our Story
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building Dreams in Sahiwal
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Royal Fort Housing Scheme is a prestigious project by Al-Kareem
              Associates Burewala, designed to bring world-class living
              standards to Sahiwal. Our vision is to create a community that
              blends modern infrastructure with traditional values.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Strategically located on Old Harappa Road, in front of Army Public
              School Sahiwal, Royal Fort offers unmatched accessibility and
              convenience. The society is fully TMA approved, ensuring all legal
              requirements are met.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With wide carpet roads, underground utilities, beautifully
              designed parks, a grand entrance gate, and 24/7 security, Royal
              Fort is not just a housing scheme — it's a lifestyle upgrade.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-card">
      <div className="container-luxury">
        <SectionHeading subtitle="Why Choose Us" title="Our Values" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="luxury-card p-8 text-center h-full">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Booking Office */}
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection delay={0.1}>
            <p className="text-sm tracking-[0.3em] uppercase text-primary mb-4 font-body">
              Visit Us
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Our Booking Office
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our on-site booking office is open 7 days a week. Visit us to
              explore available plots, discuss payment plans, and take a guided
              tour of the society.
            </p>
            <a
              href="tel:03004968586"
              className="btn-gold rounded-md inline-block"
            >
              Call: 0300-4968586
            </a>
          </AnimatedSection>
          <AnimatedSection>
            <img
              src={bookingOffice}
              alt="Royal Fort booking office"
              className="rounded-xl w-full h-[350px] object-cover"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  </>
);

export default About;
