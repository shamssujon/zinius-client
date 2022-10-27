import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path: "/home",
                element: <HomePage></HomePage>,
            },
            {
                path: "/courses",
                element: <CoursesPage></CoursesPage>,
                loader: async () => {
                    return fetch("http://localhost:5000/courses");
                },
            },
            {
                path: "/login",
                element: <LoginPage></LoginPage>,
            },
            {
                path: "/register",
                element: <RegisterPage></RegisterPage>,
            },
            {
                path: "/courses/category/:id",
                element: <CoursesPage></CoursesPage>,
            },
        ],
    },
]);
