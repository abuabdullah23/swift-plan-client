import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Profile/Profile";
import Error from "../Error";
import AllTask from "../pages/Dashboard/AllTask/AllTask";
import PreviousTask from "../pages/Dashboard/PreviousTask/PreviousTask";
import About from "../pages/About/About";
import FAQ from "../pages/FAQ/FAQ";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },

    // login/register route
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },

    {
        path: '*',
        element: <Error/>
    }, 

    // Dashboard Layout and Routes
    {
        path: "/dashboard",
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
                index: true
            },
            {
                path: '/dashboard/all-task',
                element: <AllTask />,
            },
            {
                path: '/dashboard/previous-task',
                element: <PreviousTask />,
            },
            {
                path: '/dashboard/profile',
                element: <Profile />,
            },
        ]
    }
]);

export default router;