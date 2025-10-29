"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FacultyCard = ({
  name,
  designation,
  image,
  delay = 0,
  imageStyles
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
        <div
          className={`relative overflow-hidden flex items-center justify-center`}
        >
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className={`w-full h-64 ${
              imageStyles ? imageStyles : "object-cover"
            } group-hover:scale-110 transition-transform duration-500`}
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className={`p-4 ${designation ? 'pb-0' : 'pb-2' }`}>
          <h3 className="text-xl font-heading font-bold text-foreground mb-2">
            {name}
          </h3>
          {designation && (
            <p className="text-primary font-medium mb-4">{designation}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FacultyCard;
