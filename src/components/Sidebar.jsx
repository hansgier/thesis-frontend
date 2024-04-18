import { useSelector } from "react-redux";
import { useState } from "react";
import { sideLinks } from "../utils/features.jsx";
import { NavProfile } from "./NavProfile.jsx";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
    const { isSidebarOpen } = useSelector((store) => store.user);
    const [activeNavLink, setActiveNavLink] = useState(1);
    const [NavLinkClicked, setNavLinkClicked] = useState(null);

    return (
        <div
            className="bg-black bg-opacity-20 fixed h-[calc(100%-60px)] left-0 top-[60px] w-full z-10 md:bg-opacity-100 md:bg-transparent md:flex md:flex-col md:h-full md:top-0 md:w-[272px]">
            <div
                className="absolute bg-gradient-to-bl flex flex-col from-white h-full md:backdrop-blur-[70px] md:bg-none md:bg-transparent md:border-r-2 md:pt-4 md:px-6 md:w-full md:z-50 pb-3 pt-8 px-3 sm:w-1/2 to-blue-50 top-0 w-10/12">
                <div className="cursor-pointer hidden items-center mb-10 md:flex">
                    <img src="src/assets/logo.png" alt="logo" loading="lazy"
                         className="hidden mx-3 select-none w-7 md:block" />
                    <h4 className="font-['nexa'] font-bold h-full hidden select-none text-xl md:flex md:items-center">
                        ORMOC PIS
                    </h4>
                </div>
                <div className="flex flex-1 flex-col justify-between">
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
                                        className="border-none flex group-hover:duration-300 group-hover:transition-colors h-10 items-center justify-center mr-4 rounded-lg w-10">
                                        { activeNavLink === nav.id ? nav.svg.active : nav.svg.inactive }
                                    </span>
                                    <label
                                        className={ `${ activeNavLink === nav.id ? "cursor-pointer duration-300" +
                                            " ease-out font-bold group-hover:duration-300 group-hover:ease-out" +
                                            " group-hover:transition-transform group-hover:translate-x-3 select-none" +
                                            " text-white transition-transform" : "cursor-pointer duration-300 ease-out font-medium group-hover:duration-300 group-hover:ease-out group-hover:text-Thesis-300 group-hover:transition-transform group-hover:translate-x-3 select-none text-gray-500 transition-transform" }` }
                                        id="project-label">
                                        { nav.name }
                                    </label>
                                </NavLink>
                            );
                        }) }
                    </nav>
                    <NavProfile />
                </div>
            </div>
            <div className="bg-black bg-opacity-25 mt-16 w-full sm:w-full md:hidden"></div>
        </div>
    );
};