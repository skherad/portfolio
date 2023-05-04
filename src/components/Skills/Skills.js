import "./Skills.scss";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
  let skills = [
    "HTML",
    "CSS",
    "SASS",
    "JavaScript",
    "TypeScript",
    "Responsive Design",
    "React",
    "Vue 3",
    "Node",
    "Express",
    "MySQL",
    "MongoDB",
    "GraphQL",
    "Git",
    "GitHub",
    "Agile",
  ];
  return (
    <section className="skills">
      <h2 className="skills__title">MY SKILLS</h2>
      <div className="skills__border"></div>
      <ul className="skills__tech-box">
        {skills.map((e) => (
          <motion.li
            className="skills__tech"
            key={uuidv4()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {e}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
