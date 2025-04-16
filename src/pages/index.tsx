import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideLinks from "../components/SocialLinks/SocialLinks";
import DarkModeToggle from "../components/ui/buttons/ThemeToggle";
import SocialLinks from "../components/SocialLinks/SocialLinks";

const Home: React.FC = () => {
  return (
    <div
      className="flex bg-white dark:bg-gray-900 transition-colors duration-300"
      data-id="home"
    >
      {/* Left Column: Fixed Header */}
      <aside
        className="w-[40%] sticky top-0 flex flex-col justify-between h-screen p-6 pr-0 sm:p-6 sm:pr-0 md:p-10 md:pr-0 lg:p-20 lg:pr-0"
        data-id="left-column"
      >
        <Header />
        <SocialLinks />
      </aside>

      {/* Right Column: Scrollable Content */}
      <main
        className="w-[60%] overflow-y-auto p-4 space-y-80 sm:p-6 md:p-10 lg:p-16"
        data-id="right-column"
      >
        <section id="about" className="pb-20 flex items-center justify-center">
          <About />
        </section>
        <section
          id="projects"
          className="py-20 flex items-center justify-center"
        >
          <Projects />
        </section>
        <section id="resume" className="py-20 flex items-center justify-center">
          <Resume />
        </section>
        <section
          id="contact"
          className="pt-20 flex items-center justify-center"
        >
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Home;
