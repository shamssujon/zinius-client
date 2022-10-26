import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import {
    BsFacebook,
    BsYoutube,
    BsTwitter,
    BsLinkedin,
    BsFillEnvelopeFill,
    BsFillTelephoneFill,
} from "react-icons/bs";
const Footer = () => {
    return (
        <footer className="border-t bg-white">
            <div className="container">
                <div className="grid gap-8 py-10 md:grid-cols-2  lg:grid-cols-4">
                    <div className="">
                        {/* Logo */}
                        <Link to="/" className="mb-3 flex items-center gap-2">
                            <img src={logo} alt="" className="h-10 w-10" />
                            <span className="text-2xl font-bold text-cyan-500">Zinius</span>
                        </Link>
                        {/* <p className="mb-2">&copy; Copyright 2022 Zinius</p> */}
                        <ul className="grid">
                            <li>
                                <a
                                    href="mailto:sujon2762@gmail.com"
                                    className="flex items-center gap-2 p-2">
                                    <BsFillEnvelopeFill />
                                    <span>sujon2762@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="callto:+8801780691149"
                                    className="flex items-center gap-2 p-2">
                                    <BsFillTelephoneFill />
                                    <span>+88 01780 691149</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="mt-2 flex items-center">
                            <li>
                                <a
                                    href="/"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-center text-xl transition hover:bg-cyan-500 hover:text-white">
                                    <BsFacebook />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-center text-xl transition hover:bg-cyan-500 hover:text-white">
                                    <BsYoutube />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-center text-xl transition hover:bg-cyan-500 hover:text-white">
                                    <BsTwitter />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="flex h-10 w-10 items-center justify-center rounded-full text-center text-xl transition hover:bg-cyan-500 hover:text-white">
                                    <BsLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="mb-4 text-xl font-bold">Company</h5>
                        <ul className="grid">
                            <li>
                                <Link className="inline-block py-2 transition hover:text-cyan-500">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="inline-block py-2 transition hover:text-cyan-500">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link className="inline-block py-2 transition hover:text-cyan-500">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link className="inline-block py-2 transition hover:text-cyan-500">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="mb-4 text-xl font-bold">Top Categories</h5>
                        <ul className="grid">
                            <li>
                                <Link className="inline-block py-2 transition hover:text-cyan-500">
                                    Category one
                                </Link>
                            </li>
                            <li>
                                <Link className="inline-block py-2 transition hover:text-cyan-500">
                                    Category Two
                                </Link>
                            </li>
                            <li>
                                <Link className="inline-block py-2 transition hover:text-cyan-500">
                                    Category Three
                                </Link>
                            </li>
                            <li>
                                <Link className="inline-block py-2 transition hover:text-cyan-500">
                                    Category Four
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h5 className="mb-4 text-xl font-bold">Subscribe to our newsletter</h5>
                        <p>
                            Subscribe to our newsletter to get the latest news, updates and
                            annoucements
                        </p>
                        <form className="mt-4 grid gap-3">
                            <input
                                type="email"
                                name="newsletterEmail"
                                id="newsletterEmail"
                                placeholder="Enter your email address"
                                className="w-full rounded border px-4 py-2 outline-cyan-500 transition"
                            />
                            <button className="flex items-center justify-center gap-2 rounded bg-cyan-500 px-4 py-2 text-center font-bold uppercase tracking-wide text-white transition hover:bg-cyan-600">
                                <BsFillEnvelopeFill />
                                <span>Subscribe now</span>
                            </button>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="py-6 text-center">
                    <p>Copyright &copy; 2022 | Some rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
