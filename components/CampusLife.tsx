"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, BookOpen, Trophy, Music } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const CampusLife = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const students = useCountUp(isInView, 2500);
  const courses = useCountUp(isInView, 150);
  const clubs = useCountUp(isInView, 45);
  const events = useCountUp(isInView, 200);

  const stats = [
    {
      icon: Users,
      value: students,
      suffix: "+",
      label: "Students Enrolled",
      gradient: "from-sky-500 via-indigo-500 to-blue-600",
    },
    {
      icon: BookOpen,
      value: courses,
      suffix: "+",
      label: "Courses Offered",
      gradient: "from-emerald-400 via-teal-500 to-green-600",
    },
    {
      icon: Trophy,
      value: clubs,
      suffix: "+",
      label: "Student Clubs",
      gradient: "from-amber-400 via-orange-500 to-red-500",
    },
    {
      icon: Music,
      value: events,
      suffix: "+",
      label: "Annual Events",
      gradient: "from-fuchsia-400 via-purple-500 to-pink-500",
    },
  ];

  return (
    <section ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/events/study6.jpg')` }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-gray-900/70 to-gray-800/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium mb-6 border border-white/20 text-white tracking-wide">
            Campus Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 drop-shadow-lg">
            Vibrant Campus Life
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            A dynamic environment where learning extends beyond the classroom — 
            fostering leadership, creativity, and lifelong friendships.
          </p>
        </motion.div>

        {/* Description Cards */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-10 mb-20"
        >
          {[
            {
              title: "Student Organizations",
              desc: "Join 45+ active clubs across arts, sciences, sports, and community service — where passion meets purpose.",
            },
            {
              title: "Events & Activities",
              desc: "Experience year-round energy with cultural festivals, debates, hackathons, and sports championships.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              custom={0.5 + i * 0.2}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="rounded-2xl p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4 drop-shadow">
                {item.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={fadeUp}
          custom={0.6}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center rounded-2xl p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-tr ${stat.gradient} flex items-center justify-center shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-3 drop-shadow">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <p className="text-gray-200 font-medium text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CampusLife;
