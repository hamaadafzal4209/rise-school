"use client";

import { motion } from "framer-motion";

interface HeroBackgroundStyles {
  position?: string; // e.g., "center", "top", "bottom"
  size?: string; // e.g., "cover", "contain"
  repeat?: string; // e.g., "no-repeat", "repeat-x"
  attachment?: string; // e.g., "fixed", "scroll"
}

interface HeroProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  description?: string;
  breadcrumb?: string;
  backgroundImage?: string;
  backgroundStyles?: HeroBackgroundStyles;
}

const Hero = ({
  title,
  subtitle,
  highlight,
  description,
  breadcrumb,
  backgroundImage = "/assets/events/trip1.jpg",
  backgroundStyles = {},
}: HeroProps) => {
  return (
    <section
      className="relative py-28"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: backgroundStyles.position || "center",
        backgroundSize: backgroundStyles.size || "cover",
        backgroundRepeat: backgroundStyles.repeat || "no-repeat",
        backgroundAttachment: backgroundStyles.attachment || "scroll",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/30 to-transparent" />

      <div className="relative container mx-auto px-6 text-left text-white">
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
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-gray-50 max-w-md"
        >
          {title}{" "}
          {highlight && <span className="text-blue-600">{highlight}</span>}
        </motion.h1>

        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold max-w-md text-gray-100 mb-4"
          >
            {subtitle}
          </motion.h2>
        )}

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-lg"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Hero;
