import { Empty } from "antd";
import React from "react";

export const FeaturedProject = ({ project }) => {
    return (
        <div
            className="bg-white border-b border-green-400 border-t flex items-center p-2 rounded-lg md:flex md:flex-col md:gap-4 md:pb-2 md:pt-1.5 md:px-1.5 md:rounded-3xl">
            <div className="relative md:h-64 md:w-full">
                { project.media.length < 1 ?
                    <div
                        className="absolute bg-cover h-12 md:flex hidden items-center justify-center rounded-lg w-12 md:h-full md:rounded-3xl md:w-full">
                        <Empty description="No image" />
                    </div>
                    :
                    <img
                        src={ project.media.url }
                        className="absolute bg-cover h-12 rounded-lg w-12 md:h-full md:rounded-3xl md:w-full"
                        alt="Project" />
                }
            </div>
            <div className="gap-1 grid h-full ml-2 md:ml-0">
                <p className="font-semibold mx-2 select-none text-sm md:text-base">{ project.title }</p>
                <p className="mx-2 select-none text-gray-600 text-xs md:text-gray-600 md:text-sm line-clamp-2">
                    { project.description }</p>
            </div>
            <a href={ `/projects/${ project.id }` }
               className="border-2 font-bold hidden p-3 rounded-full text-center text-xs w-full md:block hover:border-[#10c9aa] hover:text-[#10c9aa] transition-all duration-200">View
                                                                                                                                                                                  Project</a>
        </div>
    );
};