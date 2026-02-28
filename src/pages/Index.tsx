import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import AdmissionForm from "@/components/AdmissionForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <CoursesSection />
    <AdmissionForm />
    <TestimonialsSection />
    <GallerySection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
