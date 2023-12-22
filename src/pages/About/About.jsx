import React from 'react';

const About = () => {
    return (
        <div className="about-container py-16 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6 text-[var(--primary-text)]">About Our Swift Plan</h1>
            <p className="text-lg mb-8">
                Welcome to our task management application, where organization meets efficiency. 
                Our app is crafted with simplicity in mind, aiming to streamline your daily tasks 
                and enhance your productivity.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-text)]">Meet the Team</h2>
            <p className="text-lg mb-8">
                Our dedicated team is committed to creating an innovative solution to simplify 
                task management. Get to know the individuals behind the scenes, each contributing 
                their expertise to make this app a valuable tool for you.
            </p>

            {/* Team Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="p-6 border border-[var(--border)] rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-[var(--primary-text)]">John Doe</h3>
                    <p className="mb-2">Lead Developer</p>
                    <p>
                        John is passionate about creating user-friendly applications. 
                        As the Lead Developer, he brings years of experience and leadership 
                        to ensure the apps success.
                    </p>
                </div>

                {/* Team Member 2 */}
                <div className="p-6 border border-[var(--border)] rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2 text-[var(--primary-text)]">Jane Smith</h3>
                    <p className="mb-2">UX/UI Designer</p>
                    <p>
                        Jane is a creative designer dedicated to providing an intuitive and 
                        visually appealing user experience. Her design expertise adds flair 
                        to the functionality of the app.
                    </p>
                </div>

                {/* Add more team members as needed */}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-[var(--primary-text)]">Contact Us</h2>
            <p className="text-lg mb-8">
                We value your feedback and are here to assist you. For any inquiries or 
                suggestions, feel free to contact us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.
            </p>

            <h2 className="text-2xl font-bold mb-4 text-[var(--primary-text)]">Gratitude</h2>
            <p className="text-lg">
                We appreciate your choice in using Our Task Management App. 
                Thank you for allowing us to be a part of your organized and productive journey.
            </p>
        </div>
    );
};

export default About;
