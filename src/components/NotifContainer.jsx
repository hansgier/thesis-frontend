import { Notification } from "./Notification.jsx";
import { useDispatch, useSelector } from "react-redux";
import { TbClearAll } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import { toggleNotifications } from "../app/features/user/userSlice.jsx";
import { useEffect } from "react";

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
        <AnimatePresence>
            { isNotificationsOpen && (
                <motion.div
                    id="notif-container"
                    onClick={ () => dispatch(toggleNotifications()) }
                    initial={ { opacity: 0, y: -30 } }
                    animate={ { opacity: 1, y: 0 } }
                    exit={ { opacity: 0, y: -30 } }
                    transition={ { duration: 0.1 } }
                    className="fixed flex  justify-end right-0 w-full z-50 md:w-96 md:top-16 top-[60px]">
                    <div
                        className="backdrop-blur-3xl backdrop-brightness-200 bg-transparent border-b-0 border-l-2 border-r-2 border-t-2 flex flex-col max-h-[450px] pb-0 pt-4 rounded-b-lg shadow-2xl space-y-2 w-full z-50 md:w-full lg:w-full"
                        onClick={ (e) => e.stopPropagation() }>
                        <div className="flex flex-col h-96 overflow-hidden">
                            <div className="flex mb-2 px-4">
                                <h3 className="flex-1 font-semibold text-lg">Notifications</h3>
                                {/*---------------Clear All Notifications---------------*/ }
                                <button type="button"
                                        className="flex hover:bg-blue-50 hover:duration-300 hover:transition-all items-center justify-center rounded-md w-8">
                                    <TbClearAll size={ 20 } />
                                </button>
                            </div>
                            <div className="h-full overflow-y-scroll">
                                {/*---------------Notifications---------------*/ }
                                <Notification />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ) }
        </AnimatePresence>

    );
};