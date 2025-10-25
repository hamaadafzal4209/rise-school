"use client";

import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  description?: string;
  breadcrumb?: string;
  backgroundImage?: string;
}

const Hero = ({
  title,
  subtitle,
  highlight,
  description,
  breadcrumb,
  backgroundImage = "/assets/events/trip1.jpg",
}: HeroProps) => {
  return (
    <section
      className="relative py-28 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Darker overlay for clarity */}
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/70 to-gray-900/85" />

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center text-white">
        {breadcrumb && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm text-gray-200 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {breadcrumb}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-gray-50 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)]"
        >
          {title}{" "}
          {highlight && (
            <span className="text-blue-600 drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
              {highlight}
            </span>
          )}
        </motion.h1>

        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-gray-100 mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {subtitle}
          </motion.h2>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Hero;
