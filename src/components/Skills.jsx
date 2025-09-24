import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-16 px-6 bg-bgDark text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-accent mb-6">Skills</h2>
      <p className="space-x-2">
        SQL, Spark SQL, PySpark, Azure Databricks, Azure Data Factory, Azure Storage Explorer, 
        Azure Key Vault, Python, Git/GitHub, SSMS, SSIS, Power BI
      </p>
    </motion.section>
  );
}
