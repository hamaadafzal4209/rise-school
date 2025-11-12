"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { CheckCircle } from "lucide-react"; // ✅ clean icon import

const features = [
  "Expert Chartered Accountant faculty",
  "Proven track record of top results",
  "Trusted and respected by parents and students",
  "Affordable fee structure with flexible plans",
  "Scholarships and financial assistance for deserving students",
  "Online and campus-based classes",
  "Brisk batches producing high results in less duration",
  "Nationwide access and student support",
  "Committed to shaping future leaders in accountancy",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="pt-20 bg-gradient-subtle overflow-x-hidden overflow-y-hidden"
    >
      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-large">
              <Image
                src={"/assets/about.png"}
                alt="Modern school building"
                className="w-full h-[500px] object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight"
            >
              Why Students Choose RISE Premier
            </motion.h2>

            {/* Mapped Feature List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-3"
            >
              {features.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed hover:text-primary transition-colors"
                >
                  <CheckCircle
                    size={22}
                    className="text-primary mt-1 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
