import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Login from "../pages/Login";
import Register from "../pages/Register";

import { adminPaths } from "./admin.routes";
import { routeGenerator } from "../utils/routeGenerator";

export const router = createBrowserRouter([
    
    {
        path: '/admin',
        element: <App />,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/admin',
        element: <App />,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/admin',
        element: <App />,
        children: routeGenerator(adminPaths)
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />,
    },

])