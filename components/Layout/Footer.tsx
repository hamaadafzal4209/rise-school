"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaTelegramPlane,
} from "react-icons/fa";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Campus Life", href: "/about" },
    { name: "Faculty", href: "/faculty" },
    { name: "Events", href: "/events" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: FaYoutube,
      href: "https://www.youtube.com/@riseonline8058",
      label: "YouTube",
      bg: "bg-red-600",
    },
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/riseschool.pk",
      label: "Facebook",
      bg: "bg-blue-600",
    },
    {
      icon: FaTwitter,
      href: "https://x.com/intent/post?url=https%3A%2F%2Fwww.riseschool.edu.pk%2Fcontact-us%2F",
      label: "Twitter",
      bg: "bg-sky-500",
    },
    {
      icon: FaPinterestP,
      href: "https://www.pinterest.com/pin/create/button/?url=https://www.riseschool.edu.pk/contact-us/&media=https://www.riseschool.edu.pk/wp-includes/images/media/default.svg&description=Contact+us",
      label: "Pinterest",
      bg: "bg-red-500",
    },
    {
      icon: FaTelegramPlane,
      href: "https://telegram.me/share/url?url=https://www.riseschool.edu.pk/contact-us/",
      label: "Telegram",
      bg: "bg-sky-400",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com",
      label: "LinkedIn",
      bg: "bg-blue-700",
    },
  ];

  return (
    <footer
      ref={ref}
      className="bg-primary text-white relative overflow-hidden"
    >
      <div className="relative z-10">
        <div className="container mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  width={500}
                  height={500}
                  src={"/assets/Rise-Logo.png"}
                  className="w-24"
                  alt="RISE Logo"
                />
              </div>

              <p className="text-white/80 leading-relaxed mb-6 max-w-md">
                RISE stands for Resurgence and Intuition for Strategic
                Excellence. Our school is dedicated to the holistic development
                of students, aiming to nurture them into socially responsible
                and productive citizens.
              </p>

              <div className="space-y-3 text-white/90">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-white/70 mt-1" />
                  <span>Aurangzeb Block, Garden Town, Lahore, Punjab</span>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-white/70 mt-1" />
                  <div className="flex flex-col">
                    <span>
                      Garden Town Branch: <strong>35941920</strong>
                    </span>
                    <span>
                      Gulberg Branch: <strong>35751240</strong>
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-white/70" />
                  <span>info@riseschool.edu.pk</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="font-heading font-bold text-xl mb-6">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300"
                    >
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="font-heading font-bold text-xl mb-6">
                Stay Connected
              </h3>
              <TooltipProvider>
                <div className="flex flex-wrap gap-4 mb-8">
                  {socialLinks.map((social, index) => (
                    <Tooltip key={social.label}>
                      <TooltipTrigger asChild>
                        <motion.a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            delay: 0.5 + index * 0.1,
                            duration: 0.5,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`w-12 h-12 ${social.bg} rounded-full flex items-center justify-center shadow-md hover:opacity-90 transition duration-300`}
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5 text-white" />
                        </motion.a>
                      </TooltipTrigger>
                      <TooltipContent side="top">
                        <p>{social.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="border-t border-white/20"
        >
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/80 text-sm">
                © {new Date().getFullYear()} RISE Premier. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-white/80">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
