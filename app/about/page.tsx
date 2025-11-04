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
        backgroundImage="/assets/events/Building1.jpg"
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
                  src="/assets/about.png"
                  alt="Modern school building"
                  width={600}
                  height={500}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-primary/30 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-8 -right-8 bg-card border shadow rounded-xl p-6"
              >
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Years of Excellence
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">1000+</div>
                    <div className="text-sm text-muted-foreground font-medium">
                      Graduates
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  About RISE Premier
                </div>

                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight">
                  Who We Are
                </h2>
              </div>

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

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
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

      <section className="container mx-auto px-4 lg:px-0 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-primary mb-6 mt-4 text-center md:text-left">
            CEO&apos;s Message
          </h3>
          <div className="space-y-5 text-muted-foreground leading-relaxed text-justify">
            <p>
              It gives me great pleasure to welcome you to RISE Premier, an
              institution dedicated to excellence in accounting, finance, and
              business education. Our mission is to equip future professionals
              with the knowledge, integrity, and analytical skills required to
              lead with confidence and make a meaningful impact in the world of
              accountancy.
            </p>
            <p>
              At RISE, we believe education is more than the pursuit of a
              qualification — it is the development of character,
              professionalism, and ethical commitment. Our distinguished faculty
              and innovative curriculum provide students with real-world
              exposure and guidance to achieve their goals.
            </p>
            <p>
              As CEO, my commitment is to ensure that RISE Premier continues to
              uphold its standards of academic excellence, integrity, and
              innovation — nurturing leaders who shape the financial future of
              our communities and beyond.
            </p>
          </div>

          <div className="mt-8 text-left">
            <p className="font-semibold text-foreground text-lg">
              Naveed Ansari - FCA
            </p>
            <p className="text-primary font-medium">Chief Executive Officer</p>
            <p className="text-sm text-muted-foreground">
              RISE Premier School of Accountancy
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
