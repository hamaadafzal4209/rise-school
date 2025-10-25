"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import FacultyCard from "@/components/common/FacultyCard";
import Hero from "@/components/common/Hero";

const ManagementPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const managementMembers = [
    {
      name: "Mr. Naveed Ansari",
      designation: "Chief Executive Officer (CEO) & Faculty Member",
      image: '/assets/management/management1.jpg'
       },
    {
      name: "Mr. Tanveer Ansari",
      designation: "Director Business Development",
      image: '/assets/management/management2.jpg'
    },
    {
        name: "Mr. Adnan Rasheed",
        designation: "Director Operations & Faculty Member",
        image: '/assets/management/management3.jpg'
    },
    {
      name: "Mr. Zahid Qavi",
      designation: "Director Online Education & Faculty Member",
      image: '/assets/management/management4.jpg'
    },
  ];

  return (
    <section ref={ref}>
      <Hero
        title="Meet Our"
        highlight="Management"
        description="The management team of RISE Premier leads with dedication and excellence, guiding our institution toward continuous growth and innovation."
        breadcrumb="Home » Management"
      />
      <div className="container mx-auto py-20 px-4">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {managementMembers.map((member, index) => (
            <FacultyCard
              key={member.name}
              name={member.name}
              designation={member.designation}
              image={member.image}
              experience=""
              education=""
              email=""
              delay={index * 0.15}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ManagementPage;
