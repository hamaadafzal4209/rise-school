"use client";

import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Layers, ArrowRightCircle } from "lucide-react";
import Hero from "@/components/common/Hero";

const accaCourse = {
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
};

const iconMap = [BookOpen, CheckCircle, ArrowRightCircle, Layers];

export default function ACCAPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero
        title="ACCA Qualification"
        // highlight="Association of Chartered Certified Accountants"
        description="Become a globally recognized accounting professional with ACCA — the world’s leading qualification for future-ready finance experts."
        breadcrumb="Home » Courses » ACCA"
        backgroundImage="/assets/courses/ACCA.png"
      />

      <section className="pt-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight text-gray-900">
              {accaCourse.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A complete professional pathway for aspiring accountants and
              finance professionals around the world.
            </p>
          </div>

          {accaCourse.sections.map((section, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative bg-white rounded-xl shadow border border-gray-100 p-6 mb-10"
              >
                <div className="absolute top-0 left-0 h-full w-1.5 gradient-primary rounded-l-xl" />
                <div className="pl-4 md:pl-6">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-gray-900">
                    {Icon && <Icon className="gradient-text" size={26} />}
                    <span className="gradient-text">{section.heading}</span>
                  </h3>

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
        </div>
      </section>

      <section className="pb-20 pt-8 bg-linear-to-r from-blue-50 via-cyan-50 to-teal-50">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">
            Why Choose{" "}
            <span className="text-gradient bg-clip-text">RISE Premier</span> for
            ACCA
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-8">
            RISE Premier: Your Gateway to a Global ACCA Career
          </p>

          <div className="max-w-4xl mx-auto space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>
              Join one of the best ACCA colleges in Lahore and unlock
              international opportunities in accounting, finance, and business.
            </p>
            <p>
              At RISE Premier School of Accountancy, we combine world-class
              teaching, modern technology, and personal mentorship to make your
              ACCA journey successful and rewarding.
            </p>
            <p>
              With top-tier faculty, structured coaching, and global career
              support, RISE Premier stands out as one of the best ACCA
              institutes in Lahore and Pakistan — where your dream of becoming
              an internationally recognized finance professional matures.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
