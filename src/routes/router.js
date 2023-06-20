import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import Consumers from "../pages/consumers";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/consumers',
                element: <Consumers />
            }
        ]
    },
])

export default router;