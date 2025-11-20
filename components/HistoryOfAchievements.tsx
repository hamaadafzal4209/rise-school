"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";

const achievementLinks = [
  {
    title: "CA – Success Stories",
    description: "Click the link to listen to a CA success story at RISE.",
    url: "https://www.facebook.com/reel/24034673489472927",
    image: "/assets/achievements/a1.jpg",
  },
  {
    title: "CA – Success Stories",
    description:
      "Click the link to listen to a CA success story of a RISE student.",
    url: "https://www.facebook.com/reel/908555527918791",
    image: "/assets/achievements/a2.jpg",
  },
  {
    title: "CA – Achievement",
    description:
      "Click the link to listen to a CA achievement story by a RISE student.",
    url: "https://www.facebook.com/reel/502868452792954",
    image: "/assets/achievements/a3.jpg",
  },
  {
    title: "CA – Success Stories",
    description:
      "Click the link to listen to a CA success story by a RISE student.",
    url: "https://www.facebook.com/reel/1997052087465309",
    image: "/assets/achievements/a4.jpg",
  },
];

const HistoryOfAchievements = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-6 text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8"
        >
          Wall of Achievements
        </motion.h2>

        <motion.img
          src="/assets/achievements/wallofachievement.jpg"
          alt="Wall of Achievements"
          className="w-full rounded-xl shadow-lg object-cover max-h-[550px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </div>

      <div className="container mx-auto px-6 text-center mb-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-heading font-bold text-foreground"
        >
          Achievements
        </motion.h3>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {achievementLinks.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
          >
            {/* IMAGE */}
            <div className="w-full h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 text-left">
              <h4 className="text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h4>

              <p className="text-muted-foreground mb-4">{item.description}</p>

              {/* BUTTON */}
              <a
                href={item.url}
                target="_blank"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                View Story
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HistoryOfAchievements;
