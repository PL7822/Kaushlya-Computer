import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="Computer training classroom" className="w-full h-full object-cover" />
      <div className="absolute inset-0 hero-gradient opacity-35" />
    </div>

    <div className="container relative z-10 text-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6 animate-pulse-soft backdrop-blur-sm">
          <GraduationCap className="w-4 h-4" />
          Admissions Open 2025-26
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-4"
      >
        Kaushlya Computer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8"
      >
        Empowering Students with Digital Skills
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          {/* Apply Now Button */}
          <Button
            asChild
            size="lg"
            className="text-base px-10 py-6 
    bg-white text-primary 
    font-semibold 
    rounded-2xl 
    shadow-xl 
    hover:shadow-2xl 
    hover:scale-105 
    transition-all duration-300 
    hover:bg-gray-100"
          >
            <a href="#admission">Apply Now</a>
          </Button>

          {/* View Courses Button */}
          <Button
            asChild
            size="lg"
            className="text-base px-10 py-6 
    border-2 border-white 
    text-white 
    rounded-2xl 
    backdrop-blur-md 
    bg-white/10 
    hover:bg-white 
    hover:text-primary 
    transition-all duration-300 
    hover:scale-105"
          >
            <a href="#courses">View Courses</a>
          </Button>

        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
