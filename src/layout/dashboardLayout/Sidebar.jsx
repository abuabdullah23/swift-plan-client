import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { dashboardNav } from "../../utils/dashboardNavItems";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
    const { pathname } = useLocation();
    const { user, logOut, setLoading } = useAuth();

    const navigate = useNavigate();


    // handle Logout
    const handleLogOut = () => {
        logOut()
            .then(res => {
                toast.success('Log Out Successful!');
                setLoading(false);
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message);
                setLoading(false);
            })
    }


    return (
        <div className="text-[var(--primary-text)]">
            <div onClick={() => setShowSidebar(false)} className={`fixed duration-200 ${!showSidebar ? 'invisible' : 'visible'} w-screen h-screen bg-[#22292f80] top-0 left-0 z-10`}></div>

            <div className={`w-[260px] fixed bg-[var(--secondary)] z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${showSidebar ? 'left-0' : '-left-[260px] lg:left-0'}`}>
                <div className="h-[70px] flex justify-center items-center mt-3">
                    <Link to='/'>
                        <p className='text-2xl font-bold text-[#00a6fb]'>Swift <span className='text-[#a7a9ac] font-medium'>Plan</span></p>
                    </Link>
                </div>

                <hr className="border-b border-[var(--border)] mb-3" />

                <div className="px-4">
                    <ul>
                        {
                            dashboardNav.map((n, i) => <li key={i}>
                                <Link
                                    onClick={() => setShowSidebar(false)}
                                    to={n.path}
                                    className={`${pathname === n.path ? 'bg-[var(--primary)] shadow-indigo-500/30 text-white duration-500' : 'font-normal duration-200'} px-3 py-2 rounded-sm flex justify-start items-center gap-3 hover:pl-4 hover:bg-[var(--primary)] hover:text-white transition-all w-full mb-1`}>
                                    <span>{n.icon}</span>
                                    <span>{n.title}</span>
                                </Link>
                            </li>)
                        }

                    </ul>
                </div>

                <hr className="border-b border-[var(--border)] my-3" />
                <ul className="px-4">
                    <Link to='/'>
                        <button className="font-normal duration-200 px-3 py-2 rounded-sm flex justify-start items-center gap-3 hover:pl-4 hover:bg-[var(--primary)] hover:text-white transition-all w-full mb-1">
                            <span><FaHome /></span>
                            <span>Home</span>
                        </button>
                    </Link>
                    <li onClick={handleLogOut}>
                        <button className="font-normal duration-200 px-3 py-2 rounded-sm flex justify-start items-center gap-3 hover:pl-4 hover:bg-[var(--primary)] hover:text-white transition-all w-full mb-1">
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