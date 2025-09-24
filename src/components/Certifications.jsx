import { motion } from "framer-motion";

export default function Certifications() {
  return (
    <motion.section
      id="certifications"   // ✅ Add id matching navbar link
      className="py-16 px-6 bg-white text-gray-900 rounded-xl shadow-lg max-w-5xl mx-auto my-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-primary mb-4">Certifications</h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>DP-900: Microsoft Certified Azure Data Fundamentals</li>
        <li>DP-203: Microsoft Certified Azure Data Engineer Associate</li>
      </ul>
    </motion.section>
  );
}
