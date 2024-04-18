import { Sidebar, TopBar } from "../../components/index.jsx";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
    return (
        <main className="font-poppins">
            <div className="fixed h-full left-0 top-0 w-full z-0"></div>
            <div
                className="-left-16 bg-Thesis-50 bg-opacity-10 blur-3xl fixed h-80 rounded-full top-20 w-52 md:bg-opacity-40"></div>
            <div
                className="-left-32 bg-opacity-10 bg-pink-300 blur-3xl fixed h-52 rounded-full top-96 w-52 md:bg-opacity-40 md:bg-pink-400"></div>
            <div
                className="-left-16 bg-opacity-10 bg-yellow-200 blur-3xl fixed h-52 rounded-full top-72 w-52 md:bg-opacity-40 md:bg-yellow-300"></div>
            <div
                className="-top-44 bg-opacity-50 bg-yellow-200 blur-3xl fixed h-52 right-60 rounded-full w-44"></div>
            <div
                className="-top-44 bg-opacity-100 bg-purple-200 blur-3xl fixed h-52 right-96 rounded-full w-44"></div>
            <TopBar/>
            <Sidebar/>
            <Outlet/>
        </main>
    );
};
