import React from "react";
import DarkModeToggle from "./ui/buttons/ThemeToggle";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full flex items-center justify-center bg-gray-900 text-slate-300 py-12"
    >
      <div className="max-w-4xl text-balance">
        <p className="text-lg text-slate-400">
          I'm a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
        </p>
        <p className="text-lg text-slate-400 mt-8">
          I'm an aspiring gameplay and tools programmer, currently based in
          Singapore. Currently a Senior undergraduate at DigiPen Institute of
          Technology, pursuing a BSc. Computer Science & Game Design, graduating
          in Fall 2021. I have a passion for Gameplay Programming and am
          currently looking for a related internship in the game industry.
          <br />
          <br />I can speak in three languages: English, Mandarin Chinese and
          Burmese. Goal-oriented, driven and strong-willed. <br />
          <br />
          Currently under IDA IIS Scholarship, a prestigious government
          scholarship awarded in 2012 when I was still in Ngee Ann Polytechnic.
          I had the honor of being in the Director List and being Top in Cohort
          in 2013. I also had the honor of being in the Dean List for two
          consecutive semesters in DigiPen, Fall 2018 and Spring 2019.
        </p>
      </div>
    </section>
  );
};

export default About;
