import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-12 md:py-24 px-8 text-center mt-7">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Task Management Website</h1>
            <p className="text-lg mb-8">
                Organize your tasks efficiently and boost your productivity with our user-friendly task management application.
            </p>
            <Link to='/dashboard' className="bg-white text-[var(--primary)] py-2 px-6 rounded-full font-semibold hover:bg-gray-300 transition duration-300">
            Let’s Explore
            </Link>
        </div>
    );
};

export default Banner;
