"use client";

import { motion } from "framer-motion";
import { CheckCircle, BookOpen, Layers, ArrowRightCircle } from "lucide-react";
import Hero from "@/components/common/Hero";

const ciaCourse = {
  id: "cia",
  title: "CIA | Certified Internal Auditor",
  sections: [
    {
      heading: "What is CIA (Certified Internal Auditor)?",
      content: [
        "The CIA is a globally recognized certification for professionals specializing in internal audit, risk management, and internal control.",
        "It’s offered by the IIA (Institute of Internal Auditors), USA.",
        "It demonstrates your expertise in auditing, governance, risk, and compliance — essential for internal auditors in corporate and government sectors.",
      ],
    },
    {
      heading: "Key Highlights",
      subjects: [
        {
          title: "Feature Details",
          papers: [
            "Full Form: Certified Internal Auditor",
            "Offered by: The Institute of Internal Auditors (IIA), USA",
            "Recognition: Global (especially in USA, Middle East, Europe, and Asia)",
            "Duration: 12–18 months (average)",
            "Levels: 3 Parts",
            "Mode of Exam: Computer-based, at Pearson VUE testing centers worldwide",
            "Exam Format: Multiple-choice questions (MCQs) only",
          ],
        },
      ],
    },
    {
      heading: "CIA Exam Structure",
      subjects: [
        {
          title: "Part 1 – Essentials of Internal Auditing",
          papers: [
            "Foundations of Internal Auditing",
            "Independence and Objectivity",
            "Proficiency and Due Professional Care",
            "Quality Assurance and Improvement Program",
            "Governance, Risk Management, and Control",
            "Fraud Risks",
            "📊 Total Questions: 125 MCQs",
            "🕒 Duration: 2.5 hours",
          ],
        },
        {
          title: "Part 2 – Practice of Internal Auditing",
          papers: [
            "Managing the Internal Audit Function",
            "Planning the Engagement",
            "Performing the Engagement",
            "Communicating Results and Monitoring Progress",
            "📊 Total Questions: 100 MCQs",
            "🕒 Duration: 2 hours",
          ],
        },
        {
          title: "Part 3 – Business Knowledge for Internal Auditing",
          papers: [
            "Business Acumen",
            "Information Security",
            "Information Technology",
            "Financial Management",
            "📊 Total Questions: 100 MCQs",
            "🕒 Duration: 2 hours",
          ],
        },
      ],
    },
    {
      heading: "Eligibility Requirements",
      content: [
        "To earn the CIA credential, you must meet the following requirements:",
      ],
      subjects: [
        {
          title: "Education",
          papers: [
            "A Bachelor’s degree (in any discipline) from an accredited institution.",
            "Students in the final year can also start the program (proof required later).",
            "Alternatively, certain work experience can substitute for education (based on IIA criteria).",
          ],
        },
        {
          title: "Experience",
          papers: [
            "24 months of internal auditing or related experience (e.g., risk, compliance, quality assurance).",
            "For candidates with a Master’s degree, experience requirement is 12 months.",
            "Work experience can be obtained before or within 7 years of passing the exam.",
          ],
        },
        {
          title: "Membership",
          papers: ["IIA membership (required to register for the CIA exams)."],
        },
      ],
    },
    {
      heading: "CIA Fee Structure (Approx.)",
      subjects: [
        {
          title: "Fee Details",
          papers: [
            "Application Fee — IIA Member: $115 | Non-Member: $230 | Student Member: $65",
            "Part 1 Exam Fee — IIA Member: $295 | Non-Member: $425 | Student Member: $245",
            "Part 2 Exam Fee — IIA Member: $265 | Non-Member: $395 | Student Member: $215",
            "Part 3 Exam Fee — IIA Member: $265 | Non-Member: $395 | Student Member: $215",
            "Total Cost (3 parts): ~ $940 (Member) | ~ $1,445 (Non-Member) | ~ $740 (Student Member)",
            "(Fees may vary slightly depending on country/region.)",
          ],
        },
      ],
    },
    {
      heading: "Exam Windows",
      content: [
        "CIA exams are available year-round — you can schedule anytime via Pearson VUE test centers.",
      ],
    },
    {
      heading: "Career Opportunities",
      subjects: [
        {
          title: "Popular Job Roles",
          papers: [
            "Internal Auditor",
            "Risk Analyst",
            "Compliance Officer",
            "Audit Manager",
            "Internal Controls Specialist",
            "Chief Audit Executive (senior level)",
          ],
        },
        {
          title: "Top Employers",
          papers: [
            "Big 4 firms (Deloitte, PwC, EY, KPMG)",
            "Banks and Financial Institutions",
            "Government Audit Departments",
            "Fortune 500 companies",
          ],
        },
      ],
    },
  ],
};

const iconMap = [BookOpen, CheckCircle, ArrowRightCircle, Layers];

export default function CIAPage() {
  return (
    <main className="bg-white text-gray-900">
      <Hero
        title="CIA Qualification"
        // highlight="Certified Internal Auditor"
        description="Become a globally recognized internal audit expert with the Certified Internal Auditor — your gateway to a successful career in governance, risk, and control."
        breadcrumb="Home » Courses » CIA"
        backgroundImage="/assets/courses/CIA.png"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight text-gray-900">
              {ciaCourse.title}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              The globally respected certification for internal auditors, risk
              managers, and compliance professionals — offered by the Institute
              of Internal Auditors (IIA), USA.
            </p>
          </div>

          {ciaCourse.sections.map((section, index) => {
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
