import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, toggleSidebar } from "../app/features/auth/authSlice.js";
import { Spin } from "antd";
import React from "react";

export const LogViewProfilePopup = React.memo(({ comp_id, mode }) => {
    const { isSideBarOpen, isLoading, authSuccess, authError, guestMode, user } = useSelector((store) => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <motion.div
            id={ comp_id }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            onClick={ (e) => e.stopPropagation() }
            className={ `bg-transparent flex flex-col ${ mode === "desktop" ? "w-[200px]" : "absolute right-0" +
                " bottom-16 w-full shadow-2xl" } p-0 space-y-2 ` }>
            { user.role !== "guest" && (
                isLoading ?
                    <button disabled={ isLoading }
                            className="flex hover:bg-gray-500 hover:bg-opacity-10 items-center justify-between p-2 rounded-md text-gray-700 text-sm md:text-base"
                            type="button">
                        View Profile
                        <svg viewBox="0 -3 123 123" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" className="w-4 md:w-5">
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
                    :
                    <NavLink to="/profile"
                             onClick={ () => dispatch(toggleSidebar()) }
                             className="flex hover:bg-gray-500 hover:bg-opacity-10 items-center justify-between p-2 rounded-md text-gray-700 text-sm md:text-base"
                             type="button">
                        View Profile
                        <svg viewBox="0 -3 123 123" version="1.1" xmlns="http://www.w3.org/2000/svg"
                             xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" className="w-4 md:w-5">
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
                    </NavLink>
            ) }
            <button
                disabled={ isLoading }
                onClick={ () => {
                    dispatch(logout());
                } }
                className={ `flex hover:bg-gray-500 hover:bg-opacity-10 items-center justify-between p-2 rounded-md text-gray-700 text-sm md:text-base hover:text-blue-400` }
                type="button">
                Log out
                { isLoading ? <Spin spinning={ isLoading } /> :
                    <svg fill="#000000" viewBox="0 0 24 24" id="sign-out-2" data-name="Line Color"
                         xmlns="http://www.w3.org/2000/svg" className="icon line-color w-4 md:w-5">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <polyline id="secondary" points="18 9 21 12 18 15"
                                      style={ {
                                          fill: "none",
                                          stroke: "#ba2c56",
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2
                                      } }></polyline>
                            <line id="secondary-2" data-name="secondary" x1="21" y1="12" x2="7" y2="12"
                                  style={ {
                                      fill: "none",
                                      stroke: "#ba2c56",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2
                                  } }></line>
                            <path id="primary"
                                  d="M14,16v3a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V5A1,1,0,0,1,4,4h9a1,1,0,0,1,1,1V8"
                                  style={ {
                                      fill: "none",
                                      stroke: "#000000",
                                      strokeLinecap: "round",
                                      strokeLinejoin: "round",
                                      strokeWidth: 2
                                  }
                                  }></path>
                        </g>
                    </svg> }
            </button>
        </motion.div>
    );
});