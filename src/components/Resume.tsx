import React from "react";

const Resume: React.FC = () => {
  return (
    <section id="resume" className="w-full py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-pretty text-gray-800 dark:text-white">
          Resume
        </h2>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Education
          </h3>
          <ul className="list-disc list-inside mt-2">
            <li>
              Bachelor of Science in Computer Science - University XYZ (2018 -
              2022)
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Experience
          </h3>
          <ul className="list-disc list-inside mt-2">
            <li>Software Engineer at Company ABC (2022 - Present)</li>
            <li>Intern at Company DEF (2021 - 2022)</li>
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
            Skills
          </h3>
          <ul className="list-disc list-inside mt-2">
            <li>JavaScript, TypeScript, React, Node.js</li>
            <li>HTML, CSS, Tailwind CSS</li>
            <li>Git, Docker, AWS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Resume;
