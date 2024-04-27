import { useDispatch } from "react-redux";
import { toggleFeedback, toggleNotifications, toggleSidebar } from "../app/features/user/userSlice.js";
import { SearchBar } from "./SearchBar.jsx";
import logo from "/src/assets/logo.png";

export const TopBar = () => {
    const dispatch = useDispatch();


    const toggleSide = () => {
        dispatch(toggleSidebar());
    };

    return (
        <div className="bg-transparent fixed flex items-center left-0 p-3 top-0 w-full z-30 md:space-x-9 lg:space-x-36">
            <div className="cursor-pointer hidden items-center mr-3 md:flex">
                <img src={ logo } loading="lazy" alt="logo"
                     className="hidden mx-3 select-none w-7 md:block" />
                <h4 className="font-gilroy font-extrabold h-full hidden select-none text-2xl md:flex md:items-center">ormocpis</h4>
            </div>
            <div className="hidden select-none w-auto md:block">
                <h5 className="text-gray-600 text-sm font-normal">Welcome,</h5>
                <h6 className="font-bold text-black">Hans Gier</h6>
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

                {/*---------------Button Containers---------------*/ }
                <div className="flex items-center space-x-2 md:pr-4 md:space-x-4">
                    {/*Feedback Button*/ }
                    <button
                        id="feedback-button"
                        onClick={ () => dispatch(toggleFeedback()) }
                        className="bg-white duration-150 flex focus:border-none focus:outline-none focus:ring-0 focus:ring-offset-0 font-normal group hover:bg-gradient-to-tr hover:from-pink-100 hover:to-blue-100 items-center justify-center p-2 rounded-full transition-all md:p-3"
                        type="button">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24"
                             className="h-4 w-4 md:h-5 md:w-5">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M4 1C3.44772 1 3 1.44772 3 2V22C3 22.5523 3.44772 23 4 23C4.55228 23 5 22.5523 5 22V13.5983C5.46602 13.3663 6.20273 13.0429 6.99251 12.8455C8.40911 12.4914 9.54598 12.6221 10.168 13.555C11.329 15.2964 13.5462 15.4498 15.2526 15.2798C17.0533 15.1004 18.8348 14.5107 19.7354 14.1776C20.5267 13.885 21 13.1336 21 12.3408V5.72337C21 4.17197 19.3578 3.26624 18.0489 3.85981C16.9875 4.34118 15.5774 4.87875 14.3031 5.0563C12.9699 5.24207 12.1956 4.9907 11.832 4.44544C10.5201 2.47763 8.27558 2.24466 6.66694 2.37871C6.0494 2.43018 5.47559 2.53816 5 2.65249V2C5 1.44772 4.55228 1 4 1ZM5 4.72107V11.4047C5.44083 11.2247 5.95616 11.043 6.50747 10.9052C8.09087 10.5094 10.454 10.3787 11.832 12.4455C12.3106 13.1634 13.4135 13.4531 15.0543 13.2897C16.5758 13.1381 18.1422 12.6321 19 12.3172V5.72337C19 5.67794 18.9081 5.66623 18.875 5.68126C17.7575 6.18804 16.1396 6.81972 14.5791 7.03716C13.0776 7.24639 11.2104 7.1185 10.168 5.55488C9.47989 4.52284 8.2244 4.25586 6.83304 4.3718C6.12405 4.43089 5.46427 4.58626 5 4.72107Z"
                                      fill="#5c5c5c"></path>
                            </g>
                        </svg>
                    </button>
                    {/*Notification Button*/ }
                    <button
                        id="notif-button"
                        onClick={ () => dispatch(toggleNotifications()) }
                        className="bg-white duration-150 flex focus:border-none focus:outline-none focus:ring-0 focus:ring-offset-0 font-normal group hover:bg-gradient-to-tr hover:from-pink-100 hover:to-blue-100 items-center justify-center p-2 rounded-full transition-all md:p-3"
                        type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="h-4 w-4 md:h-5 md:w-5">
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};