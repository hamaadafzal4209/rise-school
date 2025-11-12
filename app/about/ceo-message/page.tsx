"use client";

import { motion } from "framer-motion";
import Hero from "@/components/common/Hero";
import Image from "next/image";

const CeoMessage = () => {
  return (
    <main className="overflow-x-hidden bg-background text-foreground">
      {/* 🌟 Updated Hero */}
      <Hero
        title="CEO's Message"
        highlight="From the Desk of the CEO"
        description="A vision built on integrity, excellence, and a deep commitment to nurturing future leaders in finance and accountancy."
        breadcrumb="Home » About » CEO's Message"
        backgroundImage="/assets/about/ceo-bg.jpg"
      />

      <section className="container mx-auto px-4 lg:px-0 pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="w-full lg:w-1/2 space-y-5 text-muted-foreground leading-relaxed text-justify">
            <h3 className="text-3xl font-bold text-primary mb-4 text-center md:text-left">
              CEO&apos;s Message
            </h3>

            <p>
              It gives me great pleasure to welcome you to RISE Premier — an
              institution committed to excellence in accounting, finance, and
              business education. Our mission is to cultivate professionals
              equipped with the knowledge, integrity, and analytical skills
              necessary to lead with confidence in today&apos;s dynamic world.
            </p>

            <p>
              At RISE, we go beyond academic achievement. We focus on developing
              individuals who embody professionalism, critical thinking, and
              ethical leadership. Our expert faculty and real-world learning
              environment ensure students are ready to take on global challenges
              with vision and purpose.
            </p>

            <p>
              As CEO, I am deeply committed to ensuring RISE Premier remains a
              symbol of academic excellence and innovation — nurturing future
              leaders who redefine the financial landscape of tomorrow.
            </p>

            <div className="mt-8">
              <p className="font-semibold text-foreground text-lg">
                Naveed Ansari - FCA
              </p>
              <p className="text-primary font-medium">
                Chief Executive Officer
              </p>
              <p className="text-sm text-muted-foreground">
                RISE Premier School of Accountancy
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/assets/ceomessage.jpg"
              alt="CEO of RISE Premier"
              width={500}
              height={600}
              className="rounded-2xl shadow-lg object-cover w-full"
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default CeoMessage;
