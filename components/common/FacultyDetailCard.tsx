import { motion } from "framer-motion";
import Image from "next/image";

const FacultyDetailCard = ({
  name,
  qualification,
  details,
  image,
  delay = 0,
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200"
    >
      <div className="relative w-full h-64 aspect-video bg-gray-100">
        <Image
          src={image}
          alt={name}
          width={500}
          height={400}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-primary font-semibold mb-3">{qualification}</p>

        <ul className="text-gray-700 text-sm space-y-2 text-left">
          {details.map((point: any, i: any) => (
            <li key={i} className="flex items-start">
              <span className="text-primary font-bold mr-2">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default FacultyDetailCard;