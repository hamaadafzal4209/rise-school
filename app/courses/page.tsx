"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, BookOpen, Layers, ArrowRightCircle } from "lucide-react";
import Hero from "@/components/common/Hero";

const courses = [
  {
    id: "ca",
    title: "CA | Chartered Accountancy",
    sections: [
      {
        heading: "Introduction",
        content: [
          "Chartered Accountancy (CA) is a prestigious professional qualification that prepares individuals to excel in accounting, finance, and business management.",
          "Chartered Accountants are trusted experts who manage finances, audit accounts, and provide strategic financial advice.",
          "The CA program builds strong analytical, technical, and ethical skills — opening doors to careers in auditing, taxation, financial management, and business leadership across the world.",
        ],
      },
      {
        heading: "Benefits of CA",
        list: [
          "Prestige & Recognition: Highly respected professional qualification, valued in Pakistan and abroad.",
          "Career Opportunities: Work in audit, finance, banking, taxation, or corporate leadership.",
          "High Income Potential: Excellent salary packages and strong career growth.",
          "Global Mobility: Recognized internationally through ICAP’s global partnerships.",
          "Job Security: Constant demand for financial and accounting experts.",
          "Leadership & Entrepreneurship: Opens doors to becoming a CFO, CEO, or business owner.",
          "Professional Development: Continuous learning and skill enhancement through ICAP.",
          "Contribution to Economy: CAs strengthen transparency, governance, and financial systems.",
        ],
      },
      {
        heading: "Entry Routes",
        content: [
          "Multiple pathways are available depending on your educational background:",
        ],
        subjects: [
          {
            title: "HSSC / A-Levels (or equivalent) route",
            papers: [
              "Pass HSSC (Intermediate) with minimum 60% aggregate marks → Eligible for direct registration.",
              "Pass A-Levels (three subjects) with aggregate equivalent to 60% → Eligible for direct registration.",
              "If HSSC/A-Levels with 50%–60% marks → Must pass the Qualifying Assessment Test (QAT) before registration.",
            ],
          },
          {
            title: "Graduate / Degree route",
            papers: [
              "Bachelor’s degree with 16 years of education from a recognised university → Eligible for registration as trainee.",
              "Bachelor’s degree (minimum 14 years of education) with aggregate 45% or equivalent and having passed required prior assessments (PRC or AFC) → Eligible for trainee registration.",
            ],
          },
          {
            title: "Other Qualifications",
            papers: [
              "Holders of ICMAP, PIPFA, ACCA, or HEC-recognized degrees may also enter CA with applicable exemptions.",
            ],
          },
        ],
      },
      {
        heading: "List of Subjects",
        subjects: [
          {
            title: "PRC - Pre-Requisite Competencies (3 papers)",
            papers: [
              "PRC-01: Introduction to Accounting",
              "PRC-02: Quantitative Methods for Business",
              "PRC-03: Introduction to Business & Economic Insights",
            ],
          },
          {
            title: "CAF - Certificate in Accounting & Finance (8 papers)",
            papers: [
              "Group A:",
              "CAF-01: Financial Accounting & Reporting",
              "CAF-02: Taxation Principles & Compliance",
              "CAF-03: Data, Systems & Risks",
              "CAF-04: Business Law Dynamics",
              "Group B:",
              "CAF-05: Management Accounting",
              "CAF-06: Corporate Reporting",
              "CAF-07: Business Insights & Analysis",
              "CAF-08: Audit & Assurance Essentials",
            ],
          },
          {
            title:
              "CFAP - Certified Finance & Accounting Professional (6 papers)",
            papers: [
              "CFAP-01: Advanced Corporate Reporting",
              "CFAP-02: Corporate Laws & Governance",
              "CFAP-03: Sustainability for Accountants (New)",
              "CFAP-04: Strategic Business Finance",
              "CFAP-05: Taxation Practice & Planning",
              "CFAP-06: Audit, Assurance & Data Management",
            ],
          },
          {
            title: "Strategic Case Study (replaces old MSA papers)",
            papers: [
              "One comprehensive case-study assessment in place of the previous two MSA papers.",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "acca",
    title: "ACCA | Association of Chartered Certified Accountants",
    sections: [
      {
        heading: "Introduction",
        content: [
          "The Association of Chartered Certified Accountants (ACCA) is a leading global body for professional accountants, recognized in over 180 countries.",
          "Founded in the UK, ACCA offers a qualification that equips students with strong knowledge and practical skills in accounting, finance, auditing, taxation, and business management.",
          "The ACCA qualification prepares individuals to work as finance professionals across industries — from multinational corporations to public sector organizations.",
          "It focuses on global standards, ethics, and practical experience, ensuring members are ready for modern business challenges.",
          "With flexible study options and worldwide recognition, ACCA opens doors to international career opportunities and professional growth.",
        ],
      },
      {
        heading: "Benefits of ACCA",
        list: [
          "Global Recognition: Recognized in over 180 countries, providing international career opportunities.",
          "Diverse Career Options: Work in audit, taxation, finance, consulting, or management across industries.",
          "Flexible Study Path: Study full-time, part-time, or online to balance work, study, and personal life.",
          "High Employability: Preferred by top employers for technical knowledge and ethical values.",
          "Affordable and Accessible: Cost-effective compared to other international qualifications.",
          "Professional Growth: Continuous learning to stay updated with financial and business trends.",
          "Pathway to Leadership: Many members become CFOs, finance directors, or business leaders.",
        ],
      },
      {
        heading: "Entry Routes",
        content: [
          "You can start your ACCA journey through several routes depending on your educational background:",
        ],
        subjects: [
          {
            title: "After Intermediate / A-Levels",
            papers: [
              "Students with Intermediate, A-Levels, or equivalent qualifications can directly register for the Applied Knowledge Level.",
              "If you don’t meet the entry requirements, you can begin with the Foundations in Accountancy (FIA) route, which leads to ACCA.",
            ],
          },
          {
            title: "After Graduation",
            papers: [
              "Students with a Bachelor’s degree (B.Com, BBA, BS Accounting & Finance, etc.) can enter directly into the Applied Skills Level.",
              "Some paper exemptions may be granted based on your prior qualifications.",
            ],
          },
          {
            title: "After Professional Qualifications",
            papers: [
              "Holders of recognized professional qualifications (like ICMAP, PIPFA, CA-Inter, etc.) may receive multiple exemptions depending on their credentials.",
              "You can check exemptions on ACCA’s official website: www.accaglobal.com.",
            ],
          },
          {
            title: "After O-Levels / Matric",
            papers: [
              "Students who have completed O-Levels or Matric can start with the Foundations in Accountancy (FIA) program first.",
              "After completing FIA, they can progress to the main ACCA qualification.",
            ],
          },
        ],
      },
      {
        heading: "List of Subjects",
        subjects: [
          {
            title: "Applied Knowledge Level (3 papers)",
            papers: [
              "BT – Business and Technology",
              "MA – Management Accounting",
              "FA – Financial Accounting",
            ],
          },
          {
            title: "Applied Skills Level (6 papers)",
            papers: [
              "LW – Corporate and Business Law",
              "PM – Performance Management",
              "TX – Taxation",
              "FR – Financial Reporting",
              "AA – Audit and Assurance",
              "FM – Financial Management",
            ],
          },
          {
            title: "Strategic Professional Level (5 papers)",
            papers: [
              "Essentials (Compulsory):",
              "SBL – Strategic Business Leader",
              "SBR – Strategic Business Reporting",
              "Options (Choose any two):",
              "AFM – Advanced Financial Management",
              "APM – Advanced Performance Management",
              "ATX – Advanced Taxation",
              "AAA – Advanced Audit and Assurance",
            ],
          },
          {
            title: "Additional Requirement",
            papers: [
              "Ethics and Professional Skills Module (EPSM) – Must be completed before final exams.",
              "Practical Experience Requirement (PER) – 36 months of relevant work experience.",
            ],
          },
        ],
      },
    ],
  },
];

const iconMap = [BookOpen, CheckCircle, ArrowRightCircle, Layers];

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState("ca");
  const activeCourse = courses.find((course) => course.id === activeTab);

  return (
    <main className="bg-white text-gray-900">
      <Hero
        title="Courses"
        highlight="RISE Premier"
        description="Explore globally recognized accountancy qualifications designed to shape the next generation of finance professionals."
        breadcrumb="Home » Courses"
        backgroundImage="/assets/course-banner.jpeg"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight text-gray-900">
              Our Professional Programs
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Learn about top global qualifications that develop ethical,
              skilled, and future-ready finance leaders.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {courses.map((course) => (
              <motion.button
                key={course.id}
                onClick={() => setActiveTab(course.id)}
                whileTap={{ scale: 0.97 }}
                className={`px-5 py-2 rounded-md font-medium text-base transition-all duration-300 cursor-pointer ${
                  activeTab === course.id
                    ? "gradient-primary text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-indigo-400"
                }`}
              >
                {course.title.split("|")[0].trim()}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeCourse && (
              <motion.div
                key={activeCourse.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="text-center mb-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 gradient-text">
                    {activeCourse.title}
                  </h3>
                  <div className="h-1 w-24 gradient-primary mx-auto rounded-full" />
                </div>

                {activeCourse.sections.map((section, index) => {
                  const Icon = iconMap[index];
                  return (
                    <motion.div
                      key={index}
                      className="relative bg-white rounded-xl shadow border border-gray-100 p-4 mb-8"
                    >
                      <div className="absolute top-0 left-0 h-full w-1.5 gradient-primary rounded-l-xl" />
                      <div className="pl-4 md:pl-6">
                        <h4 className="text-2xl font-semibold mb-5 flex items-center gap-3 text-gray-900">
                          {Icon && <Icon className="gradient-text" size={26} />}
                          <p className="inline-block gradient-text">
                            {section.heading}
                          </p>
                        </h4>

                        {section.content && (
                          <div className="space-y-3 text-gray-700 text-base sm:text-lg leading-relaxed">
                            {section.content.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </div>
                        )}

                        {section.list && (
                          <ul className="grid sm:grid-cols-2 gap-3 mt-5">
                            {section.list.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-gray-700 leading-snug"
                              >
                                <CheckCircle
                                  className="text-green-500 mt-1 shrink-0"
                                  size={18}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {section.subjects && (
                          <div className="mt-8 space-y-6">
                            {section.subjects.map((subj, i) => (
                              <div key={i}>
                                <h5 className="font-semibold text-lg sm:text-xl mb-2 gradient-text">
                                  {subj.title}
                                </h5>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 text-base sm:text-lg">
                                  {subj.papers.map((paper, j) => (
                                    <li key={j}>{paper}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default CoursesPage;
