import { motion } from "framer-motion";
import { Monitor, Calculator, Layers, Keyboard, Laptop, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    icon: Monitor,
    title: "MS-CIT",
    duration: "3 Months",
    desc: "Maharashtra State Certificate in Information Technology – a government recognized course covering computer fundamentals, internet, and office applications.",
  },
  {
    icon: Calculator,
    title: "Tally with GST",
    duration: "2 Months",
    desc: "Master accounting software Tally ERP9/Prime with hands-on GST filing, invoicing, and financial reports preparation.",
  },
  {
    icon: Layers,
    title: "DCA",
    duration: "6 Months",
    desc: "Diploma in Computer Application covering MS Office, programming basics, internet technologies, and database management.",
  },
  {
    icon: Keyboard,
    title: "Typing (Marathi & English)",
    duration: "2 Months",
    desc: "Develop professional typing speed and accuracy in both Marathi and English for government exams and office work.",
  },
  {
    icon: Laptop,
    title: "Basic Computer Course",
    duration: "1 Month",
    desc: "Fundamental computer skills including Windows OS, MS Office, email, internet browsing, and digital literacy.",
  },
];

const CoursesSection = () => (
  <section id="courses" className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Our <span className="text-gradient">Courses</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Industry-relevant courses designed to build your career in the digital world.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, i) => (
          <motion.div
            key={course.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card rounded-xl p-6 card-elevated group"
          >
            <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-4">
              <course.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">{course.title}</h3>
            <div className="flex items-center gap-1 text-sm text-primary font-medium mb-3">
              <Clock className="w-3.5 h-3.5" />
              {course.duration}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{course.desc}</p>
            <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary/80 p-0 h-auto font-medium group-hover:gap-2 transition-all">
              <a href="#admission">
                Enroll Now <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
