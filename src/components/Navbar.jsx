import { motion } from "framer-motion";

const navItems = [
  "Hero",
  "Summary",
  "Experience",
  "Skills",
  "Certifications",
  "Accomplishments",
  "Education",
  "Contact",
];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-white shadow-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-blue-600">PR</h1>
        <ul className="flex space-x-6">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-600"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
