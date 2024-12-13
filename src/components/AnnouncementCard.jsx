import { announcement_component } from "../utils/data-components.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Button, Modal, Popconfirm } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { CiEdit } from "react-icons/ci";
import { AddEditAnnouncementComponent } from "./AddEditAnnouncementComponent.jsx";
import moment from "moment";
import { deleteAnnouncement, setSelectedAnnouncement } from "../app/features/announcements/announcementsSlice.js";
import { setEditAnnouncementMode } from "../app/features/auth/authSlice.js";

export const AnnouncementCard = React.memo(({ announcement }) => {
    const { view, user, isEditAnnouncementMode: editAnnouncementMode } = useSelector((store) => store.auth);
    const { users4admin } = useSelector((store) => store.users);
    const { barangays } = useSelector((store) => store.barangays);
    const {
        isAnnouncementFetchLoading,
        isAnnouncementFetchSuccess,
        selected_announcement
    } = useSelector((store) => store.announcements);
    const [deleteAnnouncementConfirm, setDeleteAnnouncementConfirm] = useState(false);
    const dispatch = useDispatch();

    const isAdmin = user.role === "admin";
    const isBarangay = user.role === "barangay";
    const isAnnouncementCreatedByUser = announcement.createdBy === user.id;

    const canEditOrDelete = isAdmin || (isBarangay && isAnnouncementCreatedByUser);


    const onDeleteAnnouncementConfirm = () => {
        setDeleteAnnouncementConfirm(true);
        dispatch(deleteAnnouncement(announcement.id));
    };

    const getNameByPostedBy = useCallback((postedBy) => {
        const user = users4admin.find((user) => user.id === postedBy);

        if (user) {
            if (user.role === "barangay") {
                const barangay = barangays.find((b) => b.id === user.barangay_id);
                return barangay ? barangay.name : "Unknown Barangay";
            } else if (user.role === "admin") {
                return "City Government";
            } else {
                return user.username;
            }
        }

        return "Unknown User";
    }, [users4admin, barangays]);

    return (
        <div
            className={ `bg-white hover:cursor-pointer hover:duration-500 hover:ease-out hover:shadow-gray-300 hover:shadow-xl hover:transition-shadow mb-4 md:ml-0 md:mx-0 mx-4 rounded-xl border` }
            data-v0-t="card"
        >
            <div className="flex flex-col items-center pb-4 pt-6 px-4 md:px-6">
                <div className="flex w-full">
                    <div className="flex items-center justify-center">
                        { announcement.type === "system" ? announcement_component.system.icon : announcement_component.basic.icon }
                    </div>
                    <div className="flex items-center pl-3">
                        <h3 className="font-semibold leading-none md:text-2xl select-none text-xl tracking-tight whitespace-normal">
                            { announcement.title }
                        </h3>
                    </div>
                    { canEditOrDelete ? (
                        <div
                            className="flex flex-row items-center justify-center ml-auto space-x-2 text-gray-500 text-xs md:flex-row md:items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="h-4 w-4">
                                <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                                <path d="M9 22v-4h6v4"></path>
                                <path d="M8 6h.01"></path>
                                <path d="M16 6h.01"></path>
                                <path d="M12 6h.01"></path>
                                <path d="M12 10h.01"></path>
                                <path d="M12 14h.01"></path>
                                <path d="M16 10h.01"></path>
                                <path d="M16 14h.01"></path>
                                <path d="M8 10h.01"></path>
                                <path d="M8 14h.01"></path>
                            </svg>
                            <span
                                className="hidden select-none md:block">{ getNameByPostedBy(announcement.createdBy) }</span>
                            <Button icon={ <CiEdit /> } type="dashed"
                                    onClick={ () => {
                                        dispatch(setEditAnnouncementMode(true));
                                        dispatch(setSelectedAnnouncement(announcement));
                                    } } />
                            <Modal centered title="Edit Announcement" open={ editAnnouncementMode }
                                   closeIcon={ null }
                                   onCancel={ () => {
                                       return;
                                   } }
                                   footer={ null } wrapClassName="add-project-modal" width={ 800 }>
                                <div className="pb-1 border-b-2 mb-3 select-none">Edit the details of the
                                                                                  announcement.
                                </div>
                                <AddEditAnnouncementComponent mode="edit" announcement={ selected_announcement } />
                            </Modal>
                            <Popconfirm title="Delete Announcement"
                                        description="Are you sure you want to delete this announcement?"
                                        onConfirm={ onDeleteAnnouncementConfirm }>
                                <Button icon={ <MdDeleteOutline /> } danger type="primary" />
                            </Popconfirm>
                        </div>

                    ) : (
                        <div
                            className="flex flex-col items-center justify-center ml-auto space-x-2 text-gray-500 text-xs md:flex-row md:items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="h-4 w-4">
                                <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                                <path d="M9 22v-4h6v4"></path>
                                <path d="M8 6h.01"></path>
                                <path d="M16 6h.01"></path>
                                <path d="M12 6h.01"></path>
                                <path d="M12 10h.01"></path>
                                <path d="M12 14h.01"></path>
                                <path d="M16 10h.01"></path>
                                <path d="M16 14h.01"></path>
                                <path d="M8 10h.01"></path>
                                <path d="M8 14h.01"></path>
                            </svg>
                            <span
                                className="hidden select-none md:block">{ getNameByPostedBy(announcement.createdBy) }</span>
                        </div>
                    ) }

                </div>
                <AnimatePresence>
                    { view === 0 && <div className="w-full">
                        <motion.p
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                            className="pl-0 pt-1 select-none text-gray-400 text-xs md:pl-11 md:text-sm">
                            Posted on { moment(announcement.createdAt).format("MMMM D, YYYY h:mm:ss a") }
                        </motion.p>
                    </div> }
                </AnimatePresence>
            </div>
            <AnimatePresence>
                { view === 0 && <div className="mb-4 pb-2 px-4 md:px-6 w-full">
                    <motion.p
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                        className="md:text-base select-none text-gray-700 text-justify text-sm break-words"
                        style={ {whiteSpace: "pre-wrap"}}
                    >
                        { announcement.content }
                    </motion.p>
                </div> }
            </AnimatePresence>
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.announcement.id === nextProps.announcement.id;
});