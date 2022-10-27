import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const { id, title, price, image, description } = course;
    return (
        <div className="overflow-hidden rounded-md border bg-white shadow">
            <img src={image} alt="" />
            <div className="p-4">
                <h5 className="mb-2 text-xl font-bold">{title}</h5>
                <p className="mb-2">
                    {description.length > 100 ? description.slice(0, 100) + "..." : description}
                </p>
                <p className="text-lg font-bold">${price} USD</p>
            </div>
            <div className="grid">
                <Link
                    to={`/courses/${id}`}
                    className="flex items-center justify-center bg-cyan-500 px-4 py-3 text-center font-bold uppercase tracking-wide text-white transition hover:bg-cyan-600 md:px-8">
                    See details
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
