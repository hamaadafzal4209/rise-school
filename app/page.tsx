import AboutSection from "@/components/AboutSection";
import CampusFacilities from "@/components/CampusFacilities";
import CampusLife from "@/components/CampusLife";
import EventGallery from "@/components/EventGallery";
import FacultySection from "@/components/FacultySection";
import Hero from "@/components/Hero";
import TestimonialSlider from "@/components/Testimonial";
import WhyChooseUs from "@/components/WhyChooseUs";

const page = () => {
  return (
    <div>
      <Hero />
      <CampusFacilities />
      <AboutSection />
      <FacultySection />
      <WhyChooseUs />
      <CampusLife />
      <EventGallery />
      <TestimonialSlider />
    </div>
  );
};

export default page;
