import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Shield,
  TreePine,
  Lightbulb,
  Droplets,
  Lock,
  Route,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import heroImg from "../assets/9.jpg";
import entranceDay from "@/assets/entrance-day.jpg";
import monumentNight from "@/assets/monument-night.jpg";
import boulevard from "@/assets/boulevard.jpg";
import aerialGate from "@/assets/aerial-gate.jpg";
import modernHouse from "@/assets/modern-house.png";
import parkAerial from "@/assets/park-aerial.jpg";

const features = [
  {
    icon: Route,
    title: "Carpet Roads",
    desc: "Wide, well-paved carpet roads throughout the society",
  },
  {
    icon: TreePine,
    title: "Parks & Green Areas",
    desc: "Beautifully landscaped parks and playgrounds",
  },
  {
    icon: Lightbulb,
    title: "Electricity",
    desc: "Underground electricity with street lights",
  },
  {
    icon: Droplets,
    title: "Sewage System",
    desc: "Modern underground sewage and drainage",
  },
  {
    icon: Lock,
    title: "24/7 Security",
    desc: "Gated community with round-the-clock security",
  },
  {
    icon: Shield,
    title: "TMA Approved",
    desc: "Fully approved by Town Municipal Administration",
  },
];

const plotSizes = [
  "4 Marla",
  "5 Marla",
  "6 Marla",
  "7 Marla",
  "10 Marla",
  "20 Marla",
];

const Home = () => (
  <>
    <SEOHead
      title="Royal Fort Housing Scheme Sahiwal | Premium Plots & Luxury Living"
      description="Royal Fort Housing Scheme Sahiwal — TMA Approved luxury housing society. Premium residential & commercial plots in 4, 5, 6, 7, 10 & 20 Marla. A project by Al-Kareem Associates."
    />

    {/* HERO */}
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <motion.img
        src={heroImg}
        alt="Royal Fort Housing Scheme Sahiwal Main Gate at Night"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-6"
        >
          TMA Approved Housing Scheme
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-foreground"
        >
          Royal Fort
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-display text-2xl md:text-3xl text-primary italic mb-4"
        >
          Housing Scheme Sahiwal
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="font-body text-foreground/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Experience the lavish life — Premium residential &amp; commercial
          plots available for booking
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/plot-plans" className="btn-gold rounded-md">
            View Plot Plans
          </Link>
          <Link to="/contact" className="btn-outline-gold rounded-md">
            Book Now
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>

    {/* ABOUT PREVIEW */}
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Welcome To"
          title="Royal Fort Housing Scheme"
          description="Located on Old Harappa Road in front of Army Public School Sahiwal, Royal Fort is a premium TMA-approved housing society offering world-class infrastructure and modern amenities."
        />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={aerialGate}
                alt="Aerial view of Royal Fort entrance gate with horse statue"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
              A Project By
            </p>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-2">
              Al-Kareem Associates
            </h3>
            <p className="font-display text-lg text-primary italic mb-6">
              Burewala
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Royal Fort Housing Scheme is designed to provide a luxurious and
              comfortable lifestyle at affordable prices. With state-of-the-art
              infrastructure including wide carpet roads, underground
              electricity, modern sewage system, beautifully landscaped parks,
              and 24/7 security — we ensure the best living experience in
              Sahiwal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="btn-outline-gold rounded-md text-center"
              >
                Learn More
              </Link>
              <a
                href="tel:03004968586"
                className="btn-gold rounded-md flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* FEATURES */}
    <section className="section-padding bg-card">
      <div className="container-luxury">
        <SectionHeading
          subtitle="World-Class"
          title="Features & Amenities"
          description="Every detail has been carefully planned to offer you the finest living experience"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <AnimatedSection key={f.title} delay={i * 0.1}>
              <div className="luxury-card p-8 text-center transition-all duration-500 group h-full">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <f.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* PLOT SIZES */}
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Invest In Your Future"
          title="Available Plot Sizes"
          description="Choose from a variety of residential and commercial plots tailored to your needs"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {plotSizes.map((size, i) => (
            <AnimatedSection key={size} delay={i * 0.08}>
              <div className="luxury-card p-6 text-center group cursor-pointer">
                <p className="font-heading text-3xl font-bold gold-gradient-text mb-2">
                  {size.split(" ")[0]}
                </p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  Marla
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <Link to="/plot-plans" className="btn-gold rounded-md">
              View All Plans & Pricing
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* GALLERY PREVIEW */}
    <section className="section-padding bg-card">
      <div className="container-luxury">
        <SectionHeading subtitle="Explore" title="Our Society" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              img: entranceDay,
              alt: "Royal Fort entrance with horse statue during daytime",
            },
            {
              img: monumentNight,
              alt: "Royal Fort monument illuminated at night",
            },
            {
              img: boulevard,
              alt: "Royal Fort wide boulevard with palm trees",
            },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div className="relative rounded-xl overflow-hidden group h-72">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/20 group-hover:bg-background/40 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection delay={0.3}>
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-outline-gold rounded-md">
              View Full Gallery
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="relative py-24 overflow-hidden">
      <img
        src={modernHouse}
        alt="Modern luxury house design"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      <div className="relative z-10 container-luxury text-center px-4">
        <AnimatedSection>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-primary mb-4">
            Your Dream Home Awaits
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Book Your Plot Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Limited plots available. Secure your investment in Sahiwal's most
            premium housing scheme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:03004968586"
              className="btn-gold rounded-md flex items-center gap-2"
            >
              <Phone size={18} />
              0300-4968586
            </a>
            <Link
              to="/contact"
              className="btn-outline-gold rounded-md flex items-center gap-2"
            >
              <MapPin size={18} />
              Visit Booking Office
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* LOCATION */}
    <section className="section-padding bg-background">
      <div className="container-luxury">
        <SectionHeading subtitle="Find Us" title="Our Location" />
        <AnimatedSection>
          <div className="luxury-card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.0229878439527!2d73.04467517636397!3d30.661481174618768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922c9949457ce7f%3A0xcfe6bd21bf97755d!2sRoyal%20Fort%20Housing%20Scheme%20Sahiwal!5e0!3m2!1sen!2s!4v1773153025183!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Fort Housing Scheme Sahiwal Location"
              className="rounded-xl"
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <MapPin size={18} className="text-primary" />
              Old Harappa Road, In Front of Army Public School, Sahiwal
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </>
);

export default Home;
