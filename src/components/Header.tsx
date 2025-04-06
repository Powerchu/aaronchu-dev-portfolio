import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md">
            <div className="container mx-auto flex justify-between items-center p-4">
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">My Portfolio</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="#about" className="text-gray-900 dark:text-white hover:underline">About</Link>
                        </li>
                        <li>
                            <Link href="#projects" className="text-gray-900 dark:text-white hover:underline">Projects</Link>
                        </li>
                        <li>
                            <Link href="#resume" className="text-gray-900 dark:text-white hover:underline">Resume</Link>
                        </li>
                        <li>
                            <Link href="#contact" className="text-gray-900 dark:text-white hover:underline">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;