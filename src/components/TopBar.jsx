import { useDispatch } from "react-redux";
import { toggleFeedback, toggleNotifications, toggleSidebar } from "../app/features/user/userSlice.js";
import { SearchBar } from "./SearchBar.jsx";
import { FiFlag } from "react-icons/fi";
import { MdNotificationsNone } from "react-icons/md";

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
                {/*---------------Menu option (mobile)---------------*/ }
                <button
                    id="sidebar-button"
                    className="duration-300 focus-visible:outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 font-medium h-10 hover:bg-blue-50 inline-flex items-center justify-center outline-none ring-0 ring-offset-0 rounded-md text-sm transition-colors w-10 md:hidden"
                    onClick={ (e) => {
                        e.stopPropagation();
                        toggleSide();
                    } }>
                    <img src="src/assets/logo.png" alt="logo" loading="lazy"
                         className="w-6" />
                </button>
                {/*---------------Search Bar---------------*/ }
                <SearchBar />
                <div className="flex items-center space-x-1 md:pr-4 md:space-x-4">
                    {/*---------------Report button---------------*/ }
                    <button
                        onClick={ () => dispatch(toggleFeedback()) }
                        id="feedback-button"
                        className="border border-none disabled:opacity-50 disabled:pointer-events-none duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium h-8 hover:bg-blue-50 inline-flex items-center justify-center rounded-md text-sm transition-colors w-8 whitespace-nowrap sm:h-10 sm:w-10">
                        <FiFlag size={ 18 } color={ "#5c5c5c" } />
                    </button>
                    {/*---------------NotifContainer button---------------*/ }
                    <button
                        id="notif-button"
                        onClick={ () => dispatch(toggleNotifications()) }
                        className="border border-none disabled:opacity-50 disabled:pointer-events-none duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium h-8 hover:bg-blue-50 inline-flex items-center justify-center rounded-md text-sm transition-colors w-8 whitespace-nowrap sm:h-10 sm:w-10">
                        <MdNotificationsNone size={ 22 } color={ "#5c5c5c" } />
                    </button>
                </div>
            </div>
        </div>
    );
};