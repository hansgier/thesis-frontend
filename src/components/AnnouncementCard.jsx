import { announcement_component } from "../utils/data-components.jsx";
import { useSelector } from "react-redux";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Button, Modal, Popconfirm } from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { CiEdit } from "react-icons/ci";
import { AddEditAnnouncementComponent } from "./AddEditAnnouncementComponent.jsx";

export const AnnouncementCard = ({ type, title, content, postedBy, dateTime }) => {
    const { view } = useSelector((store) => store.auth);
    const [isHovered, setIsHovered] = useState(false);
    const [deleteAnnouncementConfirm, setDeleteAnnouncementConfirm] = useState(false);
    const [editAnnouncementMode, setEditAnnouncementMode] = useState(false);

    const onDeleteAnnouncementConfirm = () => {
        setDeleteAnnouncementConfirm(true);
    };

    return (
        <div
            className={ `bg-white hover:cursor-pointer hover:duration-500 hover:ease-out hover:shadow-gray-300 hover:shadow-xl hover:transition-shadow mb-4 md:ml-0 md:mx-0 mx-4 rounded-xl border` }
            data-v0-t="card"
            onMouseOver={ () => setIsHovered(true) } onMouseLeave={ () => setIsHovered(false) }
        >
            <div className="flex flex-col items-center pb-4 pt-6 px-4 md:px-6">
                <div className="flex w-full">
                    <div className="flex items-center justify-center">
                        { type === "system" ? announcement_component.system.icon : announcement_component.basic.icon }
                    </div>
                    <div className="flex items-center pl-3">
                        <h3 className="font-semibold leading-none md:text-2xl select-none text-xl tracking-tight whitespace-normal">
                            { title }
                        </h3>
                    </div>
                    { isHovered ? <div
                        className="flex flex-row items-center justify-center ml-auto space-x-2 text-gray-500 text-xs md:flex-row md:items-center">
                        <Button icon={ <CiEdit /> } type="dashed" onClick={ () => setEditAnnouncementMode(true) } />
                        <Modal centered title="Edit Announcement" open={ editAnnouncementMode }
                               onCancel={ () => setEditAnnouncementMode(false) }
                               footer={ null } wrapClassName="add-project-modal" width={ 800 }>
                            <div className="pb-1 border-b-2 mb-3 select-none">Edit the details of the announcement.
                            </div>
                            <AddEditAnnouncementComponent mode="edit" />
                        </Modal>
                        <Popconfirm title="Delete Announcement"
                                    description="Are you sure you want to delete this announcement?"
                                    onConfirm={ onDeleteAnnouncementConfirm }>
                            <Button icon={ <MdDeleteOutline /> } danger type="primary" />
                        </Popconfirm>
                    </div> : <div
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
                        <span className="hidden select-none md:block">{ postedBy }</span>
                    </div> }

                </div>
                <AnimatePresence>
                    { view === 0 && <div className="w-full">
                        <motion.p
                            initial={ { opacity: 0 } }
                            animate={ { opacity: 1 } }
                            exit={ { opacity: 0 } }
                            className="pl-0 pt-1 select-none text-gray-400 text-xs md:pl-11 md:text-sm">
                            Posted on { dateTime }
                        </motion.p>
                    </div> }
                </AnimatePresence>
            </div>
            <AnimatePresence>
                { view === 0 && <div className="mb-4 pb-2 px-4 md:px-6">
                    <motion.p
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        exit={ { opacity: 0 } }
                        className="leading-relaxed md:text-base select-none text-gray-700 text-justify text-sm">
                        { content }
                    </motion.p>
                </div> }
            </AnimatePresence>

        </div>
    );
};