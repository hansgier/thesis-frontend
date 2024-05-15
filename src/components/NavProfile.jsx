import React, { useState } from "react";
import { LogViewProfilePopup } from "./LogViewProfilePopup.jsx";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import { Popover } from "antd";


export const NavProfile = React.memo(({ mode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useSelector((store) => store.auth);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            { mode === "mobile" ? (
                <button
                    onBlur={ () => setIsOpen(false) }
                    onClick={ togglePopup }
                    className="flex font-normal group hover:cursor-pointer items-center p-2 relative rounded-lg space-x-2 w-full md:hidden">
                    <div
                        className="bg-gradient-to-br from-Thesis-200 items-center justify-center p-0 rounded-full  to-green-900 flex">
                        <CgProfile color={ "#ffffff" } size={ 34 } />
                    </div>
                    <div className="flex-1 h-full">
                        <h4 className="font-semibold max-w-full select-none text-gray-800 text-left text-sm truncate w-full">{ user.name }</h4>
                        <p className="select-none text-gray-500 text-xs">gierhansclement@gmail.com</p>
                    </div>
                    <div className="flex h-full">
                        <svg fill="#6b7280" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                             className="w-4">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                               strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fillRule="evenodd"
                                      d="M6.29289322,15.2928932 C6.65337718,14.9324093 7.22060824,14.9046797 7.61289944,15.2097046 L7.70710678,15.2928932 L12,19.5857864 L16.2928932,15.2928932 C16.6834175,14.9023689 17.3165825,14.9023689 17.7071068,15.2928932 C18.0675907,15.6533772 18.0953203,16.2206082 17.7902954,16.6128994 L17.7071068,16.7071068 L12.7071068,21.7071068 C12.3466228,22.0675907 11.7793918,22.0953203 11.3871006,21.7902954 L11.2928932,21.7071068 L6.29289322,16.7071068 C5.90236893,16.3165825 5.90236893,15.6834175 6.29289322,15.2928932 Z M12.7071068,2.29289322 L17.7071068,7.29289322 C18.0976311,7.68341751 18.0976311,8.31658249 17.7071068,8.70710678 C17.3165825,9.09763107 16.6834175,9.09763107 16.2928932,8.70710678 L12,4.41421356 L7.70710678,8.70710678 C7.31658249,9.09763107 6.68341751,9.09763107 6.29289322,8.70710678 C5.90236893,8.31658249 5.90236893,7.68341751 6.29289322,7.29289322 L11.2928932,2.29289322 C11.6834175,1.90236893 12.3165825,1.90236893 12.7071068,2.29289322 Z"></path>
                            </g>
                        </svg>
                    </div>
                    <AnimatePresence>
                        { isOpen && (
                            <LogViewProfilePopup comp_id="navProf-container" mode="mobile" />
                        ) }
                    </AnimatePresence>
                </button>
            ) : (
                <Popover content={ <LogViewProfilePopup comp_id="navProf-container" mode="desktop" /> }
                         trigger="click"
                         arrow={ false } placement="topLeft" className="m-0 p-0">
                    <button
                        onClick={ togglePopup }
                        className="bg-gradient-to-br font-normal from-Thesis-200 group hidden hover:cursor-pointer items-center justify-center p-0 relative rounded-full space-x-2 to-green-900 md:flex">
                        <CgProfile color={ "#ffffff" } size={ 40 } />

                        {/*<AnimatePresence>*/ }
                        {/*    { isOpen && (*/ }
                        {/*) }*/ }
                        {/*</AnimatePresence>*/ }
                    </button>
                </Popover>
            ) }
        </>
    );
});