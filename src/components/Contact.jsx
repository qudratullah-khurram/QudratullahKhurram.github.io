import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

export default function Contact() {
  return (
    <section id="contact" style={styles.contactSection}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.8rem" }}
      >
        I’m always excited to collaborate on interesting projects, solve
        challenging problems, and contribute to meaningful solutions. Whether
        you have a question, a project idea, or just want to connect, feel free
        to reach out. I’m based in England and available for freelance or
        full-time opportunities.
      </motion.p>
      <motion.ul
        style={styles.skillsList}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <li>💻 Full-Stack Web Development (HTML, CSS, Javascript, Express, Python, Django, SQL, PostgreSQL)</li>
        <li>🌐 Modern, Responsive Web Design</li>
        <li>⚡ Performance Optimization & Scalability</li>
        <li>🤝 Collaborative & Team-Oriented</li>
      </motion.ul>
      <motion.div
        style={styles.contactDetails}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p>
          📧 Email:{" "}
          <a href="mailto:qudrat.khurram@gmail.com" style={styles.link}>
            Qudrat.khurram@gmail.com
          </a>
        </p>
        <p>
          📞 Phone:{" "}
          <a href="tel:+0000000000" style={styles.link}>
            +44 7960 389599
          </a>
        </p>
      </motion.div>
      <motion.div
        style={styles.socials}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <a
          href="https://www.facebook.com/share/1G3XWqojn7/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://x.com/qudrat_khurram?s=21&t=nVG-3WtlI3PoZ9TXHWhogw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://github.com/qudratullah-khurram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="www.linkedin.com/in/qudratullah-khurram-61b509397"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </motion.div>
      <motion.p
        style={{ marginTop: "2rem", fontStyle: "italic" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        I’d love to hear about your project, ideas, or opportunities — let’s
        create something amazing together!
      </motion.p>
    </section>
  );
}

const styles = {
  contactSection: {
    padding: "5rem 2rem",
    textAlign: "center",
    backgroundColor: "#0a0f1a",
    color: "white",
  },
  link: {
    color: "#00bcd4",
    textDecoration: "none",
  },
  skillsList: {
    marginTop: "2rem",
    listStyle: "none",
    lineHeight: "2rem",
  },
  contactDetails: {
    marginTop: "2rem",
    lineHeight: "2rem",
    fontSize: "1.1rem",
  },
  socials: {
    marginTop: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    fontSize: "2rem",
  },
};
