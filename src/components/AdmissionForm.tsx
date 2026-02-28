import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send } from "lucide-react";

const courses = ["MS-CIT", "Tally with GST", "DCA", "Typing (Marathi & English)", "Basic Computer Course"];

const AdmissionForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !course) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Application submitted successfully! We will contact you soon.");
    setName("");
    setMobile("");
    setCourse("");
  };

  return (
    <section id="admission" className="py-20 section-gradient">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Admission <span className="text-gradient">Form</span>
            </h2>
            <p className="text-muted-foreground">Fill in your details and we'll get back to you shortly.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 sm:p-8 card-elevated space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input id="mobile" type="tel" placeholder="Enter your mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Select Course</Label>
              <Select value={course} onValueChange={setCourse}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a course" />
                </SelectTrigger>
                <SelectContent>
                  {courses.map((c) => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full" size="lg">
              <Send className="w-4 h-4 mr-2" />
              Submit Application
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default AdmissionForm;
