import { motion } from "framer-motion";

export default function Summary() {
  return (
    <motion.section
      id="summary"
      className="py-16 px-6 bg-gray-50 text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-primary mb-4">Summary</h2>
      <p>
        Data Engineer specializing in designing and optimizing data pipelines
        for large-scale data processing. 4.5 years of experience in Apache Spark
        (PySpark), Databricks, ADF, and relational databases. Strong background
        in ETL processes, ensuring data quality and performance optimization.
      </p>
    </motion.section>
  );
}
