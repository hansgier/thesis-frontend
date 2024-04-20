import { AnimatePresence, motion } from "framer-motion";
import { TEDropdown, TEDropdownItem, TEDropdownMenu, TEDropdownToggle, TERipple } from "tw-elements-react";

export const Messages = () => {
    return (
        <>
            <div className="mb-3 mx-4 md:mx-0">
                <div
                    className="bg-gradient-to-tl block border border-gray-400 from-yellow-50 h-auto hover:duration-300 hover:shadow-lg hover:transition-shadow pb-0 pt-2 px-4 rounded-lg select-none to-blue-50 via-red-50 w-full">
                    <div className="flex items-center space-x-4">
                        <div
                            className="flex h-14 hover:bg-blue-50 hover:duration-300 hover:transition-all items-center justify-center px-3 relative rounded-lg hover:cursor-pointer">
                            {/*----------------Filter Dropdown---------------------*/ }
                            <AnimatePresence>
                                <motion.div
                                    initial={ { opacity: 0, y: 20 } }
                                    animate={ { opacity: 1, y: 0 } }
                                    exit={ { opacity: 0, y: 20 } }
                                    transition={ { duration: 0.05 } }
                                    className="top-16 border-2 absolute bg-transparent backdrop-blur-3xl flex flex-col left-0 p-3 shadow-md rounded-md w-[200px] z-20">
                                    <TEDropdown className="flex flex-col">
                                        <TERipple rippleColor="#d9f99d">
                                            <TEDropdownToggle
                                                className="flex justify-between p-2 w-full rounded bg-transparent text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out motion-reduce:transition-none">
                                                Role
                                                <span className="ml-2 w-5">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                      <path
                                                          fillRule="evenodd"
                                                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                          clipRule="evenodd"
                                                      />
                                                    </svg>
                                                  </span>
                                            </TEDropdownToggle>
                                        </TERipple>
                                        <TEDropdownMenu>
                                            <TEDropdownItem>
                                                <a href="#"
                                                   className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                    Action
                                                </a>
                                            </TEDropdownItem>
                                            <TEDropdownItem>
                                                <a href="#"
                                                   className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                    Another action
                                                </a>
                                            </TEDropdownItem>
                                        </TEDropdownMenu>
                                    </TEDropdown>
                                </motion.div>
                            </AnimatePresence>
                            <svg viewBox="0 0 32 32" enable-background="new 0 0 32 32" id="Filled_Line" version="1.1"
                                 xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                 xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" className="w-5 md:w-6">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                        <path
                            d="M3.241,7.646L13,19v9l6-4v-5l9.759-11.354C29.315,6.996,28.848,6,27.986,6H4.014 C3.152,6,2.685,6.996,3.241,7.646z"
                            fill="#F9ED69" id="XMLID_936_"></path>
                                    <path d="M17,20v5.333L19,24v-5h-1C17.448,19,17,19.448,17,20z" fill="#FBF4A5"
                                          id="XMLID_370_"></path>
                                    <path
                                        d="M27.986,6H4.014C3.152,6,2.685,6.996,3.241,7.646L3.546,8h22.44 c0.583,0,0.977,0.912,1.003,1.705l1.769-2.059C29.315,6.996,28.848,6,27.986,6z"
                                        fill="#FBF4A5" id="XMLID_371_"></path>
                                    <path
                                        d="M15,26.667V19L5.241,7.646C4.685,6.996,5.152,6,6.014,6h-2C3.152,6,2.685,6.996,3.241,7.646 L13,19v9L15,26.667z"
                                        fill="#BBB24F" id="XMLID_372_"></path>
                                    <path
                                        d=" M3.241,7.646L13,19v9l6-4v-5l9.759-11.354C29.315,6.996,28.848,6,27.986,6H4.014C3.152,6,2.685,6.996,3.241,7.646z"
                                        fill="none" id="XMLID_856_" stroke="#200F60" stroke-linecap="round"
                                        stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></path>
                                    <polyline fill="none" id="XMLID_438_" points=" 22,9 23.639,9 21,12.071 "
                                              stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-miterlimit="10" stroke-width="2"></polyline>
                    </g>
                </svg>
                        </div>
                        <div className="flex gap-7 items-center mt-3 overflow-x-scroll pb-4 w-11/12">
                            <div className="flex flex-col h-full items-center justify-center">
                                <img src="https://pinegrow.com/placeholders/img16.jpg"
                                     className="h-8 rounded-full w-8 md:h-10 md:w-10" />
                                <p className="text-gray-500 text-xs md:text-sm">Alegria</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};