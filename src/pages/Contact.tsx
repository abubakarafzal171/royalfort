import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Facebook, Clock, Send } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";

import roundaboutNight from "@/assets/roundabout-night.jpg";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    plotSize: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "923004968586"; // WhatsApp number (without +)

    const message = `
New Plot Inquiry

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Plot Size: ${form.plotSize}

Message:
${form.message}
  `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    toast.success("Redirecting to WhatsApp...");

    setForm({
      name: "",
      phone: "",
      email: "",
      plotSize: "",
      message: "",
    });
  };
  return (
    <>
      <SEOHead
        title="Contact Us | Royal Fort Housing Scheme Sahiwal — Book Your Plot"
        description="Contact Royal Fort Housing Scheme Sahiwal for plot bookings and inquiries. Call 0300-4968586. Visit us at Old Harappa Road, in front of APS School Sahiwal."
        canonical="https://royalfort.site/contact"
        ogImage="https://royalfort.site/logo.png"
        twitterImage="https://royalfort.site/logo.png"
        url="https://royalfort.site/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          name: "Royal Fort Housing Scheme",
          url: "https://royalfort.site",
          logo: "https://royalfort.site/logo.png",
          image: "https://royalfort.site/logo.png",
          description:
            "Contact Royal Fort Housing Scheme Sahiwal for inquiries and plot bookings. Open 7 days a week.",
          telephone: "+923004968586",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Old Harappa Road",
            addressLocality: "Sahiwal",
            addressCountry: "Pakistan",
          },
          openingHours: "Mo-Su 09:00-18:00",
        }}
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={roundaboutNight}
          alt="Royal Fort roundabout at night"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="gold-line w-32 mx-auto"
          />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Get In Touch"
            title="Book Your Plot Today"
            description="Fill out the form below or contact us directly. Our team is ready to assist you."
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <AnimatedSection>
              <form
                onSubmit={handleSubmit}
                className="luxury-card p-8 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block font-body">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block font-body">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="03XX-XXXXXXX"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block font-body">
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block font-body">
                      Interested Plot Size
                    </label>

                    <select
                      value={form.plotSize}
                      onChange={(e) =>
                        setForm({ ...form, plotSize: e.target.value })
                      }
                      className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="">Select size</option>

                      <option value="4 Marla (1080 sq ft)">
                        4 Marla — 1080 sq ft
                      </option>

                      <option value="5 Marla (1350 sq ft)">
                        5 Marla — 1350 sq ft
                      </option>

                      <option value="6 Marla (1620 sq ft)">
                        6 Marla — 1620 sq ft
                      </option>

                      <option value="7 Marla (1890 sq ft)">
                        7 Marla — 1890 sq ft
                      </option>

                      <option value="10 Marla (2700 sq ft)">
                        10 Marla — 2700 sq ft
                      </option>

                      <option value="20 Marla (5400 sq ft)">
                        20 Marla — 5400 sq ft
                      </option>

                      <option value="Commercial 2.5 Marla (675 sq ft)">
                        Commercial 2.5 Marla — 675 sq ft
                      </option>

                      <option value="Commercial 5 Marla (1350 sq ft)">
                        Commercial 5 Marla — 1350 sq ft
                      </option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block font-body">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold rounded-md flex items-center justify-center gap-2 w-full"
                  disabled={sending}
                >
                  {sending ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send size={16} />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div className="luxury-card p-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <a
                      href="tel:03004968586"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Call Us</p>
                        <p className="text-foreground font-semibold">
                          0300-4968586
                        </p>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="text-foreground font-semibold">
                          Old Harappa Road, In Front of APS School, Sahiwal
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://www.facebook.com/royalforthousingscheme"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Facebook className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Facebook
                        </p>
                        <p className="text-foreground font-semibold">
                          royalforthousingscheme
                        </p>
                      </div>
                    </a>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="text-primary" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Office Hours
                        </p>
                        <p className="text-foreground font-semibold">
                          Open 7 Days — 9:00 AM to 6:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="luxury-card overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.0229878439527!2d73.04467517636397!3d30.661481174618768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922c9949457ce7f%3A0xcfe6bd21bf97755d!2sRoyal%20Fort%20Housing%20Scheme%20Sahiwal!5e0!3m2!1sen!2s!4v1773153025183!5m2!1sen!2s"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Royal Fort Housing Scheme Location Map"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
