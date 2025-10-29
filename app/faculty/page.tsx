"use client";

import { motion } from "framer-motion";
import Hero from "@/components/common/Hero";
import Image from "next/image";

const FacultyCard = ({ name, qualification, details, image, delay = 0 } : any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
    >
      <div className="relative w-full h-64 aspect-video bg-gray-100">
        <Image
          src={image}
          alt={name}
          width={500}
          height={400}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary font-semibold mb-3">{qualification}</p>

        <ul className="text-gray-700 text-sm space-y-2 text-left">
          {details.map((point: any, i:any) => (
            <li key={i} className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const FacultyPage = () => {
  const facultyMembers = [
    {
      name: "Sir Naveed Ansari",
      qualification: "FCA",
      details: [
        "23+ Years Teaching Experience",
        "Exam-Focused Methodology",
        "Extensive practice of Past papers",
      ],
      image: "/assets/faculty/SirNaveed.jpg",
    },
    {
      name: "Sir Zahid Qavi",
      qualification: "FCA",
      details: [
        "20+ Years Teaching Experience",
        "3 Certificates of Merit",
        "Innovative Style of Teaching",
      ],
      image: "/assets/faculty/SirZahid.jpg",
    },
    {
      name: "Sir Adnan Rasheed",
      qualification: "FCA",
      details: [
        "20+ Years Teaching Experience",
        "5 Certificates of Merit/Gold Medals in CA Final",
        "7 Position Holders in ACCA",
      ],
      image: "/assets/faculty/SirAdnan.jpg",
    },
    {
      name: "Sir Sajjad Ahmad Malik",
      qualification: "ACCA, LLb, M.A (Econ), CA (Fin)",
      details: [
        "9+ Years of Teaching Experience",
        "Director Taxation at Sumair Ahmad & Co",
        "Known for his engaging and fun teaching style",
      ],
      image: "/assets/faculty/SirSajjadMalik.jpg",
    },
    {
      name: "Sir Ashraf Rehman",
      qualification: "PhD Scholar, MS(IT), MBA(MIS), BCS(H)",
      details: [
        "28+ Years Teaching Experience",
        "5 Position Holders in ACCA",
        "1 Certificate of Merit at CAF Level",
      ],
      image: "/assets/faculty/SirAshrafrehman.jpg",
    },
    {
      name: "Sir Ahmad Hassan",
      qualification: "ACA",
      details: [
        "Expert in Systems Audit, ERP Implementation & Business Process Reengineering",
        "A.F. Ferguson background",
        "Specializes in CAF-03 (Data, System & Risks)",
      ],
      image: "/assets/faculty/SirAhmad.jpg",
    },
    {
      name: "Sir Majid Asghar",
      qualification: "FCA",
      details: [
        "3 Years Teaching Experience",
        "8 Years Industry Experience",
        "2 Years Practice Experience",
      ],
      image: "/assets/faculty/SirMajid.jpg",
    },
    {
      name: "Sir Touseef Ajaib",
      qualification: "ACA",
      details: [
        "Qualified Chartered Accountant & Master in Education",
        "4 Years Teaching Experience",
        "4 Years Industry & 5 Years Practice Experience",
      ],
      image: "/assets/faculty/SirTouseef.jpg",
    },
    {
      name: "Sir Waqar Ansari",
      qualification: "MPhil Stats, MSc Stats, BS Maths, B.Ed.",
      details: [
        "9+ Years Teaching Mathematics and Statistics",
        "Expert in CA Coaching & Academic Mentorship",
        "Transforms complexity into clarity",
      ],
      image: "/assets/faculty/SirWaqar.jpg",
    },
    {
      name: "Sir Mutee ur Rehman",
      qualification: "ACA",
      details: [
        "Associate Chartered Accountant",
        "10+ Years of Post Qualification Experience",
        "Experienced Educator",
      ],
      image: "/assets/faculty/SirMutee_ur_Rehman.jpg",
    },
    {
      name: "Sir Tahir Aziz",
      qualification: "ACCA (Fin)",
      details: [
        "18 Years Teaching Experience",
        "Expert in Cost & Management Accounting, Quantitative Analysis, and MS Office",
        "Trained thousands of professional accountancy students",
      ],
      image: "/assets/faculty/SirTahirAziz.jpg",
    },
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
                qualification={faculty.qualification}
                details={faculty.details}
                image={faculty.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;
