import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { RiArticleLine } from "react-icons/ri";

export const dashboardNav = [
    {
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        path: '/dashboard'
    },
    {
        title: 'My Tasks',
        icon: <RiArticleLine />,
        path: '/dashboard/my-tasks'
    },
    // {
    //     title: 'All Task',
    //     icon: <RiArticleLine />,
    //     path: '/dashboard/all-task'
    // },
    {
        title: 'Previous Task',
        icon: <FaTasks />,
        path: '/dashboard/previous-task'
    },
    {
        title: 'Profile',
        icon: <ImProfile />,
        path: '/dashboard/profile'
    }
]