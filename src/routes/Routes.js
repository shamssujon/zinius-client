import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import CoursesPage from "../pages/CoursesPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CourseCategory from "../pages/CourseCategory";
import CourseDetails from "../pages/CourseDetails";
import ErrorPage from "../pages/ErrorPage";
import CheckoutPage from "../pages/CheckoutPage";
import PrivateRoute from "./PrivateRoute";
import BlogPage from "../pages/BlogPage";
import FaqPage from "../pages/FaqPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "*",
                element: <ErrorPage></ErrorPage>,
            },
            {
                path: "/",
                element: <HomePage></HomePage>,
            },
            {
                path: "/home",
                element: <HomePage></HomePage>,
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
                path: "/courses",
                element: <CoursesPage></CoursesPage>,
                loader: async () => {
                    return fetch("https://zinius-server.vercel.app/courses");
                },
            },
            {
                path: "/courses/:id",
                element: <CourseCategory></CourseCategory>,
                loader: async ({ params }) => {
                    return fetch(`https://zinius-server.vercel.app/category/${params.id}`);
                },
            },
            {
                path: "/courses/course/:id",
                element: <CourseDetails></CourseDetails>,
                loader: async ({ params }) => {
                    return fetch(`https://zinius-server.vercel.app/course/${params.id}`);
                },
            },
            {
                path: "/courses/course/:id/checkout",
                element: (
                    <PrivateRoute>
                        <CheckoutPage></CheckoutPage>
                    </PrivateRoute>
                ),
                loader: async ({ params }) => {
                    return fetch(`https://zinius-server.vercel.app/course/${params.id}`);
                },
            },
            {
                path: "/blog",
                element: <BlogPage></BlogPage>,
                loader: async () => {
                    return fetch(`https://zinius-server.vercel.app/blog`);
                },
            },
            {
                path: "/faq",
                element: <FaqPage></FaqPage>,
                loader: async () => {
                    return fetch(`https://zinius-server.vercel.app/faqs`);
                },
            },
        ],
    },
]);
