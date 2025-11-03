"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const TestimonialSlider = () => {
  const ref = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent of Emily, Age 5",
      content:
        "RISE Premier has been a blessing for our family. Emily has blossomed in their caring environment and has made incredible progress with her social skills.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Parent of Alex, Age 6",
      content:
        "The teachers at RISE Premier are exceptional. They truly understand how to engage children with different learning styles and needs.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Williams",
      role: "Parent of Noah, Age 4",
      content:
        "The inclusive environment at RISE Premier has helped Noah develop confidence and friendships. We couldn't be happier with his progress.",
      rating: 4,
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Parent of Sophia, Age 5",
      content:
        "The curriculum is well-designed and the facilities are excellent. Sophia looks forward to going to school every single day.",
      rating: 5,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: any) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const StarRating = ({ rating }: any) => {
    return (
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
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pb-12">
      <div className="text-center mb-16">
        <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
          What Students Say
        </div>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
          Testimonials
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Hear from our students and faculty about their experiences, growth,
          and the supportive community that defines our campus life.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-xl shadow-md bg-white">
        <div className="relative h-[600px] w-full md:h-96 md:ml-8">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center p-6 md:p-12"
            >
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="text-5xl text-indigo-200 mb-4">"</div>
                <p className="text-lg text-gray-700 mb-6 italic pr-12">
                  {testimonials[currentIndex].content}
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {testimonials[currentIndex].role}
                  </p>
                  <StarRating rating={testimonials[currentIndex].rating} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-indigo-50 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-6 h-6 text-indigo-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-indigo-50 transition-colors"
          aria-label="Next testimonial"
        >
          <svg
            className="w-6 h-6 text-indigo-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-indigo-700" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
