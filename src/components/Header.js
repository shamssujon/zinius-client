import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { BsFillPersonFill, BsMoon, BsSun } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const [profileBtnActive, setProfileBtnActive] = useState(false);
    const [darkLight, setDarkLight] = useState(false);
    const { user, logOut, successToast, errorToast } = useContext(AuthContext);

    const handleLogOut = () => {
        setProfileBtnActive(!profileBtnActive);
        logOut()
            .then(() => {
                successToast("Signed out");
            })
            .catch((error) => {
                errorToast(error.message);
            });
    };
    return (
        <header className="header relative border-b bg-white py-5">
            <div className="container">
                <div className="flex items-center justify-between gap-8">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src={logo} alt="" className="h-10 w-10" />
                        <span className="text-2xl font-bold text-cyan-500">Zinius</span>
                    </Link>

                    {/* Header Navigation */}
                    <nav
                        className={`absolute top-full left-0 right-0 z-10 flex origin-top transform flex-col items-center gap-4 border-b bg-white pb-4 transition-all lg:static lg:flex-row lg:border-none lg:pb-0 ${
                            menuActive
                                ? "visible scale-y-100 opacity-100"
                                : "invisible scale-y-0 opacity-0 lg:visible lg:scale-y-100 lg:opacity-100"
                        }`}>
                        <NavLink
                            to={"/home"}
                            className={({ isActive }) =>
                                (isActive ? "text-cyan-400 hover:text-cyan-500" : null) +
                                " p-2 font-bold uppercase transition hover:text-cyan-500"
                            }>
                            Home
                        </NavLink>
                        <NavLink
                            to={"/courses"}
                            className={({ isActive }) =>
                                (isActive ? "text-cyan-400 hover:text-cyan-500" : null) +
                                " p-2 font-bold uppercase transition hover:text-cyan-500"
                            }>
                            Courses
                        </NavLink>
                        <NavLink
                            to={"/blog"}
                            className={({ isActive }) =>
                                (isActive ? "text-cyan-400 hover:text-cyan-500" : null) +
                                " p-2 font-bold uppercase transition hover:text-cyan-500"
                            }>
                            Blog
                        </NavLink>
                        <NavLink
                            to={"/faq"}
                            className={({ isActive }) =>
                                (isActive ? "text-cyan-400 hover:text-cyan-500" : null) +
                                " p-2 font-bold uppercase transition hover:text-cyan-500"
                            }>
                            FAQ
                        </NavLink>
                    </nav>

                    {/* Header Buttons */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setDarkLight(!darkLight)}
                            className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-cyan-500/10 bg-slate-200 text-center outline-2 outline-offset-2  transition hover:bg-slate-300 focus:bg-slate-300 focus:outline focus:outline-cyan-500/20 active:outline-cyan-500/50">
                            {darkLight ? (
                                <BsMoon className="h-full w-full p-2" />
                            ) : (
                                <BsSun className="h-full w-full p-2" />
                            )}
                        </button>

                        <div className="relative">
                            <button
                                title={user?.displayName || "Login"}
                                onClick={() => setProfileBtnActive(!profileBtnActive)}
                                className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-cyan-500/10 bg-slate-200 text-center outline-2 outline-offset-2  transition hover:bg-slate-300 hover:outline hover:outline-cyan-500/20 focus:bg-slate-300 focus:outline focus:outline-cyan-500/20 active:outline-cyan-500/50">
                                {user?.photoURL ? (
                                    <img
                                        src={user?.photoURL}
                                        alt={user?.displayName}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <BsFillPersonFill className="h-full w-full p-2" />
                                )}
                            </button>
                            <div
                                className={`absolute right-0 top-full z-10 mt-4 w-56 rounded border bg-white p-4 shadow ${
                                    profileBtnActive ? "visible opacity-100" : "invisible opacity-0"
                                }`}>
                                {user?.uid ? (
                                    <div>
                                        {user?.displayName && <p>Hello, {user?.displayName}</p>}
                                        <button
                                            onClick={handleLogOut}
                                            className="flex items-center justify-center rounded bg-cyan-500 px-4 py-2 text-center font-semibold uppercase text-white transition hover:bg-cyan-600">
                                            Log Out
                                        </button>
                                    </div>
                                ) : (
                                    <div>
                                        <h4 className="mb-4 text-xl font-bold">
                                            Sign up or log in to your Zinius account.
                                        </h4>
                                        <div className="grid gap-2">
                                            <Link
                                                onClick={() =>
                                                    setProfileBtnActive(!profileBtnActive)
                                                }
                                                to={"/login"}
                                                className="flex items-center justify-center rounded bg-indigo-500 px-4 py-2 text-center font-semibold uppercase text-white transition hover:bg-indigo-600">
                                                Login
                                            </Link>
                                            <Link
                                                onClick={() =>
                                                    setProfileBtnActive(!profileBtnActive)
                                                }
                                                to={"/register"}
                                                className="flex items-center justify-center rounded bg-cyan-500 px-4 py-2 text-center font-semibold uppercase text-white transition hover:bg-cyan-600">
                                                Register
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={() => setMenuActive(!menuActive)}
                            className="relative h-6 w-8 lg:hidden">
                            <span
                                className={`absolute left-1/2 top-0 block h-0.5 w-full origin-top-right -translate-x-1/2 transform rounded bg-cyan-600 transition will-change-transform ${
                                    menuActive ? "-rotate-45" : "rotate-0"
                                }`}></span>
                            <span
                                className={`absolute left-1/2 top-1/2 block h-0.5 w-full origin-left -translate-y-1/2 -translate-x-1/2 transform rounded bg-cyan-600 transition  will-change-transform ${
                                    menuActive ? "scale-x-0" : "scale-x-100"
                                }`}></span>
                            <span
                                className={`absolute left-1/2 bottom-0 block h-0.5 w-full origin-bottom-right -translate-x-1/2 transform rounded bg-cyan-600 transition will-change-transform ${
                                    menuActive ? "rotate-45" : "rotate-0"
                                }`}></span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
