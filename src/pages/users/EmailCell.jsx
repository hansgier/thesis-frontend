import React from "react";

export const EmailCell = React.memo(({ value }) => {
    return (
        <div
            className="font-normal select-none text-gray-500 truncate w-72">{ value }
        </div>
    );
});