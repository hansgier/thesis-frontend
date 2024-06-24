import { projectDetails_sidebar } from "../utils/data-components.jsx";
import React, { useCallback, useReducer, useState } from "react";
import { ProjectUpdate } from "../pages/project/ProjectUpdate.jsx";
import { Button, Modal, Skeleton } from "antd";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { FiPlus } from "react-icons/fi";
import { toggleAddModeProjectUpdate, toggleEditModeProjectUpdate } from "../app/features/projects/projectsSlice.js";
import { EditProjectUpdate } from "../pages/project/EditProjectUpdate.jsx";
import { sortUpdates } from "../app/features/projects/updatesSlice.js";

const initialState = {
    isDetailsUpdateMobileOpen: false,
    isDetailsMobileMode: true,
    updateSort: 0,
    editUpdateMode: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case "setIsDetailsUpdateMobileOpen":
            return { ...state, isDetailsUpdateMobileOpen: action.payload };
        case "toggleIsDetailsUpdateMobileOpen":
            return { ...state, isDetailsUpdateMobileOpen: !state.isDetailsUpdateMobileOpen };
        case "setIsDetailsMobileMode":
            return { ...state, isDetailsMobileMode: action.payload };
        case "toggleIsDetailsMobileMode":
            return { ...state, isDetailsMobileMode: !state.isDetailsMobileMode };
        case "toggleUpdateSort":
            return { ...state, updateSort: (state.updateSort + 1) % 2 };
        case "setEditUpdateMode":
            return { ...state, editUpdateMode: action.payload };
        case "toggleEditUpdateMode":
            return { ...state, editUpdateMode: !state.editUpdateMode };
        case "reset":
            return { state: initialState };
        default:
            throw new Error;
    }
};

export const DetailsUpdate = () => {
    const { projects, singleProject } = useSelector((store) => store.projects);
    const { user } = useSelector((store) => store.auth);
    const { users4admin } = useSelector((store) => store.users);
    const { barangays } = useSelector((store) => store.barangays);
    const { reactions } = useSelector((store) => store.reactions);
    const { updates, isUpdateFetchLoading, isUpdateFetchSuccess, totalUpdates } = useSelector((store) => store.updates);
    const { isEditModeProjectUpdate, isAddModeProjectUpdate } = useSelector((store) => store.projects);
    const [isDetailsMode, setIsDetailsMode] = useState(true);
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchRedux = useDispatch();

    const isAdmin = user.role === "admin" || user.role === "barangay";

    const getNameByCreatedBy = useCallback(
        (createdBy) => {
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
        },
        [users4admin, barangays]
    );

    return (
        <>
            <div
                className="bg-white border hidden mb-6 mt-4 pt-0 relative rounded-2xl md:fixed md:flex md:h-[calc(100%-96px)] md:mr-2 md:pl-4 md:pr-0 md:py-4 md:w-80 md:z-50">
                <div className="bg-white flex flex-col pr-4 w-full">
                    <div className="flex items-center w-full">
                        <h2 className="flex-1 font-semibold select-none text-xl"
                            data-id="15">{ isDetailsMode ? "Details" : "Updates" }</h2>
                        {/*-----------Details-Update Switch-----------*/ }
                        <button onClick={ () => {
                            setIsDetailsMode(!isDetailsMode);
                        } }
                                className="flex focus:outline-none focus:ring-0 focus:ring-offset-0 font-medium hover:bg-opacity-90 hover:duration-200 hover:shadow-inner hover:text-yellow-900 hover:transition-all items-center p-2 rounded-lg shadow text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round" className="w-4 h-4" data-id="6">
                                <path
                                    d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                                <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                        </button>
                    </div>
                    {/*-----------PROJECT POST DATE & POSTED BY-----------*/ }
                    <div className="pt-2">
                        <div
                            className="font-normal select-none text-gray-700 text-sm">
                            { isDetailsMode ? `Posted on ${ moment(singleProject?.createdAt).format("MMMM D, YYYY ") }` : `Last updated on ${ moment(singleProject?.updatedAt).format("MMMM D, YYYY ") }` }
                        </div>
                        <div
                            className="select-none text-gray-700 text-sm">
                            { `By ${ getNameByCreatedBy(singleProject?.createdBy) }` }
                        </div>
                    </div>
                    {/*-----------DETAILS-----------*/ }
                    <div className="border-t mt-4 overflow-y-auto pt-4 w-full">
                        { isDetailsMode ? (
                            projectDetails_sidebar
                                .filter((pds) => {
                                    const { value } = pds;
                                    const projectValue = singleProject?.[value];
                                    if (pds.pds_type === "single") {
                                        return !!projectValue; // Include if projectValue is truthy
                                    } else if (pds.pds_type === "multiple") {
                                        return (projectValue || []).length > 0; // Include if projectValue is a non-empty array
                                    }
                                    return false; // Exclude all other cases
                                })
                                .map((pds, index) => {
                                    const { name, pds_type, color, value } = pds;
                                    if (!singleProject || !singleProject) {
                                        return null; // or you can render a placeholder component
                                    }

                                    if (pds_type === "single") {
                                        const isDateValue = ["start_date", "due_date", "completion_date"].includes(value);
                                        const isCostValue = value === "cost";
                                        const displayValue = isDateValue
                                            ? moment(singleProject?.[value]).format("MMMM D, YYYY")
                                            : isCostValue
                                                ? `₱ ${ parseFloat(singleProject?.[value]).toLocaleString("en-PH", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                }) }`
                                                : singleProject?.[value];

                                        return (
                                            <div className="mb-5" key={ index }>
                                                <div
                                                    className="font-bold my-2 select-none text-gray-900 text-xs uppercase">
                                                    { name }
                                                </div>
                                                <span
                                                    className={ `${ color } font-bold px-3 py-1 rounded-2xl select-none text-white text-xs` }
                                                >
                                                    { displayValue }
                                                </span>
                                            </div>
                                        );
                                    } else if (pds_type === "multiple") {
                                        return (
                                            <div className="mb-5" key={ index }>
                                                <div
                                                    className="font-bold my-2 select-none text-gray-900 text-xs uppercase">
                                                    { name }
                                                </div>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    { singleProject?.[value].map((item, index) => (
                                                        <span
                                                            key={ index }
                                                            className={ `${ color } font-bold px-3 py-1 rounded-2xl select-none text-white text-xs` }
                                                        >
                                                            { item.name }
                                                        </span>
                                                    )) }
                                                </div>
                                            </div>
                                        );
                                    }
                                })
                        ) : (
                            <>
                                <div className="pb-2 pt-0 pr-3 flex justify-between">
                                    {/*Updates Sort Button*/ }
                                    <Button onClick={ () => {
                                        dispatch({ type: "toggleUpdateSort" });
                                        state.updateSort === 1 ? dispatchRedux(sortUpdates("newest")) : dispatchRedux(sortUpdates("oldest"));
                                    } }
                                            disabled={ state.editUpdateMode }
                                            icon={ state.updateSort === 0 ?
                                                <RiSortAsc /> : state.updateSort === 1 && <RiSortDesc /> }
                                            type="text" />
                                    {/*Add/Edit Update buttons*/ }
                                    { isAdmin && (
                                        <div>
                                            <Button onClick={ () => {
                                                dispatchRedux(toggleAddModeProjectUpdate());
                                            } }
                                                    icon={ <FiPlus /> } type="text" />
                                            <Button onClick={ () => {
                                                dispatchRedux(toggleEditModeProjectUpdate());
                                            } }
                                                    icon={ <CiEdit /> } type="text" />
                                        </div>
                                    ) }
                                    <Modal open={ isAddModeProjectUpdate } centered footer={ null } closeIcon={ null }
                                           onCancel={ () => {
                                               return;
                                           } }
                                           title="Add Project Update"
                                    >
                                        <ProjectUpdate mode="add" />
                                    </Modal>
                                </div>
                                <div className="h-[440px]">
                                    {/*-----------UPDATES-----------*/ }
                                    { isUpdateFetchLoading ? (
                                        <div className="m-0 p-0">
                                            <div
                                                className="mb-5 mr-2 p-2 rounded-md">
                                                <div className="mb-3 space-y-2">
                                                    <Skeleton.Input active spinning={ isUpdateFetchLoading }
                                                                    size="small" />
                                                    <Skeleton.Input block active spinning={ isUpdateFetchLoading }
                                                                    size="small" />
                                                    <Skeleton.Input block active spinning={ isUpdateFetchLoading }
                                                                    size="small" />
                                                    <Skeleton.Input block active
                                                                    spinning={ isUpdateFetchLoading }
                                                                    size="small" />
                                                </div>
                                                <div className="flex items-center justify-between" data-id="20">
                                                    <div className="flex items-center gap-2" data-id="21">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="dark:text-gray-400 h-4 text-yellow-700 w-4"
                                                             data-id="22">
                                                            <rect width="18" height="18" x="3" y="4" rx="2"
                                                                  ry="2"></rect>
                                                            <line x1="16" x2="16" y1="2" y2="6"></line>
                                                            <line x1="8" x2="8" y1="2" y2="6"></line>
                                                            <line x1="3" x2="21" y1="10" y2="10"></line>
                                                            <path d="M8 14h.01"></path>
                                                            <path d="M12 14h.01"></path>
                                                            <path d="M16 14h.01"></path>
                                                            <path d="M8 18h.01"></path>
                                                            <path d="M12 18h.01"></path>
                                                            <path d="M16 18h.01"></path>
                                                        </svg>
                                                        <span className="select-none text-gray-500 text-xs flex-1"
                                                              data-id="23">
                                                            <Skeleton.Input block active
                                                                            spinning={ isUpdateFetchLoading }
                                                                            size="small" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="mb-5 mr-2 p-2 rounded-md">
                                                <div className="mb-3 space-y-2">
                                                    <Skeleton.Input active spinning={ isUpdateFetchLoading }
                                                                    size="small" />
                                                    <Skeleton.Input block active spinning={ isUpdateFetchLoading }
                                                                    size="small" />
                                                    <Skeleton.Input block active spinning={ isUpdateFetchLoading }
                                                                    size="small" />
                                                    <Skeleton.Input block active
                                                                    spinning={ isUpdateFetchLoading }
                                                                    size="small" />
                                                </div>
                                                <div className="flex items-center justify-between" data-id="20">
                                                    <div className="flex items-center gap-2" data-id="21">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                             viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                             strokeWidth="2" strokeLinecap="round"
                                                             strokeLinejoin="round"
                                                             className="dark:text-gray-400 h-4 text-yellow-700 w-4"
                                                             data-id="22">
                                                            <rect width="18" height="18" x="3" y="4" rx="2"
                                                                  ry="2"></rect>
                                                            <line x1="16" x2="16" y1="2" y2="6"></line>
                                                            <line x1="8" x2="8" y1="2" y2="6"></line>
                                                            <line x1="3" x2="21" y1="10" y2="10"></line>
                                                            <path d="M8 14h.01"></path>
                                                            <path d="M12 14h.01"></path>
                                                            <path d="M16 14h.01"></path>
                                                            <path d="M8 18h.01"></path>
                                                            <path d="M12 18h.01"></path>
                                                            <path d="M16 18h.01"></path>
                                                        </svg>
                                                        <span className="select-none text-gray-500 text-xs flex-1"
                                                              data-id="23">
                                                            <Skeleton.Input block active
                                                                            spinning={ isUpdateFetchLoading }
                                                                            size="small" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            { totalUpdates < 1 ?
                                                <div className="flex items-center justify-center h-full">No
                                                                                                         updates</div>
                                                : updates.map((update) => (
                                                    <EditProjectUpdate
                                                        key={ update.id }
                                                        update={ update }
                                                    />
                                                )) }
                                        </>
                                    ) }
                                </div>
                            </>
                        ) }
                    </div>
                </div>
            </div>
        </>
    );
};