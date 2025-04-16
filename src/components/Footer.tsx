import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-4">
      <div className="container mx-auto text-left">
        <p>
          Built with Next.js and Tailwind CSS, deployed with Vercel.
          <br />
          All text is set in the Inter typeface.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
