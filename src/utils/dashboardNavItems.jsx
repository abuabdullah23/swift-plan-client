import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
import { ImProfile  } from "react-icons/im";
import { RiArticleLine } from "react-icons/ri";

export const dashboardNav = [
    {
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        path: '/dashboard'
    },
    {
        title: 'All Task',
        icon: <RiArticleLine />,
        path: '/dashboard/all-task'
    },
    {
        title: 'Profile',
        icon: <ImProfile />,
        path: '/dashboard/profile'
    }
]