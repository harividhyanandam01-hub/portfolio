import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"   // ✅ Add id
      className="py-16 px-6 bg-gray-50 text-gray-900 rounded-xl shadow-lg max-w-5xl mx-auto my-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-primary mb-4">Education</h2>
      <p>
        <strong>B.Tech Information Technology</strong> (2016-2020), Anna University (BIT Campus), Thiruchirappalli
      </p>
    </motion.section>
  );
}
