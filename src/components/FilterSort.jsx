import { filterSort } from "../utils/data-components.jsx";
import { useDispatch, useSelector } from "react-redux";
import { resetView, toggleView } from "../app/features/auth/authSlice.js";
import React, { useCallback, useEffect, useState } from "react";
import { RiSortAlphabetAsc, RiSortAlphabetDesc, RiSortAsc, RiSortDesc } from "react-icons/ri";
import { Modal } from "antd";
import { Filters } from "./Filters.jsx";
import { useWindowSize } from "../hooks/index.jsx";
import { resetProjectFilters, sortProjects } from "../app/features/projects/projectsSlice.js";
import { resetAnnouncementFilters, sortAnnouncements } from "../app/features/announcements/announcementsSlice.js";


export const sortButtons = {
    newest: {
        key: 0,
        icon: <RiSortAsc />
    },
    oldest: {
        key: 1,
        icon: <RiSortDesc />
    },
    az: {
        key: 2,
        icon: <RiSortAlphabetAsc />
    },
    za: {
        key: 3,
        icon: <RiSortAlphabetDesc />
    }
};

export const FilterSort = React.memo(({ page }) => {
    const { view } = useSelector((store) => store.auth);
    const { sort: projectSort } = useSelector((store) => store.projects);
    const { sort: announcementSort } = useSelector((store) => store.announcements);
    const [viewClicked, setViewClicked] = useState(1);
    const [toggleSort, setToggleSort] = useState(0);
    const [openFilterMobile, setOpenFilterMobile] = useState(false);
    const dispatch = useDispatch();
    const { width } = useWindowSize();

    useEffect(() => {
        dispatch(resetView());
        dispatch(resetProjectFilters());
        dispatch(resetAnnouncementFilters());
    }, []);

    const toggleNextSort = useCallback(() => {
        setToggleSort((prevToggleSort) => (prevToggleSort + 1) % 4);
    }, []);

    return (
        <>
            <div
                className="bg-white border hidden mb-6 overflow-hidden pt-0 relative rounded-2xl md:fixed md:flex md:h-[calc(100%-84px)] md:mr-4 md:p-4 md:w-64 md:z-50"
            >
                <div className="w-full flex flex-col">
                    <h2 className="font-semibold select-none text-xl mb-3">{ page }</h2>
                    <div className="pt-0 pb-3 px-0 space-y-4 flex flex-col h-full">
                        {/*-----------------------VIEW-----------------------*/ }
                        <div className="space-y-2">
                            <span className="font-extrabold select-none text-Thesis-300 text-xs">VIEW</span>
                            <div className="gap-2 grid grid-cols-2">
                                { filterSort.view.map((v) => {
                                    return (
                                        <button
                                            key={ v.id }
                                            id={ v.id }
                                            onClick={ () => {
                                                if (v.id !== viewClicked)
                                                    dispatch(toggleView());
                                                setViewClicked(v.id);
                                            } }
                                            className={ `border ${ (viewClicked === v.id) && "border-sky-900" } flex group hover:bg-white hover:border-Thesis-300 hover:duration-200 hover:transition-all items-center justify-center p-2 rounded-lg` }>
                                            { v.icon }
                                        </button>
                                    );
                                }) }
                            </div>
                        </div>

                        {/*-----------------------SORT-----------------------*/ }
                        <div className="space-y-2">
                            <span className="font-extrabold select-none text-green-700 text-xs">SORT</span>
                            <div className="gap-2 grid grid-cols-2">
                                { filterSort.sort.map((sort) => {
                                    return (
                                        <button
                                            key={ sort.id }
                                            onClick={ () => {
                                                page === "Projects" ? dispatch(sortProjects(sort.value)) : page === "Announcements" && dispatch(sortAnnouncements(sort.value));
                                            } }
                                            className={ `border disabled:opacity-50 focus-visible:ring-Thesis-50 focus:border-Thesis-200 focus:outline-none font-normal h-9 hover:bg-white hover:border-green-800 hover:text-gray-700 items-center justify-center px-3 rounded-md text-gray-700 text-sm transition-colors whitespace-nowrap ${ page === "Projects" ? (sort.value === projectSort) && "border-green-800" : page === "Announcements" && (sort.value === announcementSort) && "border-green-800" }` }>
                                            { sort.name }
                                        </button>
                                    );
                                }) }
                            </div>
                        </div>

                        {/*-----------------------FILTER SECTION-----------------------*/ }
                        <Filters mode="desktop" page={ page } />
                    </div>
                </div>
            </div>

            {/*---------------------------------MOBILE VERSION---------------------------------*/ }
            <div className="fixed w-full z-30 md:hidden bg-[#f1f4f9]">
                <div
                    className="bg-white border-b-2 hidden mb-0 mx-4 overflow-hidden pb-4 pt-0 relative rounded-xl md:hidden md:mx-0 md:pt-3">
                    <div>
                        <h2 className="font-bold pl-4 pt-4 text-2xl">Projects</h2>
                    </div>
                </div>
                <div
                    className="bg-white flex flex-row gap-2 justify-between mx-3 my-2 rounded-xl md:hidden lg:flex-row">
                    <div className="flex items-center">
                        {/*--------------STACK VIEW--------------*/ }
                        <button
                            onClick={ () => {
                                if (filterSort.view[0].id !== viewClicked)
                                    dispatch(toggleView());
                                setViewClicked(filterSort.view[0].id);
                            } }
                            className={ `${ viewClicked === 1 && "border-sky-900 border" } flex group hover:bg-blue-50 hover:duration-200 hover:transition-all items-center mx-1 p-2 rounded-lg` }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em"
                                 height="1em" className="group-hover:text-gray-700 text-gray-500">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M3 2.992C3 2.444 3.445 2 3.993 2h16.014a1 1 0 0 1 .993.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992zM19 11V4H5v7h14zm0 2H5v7h14v-7zM9 6h6v2H9V6zm0 9h6v2H9v-2z" />
                                </g>
                            </svg>
                        </button>
                        {/*--------------LIST VIEW--------------*/ }
                        <button
                            onClick={ () => {
                                if (filterSort.view[1].id !== viewClicked)
                                    dispatch(toggleView());
                                setViewClicked(filterSort.view[1].id);
                            } }
                            className={ `${ viewClicked === 2 && "border-sky-900 border" } flex group hover:bg-blue-50 hover:duration-200 hover:transition-all items-center mx-1 p-2 rounded-lg` }>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="1em"
                                 height="1em" className="group-hover:text-gray-700 text-gray-500">
                                <g>
                                    <path fill="none" d="M0 0h24v24H0z" />
                                    <path
                                        d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z" />
                                </g>
                            </svg>
                        </button>
                        {/*--------------FILTERS--------------*/ }
                        <button
                            onClick={ () => setOpenFilterMobile(true) }
                            className="flex focus-visible:outline-none focus:border-none focus:outline-none hover:bg-blue-50 hover:duration-200 hover:transition-all items-center mr-1 outline-none p-2 rounded-lg">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M3 4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H19.4C19.9601 3 20.2401 3 20.454 3.10899C20.6422 3.20487 20.7951 3.35785 20.891 3.54601C21 3.75992 21 4.03995 21 4.6V6.33726C21 6.58185 21 6.70414 20.9724 6.81923C20.9479 6.92127 20.9075 7.01881 20.8526 7.10828C20.7908 7.2092 20.7043 7.29568 20.5314 7.46863L14.4686 13.5314C14.2957 13.7043 14.2092 13.7908 14.1474 13.8917C14.0925 13.9812 14.0521 14.0787 14.0276 14.1808C14 14.2959 14 14.4182 14 14.6627V17L10 21V14.6627C10 14.4182 10 14.2959 9.97237 14.1808C9.94787 14.0787 9.90747 13.9812 9.85264 13.8917C9.7908 13.7908 9.70432 13.7043 9.53137 13.5314L3.46863 7.46863C3.29568 7.29568 3.2092 7.2092 3.14736 7.10828C3.09253 7.01881 3.05213 6.92127 3.02763 6.81923C3 6.70414 3 6.58185 3 6.33726V4.6Z"
                                        stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </g>
                            </svg>
                        </button>
                        <Filters mode="desktop" />
                        { width <= 768 &&
                            <Modal centered footer={ null }
                                   title={ page === "Projects" ? "Filter Projects" : page === "Announcements" && "Filter Announcements" }
                                   open={ openFilterMobile }
                                   onCancel={ () => setOpenFilterMobile(false) }>
                                {/*-----------------------FILTER SECTION-----------------------*/ }
                                <Filters mode="mobile" page={ page } />
                            </Modal>
                        }
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="gap-2 hidden items-center select-none lg:block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="w-4 h-4">
                                <path d="m21 16-4 4-4-4"></path>
                                <path d="M17 20V4"></path>
                                <path d="m3 8 4-4 4 4"></path>
                                <path d="M7 4v16"></path>
                            </svg>
                        </div>
                        <div className="flex items-center gap-2 md:ml-auto">
                            <button
                                className="border disabled:opacity-50 focus-visible:ring-Thesis-50 focus:border-Thesis-200 focus:outline-none font-normal h-9 hidden hover:bg-blue-50 hover:border-blue-100 hover:text-gray-700 items-center justify-center px-3 rounded-full text-gray-500 text-sm transition-colors whitespace-nowrap lg:block">
                                Newest
                            </button>
                            <button
                                className="border disabled:opacity-50 focus-visible:ring-Thesis-50 focus:border-Thesis-200 focus:outline-none font-normal h-9 hidden hover:bg-blue-50 hover:border-blue-100 hover:text-gray-700 items-center justify-center px-3 rounded-full text-gray-500 text-sm transition-colors whitespace-nowrap lg:block">
                                Oldest
                            </button>
                            <button
                                className="border disabled:opacity-50 focus-visible:ring-Thesis-50 focus:border-Thesis-200 focus:outline-none font-normal h-9 hidden hover:bg-blue-50 hover:border-blue-100 hover:text-gray-700 items-center justify-center px-3 rounded-full text-gray-500 text-sm transition-colors whitespace-nowrap lg:block">A-Z
                            </button>
                            <button
                                className="border disabled:opacity-50 focus-visible:ring-Thesis-50 focus:border-Thesis-200 focus:outline-none font-normal h-9 hidden hover:bg-blue-50 hover:border-blue-100 hover:text-gray-700 items-center justify-center px-3 rounded-full text-gray-500 text-sm transition-colors whitespace-nowrap lg:block">Z-A
                            </button>
                        </div>
                    </div>
                    {/*--------------SORT BUTTON--------------*/ }
                    <button
                        onClick={ toggleNextSort }
                        className="flex focus-visible:outline-none focus:border-none focus:outline-none hover:bg-blue-50 hover:duration-200 hover:transition-all items-center mr-4 outline-none p-2 rounded-lg lg:hidden">
                        { toggleSort === sortButtons.newest.key && sortButtons.newest.icon }
                        { toggleSort === sortButtons.oldest.key && sortButtons.oldest.icon }
                        { toggleSort === sortButtons.az.key && sortButtons.az.icon }
                        { toggleSort === sortButtons.za.key && sortButtons.za.icon }
                    </button>
                </div>
            </div>
        </>
    );
});