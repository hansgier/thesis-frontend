import React from "react";

export const UpcomingProject = ({ title, description }) => {
    return (
        <div
            className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
            <div className="grid gap-1">
                <p className="font-semibold text-sm whitespace-normal md:text-base">{ title }</p>
                <p className="text-gray-600 text-xs truncate md:text-sm">{ description }</p>
            </div>
        </div>
    );
};