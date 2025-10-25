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
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: BookOpen,
      value: courses,
      suffix: "+",
      label: "Courses Offered",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: Trophy,
      value: clubs,
      suffix: "+",
      label: "Student Clubs",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Music,
      value: events,
      suffix: "+",
      label: "Annual Events",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="campus" ref={ref} className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${'/assets/campus-life.jpg'})` }}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 dotted-bg-light" />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center bg-primary-foreground/20 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-medium mb-6 border border-primary-foreground/20 text-white shadow-subtle">
            Campus Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-primary-foreground mb-6">
            Vibrant Campus Life
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A dynamic environment where learning extends beyond the classroom —
            with diverse activities, student clubs, and community engagement.
          </p>
        </motion.div>

        {/* Description Cards */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto text-center mb-20"
        >
          <p className="text-lg max-w-3xl mx-auto text-primary-foreground/80 leading-relaxed mb-12">
            At RiseSchool Academy, campus life means exploration, leadership, and
            lifelong friendships. Opportunities are endless — from cultural
            events to academic challenges.
          </p>

          <div className="grid md:grid-cols-2 gap-10 text-left">
            {[
              {
                title: "Student Organizations",
                desc: "Join 45+ clubs across arts, sciences, sports, and service. Find your passion and your people.",
              },
              {
                title: "Events & Activities",
                desc: "From festivals to competitions, sports to outreach — campus is always alive with opportunities.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                custom={0.5 + i * 0.2}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="rounded-2xl p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-medium hover:shadow-glow transition-all"
              >
                <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          custom={0.6}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-4 gap-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="text-center rounded-2xl p-8 bg-white/10 backdrop-blur-md border border-white/20 shadow-medium hover:shadow-glow transition-all"
            >
              <div
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-tr ${stat.gradient} flex items-center justify-center shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">
                {stat.value.toLocaleString()}
                {stat.suffix}
              </div>
              <p className="text-primary-foreground/90 font-medium text-lg">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-heading font-bold shadow-medium hover:shadow-large transition-shadow duration-300"
          >
            Explore Campus Life
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CampusLife;
