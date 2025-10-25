"use client";

import { motion } from "framer-motion";
import { Mail, Award, BookOpen } from "lucide-react";

const FacultyCard = ({
  name,
  designation,
  image,
  experience,
  education,
  email,
  delay = 0,
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <div className="bg-card rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 overflow-hidden border">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="p-4 pb-0">
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            {name}
          </h3>
          <p className="text-primary font-medium mb-4">{designation}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FacultyCard;
