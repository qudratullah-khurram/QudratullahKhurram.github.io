import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  return (
    <div>
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="navbar"
        style={styles.navbar}
      >
        <h1 style={styles.logo}>Portfolio</h1>
        <nav style={styles.navLinks}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/about" style={styles.link}>
            About
          </Link>
          <Link to="/projects" style={styles.link}>
            Projects
          </Link>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </nav>
      </motion.header>

      <Routes location={location} key={location.pathname}>
  <Route path="/" element={<Hero />} />
  <Route path="/about" element={<About />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
      <Footer />
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    background: "#0b1220",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#00bcd4",
  },
  navLinks: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    transition: "color 0.2s ease",
  },
};
