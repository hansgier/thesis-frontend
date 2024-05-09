import { useDispatch, useSelector } from "react-redux";
import { toggleNotifications } from "../app/features/user/userSlice.js";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const NotifContainer = () => {
    const { isNotificationsOpen } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event) => {
            const notifElement = document.getElementById("notif-container");
            const notifButton = document.getElementById("notif-button");
            if (notifElement && !notifElement.contains(event.target) && !notifButton.contains(event.target)) {
                dispatch(toggleNotifications());
            }
        };

        if (isNotificationsOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isNotificationsOpen, dispatch]);

    return (
        <>
            <AnimatePresence>
                { isNotificationsOpen && (
                    <motion.div
                        id="notif-container"
                        layout
                        initial={ { opacity: 0, height: 0 } }
                        animate={ { opacity: 1, height: "auto" } }
                        exit={ { opacity: 0, height: 0 } }
                        transition={ { type: "tween", duration: 0.2 } }
                        className="fixed flex h-auto justify-end right-0 w-full z-50 top-16 md:w-auto">
                        <div
                            className="bg-white border flex flex-col max-h-[450px] pb-0 pt-4 rounded-b-lg shadow-md space-y-2 w-full z-50 md:w-full lg:w-full">
                            <div className="flex flex-col h-96 overflow-hidden w-full md:w-96">
                                <div className="flex mb-2 px-4">
                                    <h3 className="flex-1 font-semibold select-none text-lg">Notifications</h3>
                                    <button type="button"
                                            className="flex hover:bg-blue-50 hover:duration-300 hover:transition-all items-center justify-center rounded-md w-8">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             width="24">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path d="M6 12h12M4 16h12M8 8h12" stroke="#000000" strokeWidth="1.5"
                                                      strokeMiterlimit="10" strokeLinecap="round"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                                <div className="border-t h-full overflow-y-scroll">
                                    <div
                                        className="flex hover:bg-gray-100 hover:cursor-pointer hover:duration-300 hover:transition-all mb-2 px-4 py-2 space-x-4">
                                        <div className="pt-2">
                                            <svg fill="#00A7E1" viewBox="0 0 64 64" version="1.1"
                                                 xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"
                                                 xmlns:serif="http://www.serif.com/"
                                                 style={ {
                                                     fillRule: "evenodd",
                                                     clipRule: "evenodd",
                                                     strokeLinejoin: "round",
                                                     strokeMiterlimit: 2
                                                 } }
                                                 width="10">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                   strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <g transform="matrix(1,0,0,1,-576,-320)">
                                                        <rect id="Icons" x="0" y="0" width="1280" height="800"
                                                              style={ { fill: "none" } }></rect>
                                                        <g id="Icons1" serif:id="Icons">
                                                            <g id="Strike"></g>
                                                            <g id="H1"></g>
                                                            <g id="H2"></g>
                                                            <g id="H3"></g>
                                                            <g id="list-ul"></g>
                                                            <g id="hamburger-1"></g>
                                                            <g id="hamburger-2"></g>
                                                            <g id="list-ol"></g>
                                                            <g id="list-task"></g>
                                                            <g id="trash"></g>
                                                            <g id="vertical-menu"></g>
                                                            <g id="horizontal-menu"></g>
                                                            <g id="sidebar-2"></g>
                                                            <g id="Pen"></g>
                                                            <g id="Pen1" serif:id="Pen"></g>
                                                            <g id="clock"></g>
                                                            <g id="external-link"></g>
                                                            <g id="hr"></g>
                                                            <g id="info"></g>
                                                            <g id="warning"></g>
                                                            <g id="plus-circle"></g>
                                                            <g id="minus-circle"></g>
                                                            <g id="vue"></g>
                                                            <g id="cog"></g>
                                                            <g id="logo"></g>
                                                            <g id="radio-check"></g>
                                                            <g id="eye-slash"></g>
                                                            <g id="eye"></g>
                                                            <g id="toggle-off"></g>
                                                            <g id="shredder"></g>
                                                            <g id="spinner--loading--dots-"
                                                               serif:id="spinner [loading, dots]"></g>
                                                            <g id="react"></g>
                                                            <g id="check-selected"></g>
                                                            <g id="circle-filled"
                                                               transform="matrix(1.70002,0,0,1.70002,-316.778,-246.387)">
                                                                <circle cx="543.992" cy="352" r="14.13"></circle>
                                                            </g>
                                                            <g id="turn-off"></g>
                                                            <g id="code-block"></g>
                                                            <g id="user"></g>
                                                            <g id="coffee-bean"></g>
                                                            <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,785.021,-208.975)">
                                                                <g id="coffee-beans">
                                                                    <g id="coffee-bean1" serif:id="coffee-bean"></g>
                                                                </g>
                                                            </g>
                                                            <g id="coffee-bean-filled"></g>
                                                            <g transform="matrix(0.638317,0.368532,-0.368532,0.638317,913.062,-208.975)">
                                                                <g id="coffee-beans-filled">
                                                                    <g id="coffee-bean2" serif:id="coffee-bean"></g>
                                                                </g>
                                                            </g>
                                                            <g id="clipboard"></g>
                                                            <g transform="matrix(1,0,0,1,128.011,1.35415)">
                                                                <g id="clipboard-paste"></g>
                                                            </g>
                                                            <g id="clipboard-copy"></g>
                                                            <g id="Layer1"></g>
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div>
                                            <h6 className="break-all font-normal mb-1 select-none text-gray-700 text-sm md:text-sm">Brgy.
                                                                                                                                    Linao
                                                                                                                                    has
                                                                                                                                    responded
                                                                                                                                    to
                                                                                                                                    you</h6>
                                            <p className="text-gray-400 text-xs">now</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) }
            </AnimatePresence>
        </>
    );
};