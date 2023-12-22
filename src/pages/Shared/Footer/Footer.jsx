import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png'
import Container from '../../../components/Container/Container';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="divide-y bg-[var(--secondary)] dark:text-gray-100 mt-16">
                <Container>
                    <div className="flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                        <div className="lg:w-1/3">
                            <a rel="noopener noreferrer" href="#" className="flex justify-center items-center space-x-3 lg:justify-start">
                                <div className="flex p-2.5 items-center justify-center w-12 h-12 rounded-full bg-[#14213d] dark:bg-transparent">
                                    <img src={logo} alt="logo" />
                                </div>
                                <Link to={'/'} className='hidden lg:block'>
                                    <p className='text-2xl font-bold text-[#00a6fb]'>Swift <span className='text-[#a7a9ac] font-medium'>Plan</span></p>
                                </Link>
                            </a>
                        </div>
                        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                            <div className="space-y-3">
                                <h3 className="tracki uppercase dark:text-gray-50">Website</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <Link rel="noopener noreferrer" to={'/faq'} >Faq</Link>
                                    </li>

                                    <li>
                                        <Link rel="noopener noreferrer" to={'/subscription'}>Pricing</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="tracki uppercase dark:text-gray-50">Company</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Privacy</a>
                                    </li>
                                    <li>
                                        <a rel="noopener noreferrer" href="#">Terms of Service</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <h3 className="uppercase dark:text-gray-50">Users</h3>
                                <ul className="space-y-1">
                                    <li>
                                        <Link rel="noopener noreferrer" to={'/about'}>About</Link>
                                    </li>
                                    <li>
                                        <Link rel="noopener noreferrer" to={'/dashboard'}>Dashboard</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="uppercase dark:text-gray-50">Social media</div>
                                <div className="flex justify-start space-x-3">
                                    <a rel="noopener noreferrer" href="https://www.facebook.com/abuobaidazayed/" target='_blank' title="Facebook" className="flex items-center p-1">
                                        <FaFacebook className='w-5 h-5' />
                                    </a>
                                    <a rel="noopener noreferrer" href="https://www.linkedin.com/in/md-abu-obaida-zayed/" target='_blank' title="LinkedIn" className="flex items-center p-1">
                                        <FaLinkedin className='w-5 h-5' />
                                    </a>
                                    <a rel="noopener noreferrer" href="https://github.com/abuabdullah23" target='_blank' title="GitHub" className="flex items-center p-1">
                                    <FaGithub className='w-5 h-5' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;