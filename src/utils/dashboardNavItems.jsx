import { AiFillDashboard, AiOutlinePlus } from "react-icons/ai";
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
        title: 'Add Task',
        icon: <AiOutlinePlus />,
        path: '/dashboard/add-task'
    }
]