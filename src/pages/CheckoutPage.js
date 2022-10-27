import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const CheckoutPage = () => {
    const courseData = useLoaderData();
    const { title, price, image } = courseData;
    const [total, setTotal] = useState(price);
    const [discount, setDiscount] = useState(0);
    const { successToast, errorToast } = useContext(AuthContext);

    const handlePromoCode = (event) => {
        event.preventDefault();
        const form = event.target;
        const promoCode = form.promoCode.value;
        const activePromoCode = "ZINIUS";

        if (promoCode === activePromoCode) {
            const discount = (price * 0.1).toFixed(2);
            const total = price - discount;
            setDiscount(discount);
            setTotal(total);
            successToast(`You got $${discount} discount`);
        } else {
            errorToast("No discount found");
        }
    };
    return (
        <section className="py-10">
            <div className="container">
                <h2 className="mb-8 text-center text-4xl font-bold">Checkout</h2>
                <div className="grid gap-8 lg:grid-cols-6">
                    <div className=" lg:col-span-4">
                        <div className="flex items-center gap-4 rounded-md border bg-white p-4 md:p-8">
                            <div className="aspect-4/3 w-24 overflow-hidden">
                                <img src={image} alt="" className="h-full w-full object-cover rounded" />
                            </div>
                            <div className="">
                                <h5 className="text-xl font-bold">{title}</h5>
                                <p className="text-lg">${price} USD</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="sticky top-4 space-y-6 rounded-md border bg-white p-6 md:p-8">
                            <div className="flex items-center justify-between text-lg">
                                <span>Price: </span>
                                <span className="font-bold">${price}</span>
                            </div>
                            <form onSubmit={handlePromoCode} className="grid gap-2">
                                <label htmlFor="promoCode" className="text-sm font-bold uppercase">
                                    Use promo code{" "}
                                    <span className="font-normal normal-case">
                                        (use <span className="font-bold">ZINIUS</span> to get 10%
                                        discount)
                                    </span>
                                </label>
                                <div className="flex ">
                                    <input
                                        type="text"
                                        name="promoCode"
                                        id="promoCode"
                                        placeholder="Promo code"
                                        className="w-full rounded-l border px-4 py-2 outline-cyan-500 transition"
                                    />
                                    <button
                                        type="submit"
                                        className="-ml-2 rounded-r bg-cyan-500 px-4 py-2 text-center font-semibold uppercase text-white transition hover:bg-cyan-600">
                                        Apply
                                    </button>
                                </div>
                            </form>
                            {discount > 0 && (
                                <div className="flex items-center justify-between text-lg">
                                    <span>Discount using promo code: </span>
                                    <span className="font-bold">- ${discount}</span>
                                </div>
                            )}
                            <div className="flex items-center justify-between text-xl">
                                <span className="font-bold">Total: </span>
                                <span className="font-bold">${total}</span>
                            </div>
                            <div className="grid">
                                <Link className="inline-flex items-center justify-center rounded-md bg-cyan-500 px-6 py-4 text-center font-bold uppercase tracking-wide text-white transition hover:bg-cyan-600 md:px-8">
                                    Buy now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutPage;
