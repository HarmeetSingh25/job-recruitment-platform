import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Dashboard from "../features/dashboard/pages/Dashboard.jsx";
import Jobs from "../features/jobs/pages/Jobs.jsx";
import Analytics from "../features/analytics/pages/Analytics.jsx";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                index:true,
                element:<Dashboard />
            },
            {
                path:"jobs",
                element:<Jobs />
            },
            {
                path:"analytics",
                element:<Analytics />
            }
        ]
    }
])
