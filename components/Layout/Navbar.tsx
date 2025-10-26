"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Home,
  BookOpen,
  GraduationCap,
  Info,
  Building2,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Management", href: "/management", icon: Building2 },
    { name: "Faculty", href: "/faculty", icon: GraduationCap },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Link href="/">
              <img
                src="/assets/Rise-Logo.png"
                className="w-24"
                alt="RISE Premier"
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "gradient-primary text-white shadow-md"
                        : "text-black"
                    }`}
                  >
                    <item.icon
                      className={`w-4 h-4 ${
                        isActive
                          ? "text-primary-foreground"
                          : "group-hover:text-primary transition-colors"
                      }`}
                    />
                    <span>{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="ml-4 gradient-primary shadow-medium">
                Enroll Now
              </Button>
            </motion.div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg cursor-pointer gradient-primary transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className={`md:hidden overflow-hidden bg-background/95 backdrop-blur-md rounded-lg shadow-medium ${
            isOpen ? "mt-2 mb-4" : ""
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center space-x-3 px-6 py-3 mx-4 rounded-lg font-medium transition-colors ${
                      isActive
                        ? "gradient-primary text-primary-foreground shadow-md"
                        : "text-foreground hover:text-primary hover:bg-muted/40"
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}

            <div className="px-6 pt-2">
              <Button className="w-full gradient-primary shadow-medium">
                Enroll Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
