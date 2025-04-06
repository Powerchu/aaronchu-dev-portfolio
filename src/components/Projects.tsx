import React from 'react';

const Projects: React.FC = () => {
    const projectList = [
        {
            title: 'Project One',
            description: 'Description of project one.',
            link: 'https://example.com/project-one',
        },
        {
            title: 'Project Two',
            description: 'Description of project two.',
            link: 'https://example.com/project-two',
        },
        {
            title: 'Project Three',
            description: 'Description of project three.',
            link: 'https://example.com/project-three',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projectList.map((project, index) => (
                        <div key={index} className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold">{project.title}</h3>
                            <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                            <a href={project.link} className="mt-4 inline-block text-blue-500 hover:underline">
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;