import React from "react";
import { Link } from "react-router-dom";
import CourseSidebar from "../components/CourseSidebar";
const CoursesPage = () => {
    return (
        <section className="py-10">
            <div className="container">
                <div className="grid grid-cols-4 gap-8">
                    <div className="sidebar rounded border bg-white p-8">
                        <CourseSidebar></CourseSidebar>
                    </div>
                    <div className="col-span-3 rounded border bg-white p-8">
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesPage;
