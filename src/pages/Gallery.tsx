import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";

import entranceDay from "@/assets/entrance-day.jpg";
import entranceNight from "@/assets/entrance-night.jpg";
import gateView from "@/assets/gate-view.jpg";
import monumentNight from "@/assets/monument-night.jpg";
import playground from "@/assets/playground.jpg";
import bookingOffice from "@/assets/booking-office.jpg";
import boulevard from "@/assets/boulevard.jpg";
import roundaboutNight from "@/assets/roundabout-night.jpg";
import parkAerial from "@/assets/park-aerial.jpg";
import monumentDay from "@/assets/monument-day.png";
import mainGate from "@/assets/main-gate.jpg";
import aerialGate from "@/assets/aerial-gate.jpg";
import modernHouse from "@/assets/modern-house.png";
import gateNight from "@/assets/gate-night.jpg";

const images = [
  {
    src: gateNight,
    alt: "Royal Fort grand entrance gate illuminated at night",
    category: "Entrance",
  },
  {
    src: entranceDay,
    alt: "Royal Fort entrance with horse statue during daytime",
    category: "Entrance",
  },
  {
    src: entranceNight,
    alt: "Royal Fort entrance illuminated at night",
    category: "Entrance",
  },
  {
    src: aerialGate,
    alt: "Aerial view of Royal Fort entrance",
    category: "Entrance",
  },
  {
    src: mainGate,
    alt: "Royal Fort main gate with towers",
    category: "Entrance",
  },
  {
    src: gateView,
    alt: "Royal Fort gate barriers with branding",
    category: "Entrance",
  },
  {
    src: monumentDay,
    alt: "Royal Fort monument roundabout during day",
    category: "Infrastructure",
  },
  {
    src: monumentNight,
    alt: "Royal Fort monument illuminated at night",
    category: "Infrastructure",
  },
  {
    src: roundaboutNight,
    alt: "Royal Fort roundabout night view",
    category: "Infrastructure",
  },
  {
    src: boulevard,
    alt: "Royal Fort wide boulevard with palm trees",
    category: "Infrastructure",
  },
  {
    src: playground,
    alt: "Children's playground in Royal Fort",
    category: "Amenities",
  },
  {
    src: parkAerial,
    alt: "Aerial view of Royal Fort park",
    category: "Amenities",
  },
  {
    src: bookingOffice,
    alt: "Royal Fort booking office",
    category: "Facilities",
  },
  {
    src: modernHouse,
    alt: "Modern house design at Royal Fort",
    category: "Houses",
  },
];

const categories = [
  "All",
  "Entrance",
  "Infrastructure",
  "Amenities",
  "Facilities",
  "Houses",
];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <>
      <SEOHead
        title="Gallery | Royal Fort Housing Scheme Sahiwal — Photos & Development"
        description="Explore the photo gallery of Royal Fort Housing Scheme Sahiwal. See our grand entrance, infrastructure, parks, playground, and modern house designs."
        canonical="https://royalfort.site/gallery"
        ogImage="https://royalfort.site/logo.png"
        twitterImage="https://royalfort.site/logo.png"
        url="https://royalfort.site/gallery"
        schema={{
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Royal Fort Housing Scheme Gallery",
          description:
            "Photo gallery of Royal Fort Housing Scheme Sahiwal showing entrances, infrastructure, parks, playground, and house designs.",
          url: "https://royalfort.site/gallery",
          image: images.map((img) => img.src),
        }}
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
            Gallery
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="gold-line w-32 mx-auto"
          />
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeading subtitle="Explore" title="Royal Fort in Pictures" />

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-body tracking-wider uppercase transition-all duration-300 border ${
                  filter === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-xl overflow-hidden cursor-pointer group h-64"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-end p-4">
                    <p className="text-foreground text-sm font-body opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {img.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
