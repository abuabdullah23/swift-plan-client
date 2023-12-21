import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import DarkMode from '../../components/ThemeToggle/DarkMode';
import useAuth from '../../hooks/useAuth';

const Header = ({ showSidebar, setShowSidebar }) => {
    const { user } = useAuth();
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    return (
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 bg-[var(--body)] pb-0 text-[var(--primary-text)] transition-colors ease-in-out">
            <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[var(--secondary)] px-5 transition-all">
                {/* hamburger icon for show menu */}
                <div onClick={() => setShowSidebar(!showSidebar)} className="w-[35px] h-[35px] bg-[var(--secondary)] rounded-sm shadow-lg hover:shadow-slate-500/50 flex items-center justify-center cursor-pointer lg:hidden">
                    <span><FaList /></span>
                </div>

                <div className='text-base font-normal hidden lg:block'>
                    <p>Welcome: {user?.email}</p>
                </div>

                <DarkMode theme={theme} setTheme={setTheme} />

                <div className='flex justify-center items-center gap-8 relative'>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center gap-5'>
                            <div className='flex justify-center items-center flex-col text-end'>
                                <h2 className='text-sm font-bold'>{user?.displayName}</h2>
                                <span className='text-sm w-full font-normal'>{'User'}</span>
                            </div>
                            <img className='w-9 h-9 object-cover object-center rounded-full overflow-hidden' src={user?.photoURL} alt="user photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;