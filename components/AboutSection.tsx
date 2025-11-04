"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="pt-20 bg-gradient-subtle overflow-x-hidden overflow-y-hidden">
      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
              >
                About RISE Premier
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6 leading-tight"
              >
                Who We Are
              </motion.h2>
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
              state-of-the-art facilities, and well furnished, spacious campuses
              with a homely atmosphere conducive to learning and healthy
              competition.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed mb-4"
            >
              The education and environment we offer provide an excellent
              combination of curricular and co curricular activities, polishing
              our young RISIANS into responsible and capable citizens of
              Pakistan.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
