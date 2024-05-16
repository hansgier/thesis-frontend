import { projectDetails_sidebar } from "../utils/data-components.jsx";
import { useReducer, useState } from "react";
import { ProjectUpdate } from "../pages/project/ProjectUpdate.jsx";
import { Button } from "antd";
import { RiSortAsc, RiSortDesc } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";
import { useSelector } from "react-redux";
import moment from "moment";

const uimgsrc = ["/src/assets/logo.png", "/src/assets/logo.png", "/src/assets/logo.png"];

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
    const [isDetailsMode, setIsDetailsMode] = useState(true);
    const [state, dispatch] = useReducer(reducer, initialState);

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
            <div
                className="bg-white border hidden mb-6 mt-4 pt-0 relative rounded-2xl md:fixed md:flex md:h-[calc(100%-96px)] md:mr-2 md:pl-4 md:pr-0 md:py-4 md:w-80 md:z-50">
                <div className="bg-white flex flex-col pr-4 w-full">
                    <div className="flex items-center w-full">
                        <h2 className="flex-1 font-semibold select-none text-xl"
                            data-id="15">{ isDetailsMode ? "Details" : "Updates" }</h2>
                        {/*-----------Details-Update Switch-----------*/ }
                        <button onClick={ () => setIsDetailsMode(!isDetailsMode) }
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
                            className="font-normal select-none text-gray-700 text-sm">{ isDetailsMode ? `Posted on ${ moment(singleProject.payload.createdAt).format("MMMM D, YYYY ") }` : `Last updated on ${ moment(singleProject.payload.updatedAt).format("MMMM D, YYYY ") }` }</div>
                        <div
                            className="select-none text-gray-700 text-sm">{ `By ${ getNameByCreatedBy(singleProject.payload.createdBy) }` }</div>
                    </div>
                    {/*-----------DETAILS-----------*/ }
                    <div className="border-t mt-4 overflow-y-scroll pt-4 w-full">
                        { isDetailsMode ? (
                            projectDetails_sidebar
                                .filter((pds) => {
                                    const { value } = pds;
                                    const projectValue = singleProject.payload[value];
                                    if (pds.pds_type === "single") {
                                        return !!projectValue; // Include if projectValue is truthy
                                    } else if (pds.pds_type === "multiple") {
                                        return (projectValue || []).length > 0; // Include if projectValue is a non-empty array
                                    }
                                    return false; // Exclude all other cases
                                })
                                .map((pds, index) => {
                                    const { name, pds_type, color, value } = pds;
                                    if (!singleProject || !singleProject.payload) {
                                        return null; // or you can render a placeholder component
                                    }

                                    if (pds_type === "single") {
                                        const isDateValue = ["start_date", "due_date", "completion_date"].includes(value);
                                        const isCostValue = value === "cost";
                                        const displayValue = isDateValue
                                            ? moment(singleProject.payload[value]).format("MMMM D, YYYY")
                                            : isCostValue
                                                ? `₱ ${ parseFloat(singleProject.payload[value]).toLocaleString("en-PH", {
                                                    minimumFractionDigits: 2,
                                                    maximumFractionDigits: 2
                                                }) }`
                                                : singleProject.payload[value];

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
                                                    { singleProject.payload[value].map((item, index) => (
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
                                    <Button onClick={ () => dispatch({ type: "toggleUpdateSort" }) }
                                            disabled={ state.editUpdateMode }
                                            icon={ state.updateSort === 0 ?
                                                <RiSortAsc /> : state.updateSort === 1 && <RiSortDesc /> }
                                            type="text" />
                                    <Button onClick={ () => dispatch({ type: "toggleEditUpdateMode" }) }
                                            icon={ <CiEdit /> } type="text" />
                                </div>
                                <div className="h-[474px] overflow-y-scroll">
                                    {/*-----------UPDATES-----------*/ }
                                    {/*TODO: map the project updates here*/ }
                                    <ProjectUpdate
                                        editMode={ state.editUpdateMode }
                                        content="This is an overview of the current project. It includes updates and progress."
                                        updateImgs={ uimgsrc }
                                        updatePostDate="2 days ago" progress="100%"
                                    />
                                </div>
                            </>
                        ) }

                    </div>
                </div>
            </div>
        </>
    );
};