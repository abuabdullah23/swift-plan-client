import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
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


    // Dashboard Layout and Routes
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />,
                index: true
            }
        ]
    }
]);

export default router;