"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import {
  Compass,
  Telescope,
} from "lucide-react";
import FeatureCard from "@/components/common/FeatureCard";
import Hero from "@/components/common/Hero";
import AboutSection from "@/components/AboutSection";

const AboutPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <Hero
        title="About"
        highlight="RISE Premier"
        description="Where brilliance meets purpose. Empowering the next generation with wisdom, integrity, and a spirit of excellence."
        breadcrumb="Home » About"
        backgroundImage="/assets/hero.jpg"
        backgroundStyles={{ position: 'top' }}
      />

      <section ref={ref} className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-large">
                <Image
                  src="/assets/about.jpg"
                  alt="Modern school building"
                  width={600}
                  height={500}
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                Who We Are
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed mb-4"
              >
                The acronym “RISE” stands for Resurgence of Intuition for
                Strategic Excellence. RISE Premier School of Accountancy was
                established in July 2008 and has rapidly grown into one of the
                leading institutions playing a pivotal role in the promotion of
                professional accountancy, commerce, and business administration
                education in the country.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed mb-4"
              >
                We have a highly competent and experienced faculty and staff,
                state-of-the-art facilities, and well furnished, spacious
                campuses with a homely atmosphere conducive to learning and
                healthy competition.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed mb-4"
              >
                The education and environment we offer provide an excellent
                combination of curricular and co curricular activities,
                polishing our young RISIANS into responsible and capable
                citizens of Pakistan.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <AboutSection /> */}

      <div className="container mx-auto px-6 pt-8 lg:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <FeatureCard
            icon={Telescope}
            title="Our Vision"
            description="To be a leading center of excellence in accountancy education, shaping ethical and globally competitive finance professionals."
            color="from-purple-500 via-pink-500 to-rose-500"
            delay={0.1}
          />

          <FeatureCard
            icon={Compass}
            title="Our Mission"
            description="Empowering future accountants through quality education, innovation, and integrity to create a transparent and sustainable financial world."
            color="from-emerald-500 to-teal-500"
            delay={0.2}
          />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
