import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toggleSidebar } from "../app/features/user/userSlice.js";
import { sideLinks } from "../utils/data-components.jsx";
import { NavLink, useLocation } from "react-router-dom";
import { NavProfile } from "./NavProfile.jsx";
import { AnimatePresence, motion } from "framer-motion";

const paths = {
    "/": 1,
    "/projects": 2,
    "/announcements": 3,
    "/messages": 4,
    "/contacts": 5,
    "/users": 6
};

export const Sidebar = () => {
    const location = useLocation();
    const { isSidebarOpen } = useSelector((store) => store.user);
    const [activeNavLink, setActiveNavLink] = useState(1);
    const [NavLinkClicked, setNavLinkClicked] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const path = paths[location.pathname];
        if (path) {
            setActiveNavLink(path);
        }
        if (location.pathname in paths) {
            setActiveNavLink(paths[location.pathname]);
        }
    }, [location]);

    const toggleSide = () => {
        dispatch(toggleSidebar());
    };

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
            <AnimatePresence>
                { isSidebarOpen && (
                    <motion.div
                        id="sidebar-container"
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                        transition={ { duration: 0.3 } }
                        onClick={ toggleSide }
                        className={ `bg-black bg-opacity-40 fixed h-[calc(100%-60px)] left-0 top-[60px] w-full z-10 md:hidden` }
                    >
                        <motion.div
                            initial={ { x: -300 } }
                            animate={ { x: 0 } }
                            exit={ { x: -500 } }
                            transition={ { duration: 0.2, type: "tween" } }
                            onClick={ toggleSide }
                            className={ `absolute bg-gradient-to-bl flex flex-col from-white h-full md:backdrop-blur-[70px] md:bg-none md:bg-transparent md:border-r-2 md:pt-4 md:px-6 md:w-full md:z-50 pb-3 pt-8 px-3 sm:w-1/2 to-blue-50 top-0 w-10/12` }>
                            {/*---------------Logo Title---------------*/ }
                            <div className="cursor-pointer hidden items-center mb-10 md:flex">
                                <img src="src/assets/logo.png" alt="logo" loading="lazy"
                                     className="hidden mx-3 select-none w-7 md:block" />
                                <h4 className="font-['nexa'] font-bold h-full hidden select-none text-xl md:flex md:items-center">
                                    ORMOC PIS
                                </h4>
                            </div>
                            <div className="flex flex-1 flex-col justify-between">
                                {/*---------------Nav Bars---------------*/ }
                                <nav className="gap-3 grid mb-10 mt-3 w-full">
                                    { sideLinks.map((nav) => {
                                        return (
                                            <NavLink
                                                key={ nav.id }
                                                to={ nav.path }
                                                onClick={ () => {
                                                    setActiveNavLink(nav.id);
                                                    dispatch(toggleSidebar());
                                                } }
                                                className={ ({ isActive }) => {
                                                    return isActive
                                                        ? "bg-gradient-to-r flex font-normal from-Thesis-50 group items-center" +
                                                        " px-4 py-2 rounded-xl to-Thesis-300 w-full"
                                                        : "flex font-normal group items-center px-4 py-2 rounded-xl";
                                                } }>
                                    <span
                                        id="project-link"
                                        className="border-none flex group-hover:duration-300 group-hover:transition-colors h-10 items-center justify-center mr-2 rounded-lg w-10 md:w-10">
                                        { activeNavLink === nav.id ? nav.svg.active : nav.svg.inactive }
                                    </span>
                                                <label
                                                    className={ `${ activeNavLink === nav.id ?
                                                        "cursor-pointer duration-300" +
                                                        " ease-out font-semibold group-hover:duration-300 group-hover:ease-out" +
                                                        " group-hover:transition-transform group-hover:translate-x-3 select-none" +
                                                        " text-white transition-transform"
                                                        :
                                                        "cursor-pointer duration-300" +
                                                        " ease-out font-medium group-hover:duration-300 group-hover:ease-out" +
                                                        " group-hover:text-Thesis-300 group-hover:transition-transform" +
                                                        " group-hover:translate-x-3 select-none" +
                                                        " font-normal text-slate-600" +
                                                        " transition-transform" } mr-2 text-sm` }
                                                    id="project-label">
                                                    { nav.name }
                                                </label>
                                            </NavLink>
                                        );
                                    }) }
                                </nav>
                                {/*---------------Nav Profile---------------*/ }
                                <NavProfile onClick={ (e) => e.stopPropagation() } />
                            </div>
                        </motion.div>
                        <div className="bg-black bg-opacity-25 mt-16 w-full sm:w-full md:hidden"></div>
                    </motion.div>
                ) }
            </AnimatePresence>
            <div
                className={ `hidden bg-black transition-all duration-200 ease-in-out fixed h-[calc(100%-60px)] left-0 z-10 md:bg-opacity-100 md:bg-transparent md:flex md:flex-col md:h-full md:top-0 md:w-[272px]` }>
                <div
                    className={ `absolute bg-gradient-to-bl flex flex-col from-white h-full md:backdrop-blur-[70px] md:bg-none md:bg-transparent md:border-r-2 md:pt-4 md:px-6 md:w-full md:z-50 pb-3 pt-8 px-3 sm:w-1/2 to-blue-50 top-0 w-10/12 md:translate-x-0 transition-all duration-200 ease-in-out ` }>
                    {/*---------------Logo Title---------------*/ }
                    <div className="cursor-pointer hidden items-center mb-10 md:flex">
                        <img src="src/assets/logo.png" alt="logo" loading="lazy"
                             className="hidden mx-3 select-none w-7 md:block" />
                        <h4 className="font-['nexa'] font-bold h-full hidden select-none text-xl md:flex md:items-center">
                            ORMOC PIS
                        </h4>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                        {/*---------------Nav Bars---------------*/ }
                        <nav className="gap-3 grid mb-10 mt-3 w-full">
                            { sideLinks.map((nav) => {
                                return (
                                    <NavLink
                                        key={ nav.id }
                                        to={ nav.path }
                                        onClick={ () => setActiveNavLink(nav.id) }
                                        className={ ({ isActive }) => {
                                            return isActive
                                                ? "bg-gradient-to-r flex font-normal from-Thesis-50 group items-center" +
                                                " px-4 py-2 rounded-xl to-Thesis-300 w-full"
                                                : "flex font-normal group items-center px-4 py-2 rounded-xl";
                                        } }>
                                    <span
                                        id="project-link"
                                        className="border-none flex group-hover:duration-300 group-hover:transition-colors h-10 items-center justify-center mr-2 rounded-lg w-10">
                                        { activeNavLink === nav.id ? nav.svg.active : nav.svg.inactive }
                                    </span>
                                        <label
                                            className={ `${ activeNavLink === nav.id ?
                                                "cursor-pointer duration-300" +
                                                " ease-out font-semibold group-hover:duration-300 group-hover:ease-out" +
                                                " group-hover:transition-transform group-hover:translate-x-3 select-none" +
                                                " text-white transition-transform"
                                                :
                                                "cursor-pointer duration-300" +
                                                " ease-out font-medium group-hover:duration-300 group-hover:ease-out" +
                                                " group-hover:text-Thesis-300 group-hover:transition-transform" +
                                                " group-hover:translate-x-3 select-none text-slate-600" +
                                                " transition-transform" } mr-2 font-normal text-base` }
                                            id="project-label">
                                            { nav.name }
                                        </label>
                                    </NavLink>
                                );
                            }) }
                        </nav>
                        {/*---------------Nav Profile---------------*/ }
                        <NavProfile onClick={ (e) => e.stopPropagation() } />
                    </div>
                </div>
                <div className="bg-black bg-opacity-25 mt-16 w-full sm:w-full md:hidden"></div>
            </div>
        </>
    );
};