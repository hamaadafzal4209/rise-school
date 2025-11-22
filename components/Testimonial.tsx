"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Afaq Ahmad",
      role: "Student",
      image: "/assets/testimonial/AfaqAhmad.jpg",
      rating: 5,
      content:
        "I truly appreciate the cooperative nature of our teaching faculty and management. The college has played a significant role in strengthening my academic foundation as well as my confidence. What I admire most is the institution’s commitment to supporting students in every possible way, whether the need is academic or financial. Proud to be part of a college that upholds such meaningful values.",
    },
    {
      id: 2,
      name: "Ammar Ahmad",
      role: "Student",
      image: "/assets/testimonial/AmmarAhmad.jpg",
      rating: 5,
      content:
        "RISE College has truly shown the value of a student-focused environment. The faculty and management are always professional and supportive, helping students overcome both academic and personal challenges. It’s a place that encourages growth and development in every way.",
    },
    {
      id: 3,
      name: "Farhan Ahmed",
      role: "Student",
      image: "/assets/testimonial/FarhanAhmed.jpg",
      rating: 5,
      content:
        "I am a regular student at RISE Premier School of Accountancy. I prepared my PRC exams from RISE. The faculty is full of great and inspirational teachers, especially Sir Naveed Ansari. By the grace of ALLAH, and the guidance of my teachers, I cleared all five papers in a single attempt. The teachers and management played a vital role in my journey.",
    },
  ];

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const goPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center mt-2">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          What Students Say
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
          Testimonials
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Hear from our students about their journey and experience with RISE.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl shadow-md bg-white p-8">
        <div className="relative w-full">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-6"
            >
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover shadow-md"
              />

              <div className="flex-1">
                <div className="text-5xl text-indigo-200 mb-4 leading-none">
                  "
                </div>

                <p className="text-lg text-gray-700 mb-6 italic">
                  {testimonials[currentIndex].content}
                </p>

                <h3 className="text-xl font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-600 mb-2">
                  {testimonials[currentIndex].role}
                </p>

                <StarRating rating={testimonials[currentIndex].rating} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-indigo-50"
        >
          <ArrowLeft className="w-6 h-6 text-primary" />
        </button>

        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-indigo-50"
        >
          <ArrowRight className="w-6 h-6 text-primary" />
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full ${
                i === currentIndex ? "bg-indigo-700" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
