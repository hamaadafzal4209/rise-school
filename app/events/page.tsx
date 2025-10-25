"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Hero from "@/components/common/Hero";

const eventCategories = [
  {
    title: "Prize Distribution",
    folder: "Prize",
    count: 11,
  },
  {
    title: "Naran Trip",
    folder: "Trip",
    count: 12,
  },
  {
    title: "Rise Study",
    folder: "Study",
    count: 6,
  },
  {
    title: "Rise Building",
    folder: "Building",
    count: 13,
  },
];


const EventGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setIsModalOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const openModal = (category: string, index: number) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    const category = eventCategories.find((c) => c.folder === currentCategory);
    if (category) {
      setCurrentIndex((prev) => (prev + 1) % category.count);
    }
  };

  const prevImage = () => {
    const category = eventCategories.find((c) => c.folder === currentCategory);
    if (category) {
      setCurrentIndex((prev) =>
        prev === 0 ? category.count - 1 : prev - 1
      );
    }
  };

  const currentImagePath = currentCategory
    ? `/assets/events/${currentCategory}${currentIndex + 1}.jpg`
    : "";

  return (
    <div>
      <Hero
        title="Our Memorable"
        highlight="Events"
        description="Explore unforgettable moments from our academic, recreational, and cultural events — where learning meets celebration."
        breadcrumb="Home » Event Gallery"
        backgroundImage="/assets/events/prize5.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 space-y-20">
          {eventCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-foreground">
                {category.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: category.count }).map((_, i) => {
                  const imagePath = `/assets/events/${category.folder}${i + 1}.jpg`;
                  console.log(imagePath)
                  return (
                    <motion.div
                      key={imagePath}
                      className="relative group overflow-hidden rounded-xl shadow-sm cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openModal(category.folder, i)}
                    >
                      <img
                        src={imagePath}
                        alt={`${category.title} ${i + 1}`}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          {category.title}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-5xl w-full px-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-white cursor-pointer transition"
              >
                <X size={32} />
              </button>

              <img
                src={currentImagePath}
                alt="Event"
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
              />

              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full transition"
              >
                <ChevronRight size={32} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventGallery;
