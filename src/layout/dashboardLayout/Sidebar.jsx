import { Link, useLocation } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { dashboardNav } from "../../utils/dashboardNavItems";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    const { pathname } = useLocation();

    return (
        <div>
            <div onClick={() => setShowSidebar(false)} className={`fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}></div>

            <div className={`w-[260px] fixed bg-[var(--secondary)] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}>
                <div className="h-[70px] flex justify-center items-center mt-3">
                    <Link to='/'>
                    <p className='text-2xl font-bold text-[#00a6fb]'>Swift <span className='text-[#a7a9ac] font-medium'>Plan</span></p>
                    </Link>
                </div>

                <hr className="border-b border-[#121c36] mb-3" />

                <div className="px-4">
                    <ul>
                        {
                            dashboardNav.map((n, i) => <li key={i}>
                                <Link
                                    onClick={() => setShowSidebar(false)}
                                    to={n.path}
                                    className={`${pathname === n.path ? 'bg-[var(--primary)] shadow-indigo-500/30 text-white duration-500' : 'text-[#d0d2d6] font-normal duration-200'} px-3 py-2 rounded-sm flex justify-start items-center gap-3 hover:pl-4 hover:bg-[var(--primary)] transition-all w-full mb-1`}>
                                    <span>{n.icon}</span>
                                    <span>{n.title}</span>
                                </Link>
                            </li>)
                        }

                    </ul>
                </div>

                <hr className="border-b border-[#121c36] my-3" />
                <ul className="px-4">
                    <Link to='/'>
                        <button className="text-[#d0d2d6] font-normal duration-200 px-3 py-2 rounded-sm flex justify-start items-center gap-3 hover:pl-4 hover:bg-[var(--primary)] transition-all w-full mb-1">
                            <span><FaHome /></span>
                            <span>Home</span>
                        </button>
                    </Link>
                    <li>
                        <button className="text-[#d0d2d6] font-normal duration-200 px-3 py-2 rounded-sm flex justify-start items-center gap-3 hover:pl-4 hover:bg-[var(--primary)] transition-all w-full mb-1">
                            <span><BiLogOutCircle /></span>
                            <span>Logout</span>
                        </button>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;