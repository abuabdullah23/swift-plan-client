import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BackToHome = () => {
    return (
        <div className='px-10 pt-10'>
            <Link to={'/'}><FaHome /></Link>
        </div>
    );
};

export default BackToHome;