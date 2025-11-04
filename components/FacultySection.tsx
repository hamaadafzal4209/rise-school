"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import FacultyCard from "@/components/common/FacultyCard";
import Link from "next/link";
import FacultyDetailCard from "./common/FacultyDetailCard";

const FacultySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const facultyMembers = [
    {
      name: "Mr. Naveed Ansari",
      qualification: "FCA",
      details: [
        "23+ Years Teaching Experience",
        "Exam-Focused Methodology",
        "Extensive practice of Past papers",
      ],
      image: "/assets/faculty/SirNaveed.jpg",
    },
    {
      name: "Sir Zahid Qavi",
      qualification: "FCA",
      details: [
        "20+ Years Teaching Experience",
        "3 Certificates of Merit",
        "Innovative Style of Teaching",
      ],
      image: "/assets/faculty/SirZahid.jpg",
    },
    {
      name: "Sir Adnan Rasheed",
      qualification: "FCA",
      details: [
        "20+ Years Teaching Experience",
        "5 Certificates of Merit/Gold Medals in CA Final",
        "7 Position Holders in ACCA",
      ],
      image: "/assets/faculty/SirAdnan.jpg",
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
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {facultyMembers.map((faculty, i) => (
             <FacultyDetailCard
                key={faculty.name}
                name={faculty.name}
                qualification={faculty.qualification}
                details={faculty.details}
                image={faculty.image}
                delay={i * 0.1}
              />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-20"
        >
          <Link href={"/faculty"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-primary text-white px-8 py-4 rounded-xl font-heading font-bold shadow-medium hover:shadow-large transition-shadow duration-300"
            >
              View All Faculty
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FacultySection;
