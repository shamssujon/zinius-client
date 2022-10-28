import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthProvider";

function App() {
    const { darkLight } = useContext(AuthContext);
    return (
        <div className={`App  ${darkLight && "dark"}`}>
            <div
                className={`flex min-h-screen flex-col justify-between bg-slate-50 text-slate-800 dark:bg-slate-800 `}>
                <RouterProvider router={router}></RouterProvider>
                <Toaster />
            </div>
        </div>
    );
}

export default App;
