import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const terms = [
  "CAF Online Admission March 2026 have right to use course material (including class notes, tests, solutions etc.) developed by RISE Premier School of Accountancy for upcoming session March 2026 attempt.",
  "Classroom recorded lectures, real experience of learning same as conventional classroom learning.",
  "Six lectures in a week will be uploaded on average daily one lecture. Unavoidable circumstances may cause delays.",
  "RISE has developed a model to facilitate students with a licensed download option available on each video lecture playable on registered device (Windows or Android) in HD quality. However students are not allowed to make copies of the videos in any way which is considered unethical and illegal.",
  "For identification purpose, user log-in details will appear on screen while streaming.",
  "Once downloaded, the video can only be played with Xvast browser.",
  "You can watch video lectures on a single registered device i.e., Computer (Windows) or Mobile (Android). iOS and Apple devices are not supported.",
  "One device (computer or mobile) will be registered with the system for online streaming or downloads.",
  "Fee paid is non-refundable, non-adjustable and non-transferable.",
  "Availability of course material up to exam date.",
  "Teacher-managed WhatsApp groups for each subject, swift response ensured.",
  "Attempt test at home and upload scanned image. Submission and marking only once — resubmission is not allowed.",
  "Technical support from Monday to Saturday between 9:00 AM to 5:00 PM.",
  "Rs. 1,000 will be charged for device switching.",
  "Nonpayment or delay in fee may cause access restriction (Block ID) until dues are cleared.",
  "Max two installments allowed. 1st Installment 50% (Rs: 6000/-) at admission time and 2nd Installment 50% (Rs: 6000/-) after one month.",
  "Students can avail only one discount option by submitting relevant documents at the time of admission.",
];

const TermsAndCondition = () => {
  const [agree, setAgree] = useState(false);

  return (
    <div>
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-12"
        >
          Terms & Conditions
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <ul className="space-y-5">
            {terms.map((t, i) => (
              <li key={i} className="flex gap-3 text-left">
                <CheckCircle className="text-primary mt-1 shrink-0" size={20} />
                <p className="text-muted-foreground leading-relaxed">{t}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-8 flex items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 w-5 h-5 cursor-pointer accent-primary"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-foreground text-lg cursor-pointer">
            I have read and agree to all the{" "}
            <span className="text-primary font-semibold">
              Terms and Conditions
            </span>{" "}
            and{" "}
            <span className="text-primary font-semibold">Privacy Policy</span>{" "}
            of RISE Premier School of Accountancy.
          </label>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCondition;
