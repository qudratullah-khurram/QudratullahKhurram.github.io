import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaDatabase } from "react-icons/fa";
import { SiDjango, SiMongodb, SiExpress, SiTailwindcss } from "react-icons/si";
import myPhoto from "../assets/me.jpg";

export default function About() {
  return (
    <section id="about" style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.title}
      >
        About Me
      </motion.h2>

      <div style={styles.container}>
        <motion.img
          src={myPhoto}
          alt="Qudratullah Khurram"
          style={styles.image}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.textBox}
        >
          <h3 style={styles.heading}>
            I’m <span style={{ color: "#00bcd4" }}>Qudratullah Khurram</span> —
            a passionate Full-Stack Developer based in England 🇬🇧
          </h3>

          <p style={styles.paragraph}>
            I recently graduated in Software Engineering, where I built a strong
            foundation in both frontend and backend technologies. I love
            creating web experiences that are not only functional but also
            engaging, accessible, and performance-focused.
          </p>

          <p style={styles.paragraph}>
            I enjoy exploring new tools, improving my design sense, and writing
            clean, maintainable code. Whether it’s building an elegant UI in
            React, crafting APIs with Node.js or Django, or integrating
            full-stack MERN projects — I’m always excited to bring ideas to life.
          </p>

          <p style={styles.paragraph}>
            My goal is to grow as a creative problem solver, work on meaningful
            digital products, and continuously push my technical and
            communication skills forward.
          </p>
          <div style={styles.skills}>
            <h4 style={{ marginBottom: "1rem" }}>Tech Stack</h4>
            <div style={styles.icons}>
              <FaReact title="React" />
              <FaNodeJs title="Node.js" />
              <SiExpress title="Express" />
              <SiMongodb title="MongoDB" />
              <FaPython title="Python" />
              <SiDjango title="Django" />
              <FaDatabase title="Databases" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "5rem 2rem",
    backgroundColor: "#0b1220",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: "2.5rem",
    color: "#00bcd4",
    marginBottom: "3rem",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: "3rem",
  },
  image: {
    width: "260px",
    height: "260px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 0 25px rgba(0, 188, 212, 0.5)",
  },
  textBox: {
    maxWidth: "600px",
    textAlign: "left",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  paragraph: {
    color: "#ccc",
    fontSize: "1rem",
    lineHeight: "1.7",
    marginBottom: "1rem",
  },
  skills: {
    marginTop: "2rem",
  },
  icons: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1.2rem",
    fontSize: "2rem",
    color: "#00bcd4",
  },
};
