import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CourseCategory from "../pages/CourseCategory";
import CourseDetails from "../pages/CourseDetails";

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
                path: "/courses/:id",
                element: <CourseCategory></CourseCategory>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`);
                },
            },
            {
                path: "/courses/course/:id",
                element: <CourseDetails></CourseDetails>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/course/${params.id}`);
                },
            },
        ],
    },
]);
