"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
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
      icon: FaMapMarkerAlt,
      title: "Address",
      text: "Aurangzeb Block, Garden Town, Lahore, Punjab",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: FaPhoneAlt,
      title: "Contact Info",
      text: (
        <>
          <p>UAN: 111 33 7473</p>
          <p>WhatsApp: +923327778952</p>
          <p>Garden Town Branch: 35941920</p>
          <p>Gulberg Branch: 35751240</p>
        </>
      ),
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: FaEnvelope,
      title: "Mail",
      text: "info@riseschool.edu.pk",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: FaClock,
      title: "Work Timings",
      text: (
        <>
          <p>Monday - Friday: 09:00 - 20:00</p>
          <p>Saturday & Sunday: 10:30 - 22:00</p>
        </>
      ),
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        title="Contact"
        highlight="RISE Premier"
        description="Do you have questions about how we can help your child excel? Get in touch with us — we’d love to hear from you."
        breadcrumb="Home » Contact"
        backgroundImage="/assets/contact-us.jpg"
      />

      {/* Contact Section */}
      <section ref={ref} className="pt-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Heading */}
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
              Fill out the form below so we can get to know you and your needs better.
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
                  <div
                    className={`w-12 h-12 bg-linear-to-tr ${item.gradient} text-white rounded-lg flex items-center justify-center shrink-0 shadow-md`}
                  >
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary">{item.title}</h4>
                    <div className="text-gray-700 text-sm mt-1 leading-relaxed">{item.text}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right Side - Contact Form */}
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
                  <Input id="name" type="text" placeholder="Enter your name" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700">
                    Email *
                  </Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="mt-2" />
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="subject" className="text-gray-700">
                  Subject *
                </Label>
                <Input id="subject" type="text" placeholder="Enter subject" className="mt-2" />
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

        {/* Map Sections */}
        <div className="mt-24 space-y-16">
          {/* Garden Town Map */}
          <div>
            <h3 className="text-center text-2xl font-semibold text-gray-900 mb-6">
              Garden Town Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108859.9819677664!2d74.320541!3d31.500135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190476a12b0121%3A0xcae3aaf6d5fd1f9f!2sRISE%20College%20(Garden%20Town%20Campus)!5e0!3m2!1sen!2sus!4v1761399804286!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-t border-gray-200"
            ></iframe>
          </div>

          {/* Gulberg Map */}
          <div>
            <h3 className="text-center text-2xl font-semibold text-gray-900 mb-6">
              Gulberg Campus Location
            </h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108849.35629248974!2d74.336125!3d31.50926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919039fdc8adad9%3A0x2b7a626ffc8984b8!2sGulshan-e-Iqbal%20Park!5e0!3m2!1sen!2sus!4v1761399842347!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-t border-gray-200"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
