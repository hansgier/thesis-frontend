import React from "react";

export const ProjectUpdate = React.memo(({ content, updatePostDate, progress }) => {
    return (
        <div className="hover:bg-blue-50 hover:cursor-pointer mb-5 mr-2 p-2 rounded-md">
            {/*----------Project Update Content----------*/ }
            <p className="mb-3 text-gray-700 text-sm" data-id="19">
                { content }
            </p>
            <div className="flex items-center justify-between" data-id="20">
                <div className="flex items-center gap-2" data-id="21">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                         viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                         className="dark:text-gray-400 h-4 text-yellow-700 w-4"
                         data-id="22">
                        <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                        <line x1="16" x2="16" y1="2" y2="6"></line>
                        <line x1="8" x2="8" y1="2" y2="6"></line>
                        <line x1="3" x2="21" y1="10" y2="10"></line>
                        <path d="M8 14h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 18h.01"></path>
                        <path d="M12 18h.01"></path>
                        <path d="M16 18h.01"></path>
                    </svg>
                    {/*----------Moment Post Date----------*/ }
                    <span className="select-none text-gray-500 text-xs" data-id="23">
                        Last updated { updatePostDate }
                    </span>
                </div>
                <div className="flex items-center gap-2" data-id="24">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                         fill="#a7f3d0" className="w-5 ">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                           strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill="#76a790" fillRule="evenodd"
                                  d="M0,8 C0,6.34315 1.34315,5 3,5 L13,5 C14.6569,5 16,6.34315 16,8 C16,9.65685 14.6569,11 13,11 L3,11 C1.34315,11 0,9.65685 0,8 Z M10,7 L13,7 C13.5523,7 14,7.44772 14,8 C14,8.55228 13.5523,9 13,9 L8,9 L10,7 Z"></path>
                        </g>
                    </svg>
                    {/*----------Project Update Progress----------*/ }
                    <span className="select-none text-green-500 text-sm"
                          data-id="26">
                        { progress }
                    </span>
                </div>
            </div>
        </div>
    );
});