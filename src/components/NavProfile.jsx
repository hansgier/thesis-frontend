import { useRef, useState } from "react";
import { useOutsideClick } from "../hooks/index.jsx";


export const NavProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useOutsideClick(dropdownRef, setIsOpen);

    return (
        <div
            ref={ dropdownRef }
            className="flex font-normal group hover:bg-blue-50 hover:cursor-pointer items-center px-4 py-2 relative rounded-xl">
            <div
                className={ `${ isOpen ? "flex" : "hidden" } absolute backdrop-blur-3xl bg-transparent border bottom-16 flex flex-col left-0 p-2 rounded-lg shadow-md space-y-2 w-full` }>
                <button
                    className="flex hover:bg-gray-500 hover:bg-opacity-10 items-center justify-between p-2 rounded-md text-gray-700"
                    type="button">
                    View Profile
                    <svg viewBox="0 -3 123 123" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" className="w-5">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
                                <g fillRule="nonzero" id="user">
                                    <path
                                        d="M61.3,65.6 C79.3,65.6 93.9,51 93.9,33 C93.9,15 79.3,0.5 61.3,0.5 C43.3,0.5 28.7,15.1 28.7,33 C28.7,50.9 43.3,65.6 61.3,65.6 Z M61.3,9 C74.5,9 85.3,19.8 85.3,33 C85.3,46.2 74.5,57 61.3,57 C48.1,57 37.3,46.2 37.3,33 C37.3,19.8 48.1,9 61.3,9 Z"
                                        fill="#17AB13" id="Shape"></path>
                                    <path
                                        d="M4.9,116.5 L118.1,116.5 C120.5,116.5 122.4,114.6 122.4,112.2 C122.4,89.7 104.1,71.3 81.5,71.3 L41.5,71.3 C19,71.3 0.6,89.6 0.6,112.2 C0.6,114.6 2.5,116.5 4.9,116.5 Z M41.5,79.9 L81.5,79.9 C97.9,79.9 111.4,92.1 113.5,107.9 L9.5,107.9 C11.6,92.2 25.1,79.9 41.5,79.9 Z"
                                        fill="#4A4A4A" id="Shape"></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
                <button
                    className="flex hover:bg-gray-500 hover:bg-opacity-10 items-center justify-between p-2 rounded-md text-gray-700"
                    type="button">
                    Log out
                    <svg fill="#000000" viewBox="0 0 24 24" id="sign-out-2" data-name="Line Color"
                         xmlns="http://www.w3.org/2000/svg" className="icon line-color w-5">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round">
                            <polyline id="secondary" points="18 9 21 12 18 15" style={ {
                                fill: "none",
                                stroke: "#ba2c56",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2
                            } } />
                            <line id="secondary-2" data-name="secondary" x1="21" y1="12" x2="7" y2="12"
                                  style={ {
                                      fill: "none",
                                      stroke: "#ba2c56",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2
                                  } } />
                            <path id="primary"
                                  d="M14,16v3a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4h9a1,1,0,0,1,1,1V8"
                                  style={ {
                                      fill: "none",
                                      stroke: "#000000",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2
                                  } } />
                        </g>
                    </svg>
                </button>
            </div>
            <div className="flex h-full items-center justify-between w-full" onClick={ () => setIsOpen(!isOpen) }>
                <div className="flex flex-col h-full items-stretch justify-center w-auto">
                    <h4 className="font-semibold max-w-full select-none text-base text-gray-600 text-left truncate w-full md:w-40">
                        Hans Gier
                    </h4>
                    <p className="text-gray-500 text-xs select-none">
                        Brgy. Can-adieng
                    </p>
                </div>
                <div className="flex h-full items-center w-auto">
                    <svg fill="#6b7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                         className="w-4">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fillRule="evenodd"
                                  d="M6.29289322,15.2928932 C6.65337718,14.9324093 7.22060824,14.9046797 7.61289944,15.2097046 L7.70710678,15.2928932 L12,19.5857864 L16.2928932,15.2928932 C16.6834175,14.9023689 17.3165825,14.9023689 17.7071068,15.2928932 C18.0675907,15.6533772 18.0953203,16.2206082 17.7902954,16.6128994 L17.7071068,16.7071068 L12.7071068,21.7071068 C12.3466228,22.0675907 11.7793918,22.0953203 11.3871006,21.7902954 L11.2928932,21.7071068 L6.29289322,16.7071068 C5.90236893,16.3165825 5.90236893,15.6834175 6.29289322,15.2928932 Z M12.7071068,2.29289322 L17.7071068,7.29289322 C18.0976311,7.68341751 18.0976311,8.31658249 17.7071068,8.70710678 C17.3165825,9.09763107 16.6834175,9.09763107 16.2928932,8.70710678 L12,4.41421356 L7.70710678,8.70710678 C7.31658249,9.09763107 6.68341751,9.09763107 6.29289322,8.70710678 C5.90236893,8.31658249 5.90236893,7.68341751 6.29289322,7.29289322 L11.2928932,2.29289322 C11.6834175,1.90236893 12.3165825,1.90236893 12.7071068,2.29289322 Z"></path>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};