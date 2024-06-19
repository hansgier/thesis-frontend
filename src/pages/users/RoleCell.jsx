import React from "react";

export const RoleCell = React.memo(({ text, record }) => {
    return (
        <span
            key={ record.key }
            className={ `${ record?.role === "admin" ? roleColors.admin : record?.role === "assistant_admin" ? roleColors.assistant_admin : record?.role === "barangay" ? roleColors.barangay : record?.role === "resident" && roleColors.resident } font-medium px-4 py-1 rounded-xl select-none` }>
            { text?.charAt(0).toUpperCase() + text?.slice(1) }
        </span>
    );
}, (prevProps, nextProps) => {
    return prevProps.text === nextProps.text && prevProps.record.key === nextProps.record.key;
});

const roleColors = {
    admin: "bg-pink-200",
    assistant_admin: "bg-green-100",
    barangay: "bg-yellow-100",
    resident: "bg-blue-100"
};