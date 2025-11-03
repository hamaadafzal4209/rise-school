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
  Award,
  HandHeart,
} from "lucide-react";
import FeatureCard from "./common/FeatureCard";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: GraduationCap,
      title: "Committed to Quality Education",
      description:
        "RISE ensures top-tier education standards with structured learning, practical exposure, and continuous performance evaluation.",
      color: "from-blue-500 to-primary",
    },
    {
      icon: Users,
      title: "Trusted by Parents and Students",
      description:
        "RISE has earned a reputation for reliability, transparency, and consistent academic success — trusted by thousands nationwide.",
      color: "from-primary to-purple-600",
    },
    {
      icon: HandHeart,
      title: "Dedicated to Student Success",
      description:
        "Every student receives personal guidance and mentoring to achieve academic and professional excellence in accountancy.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Lightbulb,
      title: "Innovative Teaching Methods",
      description:
        "We promote modern, effective teaching strategies that make learning engaging, conceptually strong, and exam-focused.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Globe,
      title: "Guided by Expert Mentors",
      description:
        "Our knowledgeable and experienced faculty provide practical insights and professional mentorship at every step.",
      color: "from-primary to-indigo-600",
    },
    {
      icon: Trophy,
      title: "High Results with Brisk Batches",
      description:
        "Focused short-duration batches designed to deliver outstanding results without compromising learning quality.",
      color: "from-pink-500 to-rose-600",
    },
    {
      icon: Award,
      title: "Scholarships & Financial Aid",
      description:
        "We believe in equal opportunity — offering scholarships and financial assistance to deserving and hardworking students.",
      color: "from-cyan-500 to-sky-600",
    },
    {
      icon: Heart,
      title: "Shaping Future Leaders",
      description:
        "RISE is committed to developing confident, ethical, and competent professionals who will lead the future of accountancy.",
      color: "from-violet-500 to-fuchsia-600",
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
            Why Choose RISE
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Why Choose Us
          </h2>
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
