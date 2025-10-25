"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FacultyCard from "@/components/common/FacultyCard";

const FacultySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const facultyMembers = [
    {
      name: "Mr. Sajjad Ahmed Malik",
      designation: "Principal & Head of Mathematics",
      image:
        "https://riseschool.edu.pk/wp-content/uploads/slider/cache/7682ab5e616f19bb2b839121b2586711/zahid-arshad.jpg",
    },
    {
      name: "Mr. Zahid Qavi",
      designation: "Head of Science Department",
      image:
        "https://riseschool.edu.pk/wp-content/uploads/slider/cache/ac6df2387f21fa450c1a056e8109f50e/Adnan-Rasheed.jpg",
    },
    {
      name: "Mr Umer Farooq",
      designation: "English & Literature Teacher",
      image:
        "https://riseschool.edu.pk/wp-content/uploads/slider/cache/6359d97338cc96dd3c2263f56c44f66f/Zahid-Qavi.jpg",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Experienced Faculty
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our dedicated team of educators brings years of experience and
            passion for teaching to create an exceptional learning environment.
          </p>
        </motion.div>

        {/* Faculty Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facultyMembers.map((faculty, i) => (
            <FacultyCard key={faculty.name} {...faculty} delay={i * 0.1} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-bold shadow-medium hover:shadow-large transition-shadow duration-300"
          >
            View All Faculty
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;
