import { useNavigate } from "react-router-dom";
import notFoundImg from "../assets/not-found.svg";

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <>
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
            <div className="fixed flex flex-col h-full items-center justify-center w-full">
                <img src={ notFoundImg } className="bg-cover w-60" loading="lazy" />
                <h1 className="font-bold mb-3 text-3xl md:text-5xl">Page not found</h1>
                <h4 className="mb-10 mx-12 text-center text-sm md:mx-0 md:text-base">Such a page does not exist or the
                                                                                     address is incorrect</h4>
                <button
                    onClick={ () => navigate(-1) }
                    className="border-2 border-Thesis-200 hover:bg-blue-50 px-4 py-2 rounded-md text-sm md:text-base"
                    type="button">Go back
                </button>
            </div>
        </>
    );
};