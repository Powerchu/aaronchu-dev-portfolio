import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";

const NavBar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "resume", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Middle of the viewport

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={styles.navbar}>
      <a
        href="#about"
        className={`${styles.navlink} ${
          activeSection === "about" ? styles.active : ""
        }`}
      >
        About
      </a>
      <a
        href="#projects"
        className={`${styles.navlink} ${
          activeSection === "projects" ? styles.active : ""
        }`}
      >
        Projects
      </a>
      <a
        href="#resume"
        className={`${styles.navlink} ${
          activeSection === "resume" ? styles.active : ""
        }`}
      >
        Resume
      </a>
      <a
        href="#contact"
        className={`${styles.navlink} ${
          activeSection === "contact" ? styles.active : ""
        }`}
      >
        Contact
      </a>
    </nav>
  );
};

export default NavBar;
