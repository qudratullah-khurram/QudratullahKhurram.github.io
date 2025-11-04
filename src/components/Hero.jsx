import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import myPhoto from "../assets/me.jpg"; 
import myCV from "../assets/MyCV.pdf"; 

export default function Hero() {
  return (
    <section id="hero" style={styles.heroSection}>
      <div style={styles.mainContent}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.textBox}
        >
          <h1>
            Hi, I’m <span style={{ color: "#00bcd4" }}>Qudratullah Khurram</span>
          </h1>
          <p>
            I’m a passionate Software Engineer based in England, dedicated to
            building clean, modern, and user-focused digital experiences. I love
            transforming creative ideas into functional, scalable web
            applications that make an impact.
          </p>
          <p>
            With a strong foundation in full-stack development, I enjoy working
            across both front-end and back-end technologies — bringing ideas to
            life with code and design.
          </p>
        </motion.div>

        <motion.img
          src={myPhoto}
          alt="My portrait"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          style={styles.image}
        />
      </div>
      <motion.div
        style={styles.bottomSection}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
      <motion.a
  href={myCV}
  target="_blank" 
  rel="noopener noreferrer"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  style={styles.cvButton}
>
  View CV
</motion.a>

        <div style={styles.socials}>
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
            <FaLinkedin />
           </a>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  heroSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "5rem 2rem",
    gap: "2rem",
  },
  mainContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "2rem",
    textAlign: "left",
  },
  textBox: {
    maxWidth: "500px",
  },
  image: {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: "0 0 20px rgba(0, 188, 212, 0.5)",
  },
  bottomSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    marginTop: "2rem",
  },
  cvButton: {
    display: "inline-block",
    backgroundColor: "#00bcd4",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "30px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
  socials: {
    display: "flex",
    gap: "3.2rem",
    fontSize: "2.5rem",
  },
};
