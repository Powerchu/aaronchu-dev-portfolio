import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <div className="mt-2">
                    <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white mx-2">GitHub</a>
                    <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
                    <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white mx-2">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;