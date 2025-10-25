"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="pt-20 bg-gradient-subtle overflow-x-hidden">
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
                src={"/assets/about.png"}
                alt="Modern school building"
                className="w-full h-[500px] object-cover"
                width={500}
                height={500}
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 bg-card shadow rounded-xl p-6 border"
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary bg-clip-text">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    Years Experience
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
              The acronym “RISE” stands for 'resurgence and intuition for
              strategic excellence'. This is the mission we have set before us
              to revive an insight among the students so that they may procure
              thought-out luminosity and be above the rest.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed mb-4"
            >
              The mission of RISE is the all-around development of the students
              for the benefit of society.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed mb-4"
            >
              To focus on the character building of its young students so that
              they could be useful citizens of the state.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed mb-4"
            >
              To promote the qualities of head and heart through curricular and
              co-curricular activities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              To guide its youth to grow as robust individuals with a
              God-fearing youthful spirit.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid sm:grid-cols-2 gap-4 pt-6"
            >
              {[
                { label: "Academic Excellence", value: "98%" },
                { label: "University Placement", value: "95%" },
                { label: "Student Satisfaction", value: "99%" },
                { label: "Faculty with PhD", value: "85%" },
              ].map((stat, index) => (
                <div key={stat.label} className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {stat.value}
                    </span>
                  </div>
                  <span className="font-medium text-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
