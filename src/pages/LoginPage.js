import React, { useState, useContext } from "react";
import { BsGoogle, BsFacebook, BsGithub, BsXLg } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const LoginPage = () => {
    const { logIn, providerLogin, successToast, errorToast, resetPassword } =
        useContext(AuthContext);
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

    // Email/Password login
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then((result) => {
                const user = result.user;
                form.reset();
                setError(null);
                successToast("Logged in sccessfully!");
                navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
                errorToast(error.message);
            });
    };

    // Password reset modal
    const [openModal, setOpenModal] = useState(false);
    const handleResetPasswordModal = (e) => {
        e.preventDefault();
        setOpenModal(!openModal);
    };

    // Password reset
    const handleResetPassword = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.resetEmail.value;
        resetPassword(email)
            .then(() => {
                form.reset();
                successToast("Password reset email sent!");
                setOpenModal(!openModal);
            })
            .catch((e) => errorToast(e.message));
    };
    return (
        <section className="py-10">
            <div className="container">
                <div className="mb-8 text-center">
                    <h2 className="text-4xl font-bold dark:text-slate-50">Log in</h2>
                    <p className="mt-2 text-rose-600">{error}</p>
                </div>
                <div className="mx-auto grid max-w-xl gap-8">
                    <div className="">
                        <form
                            onSubmit={handleLogin}
                            className="grid gap-6 rounded border bg-white p-8 dark:border-gray-700 dark:bg-slate-900">
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
                                    className="w-full rounded border px-4 py-2 outline-cyan-500 transition dark:border-gray-700"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label
                                    htmlFor="password"
                                    className="flex items-center justify-between gap-2 text-sm font-bold uppercase dark:text-slate-50">
                                    <span>
                                        Password <span className="text-rose-500">*</span>
                                    </span>
                                    <button
                                        onClick={handleResetPasswordModal}
                                        className="text-slate-600 hover:text-indigo-600 hover:underline hover:underline-offset-2 dark:text-slate-400 dark:hover:text-indigo-300">
                                        Forgot password?
                                    </button>
                                </label>
                                <input
                                    required
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    className="w-full rounded border px-4 py-2 outline-cyan-500 transition dark:border-gray-700"
                                />
                            </div>
                            <div className="grid">
                                <button className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-cyan-600 md:px-8">
                                    Log in
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
                                Do not have an account?{" "}
                                <Link to={"/register"} className="text-cyan-500 hover:underline">
                                    Create an account
                                </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Password reset modal */}
            {openModal && (
                <>
                    <div
                        onClick={() => setOpenModal(!openModal)}
                        className="fixed inset-0 z-20 h-full w-full cursor-pointer bg-black/70"></div>
                    <div className="modal-body fixed top-1/2 left-1/2 z-30 w-full max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md border bg-white dark:border-gray-700 ">
                        <div className="flex items-center justify-between border-b px-6 py-3">
                            <h5 className="text-xl font-bold">Reset password</h5>
                            <button
                                onClick={() => setOpenModal(!openModal)}
                                className="flex h-6 w-6 items-center justify-center">
                                <BsXLg />
                            </button>
                        </div>
                        <div className="p-6">
                            <p className="mb-4 text-lg">
                                Forgot your password? Enter email and send a password reset email
                            </p>
                            <form className="grid gap-2" onSubmit={handleResetPassword}>
                                <input
                                    type="email"
                                    name="resetEmail"
                                    id="resetEmail"
                                    placeholder="Enter Email Address"
                                    className="w-full rounded border px-4 py-2 text-lg outline-cyan-500 transition "
                                />
                                <button
                                    type="submit"
                                    className="flex items-center justify-center rounded-md bg-cyan-500 px-4 py-3 text-center font-bold uppercase tracking-wide text-white transition hover:bg-cyan-600 md:px-8">
                                    Send password reset link
                                </button>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default LoginPage;
