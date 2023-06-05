import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { AboutPage } from "../pages/About";
import { HomePage } from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/about", element: <AboutPage /> },
        ],
    },
]);
