import { useSelector } from "react-redux";
import { Tooltip } from "antd";
import { useNavigate } from "react-router-dom";

export const ProjectContainer = ({ onProjectClick }) => {
    const { view } = useSelector((store) => store.user);
    const navigate = useNavigate();

    return (
        <div>
            <div className="accent-indigo-800 bg-white border mb-10 md:mx-0 mx-3 rounded-xl">
                <div className="flex gap-4 items-center pb-4 pt-6 px-4 md:px-6">
                    <div className="flex items-center justify-center">
                        <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                             preserveAspectRatio className="w-6 md:w-8">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M401.9 584.7h16v16h-16zM385.9 600.7h-16v-16h16v16z m-31.9 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-31.9 0h-16v-16h16v16zM146.1 584.7h16v16h-16zM162.1 569h-16v-15.7h16V569z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V506z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V443z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V380z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V317z m0-31.4h-16v-15.7h16v15.7zM146.1 238.1h16v16h-16zM385.9 254.1h-16v-16h16v16z m-31.9 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-31.9 0h-16v-16h16v16zM401.9 238.1h16v16h-16zM417.9 569h-16v-15.7h16V569z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V506z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V443z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V380z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V317z m0-31.4h-16v-15.7h16v15.7zM860.1 682.9h16v16h-16zM844.2 698.9h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-31.9 0h-16v-16h16v16z m-32 0h-16v-16h16v16zM604.3 682.9h16v16h-16zM620.3 667.1h-16v-15.7h16v15.7z m0-31.4h-16V620h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V557h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V494h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V431h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V368h16v15.7zM604.3 336.2h16v16h-16zM844.2 352.2h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-31.9 0h-16v-16h16v16z m-32 0h-16v-16h16v16zM860.1 336.2h16v16h-16zM876.1 667.1h-16v-15.7h16v15.7z m0-31.4h-16V620h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V557h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V494h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V431h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V368h16v15.7z"
                                    fill="#0A0408"></path>
                                <path d="M246.9 107.8h531.6v531.6H246.9z" fill="#FFFFFF"></path>
                                <path d="M786.5 647.4H238.9V99.8h547.6v547.6z m-531.6-16h515.6V115.8H254.9v515.6z"
                                      fill="#0A0408"></path>
                                <path d="M305.1 166h415.1v415.1H305.1z" fill="#55B7A8"></path>
                                <path
                                    d="M389.9 238.2h195.3v16H389.9zM384.6 338.8h256.2v16H384.6zM384.6 441.2h256.2v16H384.6z"
                                    fill="#0A0408"></path>
                                <path d="M868.8 918H156.5l-50-415.4h812.3z" fill="#FFFFFF"></path>
                                <path
                                    d="M875.9 926H149.4L97.5 494.6h830.4l-52 431.4z m-712.3-16h698.1l48.1-399.4H115.5L163.6 910z"
                                    fill="#0A0408"></path>
                                <path d="M809.6 866.5H215.8L174.1 554h677.2z" fill="#F4BE6F"></path>
                                <path d="M154.1 639.7h154.3v16H154.1zM154.1 717.9h258.3v16H154.1z"
                                      fill="#FFFFFF"></path>
                                <path d="M842.7 318.8h50.9v50.9h-50.9z" fill="#DC444A"></path>
                                <path d="M901.6 377.7h-66.9v-66.9h66.9v66.9z m-50.9-16h34.9v-34.9h-34.9v34.9z"
                                      fill="#0A0408"></path>
                                <path d="M128.6 220.8h50.9v50.9h-50.9z" fill="#DC444A"></path>
                                <path d="M187.5 279.7h-66.9v-66.9h66.9v66.9z m-50.9-16h34.9v-34.9h-34.9v34.9z"
                                      fill="#0A0408"></path>
                            </g>
                        </svg>
                    </div>
                    <div onClick={ () => navigate("/projects/singleprojects") }
                         className="flex flex-col gap-1 md:grid hover:cursor-pointer">
                        <h3 className="font-semibold leading-none select-none text-lg tracking-tight md:text-2xl">Linao
                                                                                                                  Road
                                                                                                                  Construction</h3>
                        <div className="flex items-center">
                            <div className="flex group items-center mr-4 space-x-1">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="14">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M12 8V12L15 15" stroke="#29d2b0" strokeWidth="2"
                                              strokeLinecap="round"></path>
                                        <circle cx="12" cy="12" r="9" stroke="#29d2b0" strokeWidth="2"></circle>
                                    </g>
                                </svg>
                                <Tooltip title="Posted on March 23, 2023" placement="bottom">
                                    <p className="group-hover:underline mr-5 select-none text-[#29d2b0] text-xs font-bold">2d
                                                                                                                           ago</p>
                                </Tooltip>
                            </div>
                            <div className="gap-1 group hidden hover:cursor-pointer items-center mr-5 lg:flex">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9ca3af"
                                     width="14">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                            stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                                <span
                                    className="group-hover:duration-300 group-hover:text-gray-500 group-hover:transition-all max-w-xs overflow-ellipsis overflow-hidden select-none text-gray-400 text-xs">Tambulilid | Linao | Can-adieng |</span>
                            </div>
                            <div
                                className="bg-gray-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring font-semibold hover:bg-secondary/80 inline-flex items-center px-2.5 py-0.5 rounded-full select-none text-secondary-foreground text-xs transition-colors w-fit whitespace-nowrap">Ongoing
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center ml-auto space-x-2 text-Thesis-200 text-xs">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="h-4 hidden w-4 lg:block">
                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                            <path d="M9 22v-4h6v4"></path>
                            <path d="M8 6h.01"></path>
                            <path d="M16 6h.01"></path>
                            <path d="M12 6h.01"></path>
                            <path d="M12 10h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M16 10h.01"></path>
                            <path d="M16 14h.01"></path>
                            <path d="M8 10h.01"></path>
                            <path d="M8 14h.01"></path>
                        </svg>
                        <span className="font-bold hidden select-none lg:block">City Government</span>
                    </div>
                </div>
                { view === "stack" && (
                    <>
                        <div className="mb-4 px-4 md:px-6">
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
                        <div className="mx-4 pt-[334px] px-4 relative md:mx-6 md:px-6">
                            <img alt="project_img" src="https://pinegrow.com/placeholders/img18.jpg"
                                 onClick={ () => navigate("/projects/singleprojects") }
                                 className="absolute h-full left-0 object-center object-cover rounded-xl top-0 w-full hover:cursor-pointer" />
                        </div>
                        <div className="gap-2 grid pb-3 px-4 md:px-6">
                            <div className="flex gap-2 h-8 items-center mt-4 text-sm md:gap-4">
                                <div className="flex gap-1 h-full">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24"
                                         className="h-full hover:duration-300 hover:scale-125 hover:transition-all hover:cursor-pointer">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
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
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24"
                                         className="h-full hover:duration-300 hover:scale-125 hover:transition-all hover:cursor-pointer">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M15.0501 16.9558C15.4673 18.2075 14.5357 19.5 13.2164 19.5C12.5921 19.5 12.0063 19.1985 11.6435 18.6906L8.47164 14.25L5.85761 14.25L5.10761 13.5L5.10761 6L5.85761 5.25L16.8211 5.25L19.1247 9.85722C19.8088 11.2253 19.5407 12.8776 18.4591 13.9592C17.7927 14.6256 16.8888 15 15.9463 15L14.3982 15L15.0501 16.9558ZM9.60761 13.2596L12.8641 17.8187C12.9453 17.9325 13.0765 18 13.2164 18C13.5119 18 13.7205 17.7105 13.6271 17.4302L12.317 13.5L15.9463 13.5C16.491 13.5 17.0133 13.2836 17.3984 12.8985C18.0235 12.2735 18.1784 11.3186 17.7831 10.528L15.8941 6.75L9.60761 6.75L9.60761 13.2596ZM8.10761 6.75L6.60761 6.75L6.60761 12.75L8.10761 12.75L8.10761 6.75Z"
                                                  fill="#000000"></path>
                                        </g>
                                    </svg>
                                    <span
                                        className="flex h-full items-center justify-center select-none text-[#454545] text-xs md:text-sm">9</span>
                                </div>
                                <div
                                    onClick={ () => navigate("/projects/singleprojects") }
                                    className="duration-300 flex gap-1 h-full hover:bg-blue-50 hover:rounded-md items-center px-2 transition-colors hover:cursor-pointer"
                                    data-pg-ia='{"l":[{"name":"Hover UserComment Button"}]}'>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <g clipPath="url(#clip0_429_11233)">
                                                <path
                                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z"
                                                    stroke="#292929" strokeWidth="2.5" strokeLinecap="round"
                                                    strokeLinejoin="round"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_429_11233">
                                                    <rect width="24" height="24" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </g>
                                    </svg>
                                    <span className="select-none text-[#454545] text-xs md:text-sm">12</span>
                                </div>
                                <div className="flex gap-1 h-full items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                         strokeLinejoin="round" className="w-4 h-4">
                                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                    <span className="select-none text-[#454545] text-xs md:text-sm">23</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) }
            </div>
        </div>
    );
};