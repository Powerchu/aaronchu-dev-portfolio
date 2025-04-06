import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle';

const Home: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <DarkModeToggle />
      <main>
        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>
        <section id="projects" className="min-h-screen flex items-center justify-center">
          <Projects />
        </section>
        <section id="resume" className="min-h-screen flex items-center justify-center">
          <Resume />
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;