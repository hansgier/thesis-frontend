import React from "react";

export const Announcement = React.memo(({ announcement }) => {
    return (
        <div
            className="cursor-pointer flex gap-4 hover:bg-Thesis-50 hover:bg-opacity-5 hover:duration-300 hover:ease-out hover:transition-all items-center">
            <div className="flex flex-col w-full">
                <p className="font-semibold text-sm whitespace-normal md:text-base">{ announcement.title }</p>
                <p className="text-gray-600 text-xs md:text-sm line-clamp-2">{ announcement.content }</p>
            </div>
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.announcement.id === nextProps.announcement.id;
});