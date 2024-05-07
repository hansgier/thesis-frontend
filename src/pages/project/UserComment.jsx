import React from "react";
import { getInitials } from "../../utils/functions.js";

export const UserComment = React.memo(({ userName, userComment, commentPostDate }) => {
    return (
        <div className="flex items-start gap-4" data-id="60">
            <span
                className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                data-id="61">
                <span
                    className="bg-gray-100 flex h-full items-center justify-center rounded-full select-none text-sm w-full md:text-base"
                    data-id="63">
                    { getInitials(userName) }
                </span>
            </span>
            <div className="flex-1" data-id="64">
                <div className="flex items-center justify-between mb-2" data-id="65">
                    <div className="font-bold select-none text-sm md:text-base"
                         data-id="66">
                        { userName }
                    </div>
                    <div
                        className="font-normal select-none text-[#1ec8a9] text-xs md:font-bold"
                        data-id="67">
                        2 hours ago
                    </div>
                </div>
                <p className="text-gray-500 text-sm md:text-base" data-id="68">{ userComment }</p>
            </div>
        </div>
    );
});