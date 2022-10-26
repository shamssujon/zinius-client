import React from "react";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const handleLogin = (e) => {
        console.log("Submitted");
    };
    return (
        <section className="py-10">
            <div className="container">
                <h2 className="mb-8 text-center text-4xl font-bold">Log in</h2>
                <div className="mx-auto grid max-w-xl gap-8">
                    <div className="">
                        <form
                            onSubmit={handleLogin}
                            className="grid gap-6 rounded border bg-white p-8">

                            <div className="grid gap-2">
                                <label htmlFor="email" className="text-sm font-bold uppercase">
                                    Email Address <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter email address"
                                    className="w-full rounded border px-4 py-2 outline-cyan-500 transition"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor="password" className="text-sm font-bold uppercase">
                                    Password <span className="text-rose-500">*</span>
                                </label>
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    className="w-full rounded border px-4 py-2 outline-cyan-500 transition"
                                />
                            </div>
                            <div className="grid">
                                <button className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-cyan-600 md:px-8">
                                    Log in
                                </button>
                            </div>
                        </form>

                        <div className="relative py-4 text-center">
                            <div className="absolute top-1/2 h-[1px] w-full bg-gray-300"></div>
                            <span className="relative inline-block bg-slate-50 p-2">
                                Or continue with:{" "}
                            </span>
                        </div>

                        <div className="grid gap-2 md:grid-cols-3">
                            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-red-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-red-600 md:px-8">
                                <BsGoogle className="h-6 w-6" />
                                <span>Google</span>
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-800 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-slate-900 md:px-8">
                                <BsGithub className="h-6 w-6" />
                                <span>Github</span>
                            </button>
                            <button className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-blue-600 md:px-8">
                                <BsFacebook className="h-6 w-6" />
                                <span>Facebook</span>
                            </button>
                        </div>

                        <div className="relative py-4 text-center">
                            <div className="absolute top-1/2 h-[1px] w-full bg-gray-300"></div>
                            <span className="relative inline-block bg-slate-50 p-2">
                                Do not have an account?{" "}
                                <Link to={"/register"} className="text-cyan-500 hover:underline">
                                    Create an account
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
