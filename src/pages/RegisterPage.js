import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useContext } from "react";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
const RegisterPage = () => {
    const { providerLogin, createUser } = useContext(AuthContext);

    // Google Sign In - start
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    // Google Sign In - end

    // Password Authentication
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoURL.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <section className="py-10">
            <div className="container">
                <h2 className="mb-8 text-center text-4xl font-bold">Create an account</h2>
                <div className="mx-auto grid max-w-xl gap-8">
                    <div className="">
                        <form
                            onSubmit={handleRegister}
                            className="grid gap-6 rounded border bg-white p-8">
                            <div className="grid gap-2">
                                <label htmlFor="name" className="text-sm font-bold uppercase">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter full name"
                                    className="w-full rounded border px-4 py-2 outline-cyan-500 transition"
                                />
                            </div>
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
                                    Choose a Password <span className="text-rose-500">*</span>
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
                            <div className="grid gap-2">
                                <label htmlFor="photoURL" className="text-sm font-bold uppercase">
                                    photo URL
                                </label>
                                <input
                                    type="text"
                                    name="photoURL"
                                    id="photoURL"
                                    placeholder="Enter photo URL"
                                    className="w-full rounded border px-4 py-2 outline-cyan-500 transition"
                                />
                            </div>
                            <div className="grid">
                                <button className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-cyan-600 md:px-8">
                                    Create an account
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
                            <button
                                onClick={handleGoogleSignIn}
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-red-600 md:px-8">
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
                                Already have an account?{" "}
                                <Link to={"/login"} className="text-cyan-500 hover:underline">
                                    Log in
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegisterPage;
