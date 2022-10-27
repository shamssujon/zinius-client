import React, { useState, useContext } from "react";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {
    const { logIn, providerLogin, successToast, errorToast } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // Google Sign In - start
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                successToast("Logged in sccessfully!");
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                errorToast(error.message);
                setError(error.message);
            });
    };
    // Google Sign In - end

    // Github Sign In - start
    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then((result) => {
                const user = result.user;
                successToast("Logged in sccessfully!");
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                errorToast(error.message);
                setError(error.message);
            });
    };
    // Github Sign In - end

    // Facebook Sign In - start
    const facebookProvider = new FacebookAuthProvider();

    const handleFacebookSignIn = () => {
        providerLogin(facebookProvider)
            .then((result) => {
                const user = result.user;
                successToast("Logged in sccessfully!");
                setError(null);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                errorToast(error.message);
                setError(error.message);
            });
    };
    // Facebook Sign In - end

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                successToast("Logged in sccessfully!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
                errorToast(error.message);
            });
    };
    return (
        <section className="py-10">
            <div className="container">
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold">Log in</h2>
                    <p className="mt-2 text-rose-600">{error}</p>
                </div>
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
                            <button
                                onClick={handleGoogleSignIn}
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-red-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-red-600 md:px-8">
                                <BsGoogle className="h-6 w-6" />
                                <span>Google</span>
                            </button>
                            <button
                                onClick={handleGithubSignIn}
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-800 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-slate-900 md:px-8">
                                <BsGithub className="h-6 w-6" />
                                <span>Github</span>
                            </button>
                            <button
                                onClick={handleFacebookSignIn}
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-blue-600 md:px-8">
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
