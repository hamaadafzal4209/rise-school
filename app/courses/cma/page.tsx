"use client";

import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Layers, ArrowRightCircle } from "lucide-react";
import Hero from "@/components/common/Hero";

const cmaCourse = {
  id: "cma",
  title: "CMA | Certified Management Accountant",
  sections: [
    // SECTION 1
    {
      heading: "What is CMA (USA)?",
      content: [
        "CMA stands for Certified Management Accountant — a globally recognized professional certification offered by the Institute of Management Accountants (IMA), USA.",
        "It focuses on management accounting and financial management skills, emphasizing strategic planning, decision support, and internal control rather than just traditional financial reporting.",
      ],
    },

    // SECTION 2
    {
      heading: "Key Highlights",
      subjects: [
        {
          title: "Feature Details",
          papers: [
            "Offered by: Institute of Management Accountants (IMA), USA",
            "Recognition: Global (high demand in USA, Middle East, Canada, India, Europe)",
            "Duration: 6–12 months (average: 12–18 months)",
            "Levels: 2 parts (no levels like CA or CPA)",
            "Mode of Exam: Computer-based at Prometric centers worldwide",
            "Pass Rate: Approximately 45–50% per part",
          ],
        },
      ],
    },

    // SECTION 3
    {
      heading: "CMA (USA) Exam Structure",
      subjects: [
        {
          title: "Part 1 – Financial Planning, Performance, and Analytics",
          papers: [
            "• External Financial Reporting Decisions",
            "• Planning, Budgeting, and Forecasting",
            "• Performance Management",
            "• Cost Management",
            "• Internal Controls",
            "• Technology and Analytics",
          ],
        },
        {
          title: "Part 2 – Strategic Financial Management",
          papers: [
            "• Financial Statement Analysis",
            "• Corporate Finance",
            "• Decision Analysis",
            "• Risk Management",
            "• Investment Decisions",
            "• Professional Ethics",
          ],
        },
        {
          title: "Exam Format",
          papers: [
            "• 100 Multiple-Choice Questions (MCQs) per part",
            "• 2 Essay Questions (case-based) per part",
            "🕒 Total Duration: 4 hours (3 hours MCQs + 1 hour essay)",
          ],
        },
      ],
    },

    // SECTION 4
    {
      heading: "Eligibility Requirements",
      subjects: [
        {
          title: "Education",
          papers: [
            "• A Bachelor's degree in any discipline from an accredited university.",
          ],
        },
        {
          title: "Experience",
          papers: [
            "• 2 years of relevant work experience in management accounting or financial management.",
            "• Experience can be completed before or within 7 years after passing the exam.",
          ],
        },
        {
          title: "Membership",
          papers: [
            "• Active IMA (Institute of Management Accountants) membership is required.",
          ],
        },
      ],
    },

    // SECTION 5
    {
      heading: "CMA (USA) Fee Structure (Approx.)",
      subjects: [
        {
          title: "Fee Details",
          papers: [
            "IMA Membership — Professional: $295 annually | Student: $49 annually",
            "Entrance Fee — Professional: $300 | Student: $225",
            "Exam Fee (Per Part) — Professional: $495 | Student: $370",
            "Total Cost (2 parts): ~ $1,585 (Professional) | ~ $1,000 (Student)",
            "(Fees may vary depending on region and membership type.)",
          ],
        },
      ],
    },

    // SECTION 6
    {
      heading: "Exam Windows",
      content: [
        "CMA exams are conducted in three windows each year. Candidates may take Part 1 or Part 2 in any order.",
      ],
      subjects: [
        {
          title: "Windows",
          papers: [
            "• January – February",
            "• May – June",
            "• September – October",
          ],
        },
      ],
    },

    // SECTION 7
    {
      heading: "Career Opportunities",
      subjects: [
        {
          title: "Common Job Roles",
          papers: [
            "• Financial Analyst",
            "• Cost Accountant",
            "• Management Accountant",
            "• Finance Manager",
            "• Budget Analyst",
            "• Controller / CFO (senior level)",
          ],
        },
        {
          title: "Top Employers",
          papers: [
            "• Deloitte, EY, PwC, KPMG",
            "• Accenture, IBM, Amazon",
            "• Coca-Cola, Johnson & Johnson",
            "• Multinational Corporations (MNCs)",
            "• Banks & Financial Institutions",
            "• Manufacturing, FMCG, Tech Companies",
          ],
        },
      ],
    },
  ],
};

const iconMap = [BookOpen, CheckCircle, ArrowRightCircle, Layers];

export default function CMAPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero
        title="CMA Qualification"
        highlight="Certified Management Accountant (USA)"
        description="Become a globally recognized financial strategist through the CMA (USA) qualification — highly valued in management accounting, finance, and corporate decision-making roles."
        breadcrumb="Home » Courses » CMA"
        backgroundImage="/assets/course-banner.jpeg"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight text-gray-900">
              {cmaCourse.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A globally respected certification for aspiring financial analysts, management accountants, and strategic finance professionals — offered by the Institute of Management Accountants (IMA), USA.
            </p>
          </div>

          {cmaCourse.sections.map((section, index) => {
            const Icon = iconMap[index % iconMap.length];
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
    </main>
  );
}
