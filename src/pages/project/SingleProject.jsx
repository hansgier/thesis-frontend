import { useNavigate, useParams } from "react-router-dom";
import { useWindowSize } from "../../hooks/index.jsx";
import { useCallback, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getSingleProject,
    toggleAddModeProjectUpdate,
    toggleEditModeProjectUpdate
} from "../../app/features/projects/projectsSlice.js";
import { DetailsUpdate, ImageCarousel, LikeDislikeButtons, SingleProjectSkeleton } from "../../components/index.jsx";
import { Button, Modal, Segmented, Skeleton } from "antd";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { FiPlus } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";
import { ProjectUpdate } from "./ProjectUpdate.jsx";
import { EditProjectUpdate } from "./EditProjectUpdate.jsx";
import { CommentSection } from "./CommentSection.jsx";
import moment from "moment";
import { proj_status, projectDetails_sidebar } from "../../utils/data-components.jsx";
import { getAllUsers } from "../../app/features/users/usersSlice.js";
import { getAllBarangays } from "../../app/features/users/barangaysSlice.js";
import { getAllProjectUpdates, sortUpdates } from "../../app/features/projects/updatesSlice.js";

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

export const SingleProject = () => {
    const { projectId } = useParams();
    const {
        projects,
        singleProject,
        isEditModeProjectUpdate,
        isAddModeProjectUpdate,
        isProjectFetchLoading,
        isProjectFetchSuccess
    } = useSelector((store) => store.projects);
    const { user } = useSelector((store) => store.auth);
    const { users4admin } = useSelector((store) => store.users);
    const { barangays } = useSelector((store) => store.barangays);
    const { reactions } = useSelector((store) => store.reactions);
    const { updates, isUpdateFetchLoading, isUpdateFetchSuccess, totalUpdates } = useSelector((store) => store.updates);
    const dispatchRedux = useDispatch();
    const navigate = useNavigate();
    const { width } = useWindowSize();
    const [state, dispatch] = useReducer(reducer, initialState);

    const isAdmin = user.role === "admin" || user.role === "barangay";

    useEffect(() => {
        dispatchRedux(getAllProjectUpdates(projectId));
        dispatchRedux(getSingleProject(projectId));
        dispatchRedux(getAllUsers());
        dispatchRedux(getAllBarangays());
    }, []);

    const getNameByCreatedBy = useCallback((createdBy) => {
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
    }, [users4admin, barangays]);

    if (isProjectFetchLoading)
        return <SingleProjectSkeleton />;

    return (
        <>
            {/*-----------------------DETAILS-UPDATE SECTION-----------------------*/ }
            { width > 768 ? <DetailsUpdate /> : (
                <Modal
                    footer={ null }
                    centered
                    open={ state.isDetailsUpdateMobileOpen }
                    onCancel={ () => dispatch({ type: "setIsDetailsUpdateMobileOpen", payload: false }) }>
                    <div className="bg-white flex flex-col px-0 w-full">
                        <div className="flex items-center w-full">
                            <Segmented
                                options={ ["Details", "Updates"] }
                                size="large"
                                className="font-bold !m-0 select-none"
                                onChange={ () => {
                                    dispatch({ type: "toggleIsDetailsMobileMode" });
                                } }
                            />
                        </div>
                        <div className="pt-2">
                            <div className="font-normal select-none text-gray-700 text-xs">
                                { `Last updated on  ${ moment(singleProject?.updatedAt).format("MMMM D, YYYY" +
                                    " h:mm A") }` }
                            </div>
                            <div
                                className="select-none text-gray-700 text-xs">
                                { `By ${ getNameByCreatedBy(singleProject?.createdBy) }` }
                            </div>
                        </div>
                        <div className="border-t mt-4 pt-2 w-full overflow-y-auto">
                            <div className="h-[474px]">
                                { state.isDetailsMobileMode ? (
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
                                            { isAdmin &&
                                                <div>
                                                    <Button
                                                        onClick={ () => dispatchRedux(toggleAddModeProjectUpdate()) }
                                                        icon={ <FiPlus /> } type="text" />
                                                    <Button
                                                        onClick={ () => dispatchRedux(toggleEditModeProjectUpdate()) }
                                                        icon={ <CiEdit /> } type="text" />
                                                </div>
                                            }
                                        </div>
                                        <Modal open={ isAddModeProjectUpdate } centered footer={ null }
                                               onCancel={ () => dispatchRedux(toggleAddModeProjectUpdate()) }
                                               className="m-0 p-0">
                                            <ProjectUpdate mode="add" />
                                        </Modal>
                                        <div className="h-[430px]">
                                            {/*-----------UPDATES-----------*/ }
                                            { isUpdateFetchLoading ?
                                                <Skeleton active spinning={ isUpdateFetchLoading } /> : (
                                                    <>
                                                        { totalUpdates < 1 ?
                                                            <div
                                                                className="flex items-center justify-center h-full">
                                                                No updates
                                                            </div>
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
                </Modal>
            ) }

            {/*-----------------------PROJECT SECTION-----------------------*/ }
            <div
                className="h-full max-h-full mt-0 overflow-y-scroll pt-0 px-0 md:absolute md:flex md:left-[336px] md:mt-4 md:pl-0 md:pr-4 md:w-[calc(100%-336px)] flex flex-col">
                <div>
                    <div>
                        <div className="accent-indigo-800 bg-white border mb-3 md:mb-7 mx-3 rounded-xl md:mx-0 md:pb-4"
                             data-v0-t="card">
                            <div className="flex gap-2 md:gap-4 items-center pb-4 pt-6 px-4 md:px-6">
                                {/*Back button (mobile)*/ }
                                <button
                                    onClick={ () => dispatch({ type: "toggleIsDetailsUpdateMobileOpen" }) }
                                    className="bg-white focus:outline-none focus:shadow-inner md:hidden p-1 rounded-full shadow"
                                    type="button">
                                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"
                                         className="w-5">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                           strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <title></title>
                                            <g id="Complete">
                                                <g id="info-circle">
                                                    <g>
                                                        <circle cx="12" cy="12" data-name="--Circle" fill="none"
                                                                id="_--Circle" r="10" stroke="#000000"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                strokeWidth="2"></circle>
                                                        <line fill="none" stroke="#000000" strokeLinecap="round"
                                                              strokeLinejoin="round" strokeWidth="2" x1="12" x2="12"
                                                              y1="12" y2="16"></line>
                                                        <line fill="none" stroke="#000000" strokeLinecap="round"
                                                              strokeLinejoin="round" strokeWidth="2" x1="12" x2="12"
                                                              y1="8" y2="8"></line>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </button>
                                <div className="flex flex-col gap-1 md:grid">
                                    {/*TITLE*/ }
                                    <h3 className="font-semibold leading-none select-none text-lg tracking-tight md:text-2xl">
                                        { singleProject?.title }
                                    </h3>
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
                                            {/*POST MOMENT DATE*/ }
                                            <p className="mr-5 select-none text-[#29d2b0] text-xs font-bold">
                                                { moment(singleProject?.createdAt).fromNow() }
                                            </p>
                                        </div>
                                        {/*STATUS*/ }
                                        <div
                                            className={ `${ proj_status[singleProject?.status] } border border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring font-semibold hover:bg-secondary/80 inline-flex items-center px-2.5 py-0.5 rounded-full select-none text-secondary-foreground text-xs transition-colors w-fit whitespace-nowrap` }>
                                            { singleProject?.status === "on_hold" ? "On hold" : singleProject?.status === "approved_proposal" ? "Approved Proposal" : singleProject?.status?.charAt(0).toUpperCase() + singleProject?.status?.slice(1) }
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center ml-auto space-x-2 text-Thesis-200 text-xs">
                                    {/*Back Button*/ }
                                    <button onClick={ () => navigate("/projects") }
                                            className="hover:bg-blue-50 hover:rounded-lg p-1"
                                            type="button">
                                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                             className="w-5">
                                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                               strokeLinejoin="round"></g>
                                            <g id="SVGRepo_iconCarrier">
                                                <path
                                                    d="M4 10L3.29289 10.7071L2.58579 10L3.29289 9.29289L4 10ZM21 18C21 18.5523 20.5523 19 20 19C19.4477 19 19 18.5523 19 18L21 18ZM8.29289 15.7071L3.29289 10.7071L4.70711 9.29289L9.70711 14.2929L8.29289 15.7071ZM3.29289 9.29289L8.29289 4.29289L9.70711 5.70711L4.70711 10.7071L3.29289 9.29289ZM4 9L14 9L14 11L4 11L4 9ZM21 16L21 18L19 18L19 16L21 16ZM14 9C17.866 9 21 12.134 21 16L19 16C19 13.2386 16.7614 11 14 11L14 9Z"
                                                    fill="#33363F"></path>
                                            </g>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4 px-4 md:px-6">
                                {/*DESCRIPTION*/ }
                                <p className="leading-relaxed md:text-base select-none text-gray-700 text-justify text-sm break-words overflow-wrap-break-word whitespace-normal" style={{whiteSpace: "pre-wrap"}}>
                                    { singleProject?.description }
                                </p>
                            </div>
                            {/*PROJECT IMAGE CAROUSEL*/ }
                            { singleProject?.media.length > 0 && <div className="px-4 md:px-6">
                                <ImageCarousel images={ singleProject?.media.map((media) => media.url) } />
                            </div> }

                            <div className="border-b gap-2 grid pb-3 px-4 md:px-6">
                                <div className="flex gap-2 h-8 items-center mt-4 text-sm md:gap-4">
                                    <LikeDislikeButtons project={ singleProject } />
                                </div>
                            </div>
                            <CommentSection projectId={ projectId } />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};