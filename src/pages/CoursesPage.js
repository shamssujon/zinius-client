import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import CourseSidebar from "../components/CourseSidebar";

const CoursesPage = () => {
    const courses = useLoaderData();
    return (
        <section className="py-10">
            <div className="container">
                <div className="grid gap-8 lg:grid-cols-4">
                    <div className="sidebar rounded border bg-white p-8">
                        <CourseSidebar></CourseSidebar>
                    </div>
                    <div className="lg:col-span-3 rounded border bg-white p-6 md:p-8">
                        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                            {courses.map((course) => (
                                <CourseCard key={course.id} course={course}></CourseCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesPage;
