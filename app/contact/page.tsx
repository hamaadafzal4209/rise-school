"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaShareAlt,
} from "react-icons/fa";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Hero from "@/components/common/Hero";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: "Mobile & WhatsApp",
      text: (
        <>
          <p>+92 327 7333341</p>
          <p>+92 327 7333361</p>
          <p>+92 321 9705444</p>
        </>
      ),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Social Media",
      text: (
        <div className="flex items-center gap-4 mt-2">
          <a
            href="https://www.facebook.com/riseschool.pk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:scale-110 transition-transform"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/risepremier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:scale-110 transition-transform"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/rise"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:scale-110 transition-transform"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://twitter.com/rise_premier"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 hover:scale-110 transition-transform"
          >
            <FaTwitter className="text-2xl" />
          </a>
        </div>
      ),
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Campus Address",
      text: "6 Aurangzaib Block, New Garden Town, Lahore, Pakistan",
      gradient: "from-purple-500 to-fuchsia-500",
    },
    {
      icon: FaEnvelope,
      title: "Email",
      text: (
        <a
          href="mailto:info@risepremier.pk"
          className="text-primary hover:underline"
        >
          info@risepremier.pk
        </a>
      ),
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="bg-white">
      <Hero
        title="Contact"
        highlight="RISE Premier"
        description="For any information or queries, reach out to us via call, WhatsApp, or social media — we&apos;re here to help you succeed."
        breadcrumb="Home » Contact"
        backgroundImage="/assets/contact-us.jpg"
      />

      <section ref={ref} className="pt-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Stay connected with RISE for admissions, batch updates, or career
              guidance. We&apos;d love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  {item.icon ? (
                    <div
                      className={`w-12 h-12 bg-linear-to-tr ${item.gradient} text-white rounded-lg flex items-center justify-center shrink-0 shadow-md`}
                    >
                      <item.icon className="text-xl" />
                    </div>
                  ) : (
                    <div
                      className={`w-12 h-12 bg-linear-to-tr ${item.gradient} text-white rounded-lg flex items-center justify-center shrink-0 shadow-md`}
                    >
                      <FaShareAlt className="text-xl" />
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-lg text-primary">
                      {item.title}
                    </h4>
                    <div className="text-gray-700 text-sm mt-1 leading-relaxed">
                      {item.text}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="bg-white p-8 shadow-md rounded-xl border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-2"
                  />
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="subject" className="text-gray-700">
                  Subject *
                </Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Enter subject"
                  className="mt-2"
                />
              </div>

              <div className="mt-6">
                <Label htmlFor="message" className="text-gray-700">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Write your message..."
                  rows={4}
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                className="mt-8 w-full gradient-primary text-white font-semibold py-2 transition-all"
              >
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-semibold text-gray-900 mb-6">
            RISE Premier Campus Location
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d850.4900207254525!2d74.3153479!3d31.497781!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904742f0212e1%3A0xaa6a60c77c836fd0!2sRISE%20School%20Of%20Accountancy!5e0!3m2!1sen!2s!4v1762184089943!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full border-t border-gray-200"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
