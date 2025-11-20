"use client";

import StudentPersonalInfo from "@/components/enrollment/StudentPersonalInfo";
import TermsAndCondition from "@/components/enrollment/termsAndCondition";

export default function EnrollmentTerms() {
  return (
    <section className="min-h-screen container mx-auto py-20 bg-background">
      <TermsAndCondition />
      <StudentPersonalInfo />
    </section>
  );
}
