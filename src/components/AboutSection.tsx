import { motion } from "framer-motion";
import { Award, Users, BookOpen, CheckCircle } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "5+" },
  { icon: Users, label: "Students Trained", value: "1000+" },
  { icon: BookOpen, label: "Courses Offered", value: "6+" },
  { icon: CheckCircle, label: "Placement Rate", value: "95%" },
];

const AboutSection = () => (
  <section id="about" className="py-20 section-gradient">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          About <span className="text-gradient">Kaushlya Computer</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Kaushlya Computer is a leading computer training institute in Palam, Maharashtra. With over 5 years of experience, we offer industry-relevant courses taught by certified trainers with 100% practical, hands-on training to prepare students for real-world careers.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 text-center card-elevated"
          >
            <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="font-display text-2xl sm:text-3xl font-bold text-foreground">{stat.value}</div>
            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
