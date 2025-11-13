"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  BookOpen,
  GraduationCap,
  Info,
  Phone,
  ChevronDown,
  CalendarHeartIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // for mobile dropdowns
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null); // for desktop hover
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    {
      name: "About",
      icon: Info,
      subLinks: [
        { name: "Introduction", href: "/about/introduction" },
        { name: "CEO Message", href: "/about/ceo-message" },
        { name: "Why RISE", href: "/about/why-rise" },
      ],
    },
    { name: "Faculty", href: "/faculty", icon: GraduationCap },
    {
      name: "Courses",
      icon: BookOpen,
      subLinks: [
        { name: "CA", href: "/courses/ca" },
        { name: "ACCA", href: "/courses/acca" },
        { name: "CIA", href: "/courses/cia" },
        { name: "CMA", href: "/courses/cma" },
      ],
    },
    { name: "Events", href: "/events", icon: CalendarHeartIcon },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md shadow-md transition-all duration-300"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/">
              <img
                src="/assets/Rise-Logo.png"
                className="w-24"
                alt="RISE Premier"
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const hasDropdown = item.subLinks;

              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() =>
                    hasDropdown && setHoveredDropdown(item.name)
                  }
                  onMouseLeave={() => hasDropdown && setHoveredDropdown(null)}
                >
                  {hasDropdown ? (
                    <button
                      type="button"
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "gradient-primary text-white shadow-md"
                          : "text-black hover:text-primary"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform ${
                          hoveredDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link href={item.href}>
                      <motion.div
                        whileHover={{ y: -2 }}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "gradient-primary text-white shadow-md"
                            : "text-black hover:text-primary"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                      </motion.div>
                    </Link>
                  )}

                  {hasDropdown && (
                    <AnimatePresence>
                      {hoveredDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg border border-gray-100 z-50"
                        >
                          {item.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            <Button className="ml-4 gradient-primary shadow-medium">
              Enroll Now
            </Button>
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md rounded-lg shadow-medium mt-2 mb-4"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const hasDropdown = item.subLinks;

                  return (
                    <div key={item.name}>
                      {hasDropdown ? (
                        <div
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.name ? null : item.name
                            )
                          }
                          className={`flex items-center justify-between space-x-3 px-6 py-3 mx-4 rounded-lg font-medium cursor-pointer transition-colors ${
                            isActive
                              ? "gradient-primary text-white shadow-md"
                              : "text-foreground hover:text-primary hover:bg-muted/40"
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            <item.icon className="w-5 h-5" />
                            <span>{item.name}</span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform ${
                              openDropdown === item.name ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ) : (
                        <Link href={item.href} onClick={() => setIsOpen(false)}>
                          <div
                            className={`flex items-center space-x-3 px-6 py-3 mx-4 rounded-lg font-medium cursor-pointer transition-colors ${
                              isActive
                                ? "gradient-primary text-white shadow-md"
                                : "text-foreground hover:text-primary hover:bg-muted/40"
                            }`}
                          >
                            <item.icon className="w-5 h-5" />
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      )}

                      {hasDropdown && openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-12 pr-6 pb-2 space-y-1"
                        >
                          {item.subLinks.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                            >
                              <div className="py-2 text-sm text-gray-700 hover:text-primary transition-colors">
                                {sub.name}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  );
                })}

                <div className="px-6 pt-2">
                  <Button className="w-full gradient-primary shadow-medium">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
