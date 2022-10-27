import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const CourseSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);
    return (
        <div className="sticky top-10">
            <h5 className="mb-4 text-xl font-bold">Popular Categories</h5>
            <nav className="grid">
                {categories.map((category) => (
                    <NavLink
                        key={category.id}
                        to={`/courses/${category.id}`}
                        className={({ isActive }) =>
                            (isActive ? "bg-indigo-600 text-white hover:text-white" : null) +
                            " rounded p-2 font-bold uppercase transition hover:bg-indigo-500 hover:text-white"
                        }>
                        {category.name}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
};

export default CourseSidebar;
