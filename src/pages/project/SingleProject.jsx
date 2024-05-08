import { DetailsUpdate, ImageCarousel, LikeDislikeButtons } from "../../components/index.jsx";
import { useNavigate } from "react-router-dom";
import { CommentSection } from "./CommentSection.jsx";
import { useState } from "react";
import { Modal } from "antd";
import { useWindowSize } from "../../hooks/index.jsx";
import { projectDetails_sidebar } from "../../utils/data-components.jsx";
import { ProjectUpdate } from "./ProjectUpdate.jsx";

export const SingleProject = () => {
    const navigate = useNavigate();
    const { width } = useWindowSize();
    const [isDetailsUpdateMobileOpen, setIsDetailsUpdateMobileOpen] = useState(false);
    const [isDetailsMobileMode, setIsDetailsMobileMode] = useState(true);

    return (
        <>
            {/*-----------------------DETAILS-UPDATE SECTION-----------------------*/ }
            { width > 768 ? <DetailsUpdate /> : (
                <Modal
                    closeIcon={ null }
                    footer={ null }
                    centered
                    open={ isDetailsUpdateMobileOpen }
                    onCancel={ () => setIsDetailsUpdateMobileOpen(false) }>
                    <div className="bg-white flex flex-col px-0 w-full">
                        <div className="flex items-center w-full">
                            <h2 className="flex-1 font-semibold select-none text-lg"
                                data-id="15">{ isDetailsMobileMode ? "Details" : "Updates" }</h2>
                            <button onClick={ () => setIsDetailsMobileMode(!isDetailsMobileMode) }
                                    className="flex focus:outline-none focus:ring-0 focus:ring-offset-0 font-medium hover:bg-opacity-90 hover:duration-200 hover:shadow-inner hover:text-yellow-900 hover:transition-all items-center p-2 rounded-lg shadow text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" className="w-4 h-4" data-id="6">
                                    <path
                                        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </button>
                        </div>
                        <div className="pt-2">
                            <div className="font-normal select-none text-gray-700 text-xs">Last updated on May 1, 2023
                            </div>
                            <div className="select-none text-gray-700 text-xs">By City Government</div>
                        </div>
                        <div className="border-t mt-4 overflow-y-hidden pt-2 w-full">
                            <div className="h-[474px] overflow-y-scroll">
                                { isDetailsMobileMode ? (
                                    projectDetails_sidebar.map((pds, index) => {
                                        const { name, pds_type, color } = pds;
                                        if (pds_type === "single") {
                                            return (
                                                <div className="mb-5" key={ index }>
                                                    <div
                                                        className="font-bold my-2 select-none text-gray-900 text-xs uppercase">
                                                        { name }
                                                    </div>
                                                    <span
                                                        className={ `${ color } font-bold px-3 py-1 rounded-2xl select-none text-white text-xs` }>
                                            10%
                                        </span>
                                                </div>

                                            );
                                        } else if (pds_type === "multiple") {
                                            return (
                                                <div className="mb-5" key={ index }>
                                                    <div
                                                        className="font-bold my-2 select-none text-gray-900 text-xs uppercase">{ name }
                                                    </div>
                                                    <div className="flex flex-wrap gap-2 mt-2">
                                                        {/*TODO: map the barangay ids here or location here from single project*/ }
                                                        <span
                                                            className={ `${ color } font-bold px-3 py-1 rounded-2xl select-none text-white text-xs` }>
                                                Linao
                                            </span>
                                                        <span
                                                            className={ `${ color } font-bold px-3 py-1 rounded-2xl select-none text-white text-xs` }>
                                                Linao
                                            </span>
                                                        <span
                                                            className={ `${ color } font-bold px-3 py-1 rounded-2xl select-none text-white text-xs` }>
                                                Linao
                                            </span>
                                                        <span
                                                            className={ `${ color } font-bold px-3 py-1 rounded-2xl select-none text-white text-xs` }>
                                                Linao
                                            </span>
                                                        <span
                                                            className={ `${ color } font-bold px-3 py-1 rounded-2xl select-none text-white text-xs` }>
                                                Linao
                                            </span>
                                                        <span
                                                            className={ `${ color } font-bold px-3 py-1 rounded-2xl select-none text-white text-xs` }>
                                                Linao
                                            </span>

                                                    </div>
                                                </div>
                                            );
                                        }
                                    })
                                ) : (
                                    <>
                                        <div className="pb-2 pt-0">
                                            {/*Updates Sort Button*/ }
                                            <button
                                                className="focus:outline-none hover:bg-blue-50 outline-none p-1 rounded-md text-gray-500">
                                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                     className="w-5">
                                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                       strokeLinejoin="round"></g>
                                                    <g id="SVGRepo_iconCarrier">
                                                        <path d="M13 12H21M13 8H21M13 16H21M6 7V17M6 7L3 10M6 7L9 10"
                                                              stroke="#5c5c5c" strokeWidth="2" strokeLinecap="round"
                                                              strokeLinejoin="round"></path>
                                                    </g>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="h-[474px] overflow-y-scroll">
                                            {/*-----------UPDATES-----------*/ }
                                            {/*TODO: map the project updates here*/ }
                                            <ProjectUpdate
                                                content="This is an overview of the current project. It includes updates and progress."
                                                updatePostDate="2 days ago" progress="100%" />
                                        </div>
                                    </>
                                ) }
                            </div>
                        </div>
                    </div>
                </Modal>
            ) }

            {/*-----------------------PROJECTS SECTION-----------------------*/ }
            <div
                className="h-full max-h-full mt-0 overflow-y-scroll pt-0 px-0 md:absolute md:flex md:left-[336px] md:mt-4 md:pl-0 md:pr-4 md:w-[calc(100%-336px)]">
                <div>
                    <div>
                        <div className="accent-indigo-800 bg-white border mb-3 md:mb-7 mx-3 rounded-xl md:mx-0 md:pb-4"
                             data-v0-t="card">
                            <div className="flex gap-2 md:gap-4 items-center pb-4 pt-6 px-4 md:px-6">
                                {/*Back button (mobile)*/ }
                                <button
                                    onClick={ () => setIsDetailsUpdateMobileOpen(!isDetailsUpdateMobileOpen) }
                                    className="bg-white focus:outline-none focus:shadow-inner md:hidden p-1 rounded-full shadow"
                                    type="button">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                         className="w-5">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                           strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title></title>
                                            <g id="Complete">
                                                <g id="info-circle">
                                                    <g>
                                                        <circle cx="12" cy="12" data-name="--Circle" fill="none"
                                                                id="_--Circle" r="10" stroke="#000000"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeWidth="2"></circle>
                                                        <line fill="none" stroke="#000000" strokeLinecap="round"
                                                              strokeLinejoin="round" strokeWidth="2" x1="12" x2="12"
                                                              y1="12" y2="16"></line>
                                                        <line fill="none" stroke="#000000" strokeLinecap="round"
                                                              strokeLinejoin="round" strokeWidth="2" x1="12" x2="12"
                                                              y1="8" y2="8"></line>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                                <div className="flex flex-col gap-1 md:grid">
                                    {/*TITLE*/ }
                                    <h3 className="font-semibold leading-none select-none text-lg tracking-tight md:text-2xl">
                                        Linao Road Construction
                                    </h3>
                                    <div className="flex items-center">
                                        <div className="flex group items-center mr-4 space-x-1">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                 width="14">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                   strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M12 8V12L15 15" stroke="#29d2b0" strokeWidth="2"
                                                          strokeLinecap="round"></path>
                                                    <circle cx="12" cy="12" r="9" stroke="#29d2b0"
                                                            strokeWidth="2"></circle>
                                                </g>
                                            </svg>
                                            {/*POST MOMENT DATE*/ }
                                            <p className="mr-5 select-none text-[#29d2b0] text-xs font-bold">2d ago</p>
                                        </div>
                                        {/*STATUS*/ }
                                        <div
                                            className="bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring font-semibold hover:bg-secondary/80 inline-flex items-center px-2.5 py-0.5 rounded-full select-none text-secondary-foreground text-xs transition-colors w-fit whitespace-nowrap">Ongoing
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center ml-auto space-x-2 text-Thesis-200 text-xs">
                                    {/*Back Button*/ }
                                    <button onClick={ () => navigate("/projects") }
                                            className="hover:bg-blue-50 hover:rounded-lg p-1"
                                            type="button">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             className="w-5">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
                                                    fill="#33363F"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4 px-4 md:px-6">
                                {/*DESCRIPTION*/ }
                                <p className="leading-relaxed md:text-base select-none text-gray-700 text-justify text-sm">The
                                                                                                                           Valley
                                                                                                                           Road
                                                                                                                           Expansion
                                                                                                                           project
                                                                                                                           will
                                                                                                                           widen
                                                                                                                           the
                                                                                                                           existing
                                                                                                                           two-lane
                                                                                                                           road
                                                                                                                           to
                                                                                                                           four
                                                                                                                           lanes
                                                                                                                           over
                                                                                                                           a
                                                                                                                           5-mile
                                                                                                                           stretch
                                                                                                                           between
                                                                                                                           Main
                                                                                                                           Street
                                                                                                                           and
                                                                                                                           Interstate
                                                                                                                           95.
                                                                                                                           Intersection
                                                                                                                           improvements
                                                                                                                           with
                                                                                                                           turn
                                                                                                                           lanes,
                                                                                                                           roundabouts,
                                                                                                                           and
                                                                                                                           traffic
                                                                                                                           signals
                                                                                                                           will
                                                                                                                           be
                                                                                                                           added.
                                                                                                                           Drainage,
                                                                                                                           curbs,
                                                                                                                           sidewalks,
                                                                                                                           and
                                                                                                                           paved
                                                                                                                           shoulders
                                                                                                                           will
                                                                                                                           also
                                                                                                                           be
                                                                                                                           constructed.
                                                                                                                           The
                                                                                                                           $22
                                                                                                                           million
                                                                                                                           project
                                                                                                                           is
                                                                                                                           funded
                                                                                                                           by
                                                                                                                           state
                                                                                                                           and
                                                                                                                           federal
                                                                                                                           grants,
                                                                                                                           with
                                                                                                                           construction
                                                                                                                           from
                                                                                                                           2025
                                                                                                                           to
                                                                                                                           2027.
                                                                                                                           Once
                                                                                                                           complete,
                                                                                                                           Valley
                                                                                                                           Road
                                                                                                                           will
                                                                                                                           have
                                                                                                                           increased
                                                                                                                           capacity
                                                                                                                           and
                                                                                                                           safety
                                                                                                                           enhancements
                                                                                                                           for
                                                                                                                           all
                                                                                                                           transportation
                                                                                                                           modes.</p>
                            </div>
                            {/*PROJECT IMAGE CAROUSEL*/ }
                            <div className="px-4 md:px-6">
                                {/*TODO: put the project images array in the images prop for image carousel*/ }
                                <ImageCarousel images={ [
                                    "https://pinegrow.com/placeholders/img18.jpg"
                                ] } />
                            </div>
                            <div className="border-b gap-2 grid pb-3 px-4 md:px-6">
                                <div className="flex gap-2 h-8 items-center mt-4 text-sm md:gap-4">
                                    <LikeDislikeButtons likes="23" dislikes="9" />
                                    <div className="flex gap-1 h-full items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                        <span className="select-none text-[#454545] text-xs md:text-sm">23</span>
                                    </div>
                                </div>
                            </div>
                            <CommentSection />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};