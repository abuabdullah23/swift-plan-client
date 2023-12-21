import { FaList } from 'react-icons/fa';

const Header = ({ showSidebar, setShowSidebar }) => {
    const user = 'null';

    return (
        <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40 bg-[#161d31] pb-0">
            <div className="ml-0 lg:ml-[260px] rounded-md h-[65px] flex justify-between items-center bg-[var(--secondary)] text-[#d0d2d6] px-5 transition-all">
                {/* hamburger icon for show menu */}
                <div onClick={() => setShowSidebar(!showSidebar)} className="w-[35px] h-[35px] bg-slate-500 rounded-sm shadow-lg hover:shadow-slate-500/50 flex items-center justify-center cursor-pointer lg:hidden">
                    <span><FaList /></span>
                </div>

                <div className='text-base font-normal hidden lg:block'>
                    {/* Welcome: {user?.email} */}
                </div>

                <div className='flex justify-center items-center gap-8 relative'>
                    <div className='flex justify-center items-center'>
                        <div className='flex justify-center items-center gap-3'>
                            <div className='flex justify-center items-center flex-col text-end'>
                                <h2 className='text-sm font-bold'>{'Name'}</h2>
                                <span className='text-sm w-full font-normal'>{'User'}</span>
                            </div>
                            <img className='w-11 h-11 object-cover object-center rounded-full overflow-hidden' src={user?.photoURL} alt="user photo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;