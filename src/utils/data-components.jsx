import { MdOutlineAnnouncement, MdOutlineSpaceDashboard, MdUpdate } from "react-icons/md";
import { GrProjects, GrSystem } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { RiContactsBook2Line } from "react-icons/ri";
import { PiSortAscendingBold, PiSortDescendingBold, PiUsersThree } from "react-icons/pi";
import { FaListUl, FaSortAlphaDownAlt, FaSortAlphaUp } from "react-icons/fa";
import { IoFileTrayStackedOutline } from "react-icons/io5";

export const sideLinks = [
    {
        id: 1,
        name: "Dashboard",
        path: "dashboard",
        svg: {
            active: <MdOutlineSpaceDashboard className="h-6 w-6 md:w-6 md:h-6" color={ "#ffffff" } />,
            inactive: <MdOutlineSpaceDashboard className="h-6 w-6 md:w-6 md:h-6" color={ "#5c5c5c" } />
        }
    },
    {
        id: 2,
        name: "Projects",
        path: "projects",
        svg: {
            active:
                <GrProjects className="h-5 w-5 md:w-5 md:h-5" size={ 18 } color={ "#ffffff" } />,
            inactive:
                <GrProjects className="h-5 w-5 md:w-5 md:h-5" size={ 18 } color={ "#5c5c5c" } />
        }
    },
    {
        id: 3,
        name: "Announcements",
        path: "announcements",
        svg: {
            active:
                <MdOutlineAnnouncement className="h-5 w-5 md:w-5 md:h-5 p-0 m-0" color={ "#ffffff" } />,
            inactive:
                <MdOutlineAnnouncement className="h-5 w-5 md:w-5 md:h-5" color={ "#5c5c5c" } />
        }
    },
    {
        id: 4,
        name: "Messages",
        path: "messages",
        svg: {
            active:
                <VscFeedback className="h-5 w-5 md:w-5 md:h-5" color={ "#ffffff" } />,
            inactive:
                <VscFeedback className="h-5 w-5 md:w-5 md:h-5" color={ "#5c5c5c" } />
        }
    },
    {
        id: 5,
        name: "Contacts",
        path: "contacts",
        svg: {
            active:
                <RiContactsBook2Line className="h-5 w-5 md:w-5 md:h-5" color={ "#ffffff" } />,
            inactive:
                <RiContactsBook2Line className="h-5 w-5 md:w-5 md:h-5" color={ "#5c5c5c" } />
        }
    },
    {
        id: 6,
        name: "Users",
        path: "users",
        svg: {
            active:
                <PiUsersThree className="h-6 w-6 md:w-6 md:h-6" color={ "#ffffff" } />,
            inactive:
                <PiUsersThree className="h-6 w-6 md:w-6 md:h-6" color={ "#5c5c5c" } />
        }
    },
    {
        id: 7,
        name: "SingleProject",
        path: "/projects/",
        svg: {
            active:
                <GrProjects className="h-5 w-5 md:w-5 md:h-5" size={ 18 } color={ "#ffffff" } />,
            inactive:
                <GrProjects className="h-5 w-5 md:w-5 md:h-5" size={ 18 } color={ "#5c5c5c" } />
        }
    }
];

export const announcements = {
    basic: {
        icon: <MdUpdate className="h-5 w-5 md:w-7 md:h-7" color={ "#0284c7" } />
    },
    system: {
        icon: <GrSystem className="h-5 w-5 md:w-6 md:h-6" color={ "#db2777" } />
    }
};

export const filterSort = {
    view: [
        {
            id: 1,
            name: "stack",
            icon: <IoFileTrayStackedOutline size={ 16 } className="hover:text-Thesis-200 text-gray-700" />
        },
        {
            id: 2,
            name: "list",
            icon: <FaListUl size={ 14 } className="hover:text-Thesis-200 text-gray-700" />
        }
    ],
    sort: [
        {
            id: 1,
            name: "Newest",
            icon: <PiSortDescendingBold />
        },
        {
            id: 2,
            name: "Oldest",
            icon: <PiSortAscendingBold />
        },
        {
            id: 3,
            name: "A-Z",
            icon: <FaSortAlphaUp />
        },
        {
            id: 4,
            name: "Z-A",
            icon: <FaSortAlphaDownAlt />
        }

    ]
};

export const project_tags = [
    {
        label: "Administration And Governance",
        values: "1"
    },
    {
        label: "General Public Services",
        value: "2"
    },
    {
        label: "Health",
        value: "3"
    },
    {
        label: "Education",
        value: "4"
    },
    {
        label: "Livelihood",
        value: "5"
    },
    {
        label: "Infrastructure",
        value: "6"
    },
    {
        label: "Environmental Management",
        value: "7"
    },
    {
        label: "Sports And Recreation",
        value: "8"
    },
    {
        label: "Other",
        value: "9"
    }
];

export const announcement_component = {
    system: {
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24"
                   className="h-8 text-pink-600 w-6 md:w-8">
            <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                    d="M8.686 4l2.607-2.607a1 1 0 0 1 1.414 0L15.314 4H19a1 1 0 0 1 1 1v3.686l2.607 2.607a1 1 0 0 1 0 1.414L20 15.314V19a1 1 0 0 1-1 1h-3.686l-2.607 2.607a1 1 0 0 1-1.414 0L8.686 20H5a1 1 0 0 1-1-1v-3.686l-2.607-2.607a1 1 0 0 1 0-1.414L4 8.686V5a1 1 0 0 1 1-1h3.686zM6 6v3.515L3.515 12 6 14.485V18h3.515L12 20.485 14.485 18H18v-3.515L20.485 12 18 9.515V6h-3.515L12 3.515 9.515 6H6zm6 10a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            </g>
        </svg>
    },
    basic: {
        icon: <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24"
                   className="h-8 w-6 md:w-8">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path
                    d="M12 10.5V7M12 14H12.01M9.9 19.2L11.36 21.1467C11.5771 21.4362 11.6857 21.5809 11.8188 21.6327C11.9353 21.678 12.0647 21.678 12.1812 21.6327C12.3143 21.5809 12.4229 21.4362 12.64 21.1467L14.1 19.2C14.3931 18.8091 14.5397 18.6137 14.7185 18.4645C14.9569 18.2656 15.2383 18.1248 15.5405 18.0535C15.7671 18 16.0114 18 16.5 18C17.8978 18 18.5967 18 19.1481 17.7716C19.8831 17.4672 20.4672 16.8831 20.7716 16.1481C21 15.5967 21 14.8978 21 13.5V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V13.5C3 14.8978 3 15.5967 3.22836 16.1481C3.53284 16.8831 4.11687 17.4672 4.85195 17.7716C5.40326 18 6.10218 18 7.5 18C7.98858 18 8.23287 18 8.45951 18.0535C8.76169 18.1248 9.04312 18.2656 9.2815 18.4645C9.46028 18.6137 9.60685 18.8091 9.9 19.2Z"
                    stroke="#007EA7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    }
};

export const projectDetails_sidebar = [
    {
        name: "Start date",
        value: "start_date",
        pds_type: "single",
        color: "bg-slate-600"
    },
    {
        name: "Due date",
        value: "due_date",
        pds_type: "single",
        color: "bg-zinc-600"
    },
    {
        name: "Completion date",
        value: "completion_date",
        pds_type: "single",
        color: "bg-lime-600"
    },
    {
        name: "Cost",
        value: "cost",
        pds_type: "single",
        color: "bg-emerald-600"
    },
    {
        name: "Progress",
        value: "progress",
        pds_type: "single",
        color: "bg-sky-600"
    },
    {
        name: "Locations",
        value: "barangays",
        pds_type: "multiple",
        color: "bg-amber-600"
    },
    {
        name: "Funding Source",
        value: "funding_source",
        pds_type: "single",
        color: "bg-teal-600"
    },
    {
        name: "Contract Term",
        value: "contract_term",
        pds_type: "single",
        color: "bg-fuchsia-600"
    }
];


export const project_attributes = [
    {
        label: "Title",
        name: "title",
        value: "title",
        placeholder: "Enter title of the project",
        input_type: "text",
        display: "block",
        required: true,
        required_msg: "Title is required"
    },
    {
        label: "Description",
        name: "description",
        value: "description",
        placeholder: "Write a description for the project",
        input_type: "textarea",
        autoSize: { minRows: 6, maxRows: 10 },
        display: "block",
        required: true,
        required_msg: "Description is required"
    },
    {
        label: "Progress",
        name: "progress",
        value: "progress",
        placeholder: "Enter project progress",
        input_type: "range",
        display: "block",
        required: false
    },
    {
        label: "Locations",
        name: "locations",
        value: "barangayIds",
        placeholder: "Enter barangay(s)",
        input_type: "multiple_select",
        display: "block",
        required: true,
        required_msg: "Location is required"
    },
    {
        label: "Tags",
        name: "tags",
        value: "tagsIds",
        placeholder: "Enter tag(s)",
        input_type: "multiple_select",
        display: "block",
        required: true,
        required_msg: "Please select tag(s)"
    },
    {
        label: "Start Date",
        name: "start_date",
        value: "start_date",
        input_type: "date",
        display: "grid",
        required: true,
        required_msg: "Start date is required"
    },
    {
        label: "Due Date",
        name: "due_date",
        value: "due_date",
        input_type: "date",
        display: "grid",
        required: false
    },
    {
        label: "Completion date",
        name: "completion_date",
        value: "completion_date",
        placeholder: "Enter completion date",
        input_type: "date",
        display: "grid",
        required: false
    },
    {
        label: "Status",
        name: "status",
        value: "status",
        placeholder: "Enter status",
        input_type: "select",
        display: "grid",
        required: true,
        required_msg: "Status is required"
    },
    {
        label: "Cost",
        name: "cost",
        value: "cost",
        placeholder: "Enter cost",
        input_type: "cost",
        display: "grid",
        required: false
    },
    {
        label: "Funding Source",
        name: "funding_source",
        value: "funding_source",
        placeholder: "Enter funding source",
        input_type: "text",
        display: "grid",
        required: false
    },
    {
        label: "Contract Term",
        name: "contract_term",
        value: "contract_term",
        placeholder: "Enter contract term",
        input_type: "text",
        display: "grid",
        required: false
    },
    {
        label: "Contractor",
        name: "contractor",
        value: "contractor",
        placeholder: "Enter contractor name",
        input_type: "text",
        display: "grid",
        required: false
    }
];

export const project_status = [
    {
        label: "Ongoing",
        value: "ongoing"
    },
    {
        label: "Completed",
        value: "completed"
    },
    {
        label: "Cancelled",
        value: "cancelled"
    },
    {
        label: "On hold",
        value: "on_hold"
    },
    {
        label: "Planned",
        value: "planned"
    }
];
export const project_cost = [
    {
        label: "No cost/Free",
        value: 0
    },
    {
        label: "Less than ₱100",
        value: 100
    },
    {
        label: "Less than ₱1,000",
        value: 1000
    },
    {
        label: "Less than ₱10,000",
        value: 10000
    },
    {
        label: "Less than ₱100,000",
        value: 100000
    },
    {
        label: "Less than ₱1 million",
        value: 1000000
    },
    {
        label: "Less than ₱10 million",
        value: 10000000
    },
    {
        label: "Less than ₱100 million",
        value: 100000000
    },
    {
        label: "Less than ₱1 billion",
        value: 1000000000
    },
    {
        label: "₱1 billion and up",
        value: 1000000001
    }
];
export const project_progress = [
    {
        label: "0%",
        value: 0
    },
    {
        label: "1 - 10%",
        value: 10
    },
    {
        label: "11 - 20%",
        value: 20
    },
    {
        label: "21 - 30%",
        value: 30
    },
    {
        label: "31 - 40%",
        value: 40
    },
    {
        label: "41 - 50%",
        value: 50
    },
    {
        label: "51 - 60%",
        value: 60
    },
    {
        label: "61 - 70%",
        value: 70
    },
    {
        label: "71 - 80%",
        value: 80
    },
    {
        label: "81 - 90%",
        value: 90
    },
    {
        label: "91 - 100%",
        value: 100
    }
];
export const project_views = [
    {
        label: "No views",
        value: 0
    },
    {
        label: "Less than 10 views",
        value: 10
    },
    {
        label: "Less than 50 views",
        value: 50
    },
    {
        label: "Less than 100 views",
        value: 100
    },
    {
        label: "Less than 1,000 views",
        value: 1000
    },
    {
        label: "Less than 10,000 views",
        value: 10000
    },
    {
        label: "Less than 100,000 views",
        value: 100000
    },
    {
        label: "Less than 1 million views",
        value: 1000000
    },
    {
        label: "More than 1 million views",
        value: 1000001
    }
];


export const announcement_types = [
    {
        label: "General",
        value: "general"
    },
    {
        label: "System",
        value: "system"
    }
];