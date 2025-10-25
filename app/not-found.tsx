"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center min-h-screen overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl"
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl"
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[8rem] font-extrabold tracking-tight leading-none select-none"
      >
        404
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="flex flex-col items-center gap-4 max-w-lg text-center"
      >
        <p className="text-xl text-gray-300">
          Oops! The page you&aposre looking for doesn&apost exist or has been
          moved.
        </p>

        <Link href={"/"}>
          <Button className="ml-4 gradient-primary cursor-pointer shadow-medium">
            Back To Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
