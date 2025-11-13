"use client";

import { motion } from "framer-motion";
import Hero from "@/components/common/Hero";
import {
  BookOpenCheck,
  School,
  LaptopMinimal,
  Award,
  Briefcase,
  Globe2,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import FeatureCard from "@/components/common/FeatureCard";

const points = [
  {
    id: 1,
    icon: School,
    title: "Expert Faculty from the Accounting Profession",
    description: `Our strength lies in our qualified Chartered Accountants, ACCA members, and finance professionals who bring real-world experience into every lecture. Their teaching style focuses on conceptual clarity, exam strategy, and mentorship — giving students the edge they need to excel.`,
    color: "from-sky-500 via-blue-500 to-indigo-500",
  },
  {
    id: 2,
    icon: BookOpenCheck,
    title: "Comprehensive Range of Accountancy Courses",
    description: `RISE Premier offers structured programs for CA (ICAP) Courses, ACCA (UK) Qualification, and specialized Accounting Programs — all designed around the latest syllabuses and international standards.`,
    color: "from-purple-500 via-pink-500 to-rose-500",
  },
  {
    id: 3,
    icon: LaptopMinimal,
    title: "Modern Learning Methods & Digital Tools",
    description: `We combine traditional classroom excellence with modern technology. Students can join on-campus classes in Lahore or attend online courses accessible from anywhere in Pakistan and abroad.`,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 4,
    icon: Award,
    title: "Proven Results & Student Success",
    description: `Our high success rates in ICAP and ACCA exams reflect our commitment to excellence. Personalized mentoring, detailed study plans, and mock exams prepare students for consistent top results.`,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 5,
    icon: Briefcase,
    title: "Career-Oriented Training & Professional Guidance",
    description: `RISE Premier prepares students for more than exams — we prepare them for success. From career counseling to internship and interview preparation, our students are guided every step of the way.`,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    icon: Globe2,
    title: "Nationwide Reach with Lahore as the Academic Hub",
    description: `Our main campus in Lahore and digital platform connect students across Pakistan, ensuring access to top-tier accountancy education no matter where they are.`,
    color: "from-sky-500 to-indigo-500",
  },
];

const WhyRisePage = () => {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      <Hero
        title="Why Choose"
        highlight="RISE Premier"
        description="Your Gateway to a Successful Accounting Career — where expert teaching meets proven success and nationwide opportunity."
        breadcrumb="Home » About » Why RISE Premier"
        backgroundImage="/assets/events/Building1.jpg"
      />

      <section className="container mx-auto px-4 lg:px-0 pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Your Gateway to a Successful Accounting Career
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Accounting is one of the most respected and rewarding careers in
            Pakistan — but your journey starts with choosing the right
            institute. At{" "}
            <span className="font-semibold text-primary">RISE Premier</span>, we
            provide world-class accountancy courses to help you excel in
            professional qualifications like CA and ACCA. Whether you’re in
            Lahore or anywhere in Pakistan, RISE offers expert teaching, modern
            learning, and proven success.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 lg:px-0 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {points.map((point, index) => (
            <FeatureCard
              key={point.id}
              icon={point.icon}
              title={point.title}
              description={point.description}
              color={point.color}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>

      <section className="bg-gradient-subtle py-16">
        <div className="container mx-auto px-4 lg:px-0 grid lg:grid-cols-2 items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/assets/events/Building1.jpg"
              alt="RISE Premier Campus"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-5"
          >
            <h3 className="text-3xl font-bold text-primary">
              Building Accountancy Leaders Nationwide
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify">
              From Lahore to every corner of Pakistan, RISE Premier continues to
              shape future accountants with expert-led education, digital
              accessibility, and a passion for excellence. Join a community that
              empowers you to rise above and lead with integrity.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <CheckCircle2 className="text-primary w-6 h-6" />
              <span className="font-medium text-foreground">
                Enroll today and start your journey to success.
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default WhyRisePage;
