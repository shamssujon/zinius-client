import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: "landscape",
    unit: "in",
};
const CourseDetails = () => {
    const courseData = useLoaderData();
    const {
        id,
        title,
        price,
        image,
        description,
        intro,
        features,
        duration,
        modules,
        ratings,
        enrolled,
    } = courseData;
    return (
        <section className="py-10">
            <div className="container">
                <div className="mb-4">
                    <Pdf targetRef={ref} filename="download.pdf" options={options} scale={0.7}>
                        {({ toPdf }) => (
                            <button
                                onClick={toPdf}
                                className="flex items-center justify-center gap-2 rounded bg-cyan-500 px-4 py-2 text-center text-sm font-bold uppercase tracking-wide text-white transition hover:bg-cyan-600">
                                <FaDownload /> Download this page as PDF
                            </button>
                        )}
                    </Pdf>
                </div>
                <div className="grid gap-8 lg:grid-cols-6" ref={ref}>
                    <div className="overflow-hidden lg:col-span-4">
                        <div className="space-y-8 rounded-md border  bg-white p-6 md:p-8">
                            <div>
                                <h3 className="mb-2 text-3xl font-bold">{title}</h3>
                                <p className="text-lg">{intro}</p>
                            </div>

                            <div>
                                <h5 className="mb-2 text-xl font-bold">What you'll learn:</h5>
                                <ul className="grid gap-2 md:grid-cols-2">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex gap-2">
                                            <BsCheckCircleFill className="mt-1 shrink-0 text-green-500" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h5 className="mb-2 text-xl font-bold">Description:</h5>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="sticky top-4 rounded-md border bg-white p-6 md:p-8">
                            <div className="aspect-video overflow-hidden rounded-md">
                                <img
                                    src={image}
                                    alt={title}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <ul className="mt-4 grid gap-2 text-lg md:grid-cols-2">
                                <li>
                                    <span className="font-bold">Modules:</span> {modules}
                                </li>
                                <li>
                                    <span className="font-bold">Duration:</span> {duration}
                                </li>
                                <li>
                                    <span className="font-bold">Ratings:</span> {ratings}
                                </li>
                                <li>
                                    <span className="font-bold">Students:</span> {enrolled}
                                </li>
                            </ul>
                            <div className="mt-4 text-2xl">
                                <span className="font-bold">Price:</span> ${price} USD
                            </div>
                            <div className="mt-4 grid">
                                <Link
                                    to={`/courses/course/${id}/checkout`}
                                    className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-cyan-600 md:px-8">
                                    Get Premium Access
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
