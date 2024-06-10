import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Popconfirm, Skeleton, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { CiEdit } from "react-icons/ci";
import { AddEditProjectComponent } from "./AddEditProjectComponent.jsx";
import moment from "moment";
import { getAllProjectReactions } from "../app/features/reactions/reactionsSlice.js";
import { capitalizeFirstLetter } from "../utils/functions.js";
import { deleteProject } from "../app/features/projects/projectsSlice.js";
import { LikeDislikeButtons } from "./LikeDislikeButtons.jsx";
import { proj_status } from "../utils/data-components.jsx";


export const ProjectContainer = React.memo(({ project }) => {
    const { view, user } = useSelector((store) => store.auth);
    const { users4admin } = useSelector((store) => store.users);
    const { barangays } = useSelector((store) => store.barangays);
    const { isProjectFetchLoading } = useSelector((store) => store.projects);
    const { reactions, totalReactions } = useSelector((store) => store.reactions);
    const [isHovered, setIsHovered] = useState(false);
    const [deleteProjectConfirm, setDeleteProjectConfirm] = useState(false);
    const [editProjectMode, setEditProjectMode] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAdmin = user.role === "admin";
    const isBarangay = user.role === "barangay";
    const isProjectCreatedByUser = project.createdBy === user.id;
    const canEditOrDelete = isAdmin || (isBarangay && isProjectCreatedByUser);

    useEffect(() => {
        dispatch(getAllProjectReactions(project.id));
    }, []);

    const onDeleteProjectConfirm = () => {
        setDeleteProjectConfirm(true);
        dispatch(deleteProject(project.id));
    };

    const barangayNames = project.barangays.map(barangay => barangay.name);
    const formattedBarangayNames = barangayNames.join(" | ");

    function getNameByCreatedBy(createdBy) {
        const user = users4admin.find((user) => user.id === createdBy);

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
    }

    return (
        <>
            { isProjectFetchLoading ? (
                    <>
                        <div className="mx-3 mb-8">
                            <div className="accent-indigo-800 bg-white border md:mx-0 mx-3 rounded-xl">
                                <div className="flex gap-4 items-center pb-4 pt-6 px-4 md:px-6">
                                    <div className="flex items-center justify-center">
                                        <Skeleton.Avatar spinning={ isProjectFetchLoading } shape="circle" active />
                                    </div>
                                    <div className="flex flex-col gap-1 md:grid w-1/2">
                                        <Skeleton.Input spinning={ isProjectFetchLoading } block active />
                                    </div>
                                    <div className="flex items-center ml-auto space-x-2 text-Thesis-200 text-xs">
                                        <Skeleton.Avatar spinning={ isProjectFetchLoading } shape="square" active />
                                    </div>
                                </div>
                                <div className="mb-4 px-4 md:px-6">
                                    <Skeleton spinning={ isProjectFetchLoading } block active />
                                </div>
                                <div className="mb-4 px-4 md:px-6">
                                </div>
                            </div>
                        </div>
                        <div className="mx-3 mb-8">
                            <div className="accent-indigo-800 bg-white border md:mx-0 mx-3 rounded-xl">
                                <div className="flex gap-4 items-center pb-4 pt-6 px-4 md:px-6">
                                    <div className="flex items-center justify-center">
                                        <Skeleton.Avatar spinning={ isProjectFetchLoading } shape="circle" active />
                                    </div>
                                    <div className="flex flex-col gap-1 md:grid w-1/2">
                                        <Skeleton.Input spinning={ isProjectFetchLoading } block active />
                                    </div>
                                    <div className="flex items-center ml-auto space-x-2 text-Thesis-200 text-xs">
                                        <Skeleton.Avatar spinning={ isProjectFetchLoading } shape="square" active />
                                    </div>
                                </div>
                                <div className="mb-4 px-4 md:px-6">
                                    <Skeleton spinning={ isProjectFetchLoading } block active />
                                </div>
                                <div className="mb-4 px-4 md:px-6">
                                </div>
                            </div>
                        </div>
                        <div className="mx-3 mb-8">
                            <div className="accent-indigo-800 bg-white border md:mx-0 mx-3 rounded-xl">
                                <div className="flex gap-4 items-center pb-4 pt-6 px-4 md:px-6">
                                    <div className="flex items-center justify-center">
                                        <Skeleton.Avatar spinning={ isProjectFetchLoading } shape="circle" active />
                                    </div>
                                    <div className="flex flex-col gap-1 md:grid w-1/2">
                                        <Skeleton.Input spinning={ isProjectFetchLoading } block active />
                                    </div>
                                    <div className="flex items-center ml-auto space-x-2 text-Thesis-200 text-xs">
                                        <Skeleton.Avatar spinning={ isProjectFetchLoading } shape="square" active />
                                    </div>
                                </div>
                                <div className="mb-4 px-4 md:px-6">
                                    <Skeleton spinning={ isProjectFetchLoading } block active />
                                </div>
                                <div className="mb-4 px-4 md:px-6">
                                </div>
                            </div>
                        </div>
                    </>
                )
                : (
                    <div onMouseOver={ () => setIsHovered(true) } onMouseLeave={ () => setIsHovered(false) }>
                        <div
                            className={ `accent-indigo-800 bg-white border ${ view === 1 ? "mb-2" : "mb-8" } md:mx-0 mx-3 rounded-xl` }>
                            <div className="flex gap-4 items-center pb-4 pt-6 px-4 md:px-6">
                                <div className="flex items-center justify-center">
                                    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                         fill="#000000"
                                         preserveAspectRatio="true" className="w-6 md:w-8">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path
                                                d="M401.9 584.7h16v16h-16zM385.9 600.7h-16v-16h16v16z m-31.9 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-31.9 0h-16v-16h16v16zM146.1 584.7h16v16h-16zM162.1 569h-16v-15.7h16V569z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V506z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V443z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V380z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V317z m0-31.4h-16v-15.7h16v15.7zM146.1 238.1h16v16h-16zM385.9 254.1h-16v-16h16v16z m-31.9 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-31.9 0h-16v-16h16v16zM401.9 238.1h16v16h-16zM417.9 569h-16v-15.7h16V569z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V506z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V443z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V380z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16v-15.7h16V317z m0-31.4h-16v-15.7h16v15.7zM860.1 682.9h16v16h-16zM844.2 698.9h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-31.9 0h-16v-16h16v16z m-32 0h-16v-16h16v16zM604.3 682.9h16v16h-16zM620.3 667.1h-16v-15.7h16v15.7z m0-31.4h-16V620h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V557h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V494h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V431h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V368h16v15.7zM604.3 336.2h16v16h-16zM844.2 352.2h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-31.9 0h-16v-16h16v16z m-32 0h-16v-16h16v16zM860.1 336.2h16v16h-16zM876.1 667.1h-16v-15.7h16v15.7z m0-31.4h-16V620h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V557h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V494h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V431h16v15.7z m0-31.5h-16v-15.7h16v15.7z m0-31.5h-16V368h16v15.7z"
                                                fill="#0A0408"></path>
                                            <path d="M246.9 107.8h531.6v531.6H246.9z" fill="#FFFFFF"></path>
                                            <path
                                                d="M786.5 647.4H238.9V99.8h547.6v547.6z m-531.6-16h515.6V115.8H254.9v515.6z"
                                                fill="#0A0408"></path>
                                            <path d="M305.1 166h415.1v415.1H305.1z" fill="#55B7A8"></path>
                                            <path
                                                d="M389.9 238.2h195.3v16H389.9zM384.6 338.8h256.2v16H384.6zM384.6 441.2h256.2v16H384.6z"
                                                fill="#0A0408"></path>
                                            <path d="M868.8 918H156.5l-50-415.4h812.3z" fill="#FFFFFF"></path>
                                            <path
                                                d="M875.9 926H149.4L97.5 494.6h830.4l-52 431.4z m-712.3-16h698.1l48.1-399.4H115.5L163.6 910z"
                                                fill="#0A0408"></path>
                                            <path d="M809.6 866.5H215.8L174.1 554h677.2z" fill="#F4BE6F"></path>
                                            <path d="M154.1 639.7h154.3v16H154.1zM154.1 717.9h258.3v16H154.1z"
                                                  fill="#FFFFFF"></path>
                                            <path d="M842.7 318.8h50.9v50.9h-50.9z" fill="#DC444A"></path>
                                            <path
                                                d="M901.6 377.7h-66.9v-66.9h66.9v66.9z m-50.9-16h34.9v-34.9h-34.9v34.9z"
                                                fill="#0A0408"></path>
                                            <path d="M128.6 220.8h50.9v50.9h-50.9z" fill="#DC444A"></path>
                                            <path
                                                d="M187.5 279.7h-66.9v-66.9h66.9v66.9z m-50.9-16h34.9v-34.9h-34.9v34.9z"
                                                fill="#0A0408"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div onClick={ () => {
                                    navigate(`/projects/${ project.id }`);
                                } }
                                     className="flex flex-col gap-1 md:grid hover:cursor-pointer">
                                    <h3 className="font-semibold leading-none select-none text-lg tracking-tight md:text-2xl">{ project.title }</h3>
                                    <div className="flex items-center">
                                        <div className="flex group items-center mr-4 space-x-1">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                 width="14">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                   strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path d="M12 8V12L15 15" stroke="#29d2b0" strokeWidth="2"
                                                          strokeLinecap="round"></path>
                                                    <circle cx="12" cy="12" r="9" stroke="#29d2b0"
                                                            strokeWidth="2"></circle>
                                                </g>
                                            </svg>
                                            <Tooltip
                                                title={ `Posted on ${ moment(project.createdAt).format("MMMM D, YYYY," +
                                                    " h:mm:ss a") }` } placement="bottom">
                                                <p className="group-hover:underline mr-5 select-none text-[#29d2b0] text-xs font-bold">
                                                    { moment(project.createdAt).fromNow() }
                                                </p>
                                            </Tooltip>
                                        </div>
                                        <div
                                            className="gap-1 group hidden hover:cursor-pointer items-center mr-5 lg:flex">
                                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                 stroke="#9ca3af"
                                                 width="14">
                                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                   strokeLinejoin="round"></g>
                                                <g id="SVGRepo_iconCarrier">
                                                    <path
                                                        d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                                        stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </g>
                                            </svg>
                                            <span
                                                className="group-hover:duration-300 group-hover:text-gray-500 group-hover:transition-all max-w-xs overflow-ellipsis overflow-hidden select-none text-gray-400 text-xs">
                                    { formattedBarangayNames }
                                </span>
                                        </div>
                                        <div
                                            className={ `border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring font-semibold hover:bg-secondary/80 inline-flex items-center px-2.5 py-0.5 rounded-full select-none text-secondary-foreground text-xs transition-colors w-fit whitespace-nowrap ${ proj_status[project.status] }` }>
                                            { capitalizeFirstLetter(project.status) }
                                        </div>
                                    </div>
                                </div>
                                { canEditOrDelete && isHovered ? (
                                    <div id="ishovered"
                                         className="flex items-center ml-auto space-x-2 text-Thesis-200 text-xs">
                                        {/* Edit button */ }
                                        { (isAdmin || (isBarangay && isProjectCreatedByUser)) && (
                                            <>
                                                <Button icon={ <CiEdit /> } type="dashed"
                                                        onClick={ () => setEditProjectMode(true) } />
                                                <Modal
                                                    centered
                                                    title="Edit Project"
                                                    open={ editProjectMode }
                                                    onCancel={ () => setEditProjectMode(false) }
                                                    footer={ null }
                                                    wrapClassName="add-project-modal"
                                                    width={ 800 }
                                                >
                                                    <div className="pb-1 border-b-2 mb-3 select-none">
                                                        Edit the details of the project.
                                                    </div>
                                                    <AddEditProjectComponent mode="edit" project={ project } />
                                                </Modal>
                                            </>
                                        ) }
                                        {/* Delete button */ }
                                        { (isAdmin || (isBarangay && isProjectCreatedByUser)) && (
                                            <Popconfirm
                                                title="Delete Project"
                                                description="Are you sure you want to delete this project?"
                                                onConfirm={ onDeleteProjectConfirm }
                                            >
                                                <Button icon={ <MdDeleteOutline /> } danger type="primary" />
                                            </Popconfirm>
                                        ) }
                                    </div>
                                ) : (
                                    <div id="not hovered"
                                         className="flex items-center ml-auto space-x-2 text-Thesis-200 text-xs">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="h-4 hidden w-4 lg:block"
                                        >
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
                                        <span className="font-bold hidden select-none lg:block">
                                { getNameByCreatedBy(project.createdBy) }
                            </span>
                                    </div>
                                ) }
                            </div>
                            <AnimatePresence>
                                { view === 0 && (
                                    <>
                                        <motion.div
                                            initial={ { opacity: 0 } }
                                            animate={ { opacity: 1 } }
                                            exit={ { opacity: 0 } }
                                            className="mb-4 px-4 md:px-6">
                                            <p className="leading-relaxed md:text-base select-none text-gray-700 text-justify text-sm">
                                                { project.description }
                                            </p>
                                        </motion.div>
                                        { project.media.length > 0 &&
                                            <div className="mx-4 pt-[334px] px-4 relative md:mx-6 md:px-6">
                                                <img alt="project_img" src={ project.media[0]?.url }
                                                     onClick={ () => {
                                                         navigate(`/projects/${ project.id }`);
                                                     } }
                                                     className="absolute h-full left-0 object-center object-cover rounded-xl top-0 w-full hover:cursor-pointer" />
                                            </div>
                                        }
                                        <div className="gap-2 grid pb-3 px-4 md:px-6">
                                            <div className="flex gap-2 h-8 items-center mt-4 text-sm md:gap-4">
                                                {/*-----------------------REACTIONS-----------------------*/ }
                                                <LikeDislikeButtons project={ project } />
                                                {/*-----------------------COMMENT COUNT-----------------------*/ }
                                                <div
                                                    onClick={ () => {
                                                        navigate(`/projects/${ project.id }`);
                                                    } }
                                                    className="duration-300 flex gap-1 h-full hover:bg-blue-50 hover:rounded-md items-center px-2 transition-colors hover:cursor-pointer"
                                                    data-pg-ia='{"l":[{"name":"Hover UserComment Button"}]}'>
                                                    <svg viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg"
                                                         width="16">
                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                                           strokeLinejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <g clipPath="url(#clip0_429_11233)">
                                                                <path
                                                                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 13.4876 3.36093 14.891 4 16.1272L3 21L7.8728 20C9.10904 20.6391 10.5124 21 12 21Z"
                                                                    stroke="#292929" strokeWidth="2.5"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"></path>
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_429_11233">
                                                                    <rect width="24" height="24" fill="white"></rect>
                                                                </clipPath>
                                                            </defs>
                                                        </g>
                                                    </svg>
                                                    <span
                                                        className="select-none text-[#454545] text-xs md:text-sm">{ project.commentCount }</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) }
                            </AnimatePresence>
                        </div>
                    </div>

                )
            }
        </>
    );
});