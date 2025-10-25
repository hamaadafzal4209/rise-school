"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  Laptop,
  Dumbbell,
  Presentation,
  Coffee,
  BookOpen,
} from "lucide-react";

const facilities = [
  { title: "Renowned Teachers", icon: Users },
  { title: "Computer Labs", icon: Laptop },
  { title: "Sports Facilities", icon: Dumbbell },
  { title: "Lecture Rooms", icon: Presentation },
  { title: "Cafeteria", icon: Coffee },
  { title: "Libraries", icon: BookOpen },
];

const CampusFacilities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="pt-12">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group text-center"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-md font-medium text-primary transition-colors">
                    {facility.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CampusFacilities;
