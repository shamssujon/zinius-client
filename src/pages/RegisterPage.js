import React, { useState, useContext } from "react";
import { BsGoogle, BsFacebook, BsGithub } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const RegisterPage = () => {
    const {
        providerLogin,
        createUser,
        successToast,
        errorToast,
        updateUserProfile,
        emailVerification,
        warningToast,
    } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    // Google Sign In - start
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                successToast("Logged in sccessfully!");
                setError(null);
                navigate("/");
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
                navigate("/");
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
                navigate("/");
            })
            .catch((error) => {
                errorToast(error.message);
                setError(error.message);
            });
    };
    // Facebook Sign In - end

    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl,
        };
        updateUserProfile(profile)
            .then(() => {})
            .catch((e) => console.error(e));
    };

    // Password Authentication
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoURL.value;

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{4,}$/;

        if (password.length <= 0) {
            setError("Password is required");
            errorToast("Password is required");
            return;
        } else if (!passwordRegex.test(password)) {
            setError(
                "Password should contain a small and capital letter, a digit, a special charecter"
            );
            errorToast(
                "Password should contain a small and capital letter, a digit, a special charecter"
            );
            return;
        } else {
            setError(null);
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setError(null);
                successToast("Account created sccessfully!");
                navigate("/");
                handleUpdateUserProfile(name, photoUrl);
                emailVerification()
                    .then(() => {
                        warningToast(
                            "A verification email has been sent to your email. Please Verify"
                        );
                    })
                    .catch((e) => console.error(e));
            })
            .catch((error) => {
                errorToast(error.message);
                setError(error.message);
            });
    };
    return (
        <section className="py-10">
            <div className="container">
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold dark:text-slate-50">Create an account</h2>
                    <p className="mt-2 text-rose-600">{error}</p>
                </div>
                <div className="mx-auto grid max-w-xl gap-8">
                    <div className="">
                        <form
                            onSubmit={handleRegister}
                            className="grid gap-6 rounded border bg-white p-8 dark:border-gray-700 dark:bg-slate-900">
                            <div className="grid gap-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-bold uppercase dark:text-slate-50">
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
                                <label
                                    htmlFor="email"
                                    className="text-sm font-bold uppercase dark:text-slate-50">
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
                                <label
                                    htmlFor="password"
                                    className="text-sm font-bold uppercase dark:text-slate-50">
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
                                <label
                                    htmlFor="photoURL"
                                    className="text-sm font-bold uppercase dark:text-slate-50">
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
                            <div className="absolute top-1/2 h-[1px] w-full bg-gray-300 dark:bg-gray-700"></div>
                            <span className="relative inline-block bg-slate-50 p-2 dark:bg-slate-800 dark:text-slate-50">
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
                                className="inline-flex items-center justify-center gap-2 rounded-md bg-gray-900 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-gray-800 md:px-8">
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
                            <div className="absolute top-1/2 h-[1px] w-full bg-gray-300 dark:bg-gray-700"></div>
                            <span className="relative inline-block bg-slate-50 p-2 dark:bg-slate-800 dark:text-slate-50">
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
