"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Users,
  Lightbulb,
  Trophy,
  Globe,
  Heart,
} from "lucide-react";
import FeatureCard from "./common/FeatureCard";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description:
        "Rigorous curriculum designed to challenge and inspire students to reach their full potential.",
      color: "from-blue-500 to-primary",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description:
        "World-class educators with advanced degrees and years of teaching experience.",
      color: "from-primary to-purple-600",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "Cutting-edge technology and modern teaching methods to prepare students for the future.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description:
        "Outstanding academic achievements and high university placement rates year after year.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description:
        "International programs and diverse community preparing students for global citizenship.",
      color: "from-primary to-indigo-600",
    },
    {
      icon: Heart,
      title: "Holistic Development",
      description:
        "Focus on character building, leadership skills, and personal growth beyond academics.",
      color: "from-pink-500 to-rose-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="pb-20 bg-gradient-subtle relative overflow-hidden"
    >
      <div className="absolute inset-0 dotted-bg" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Why Choose Rise
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            At RISE Premier, we take pride in being a trusted name in accountancy education. With dependable guidance and a commitment to academic excellence, we provide students with the right mentorship and learning environment to build strong foundations. Choosing RISE means choosing reliability, excellence, and success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.1} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-card shadow-medium border">
            {[
              { label: "Student Satisfaction", value: "99%" },
              { label: "Parent Approval", value: "97%" },
              { label: "Graduate Success", value: "95%" },
              { label: "Awards & Recognition", value: "50+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
