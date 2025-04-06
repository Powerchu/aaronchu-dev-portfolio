import React from "react";
import DarkModeToggle from "./ui/buttons/ThemeToggle";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800"
    >
      <div className="max-w-4xl text-center p-6">
        <DarkModeToggle />
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          About Me
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          I am a passionate developer with experience in building web
          applications using modern technologies. My journey in tech started
          with a fascination for problem-solving and creativity, which led me to
          explore various programming languages and frameworks. I enjoy
          collaborating with others and continuously learning to improve my
          skills.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          In my free time, I love to work on personal projects, contribute to
          open-source, and stay updated with the latest trends in technology. I
          believe in the power of community and sharing knowledge to help others
          grow.
        </p>
      </div>
    </section>
  );
};

export default About;
