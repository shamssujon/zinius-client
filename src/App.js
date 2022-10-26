import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes";

function App() {
    return (
        <div className="App flex flex-col justify-between bg-slate-50 text-slate-800">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
