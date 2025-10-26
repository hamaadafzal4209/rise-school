"use client";

import { motion } from "framer-motion";
import Hero from "@/components/common/Hero";
import FacultyCard from "@/components/common/FacultyCard";

const FacultyPage = () => {
  const facultyMembers = [
    { name: "Sir Ashraf Rehman", image: "/assets/faculty/Ashraf_rehman.png" },
    { name: "Sir Imran Shahzad", image: "/assets/faculty/Imran_Shahzad.png" },
    { name: "Sir Naveed Ansari", image: "/assets/faculty/Naveed_Ansari.png" },
    {
      name: "Sir Sajjad Ahmad Malik",
      image: "/assets/faculty/Sajjad_Ahmad_Malik.png",
    },
    {
      name: "Sir Adnan Rasheed",
      image: "/assets/faculty/Sir_Adnan_Rasheed.png",
    },
    {
      name: "Sir Nosherwan Khawaja",
      image: "/assets/faculty/sir_Nosherwan_Khawaja.png",
    },
    { name: "Sir Touseef", image: "/assets/faculty/Sir_Touseef.png" },
    { name: "Sir Zahid Qavi", image: "/assets/faculty/Sir_Zahid_Qavi.png" },
  ];

  return (
    <div className="bg-white">
      <Hero
        title="Meet Our"
        highlight="Faculty"
        description="Our esteemed faculty members bring academic excellence, professional expertise, and a passion for teaching that inspires students to achieve their goals."
        breadcrumb="Home » Faculty"
        backgroundImage="/assets/events/prize7.jpg"
        backgroundStyles={{ position: "top" }}
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Our <span className="text-primary">Dedicated Faculty</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Meet the educators who shape the future with commitment,
              expertise, and inspiration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {facultyMembers.map((faculty, index) => (
              <FacultyCard
                key={faculty.name}
                name={faculty.name}
                image={faculty.image}
                delay={index * 0.1}
                imageStyles="object-contain"
                backgroundStyle="radial-gradient(circle at center, #fff 0%, #a7d8ff 200%)"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;
