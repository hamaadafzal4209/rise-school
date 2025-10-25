"use client";

import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description, color, delay = 0 } : any) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <div className="bg-card rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 p-8 border h-full">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className={`w-16 h-16 rounded-xl bg-linear-to-r ${color} p-4 mb-6 shadow-glow`}
        >
          <Icon className="w-full h-full text-white" />
        </motion.div>

        <h3 className="text-xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          className="mt-6 h-1 bg-linear-to-r from-primary to-primary-light rounded-full origin-left"
        />
      </div>
    </motion.div>
  );
};

export default FeatureCard;
