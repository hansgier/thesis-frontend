import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { toggleSidebar } from "../app/features/auth/authSlice.js";
import { NavLink, useLocation } from "react-router-dom";
import { sideLinks } from "../utils/data-components.jsx";
import logo from "/src/assets/logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { NavProfile } from "./NavProfile.jsx";
import { Tooltip } from "antd";

const paths = {
    "/dashboard": 1,
    "/projects": 2,
    "/announcements": 3,
    "/messages": 4,
    "/contacts": 5,
    "/users": 6,
    "/feedbacks": 7
};

const MemoizedTooltip = React.memo(React.forwardRef((props, ref) => (
    <Tooltip { ...props } ref={ ref } color="#003459" />
)));

export const Sidebar = () => {
    const location = useLocation();
    const { isSidebarOpen, user } = useSelector((store) => store.auth);
    const [activeNavLink, setActiveNavLink] = useState(1);
    const dispatch = useDispatch();

    const toggleSide = () => {
        dispatch(toggleSidebar());
    };

    useEffect(() => {
        setActiveNavLink(paths[location.pathname]);
    }, [location.pathname]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            const sideBarElement = document.getElementById("sidebar-container");
            const sideBarButton = document.getElementById("sidebar-button");
            if (sideBarElement && !sideBarElement.contains(event.target) && !sideBarButton.contains(event.target)) {
                dispatch(toggleSidebar());
            }
        };

        if (isSidebarOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isSidebarOpen, dispatch]);

    return (
        <>
            {/*--------------------------------------------Desktop version--------------------------------------------*/ }
            <aside>
                <div
                    className="bg-white fixed hidden h-full md:h-[calc(100%-68px)] left-0 top-0 md:top-[68px] w-4/6 z-50 sm:w-1/2 md:bg-opacity-100 md:bg-transparent md:flex md:flex-col md:w-[100px]">
                    <div className="flex flex-1 flex-col h-full items-center justify-between p-6">
                        <div className="cursor-pointer flex items-center w-full md:hidden">
                            <img src={ logo } alt="logo" loading="lazy"
                                 className="mx-3 select-none w-7 md:block" />
                            <h1 className="flex font-Gilroy font-extrabold h-full items-center select-none text-2xl">ormocpis</h1>
                        </div>

                        {/*-----------------------Navigation Bars-----------------------*/ }
                        {/*Desktop version*/ }
                        <nav className="flex-col gap-6 hidden md:flex">
                            { sideLinks.map((sideLink) => {
                                if (sideLink.id === 4) {
                                    if (user.role === "guest" || user.role === "admin") {
                                        return;
                                    }
                                }
                                if (sideLink.id === 6) {
                                    if (user.role !== "admin") {
                                        return;
                                    }
                                }
                                if (sideLink.id === 7) {
                                    return;
                                } else return (
                                    <MemoizedTooltip key={ sideLink.id } placement="right" title={ sideLink.name }>
                                        <NavLink
                                            to={ sideLink.path }
                                            onClick={ () => {
                                                setActiveNavLink(sideLink.id);
                                                dispatch(toggleSidebar());
                                            } }
                                            className={ ({ isActive }) => {
                                                return isActive
                                                    ? "bg-gradient-to-r flex font-normal from-Thesis-200 group hover:bg-gradient-to-br hover:duration-150 hover:from-Thesis-100 hover:to-indigo-900 hover:transition-all items-center justify-center p-4 rounded-full to-Thesis-100 w-full"
                                                    : "bg-white duration-150 flex font-normal group hover:bg-gradient-to-tr hover:from-pink-100 hover:to-blue-100 items-center justify-center p-4 rounded-full transition-all";
                                            } }
                                        >
                                        <span
                                            id="project-link"
                                            className="border-none flex items-center justify-center">
                                            { (activeNavLink === sideLink.id || location.pathname.includes(sideLink.path)) ? sideLink.svg.active : sideLink.svg.inactive }
                                        </span>
                                        </NavLink>
                                    </MemoizedTooltip>
                                );
                            }) }
                        </nav>
                        <NavProfile mode="desktop" onClick={ (e) => e.stopPropagation() } />
                    </div>
                </div>
            </aside>

            {/*--------------------------------------------Mobile version--------------------------------------------*/ }
            <AnimatePresence>
                { isSidebarOpen && (
                    <aside>
                        <motion.div
                            layout
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                            transition={ { duration: 0.05 } }
                            className="bg-black bg-opacity-25 block fixed h-full w-full z-50 md:hidden"
                            onClick={ () => toggleSide() }>

                        </motion.div>
                        <motion.div
                            initial={ { width: 0, opacity: 0 } }
                            animate={ { width: "auto", opacity: 1 } }
                            exit={ { width: 0, opacity: 0 } }
                            transition={ { type: "spring", duration: 0.5 } }
                            className="bg-white fixed h-full left-0 top-0 w-4/6 z-50 sm:w-1/2 md:bg-opacity-100 md:bg-transparent md:hidden md:flex-col md:w-[100px]">
                            <div className="flex flex-1 flex-col h-full items-center justify-between p-6">
                                <div className="cursor-pointer flex items-center w-full md:hidden">
                                    <img src={ logo } alt="logo" loading="lazy"
                                         className="mx-3 select-none w-7 md:block" />
                                    <h1 className="flex font-Gilroy font-bold  h-full items-center select-none text-xl">ormocpis</h1>
                                </div>

                                {/*-----------------------Navigation Bars-----------------------*/ }

                                {/*Mobile version*/ }
                                <nav className="flex flex-col gap-2 w-full md:hidden">
                                    { sideLinks.map((sideLink) => {
                                        if (sideLink.id === 4) {
                                            if (user.role === "guest") {
                                                return;
                                            }
                                        }
                                        if (sideLink.id === 6) {
                                            if (user.role !== "admin") {
                                                return;
                                            }
                                        }
                                        if (sideLink.id === 7) {
                                            return;
                                        } else return (
                                            <NavLink
                                                key={ sideLink.id }
                                                to={ sideLink.path }
                                                onClick={ () => {
                                                    setActiveNavLink(sideLink.id);
                                                    dispatch(toggleSidebar());
                                                } }
                                                className={ ({ isActive }) => {
                                                    return isActive
                                                        ? "bg-gradient-to-r flex font-normal from-Thesis-200 group items-center justify-start p-4 rounded-lg to-Thesis-100 w-full"
                                                        : "bg-white flex font-normal group items-center justify-start p-4 rounded-lg w-full";
                                                } }>
                                                <span
                                                    id="project-link"
                                                    className="border-none flex items-center justify-center">
                                                    { (activeNavLink === sideLink.id || location.pathname.includes(sideLink.path)) ? sideLink.svg.active : sideLink.svg.inactive }
                                                    <p className={ `${ (activeNavLink === sideLink.id || location.pathname.includes(sideLink.path)) ? "text-white" : "text-gray-800" } font-semibold ml-4 select-none  text-sm` }>
                                                        { sideLink.name }
                                                    </p>
                                                </span>
                                            </NavLink>
                                        );
                                    }) }
                                </nav>
                                <NavProfile mode="mobile" onClick={ (e) => e.stopPropagation() } />
                            </div>
                        </motion.div>
                    </aside>
                ) }
            </AnimatePresence>
        </>
    )
        ;
};