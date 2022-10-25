import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <>
            <Header></Header>
            <main className="flex-1">
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default MainLayout;
