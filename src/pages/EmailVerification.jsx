import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "../app/features/auth/authSlice.js";
import { useEffect } from "react";
import { Button } from "antd";

export const EmailVerification = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { user, isLoading, authSuccess } = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const email = queryParams.get('email');

    useEffect(() => {
        if (token && email) {
            dispatch(verifyEmail({ email: email, token: token }));
        }
    }, [dispatch, token, email]);

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
            {/*<div className="fixed flex flex-col h-full items-center justify-center w-full">*/}
            {/*    <img src={ notFoundImg } className="bg-cover w-60" loading="lazy" />*/}
            {/*    <h1 className="font-bold mb-3 text-3xl md:text-5xl">Page not found</h1>*/}
            {/*    <h4 className="mb-10 mx-12 text-center text-sm md:mx-0 md:text-base">Such a page does not exist or the*/}
            {/*                                                                         address is incorrect</h4>*/}
            {/*    <button*/}
            {/*        onClick={ () => navigate(-1) }*/}
            {/*        className="border-2 border-Thesis-200 hover:bg-blue-50 px-4 py-2 rounded-md text-sm md:text-base"*/}
            {/*        type="button">Go back*/}
            {/*    </button>*/}
            {/*</div>*/}
            <div className="fixed flex flex-col h-full items-center justify-center w-full">
                <div className="bg-white p-10 rounded-lg shadow-xl flex flex-col items-center">
                    <svg fill="#21ef03" className="w-12 mb-4" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 95.172 95.172" xml:space="preserve"
                         stroke="#21ef03"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier"> <g> <path
                            d="M93.104,0H2.069C0.926,0,0,0.927,0,2.069v91.035c0,1.142,0.927,2.068,2.069,2.068h91.033c1.144,0,2.069-0.927,2.069-2.068 V2.069C95.172,0.927,94.246,0,93.104,0z M76.948,32.546L38.602,70.893c-0.24,0.239-0.555,0.359-0.869,0.359s-0.63-0.12-0.869-0.359 L18.226,52.256c-0.23-0.23-0.36-0.543-0.36-0.869s0.13-0.639,0.36-0.869l6.542-6.542c0.461-0.461,1.277-0.461,1.738,0 l11.227,11.226l30.936-30.936c0.461-0.461,1.277-0.461,1.738,0l6.541,6.542c0.23,0.23,0.361,0.543,0.361,0.869 C77.309,32.003,77.178,32.315,76.948,32.546z"></path> </g> </g></svg>
                    <h1 className="text-3xl font-bold text-center mb-4 select-none">Email Verified</h1>
                    <p className="text-center text-gray-500 mb-6 select-none">
                        Your email has been successfully verified. Thank you for confirming your account.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            onClick={ () => navigate("/") }
                            disabled={ user?.isVerified }
                            loading={ isLoading }
                            className={ `text-white font-bold bg-blue-500 hover:bg-blue-600 active:bg-blue-700` }
                        >
                            Back to login
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};