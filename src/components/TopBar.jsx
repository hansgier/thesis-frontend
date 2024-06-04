import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../app/features/auth/authSlice.js";
import { SearchBar } from "./SearchBar.jsx";
import logo from "/src/assets/logo.png";

export const TopBar = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store.auth);


    const toggleSide = () => {
        dispatch(toggleSidebar());
    };

    return (
        <header
            className="bg-transparent fixed flex items-center left-0 p-3 top-0 w-full z-30 md:space-x-9 lg:space-x-36">
            <div className="cursor-pointer hidden items-center mr-3 md:flex">
                <img src={ logo } loading="lazy" alt="logo"
                     className="hidden mx-3 select-none w-7 md:block" />
                <h4 className="font-gilroy font-extrabold h-full hidden select-none text-2xl md:flex md:items-center">ormocpis</h4>
            </div>
            <div className="hidden select-none w-auto md:block">
                <h5 className="text-gray-600 text-sm font-normal">Welcome,</h5>
                <h6 className="font-bold text-black">{ user.role === "admin" ? "Admin" : user.username }</h6>
            </div>
            <div className="flex flex-1 justify-between">
                {/*---------------Menu Bar---------------*/ }
                <button
                    onClick={ () => toggleSide() }
                    className="duration-300 focus-visible:outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 font-medium h-10 hover:bg-blue-50 inline-flex items-center justify-center outline-none ring-0 ring-offset-0 rounded-md text-sm transition-colors w-10 md:hidden">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24"
                         className="h-5 w-5">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"></path>
                        </g>
                    </svg>
                </button>

                {/*---------------Search Bar---------------*/ }
                <SearchBar />

                {/*---------------Button Container---------------*/ }
                <div className="flex items-center space-x-2 md:pr-4 md:space-x-4">
                    {/*    /!*Notification Button*/ }
                    {/*    <button*/ }
                    {/*        id="notif-button"*/ }
                    {/*        onClick={ () => dispatch(toggleNotifications()) }*/ }
                    {/*        className="bg-white duration-150 flex focus:border-none focus:outline-none focus:ring-0 focus:ring-offset-0 font-normal group hover:bg-gradient-to-tr hover:from-pink-100 hover:to-blue-100 items-center justify-center p-2 rounded-full transition-all md:p-3"*/ }
                    {/*        type="button">*/ }
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"*/ }
                    {/*             stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"*/ }
                    {/*             className="h-4 w-4 md:h-5 md:w-5">*/ }
                    {/*            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>*/ }
                    {/*            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>*/ }
                    {/*        </svg>*/ }
                    {/*    </button>*/ }
                </div>
            </div>
        </header>
    );
};