import AboutSection from "@/components/AboutSection";
import CampusFacilities from "@/components/CampusFacilities";
import CampusLife from "@/components/CampusLife";
import EventGallery from "@/components/EventGallery";
import FacultySection from "@/components/FacultySection";
import Hero from "@/components/Hero";
import HistoryOfAchievements from "@/components/HistoryOfAchievements";
import TestimonialSlider from "@/components/Testimonial";

const page = () => {
  return (
    <div>
      <Hero />
      <CampusFacilities />
      <AboutSection />
      <FacultySection />
      <HistoryOfAchievements />
      <CampusLife />
      <EventGallery />
      <TestimonialSlider />
    </div>
  );
};

export default page;
