import React from "react";

export const NameCell = React.memo(({ value }) => {
    return (
        <div
            className="font-semibold select-none text-base text-gray-900">
            { value }
        </div>
    );
});