import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Example project images
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";

const projects = [
  {
    title: "🏡QuickShelter",
    description:
      "QuickShelter is a Django-based property management system designed for landlords, real estate agents, and short-term rental operators (like Airbnb hosts) to manage properties, tenants, and tenancy periods efficiently — all from a secure, multi-user web platform.",
    tech: ["Django", "PostgreSQL", "Django Templates + Custom CSS", "Django's built-in session-based authentication"],
    image: project1,
    github: "https://github.com/qudratullah-khurram/QuickShelter",
    live: "https://quickshelter-8c2463b9eb02.herokuapp.com/accounts/login",
  },
    {
    title: "🎉EventHub",
    description:
       "You can sign up for an account, log in, and add your own events. Other users can see events and get details about them.",
    tech: ["Node.js", "Express", "MongoDB", "EJS", "Express-Session", "bcryptjs "],
    image: project3,
    github: "https://github.com/qudratullah-khurram/Event-Hub",
    live: "https://event-hub-a77f5dc29a8a.herokuapp.com/",
  },
  {
    title: "🛠️ HelpingHand",
    description:
      "This is the backend server for the TaskConnect application — a platform that connects users with skilled professionals for task-based services like phone repair, car fixes, computer troubleshooting, carpentry, building work, and more.",
    tech: ["MongoDB", "Express", "RJWT Authentication", "Node.js", "Bcrypt for Password Hashing", "Morgan for Logging", "Dotenv for Env Variables", "CORS Support"],
    image: project2,
    github: "https://github.com/qudratullah-khurram/github-collaboration",
    live: "https://ahelpinghand.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.title}
      >
        Projects
      </motion.h2>
     <p style={styles.subtitle}>
  Welcome to my <strong>project showcase</strong>, where each creation reflects my <strong>curiosity</strong>, <strong>problem-solving skills</strong>, and <strong>dedication to learning</strong>.<br />
  From hands-on coursework to independent experiments, these projects highlight not only the <strong>technical skills</strong> I’ve gained<br />
  but also the <strong>creativity</strong> and <strong>thoughtfulness</strong> I bring to every challenge.
</p>
      <div style={styles.grid}>
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            style={styles.card}
          >
            <img src={proj.image} alt={proj.title} style={styles.image} />
            <h3 style={styles.projectTitle}>{proj.title}</h3>
            <p style={styles.description}>{proj.description}</p>
            <div style={styles.techList}>
              {proj.tech.map((t, i) => (
                <span key={i} style={styles.techItem}>
                  {t}
                </span>
              ))}
            </div>
            <div style={styles.buttons}>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconBtn}
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconBtn}
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "5rem 2rem",
    textAlign: "center",
    backgroundColor: "#0b1220",
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
    color: "#00bcd4",
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#ccc",
    marginBottom: "3rem",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "2rem",
    justifyItems: "center",
  },
  card: {
    background: "#111a2b",
    borderRadius: "1rem",
    padding: "1.5rem",
    maxWidth: "400px",
    textAlign: "left",
    boxShadow: "0 0 20px rgba(0, 188, 212, 0.1)",
  },
image: {
  width: "100%",
  height: "300px",        // or whatever height you want
  objectFit: "contain",   // 👈 shows the whole image without cropping
  borderRadius: "0.75rem",
  marginBottom: "1rem",
  backgroundColor: "#f0f0f0", // optional, fills empty space if image doesn’t cover area
},
  projectTitle: {
    fontSize: "1.5rem",
    marginBottom: "0.5rem",
  },
  description: {
    fontSize: "1rem",
    color: "#ccc",
    marginBottom: "0.75rem",
  },
  techList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  techItem: {
    background: "#00bcd4",
    color: "#0b1220",
    borderRadius: "0.5rem",
    padding: "0.3rem 0.6rem",
    fontSize: "0.85rem",
    fontWeight: "500",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
  },
  iconBtn: {
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    background: "#00bcd4",
    color: "#0b1220",
    padding: "0.5rem 1rem",
    borderRadius: "0.5rem",
    fontWeight: "600",
    textDecoration: "none",
  },
};

