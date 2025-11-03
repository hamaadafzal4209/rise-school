"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/events/Building1.jpg)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(120deg, rgba(0,0,0,0.85) 25%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Text content */}
      <div className="relative z-10 container mx-auto px-6 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight tracking-tight"
        >
          Shaping Bright Futures
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl mb-6 text-gray-100/90 font-medium"
        >
          Excellence in Education, Innovation in Learning
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl mb-8 text-gray-200/90 max-w-2xl mx-auto leading-relaxed"
        >
          Join our community of learners and discover your potential in a
          nurturing academic environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-white text-black hover:bg-[#092f6e] hover:text-white transition-all shadow-lg font-semibold group"
            >
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Link href="/about" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-transparent hover:border-none text-white hover:text-white hover:bg-[#092f6e] backdrop-blur-sm font-semibold transition-all"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
