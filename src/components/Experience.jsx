import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-16 px-6 bg-white text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-bold text-primary mb-6">Experience</h2>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold">Accenture, Bangalore</h3>
          <p className="text-sm italic">Aug 2024 – Present | Data Engineer</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Built ETL pipelines in Azure Data Factory.</li>
            <li>Resolved critical bugs in Databricks notebooks and ADF pipelines.</li>
            <li>Worked with PySpark and real-time pipelines.</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">TCS, Bangalore</h3>
          <p className="text-sm italic">May 2023 – Jul 2024 | Data Engineer</p>
          <ul className="list-disc ml-5 mt-2">
            <li>Built Databricks ETL pipelines and cleaned data using PySpark.</li>
            <li>Created reports to present findings to Program Managers.</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
