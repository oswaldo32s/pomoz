import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import Productivity from "../pages/Productivity";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {index: true, Component: Home},
            {path: 'projects', Component: Productivity}
        ]
    }
])