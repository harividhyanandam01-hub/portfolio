import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"   // ✅ Already correct
      className="py-16 px-6 bg-bgDark text-white rounded-xl shadow-lg max-w-5xl mx-auto my-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-accent mb-6">Contact Me</h2>
      <p className="mb-4">
        📞 +91 7530057808<br/>
        📧 <a href="mailto:prabharamureddi@gmail.com" className="text-accent underline">prabharamureddi@gmail.com</a><br/>
        📍 Bangalore
      </p>
      <a
        href="mailto:prabharamureddi@gmail.com"
        className="mt-4 inline-block px-6 py-3 bg-accent text-secondary font-semibold rounded-full shadow-lg hover:bg-yellow-400"
      >
        Email Me
      </a>
    </motion.section>
  );
}
