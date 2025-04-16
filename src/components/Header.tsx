import React from "react";
import NavBar from "./NavBar/NavBar";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-start space-y-20 pr-12 sm:pr-16 md:pr-20 lg:pr-32 xl:pr-42">
      {/* Personal Info */}
      <div className="space-y-3">
        <h1 className="text-6xl font-bold text-white">Aaron Chu</h1>
        <h2 className="text-2xl font-medium text-teal-300">
          Full Stack Engineer
        </h2>
        <p className="text-slate-300">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>
      </div>
      {/* Navigation Bar */}
      <div data-id="navBar">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
