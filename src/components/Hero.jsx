import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-primary to-secondary text-white"
    >
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Prabha Ramureddi
      </motion.h1>
      <motion.p
        className="text-xl max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I am a Data Engineer with 4.5 years of experience designing, building, and optimizing data pipelines for large-scale processing. Skilled in Apache Spark (PySpark), Azure Databricks, Azure Data Factory (ADF), and relational databases. Passionate about delivering high-quality ETL solutions to support business insights and analytics.
      </motion.p>

      <div className="mt-8 flex space-x-4">
        <motion.a
          href="#contact"
          className="px-6 py-3 bg-accent text-secondary font-semibold rounded-full shadow-lg hover:bg-yellow-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.a>

        <motion.a
          href="YOUR_CV_LINK_HERE"  // Replace with your Google Drive or CV link
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </div>
    </section>
  );
}
