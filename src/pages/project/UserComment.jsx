import React, { useCallback } from "react";
import moment from "moment";
import { useSelector } from "react-redux";

const roleColors = {
    admin: "text-pink-700",
    you: "text-sky-600",
    barangay: "text-yellow-700",
    resident: "text-black"
};

export const UserComment = React.memo(({ comment }) => {
    const { users4admin } = useSelector((store) => store.users);
    const { user } = useSelector((store) => store.auth);
    const { barangays } = useSelector((store) => store.barangays);

    const getNameByCommentedBy = useCallback((commentedBy) => {
        const userR = users4admin.find((user) => user.id === commentedBy);

        if (userR) {
            if (userR.role === "barangay") {
                const barangay = barangays.find((b) => b.id === userR.barangay_id);
                return barangay ? barangay.name : "Unknown Barangay";
            } else if (userR.role === "admin") {
                return "City Government";
            } else {
                return userR.username;
            }
        }
    }, [users4admin, barangays]);


    const userRole = useCallback((commentedBy) => {
        const userR = users4admin.find((user) => user.id === commentedBy);

        if (userR?.id === user.id) {
            return roleColors.you;
        } else if (userR?.role === "admin" || userR?.role === "assistant_admin") {
            return roleColors.admin;
        } else if (userR?.role === "barangay") {
            return roleColors.barangay;
        } else {
            return roleColors.resident;
        }
    }, [users4admin, user.id]);

    return (
        <div className="flex items-start gap-4" data-id="60">
            <div className="flex-1 pl-4" data-id="64">
                <div className="flex items-center justify-between mb-2" data-id="65">
                    <div className={ `font-bold select-none text-sm md:text-base ${ userRole(comment.commented_by) }` }
                         data-id="66">
                        { getNameByCommentedBy(comment.commented_by) }
                    </div>
                    <div
                        className="font-normal select-none text-[#1ec8a9] text-xs md:font-bold"
                        data-id="67">
                        { moment(comment.createdAt).fromNow() }
                    </div>
                </div>
                <p className="text-gray-500 text-sm md:text-base" data-id="68">{ comment.content }</p>
            </div>
        </div>
    );
});