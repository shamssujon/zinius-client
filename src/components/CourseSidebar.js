import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const CourseSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);
    return (
        <div className="">
            <h5 className="mb-4 text-xl font-bold">Popular Categories</h5>
            <nav className="grid">
                {categories.map((category) => (
                    <Link key={category.id}>{category.name}</Link>
                ))}
            </nav>
        </div>
    );
};

export default CourseSidebar;
