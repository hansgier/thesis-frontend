import { Skeleton } from "antd";
import React from "react";

export const SingleProjectSkeleton = () => {
    return (
        <>
            <div
                className="bg-white border hidden mb-6 mt-4 pt-0 relative rounded-2xl md:fixed md:flex md:h-[calc(100%-96px)] md:mr-2 md:pl-4 md:pr-0 md:py-4 md:w-80 md:z-50">
                <div className="bg-white flex flex-col pr-4 w-full">
                    <div className="flex items-center w-full">
                        <h2 className="flex-1 font-semibold select-none text-xl"
                            data-id="15">Details</h2>
                        {/*-----------Details-Update Switch-----------*/ }
                        <button disabled
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
                    {/*-----------PROJECT POST DATE & POSTED BY-----------*/ }
                    <div className="pt-2 space-y-2">
                        <div
                            className="font-normal select-none text-gray-700 text-sm">
                            <Skeleton.Input active block size="small" />
                        </div>
                        <div
                            className="select-none text-gray-700 text-sm">
                            <Skeleton.Input active block size="small" />
                        </div>
                    </div>
                    {/*-----------DETAILS-----------*/ }
                    <div className="border-t mt-4 pt-4 w-full">
                        <div className="mb-5">
                            <div
                                className="font-bold my-2 select-none text-gray-900 text-xs uppercase">
                                <Skeleton.Button active size="small" />
                            </div>
                            <span
                                className={ `font-bold px-0 py-1 rounded-2xl select-none text-white text-xs` }
                            >
                                <Skeleton.Input active block size="small" />
                            </span>
                        </div>
                        <div className="mb-5">
                            <div
                                className="font-bold my-2 select-none text-gray-900 text-xs uppercase">
                                <Skeleton.Button active size="small" />
                            </div>
                            <span
                                className={ `font-bold px-0 py-1 rounded-2xl select-none text-white text-xs` }
                            >
                                <Skeleton.Input active block size="small" />
                            </span>
                        </div>
                        <div className="mb-5">
                            <div
                                className="font-bold my-2 select-none text-gray-900 text-xs uppercase">
                                <Skeleton.Button active size="small" />
                            </div>
                            <span
                                className={ `font-bold px-0 py-1 rounded-2xl select-none text-white text-xs` }
                            >
                                <Skeleton.Input active block size="small" />
                            </span>
                        </div>
                        <div className="mb-5">
                            <div
                                className="font-bold my-2 select-none text-gray-900 text-xs uppercase">
                                <Skeleton.Button active size="small" />
                            </div>
                            <span
                                className={ `font-bold px-0 py-1 rounded-2xl select-none text-white text-xs` }
                            >
                                <Skeleton.Input active block size="small" />
                            </span>
                        </div>
                        <div className="mb-5">
                            <div
                                className="font-bold my-2 select-none text-gray-900 text-xs uppercase">
                                <Skeleton.Button active size="small" />
                            </div>
                            <span
                                className={ `font-bold px-0 py-1 rounded-2xl select-none text-white text-xs` }
                            >
                                <Skeleton.Input active block size="small" />
                            </span>
                        </div>
                        <div className="mb-5">
                            <div
                                className="font-bold my-2 select-none text-gray-900 text-xs uppercase">
                                <Skeleton.Button active size="small" />
                            </div>
                            <span
                                className={ `font-bold px-0 py-1 rounded-2xl select-none text-white text-xs` }
                            >
                                <Skeleton.Input active block size="small" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="h-full max-h-full mt-0 overflow-y-scroll pt-0 px-0 md:absolute md:flex md:left-[336px] md:mt-4 md:pl-0 md:pr-4 md:w-[calc(100%-336px)] flex flex-col">
                <div>
                    <div>
                        <div className="accent-indigo-800 bg-white border mb-3 md:mb-7 mx-3 rounded-xl md:mx-0 md:pb-4"
                             data-v0-t="card">
                            <div className="flex gap-2 md:gap-4 items-center pb-4 pt-6 px-4 md:px-6">
                                {/*Back button (mobile)*/ }
                                <button
                                    disabled
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
                                        <Skeleton.Input active block />
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
                                            <p className="mr-5 select-none text-[#29d2b0] text-xs font-bold">
                                                <Skeleton.Button active block size="small" />
                                            </p>
                                        </div>
                                        {/*STATUS*/ }
                                        <div
                                            className={ `border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring font-semibold hover:bg-secondary/80 inline-flex items-center px-2.5 py-0.5 rounded-full select-none text-secondary-foreground text-xs transition-colors w-fit whitespace-nowrap` }>
                                            <Skeleton.Button active block size="small" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center ml-auto space-x-2 text-Thesis-200 text-xs">
                                    {/*Back Button*/ }
                                    <button disabled
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
                                <Skeleton active block />
                                <Skeleton active block />
                            </div>

                            {/*----------POST COMMENT----------*/ }
                            <div className="bg-white bottom-0 mt-0 px-0 md:px-6">
                                {/*<PostComment />*/ }
                            </div>

                            {/*----------COMMENTS----------*/ }
                            <div data-id="57" className="md:mt-0 md:pb-2 md:px-6">
                                {/*------------------Number of comments------------------*/ }
                                <div className="flex items-center mb-4 pl-2 space-x-4 md:pl-0">
                                </div>
                                {/*------------------COMMENT SECTION------------------*/ }
                                <div data-id="59" className="pb-4 pl-2 pr-4 space-y-6 md:pb-0 md:px-0">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};