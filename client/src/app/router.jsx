import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Dashboard from "../features/dashboard/pages/Dashboard.jsx";
import Jobs from "../features/jobs/pages/Jobs.jsx";
import Analytics from "../features/analytics/pages/Analytics.jsx";
import JobDetails from "../features/jobs/pages/JobDetails.jsx";
import DuplicateReview from "../features/duplicates/pages/DuplicateReview.jsx";
import Notification from "../layouts/Notification.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: "jobs",
                element: <Jobs />
            },
            {
                path: "analytics",
                element: <Analytics />

            },
            {
                path: "/jobs/:id",
                element: <JobDetails />,
            },
            {
                path: "/duplicates",
                element: <DuplicateReview />
            },
            {
                path: "/notification",
                element: <Notification />
            }
        ]
    }
])
