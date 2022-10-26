import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero-ilustration.svg";

const Hero = () => {
    return (
        <section className="py-10">
            <div className="container">
                <div className="grid items-center gap-8 rounded-3xl border bg-white p-6 md:p-10 lg:grid-cols-2 xl:px-14 2xl:px-20">
                    <div className="">
                        <h2 className="mb-8 text-4xl font-bold md:text-5xl md:leading-tight">
                            Learn from{" "}
                            <span className="font-extrabold text-indigo-600">anywhere</span>, and
                            build your <span className="font-extrabold text-cyan-500">bright</span>{" "}
                            career
                        </h2>
                        <p className="mb-8 text-xl leading-normal">
                            <strong>Zinius</strong> offers you top class courses from the
                            professional mentors around the world. If you have a mobile or PC and
                            access to the internet, you can learn anything from anywhere.
                        </p>
                        <Link className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-cyan-600 md:px-8 ">
                            Start Learning for free
                        </Link>
                    </div>
                    <div className="">
                        <img src={heroImg} alt="" className="block max-w-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
