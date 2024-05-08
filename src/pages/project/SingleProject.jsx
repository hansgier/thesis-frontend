import { DetailsUpdate, ImageCarousel } from "../../components/index.jsx";
import { useNavigate } from "react-router-dom";
import { CommentSection } from "./CommentSection.jsx";

export const SingleProject = () => {
    const navigate = useNavigate();

    return (
        <>
            {/*-----------------------DETAILS-UPDATE SECTION-----------------------*/ }
            <DetailsUpdate />

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
                                    <div className="flex gap-1 h-full">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             className="h-full hover:duration-300 hover:scale-125 hover:transition-all hover:cursor-pointer">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M15.0501 7.04419C15.4673 5.79254 14.5357 4.5 13.2163 4.5C12.5921 4.5 12.0062 4.80147 11.6434 5.30944L8.47155 9.75H5.85748L5.10748 10.5V18L5.85748 18.75H16.8211L19.1247 14.1428C19.8088 12.7747 19.5406 11.1224 18.4591 10.0408C17.7926 9.37439 16.8888 9 15.9463 9H14.3981L15.0501 7.04419ZM9.60751 10.7404L12.864 6.1813C12.9453 6.06753 13.0765 6 13.2163 6C13.5118 6 13.7205 6.28951 13.627 6.56984L12.317 10.5H15.9463C16.491 10.5 17.0133 10.7164 17.3984 11.1015C18.0235 11.7265 18.1784 12.6814 17.7831 13.472L15.8941 17.25H9.60751V10.7404ZM8.10751 17.25H6.60748V11.25H8.10751V17.25Z"
                                                      fill="#000000"></path>
                                            </g>
                                        </svg>
                                        <span
                                            className="flex h-auto items-center select-none text-[#454545] text-xs md:text-sm">23</span>
                                    </div>
                                    <div className="flex gap-1 h-full items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             width="24"
                                             className="h-full hover:duration-300 hover:scale-125 hover:transition-all hover:cursor-pointer">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path fillRule="evenodd" clipRule="evenodd"
                                                      d="M15.0501 16.9558C15.4673 18.2075 14.5357 19.5 13.2164 19.5C12.5921 19.5 12.0063 19.1985 11.6435 18.6906L8.47164 14.25L5.85761 14.25L5.10761 13.5L5.10761 6L5.85761 5.25L16.8211 5.25L19.1247 9.85722C19.8088 11.2253 19.5407 12.8776 18.4591 13.9592C17.7927 14.6256 16.8888 15 15.9463 15L14.3982 15L15.0501 16.9558ZM9.60761 13.2596L12.8641 17.8187C12.9453 17.9325 13.0765 18 13.2164 18C13.5119 18 13.7205 17.7105 13.6271 17.4302L12.317 13.5L15.9463 13.5C16.491 13.5 17.0133 13.2836 17.3984 12.8985C18.0235 12.2735 18.1784 11.3186 17.7831 10.528L15.8941 6.75L9.60761 6.75L9.60761 13.2596ZM8.10761 6.75L6.60761 6.75L6.60761 12.75L8.10761 12.75L8.10761 6.75Z"
                                                      fill="#000000"></path>
                                            </g>
                                        </svg>
                                        <span
                                            className="flex h-full items-center justify-center select-none text-[#454545] text-xs md:text-sm">9</span>
                                    </div>
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