import React, { useState } from 'react';
import Container from '../../../components/Container/Container';
import { allNav } from './NavItem';
import { Link } from 'react-router-dom';
import ActiveLink from '../../../components/ActiveLink/ActiveLink';
import { FaList } from 'react-icons/fa';
import smallLogo from '../../../assets/images/logo.png'
import DarkMode from '../../../components/ThemeToggle/DarkMode';

const Navbar = () => {
    const user = 'null';
    const [show, setShow] = useState(false);
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    return (
        <div className='sticky top-0 z-10 shadow py-3 bg-[var(--secondary)]'>
            <Container>
                <div className='flex items-center justify-between relative'>
                    <Link to={'/'} className='hidden lg:block'>
                        <p className='text-2xl font-bold text-[#00a6fb]'>Swift <span className='text-[#a7a9ac] font-medium'>Plan</span></p>
                    </Link>

                    <div onClick={() => setShow(!show)} className='lg:hidden p-2 rounded bg-cyan-500 text-white'>
                        <FaList />
                    </div>

                    <Link to={'/'} className='lg:hidden'>
                        <img className='h-6' src={smallLogo} alt="logo image" />
                    </Link>

                    {/* show only from medium device */}
                    <div className={`${show ? 'absolute bg-[var(--secondary)] z-20 w-3/4 h-screen -top-3 -left-5 p-8' : 'hidden'} lg:hidden`}>
                        <ul className='flex flex-col items-start gap-2 font-semibold'>
                            {
                                allNav.map((nav) => <li key={nav.id} onClick={() => setShow(false)}>
                                    <ActiveLink to={nav.path}>
                                        {nav.title}
                                    </ActiveLink>
                                </li>)
                            }
                            {
                                user && <ActiveLink to='/dashboard'>Dashboard</ActiveLink>
                            }
                        </ul>
                    </div>

                    {/* show in large device */}
                    <div className='hidden lg:block'>
                        <ul className='lg:flex items-center gap-5 font-semibold'>
                            {
                                allNav.map((nav) => <li key={nav.id} onClick={() => setShow(false)}>
                                    <ActiveLink to={nav.path}>
                                        {nav.title}
                                    </ActiveLink>
                                </li>)
                            }
                            {
                                user && <ActiveLink to='/dashboard'>Dashboard</ActiveLink>
                            }
                        </ul>
                    </div>

                    <div className='flex items-center gap-3'>
                        <DarkMode theme={theme} setTheme={setTheme} />
                        {
                            user ? <>
                                <div className='flex items-center gap-3'>
                                    <img className='h-8 w-8 rounded-full' src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user image" />
                                    <button className='hover:text-red-500 font-semibold'>Log Out</button>
                                </div>
                            </> : <>
                                <Link className='hover:text-cyan-500 font-semibold' to={'/login'}>Log In</Link>
                            </>
                        }
                    </div>
                </div>
            </Container>
            <div onClick={() => setShow(false)} className={`fixed duration-200 ${!show ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10 lg:hidden`}></div>

        </div>
    );
};

export default Navbar;