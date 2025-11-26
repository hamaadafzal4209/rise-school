"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Hero from "@/components/common/Hero";

// Updated categories with filtered images and merged Study + Building
const eventCategories = [
  {
    title: "Prize Distribution",
    folder: "Prize",
    images: [1, 5, 7], // Only show these images
  },
  {
    title: "Naran Trip",
    folder: "Trip",
    images: [2, 4, 8, 9, 10, 12], // Only show these images
  },
  {
    title: "RISE Premier Campus", // Merged heading
    folder: "MergedStudyBuilding",
    images: [
      // Study images 1,2,3
      { folder: "Study", index: 1 },
      { folder: "Study", index: 2 },
      { folder: "Study", index: 3 },
      // Building images 2,3,5
      { folder: "Building", index: 2 },
      { folder: "Building", index: 3 },
      { folder: "Building", index: 5 },
    ],
  },
];

const EventGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<any>(null);
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
  }, [isModalOpen]);

  const openModal = (category: any, index: number) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const nextImage = () => {
    if (!currentCategory) return;
    setCurrentIndex((prev) => (prev + 1) % currentCategory.images.length);
  };

  const prevImage = () => {
    if (!currentCategory) return;
    setCurrentIndex((prev) =>
      prev === 0 ? currentCategory.images.length - 1 : prev - 1
    );
  };

  const getImagePath = (category: any, idx: number) => {
    // For merged category
    if (category.folder === "MergedStudyBuilding") {
      const img = category.images[idx];
      return `/assets/events/${img.folder}${img.index}.jpg`;
    }
    return `/assets/events/${category.folder}${category.images[idx]}.jpg`;
  };

  return (
    <div>
      <Hero
        title="Our Memorable"
        highlight="Events"
        description="Explore unforgettable moments from our academic, recreational, and cultural events"
        breadcrumb="Home » Event Gallery"
        backgroundImage="/assets/events/Prize5.jpg"
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 space-y-20">
          {eventCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center text-foreground">
                {category.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {category.images.map((img: any, i: number) => {
                  const imagePath =
                    category.folder === "MergedStudyBuilding"
                      ? `/assets/events/${img.folder}${img.index}.jpg`
                      : `/assets/events/${category.folder}${img}.jpg`;

                  return (
                    <motion.div
                      key={imagePath}
                      className="relative group overflow-hidden rounded-xl shadow-sm cursor-pointer"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => openModal(category, i)}
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
        {isModalOpen && currentCategory && (
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
                src={getImagePath(currentCategory, currentIndex)}
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
