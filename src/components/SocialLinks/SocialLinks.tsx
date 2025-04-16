import React from "react";

const SocialLinks: React.FC = () => {
  return (
    <div className="container mx-auto text-left space-y-4">
      {/* Social Links */}
      {/* <p>&copy; {new Date().getFullYear()} Aaron Chu. All rights reserved.</p> */}
      <div className="mt-2">
        <a
          href="https://github.com/yourusername"
          className="text-gray-400 hover:text-white mr-2"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          className="text-gray-400 hover:text-white mx-2"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your.email@example.com"
          className="text-gray-400 hover:text-white mx-2"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
