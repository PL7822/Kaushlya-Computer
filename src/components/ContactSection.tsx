import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => (
  <section id="contact" className="py-20 section-gradient">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Contact <span className="text-gradient">Us</span>
        </h2>
        <p className="text-muted-foreground text-lg">Get in touch with us for any queries or admissions.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Contact info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground">Address</h4>
              <p className="text-muted-foreground text-sm">Palam, Maharashtra, India</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-foreground">Phone</h4>
              <p className="text-muted-foreground text-sm">+91 98XXX XXXXX</p>
            </div>
          </div>

          <Button asChild size="lg" className="w-full sm:w-auto gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-primary-foreground">
            <a href="https://wa.me/919800000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </Button>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden border border-border card-elevated aspect-[4/3]">
          <iframe
            title="Kaushlya Computer Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30000!2d75.5!3d19.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMwJzAwLjAiTiA3NcKwMzAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
