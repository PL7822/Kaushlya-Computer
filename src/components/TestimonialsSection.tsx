import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Patil",
    course: "MS-CIT",
    text: "Kaushlya Computer helped me gain confidence in using computers. The trainers are very patient and explain everything practically. I got placed in a government office after completing my course!",
    rating: 5,
  },
  {
    name: "Rahul Jadhav",
    course: "Tally with GST",
    text: "The Tally course was very detailed and hands-on. I learned GST filing, inventory management, and accounting. Now I'm working as an accountant in a reputed firm.",
    rating: 5,
  },
  {
    name: "Sneha Deshmukh",
    course: "DCA",
    text: "I had zero knowledge of computers before joining. The DCA course covered everything from basics to advanced. The faculty is supportive and the environment is great for learning.",
    rating: 5,
  },
  {
    name: "Amit Kulkarni",
    course: "Typing (Marathi & English)",
    text: "I improved my typing speed from 15 WPM to 45 WPM in just 2 months. The daily practice sessions and personal attention made all the difference. Highly recommended!",
    rating: 4,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 section-gradient">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Student <span className="text-gradient">Success Stories</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Hear from our students who transformed their careers with us.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-6 card-elevated relative"
          >
            <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className={`w-4 h-4 ${s < t.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"}`}
                />
              ))}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              "{t.text}"
            </p>
            <div>
              <div className="font-display font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-primary">{t.course}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
