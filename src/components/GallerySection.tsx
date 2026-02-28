import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, label: "Computer Lab" },
  { src: gallery2, label: "Classroom Session" },
  { src: gallery3, label: "Certificate Distribution" },
  { src: gallery4, label: "Practical Training" },
  { src: gallery5, label: "Workshop Event" },
  { src: gallery6, label: "Student Activities" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Our <span className="text-gradient">Gallery</span>
        </h2>
        <p className="text-muted-foreground text-lg">A glimpse of our training environment and student activities.</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="aspect-[4/3] rounded-xl overflow-hidden border border-border group relative"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span className="text-sm font-medium text-primary-foreground">{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
