import { useDispatch } from "react-redux";
import { toggleSidebar } from "../app/features/user/userSlice.jsx";

export const TopBar = () => {
    const dispatch = useDispatch();

    const toggleSide = () => {
        dispatch(toggleSidebar());
    };

    return (
        <div
            className="bg-transparent border-b-2 fixed flex left-0 pb-2 pl-6 pr-3 pt-3 top-0 w-full z-30 md:left-[272px] md:space-x-9 md:w-[calc(100%-272px)] lg:space-x-36"
        >
            <div className="hidden select-none w-auto md:block">
                <h5 className="text-gray-600 text-sm">Welcome,</h5>
                <h6 className="font-medium text-gray-900">Hans Gier</h6>
            </div>
            <div className="flex flex-1 justify-between">
                <button
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
                <form className="bg-gray-200 bg-opacity-60 px-4 rounded-lg w-40 sm:w-2/4 md:w-2/3">
                    <div className="flex h-full items-center md:space-x-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="h-5 hidden md:block opacity-50 w-5">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                        <input
                            className="bg-transparent border-none flex focus:border-gray-800 focus:outline-none focus:ring-0 focus:ring-offset-0 font-normal h-full hover:cursor-text placeholder-gray-500 placeholder-opacity-100 px-3 py-2 text-sm tracking-wide w-full"
                            placeholder="Search..." type="search"/>
                    </div>
                </form>
                <div className="flex items-center space-x-1 md:pr-4 md:space-x-4">
                    <button
                        className="border border-none disabled:opacity-50 disabled:pointer-events-none duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium h-8 hover:bg-blue-50 inline-flex items-center justify-center rounded-md text-sm transition-colors w-8 whitespace-nowrap sm:h-10 sm:w-10">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24"
                             className="w-5">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M4 1C3.44772 1 3 1.44772 3 2V22C3 22.5523 3.44772 23 4 23C4.55228 23 5 22.5523 5 22V13.5983C5.46602 13.3663 6.20273 13.0429 6.99251 12.8455C8.40911 12.4914 9.54598 12.6221 10.168 13.555C11.329 15.2964 13.5462 15.4498 15.2526 15.2798C17.0533 15.1004 18.8348 14.5107 19.7354 14.1776C20.5267 13.885 21 13.1336 21 12.3408V5.72337C21 4.17197 19.3578 3.26624 18.0489 3.85981C16.9875 4.34118 15.5774 4.87875 14.3031 5.0563C12.9699 5.24207 12.1956 4.9907 11.832 4.44544C10.5201 2.47763 8.27558 2.24466 6.66694 2.37871C6.0494 2.43018 5.47559 2.53816 5 2.65249V2C5 1.44772 4.55228 1 4 1ZM5 4.72107V11.4047C5.44083 11.2247 5.95616 11.043 6.50747 10.9052C8.09087 10.5094 10.454 10.3787 11.832 12.4455C12.3106 13.1634 13.4135 13.4531 15.0543 13.2897C16.5758 13.1381 18.1422 12.6321 19 12.3172V5.72337C19 5.67794 18.9081 5.66623 18.875 5.68126C17.7575 6.18804 16.1396 6.81972 14.5791 7.03716C13.0776 7.24639 11.2104 7.1185 10.168 5.55488C9.47989 4.52284 8.2244 4.25586 6.83304 4.3718C6.12405 4.43089 5.46427 4.58626 5 4.72107Z"
                                      fill="#5c5c5c"></path>
                            </g>
                        </svg>
                    </button>
                    <button
                        className="border border-none disabled:opacity-50 disabled:pointer-events-none duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium h-8 hover:bg-blue-50 inline-flex items-center justify-center rounded-md text-sm transition-colors w-8 whitespace-nowrap sm:h-10 sm:w-10">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="h-5 w-5">
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};