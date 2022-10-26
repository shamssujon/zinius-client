import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;
