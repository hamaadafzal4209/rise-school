"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/common/Hero";

const courses = [
  {
    id: "acca",
    title: "ACCA | Association of Chartered Certified Accountants",
    content: (
      <>
        <p className="mb-4">
          Founded in 1904, the Association of Chartered Certified Accountants (ACCA) is the global
          professional accounting body offering the Chartered Certified Accountant qualification
          (ACCA). It has 233,000 members and 536,000 future members worldwide. ACCA's headquarters
          are in London with principal administrative office in Glasgow. ACCA works through a
          network of over 110 offices and centres in 51 countries - with 346 Approved Learning
          Partners (ALP) and more than 7,600 Approved Employers worldwide, who provide employee
          development. The ACCA also works in Nepal, India, China and Pakistan.
        </p>
        <p className="mb-4">
          The term <strong>‘Chartered’</strong> in ACCA qualification refers to the Royal Charter
          granted in 1974. <strong>‘Chartered Certified Accountant’</strong> is a legally protected
          term. Individuals who describe themselves as Chartered Certified Accountants must be
          members of ACCA and if they carry out public practice engagements, must comply with
          additional regulations such as holding a practising certificate, carrying liability
          insurance and submitting to inspections.
        </p>
        <p className="mb-4">
          The Association of Authorised Public Accountants (AAPA), one of the British professional
          bodies for public accountants, has been a subsidiary of ACCA since 1996.
        </p>
        <p>
          ACCA works in the public interest, ensuring that its members are appropriately regulated.
          It promotes principles-based regulation and takes progressive stances on global issues to
          ensure accountancy continues to grow in reputation and influence.
        </p>
      </>
    ),
  },
  {
    id: "cia",
    title: "CIA | Certified Internal Auditor",
    content: (
      <>
        <p className="mb-4">
          The <strong>Certified Internal Auditor® (CIA®)</strong> designation is the only globally
          accepted certification for internal auditors and remains the standard by which
          individuals demonstrate their competency and professionalism in the internal auditing
          field.
        </p>
        <p className="mb-4">
          Adding the CIA credential to your resume, LinkedIn profile, and business card will help
          you stand out and demonstrate you are:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>A true expert who understands and can apply The IIA's Standards.</li>
          <li>A stronger, more competent professional.</li>
          <li>Equipped for career-advancing opportunities.</li>
          <li>A credible and trusted internal auditor.</li>
        </ul>
        <p>
          As the only globally recognized certification for internal auditors and The IIA’s premier
          designation for more than 40 years, the CIA sets the standard for excellence in the
          profession. CIA holders earn on average <strong>$38,000 more annually</strong> than those
          without certification.
        </p>
      </>
    ),
  },
  {
    id: "cma",
    title: "CMA | Certified Management Accountant",
    content: (
      <>
        <p className="mb-4">
          People with <strong>Certified Management Accountant (CMA)</strong> certification can work
          in corporate financial accounting and strategic management. CMAs specialize in management
          and executive-level duties, analyzing budgets and helping companies make informed business
          decisions.
        </p>
        <p className="mb-4">
          The <strong>Institute of Management Accountants (IMA)</strong> certifies individuals who
          pass the CMA exam. CMA salaries typically surpass non-certified accountants.
        </p>
        <h4 className="text-lg font-semibold mb-2">CMA Requirements</h4>
        <p className="mb-4">
          Prospective CMAs must complete the CMA program, pass the exam, and fulfill IMA’s
          educational and experience requirements. Candidates must hold active IMA membership.
        </p>
        <h4 className="text-lg font-semibold mb-2">Educational Requirements</h4>
        <p>
          Aspiring CMAs must hold either a bachelor's degree from an accredited college or an
          IMA-approved professional certification. Non-accredited degrees require independent
          evaluation. Official transcripts must be sent directly to IMA for verification.
        </p>
      </>
    ),
  },
];

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState("acca");

  return (
    <div className="bg-white">
      <Hero
        title="Courses"
        highlight="RISE Premier"
        description="Explore globally recognized qualifications designed to shape future finance and business leaders."
        breadcrumb="Home » Courses"
        backgroundImage="/assets/course-banner.jpeg"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Explore Our <span className="text-primary">Professional Courses</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Advance your career with globally respected accounting and finance qualifications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {courses.map((course) => (
              <motion.button
                key={course.id}
                onClick={() => setActiveTab(course.id)}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                  activeTab === course.id
                    ? "gradient-primary text-white"
                    : "text-gray-700"
                }`}
              >
                {course.title.split("|")[0].trim()}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {courses
                .filter((course) => course.id === activeTab)
                .map((course) => (
                  <motion.div
                    key={course.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                    <div className="text-gray-700 leading-relaxed">{course.content}</div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
