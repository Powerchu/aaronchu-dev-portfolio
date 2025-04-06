import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            className="w-full p-2 border border-gray-300 rounded"
                            rows={4}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <p>If you prefer, you can also reach me at:</p>
                    <p className="font-medium">email@example.com</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;