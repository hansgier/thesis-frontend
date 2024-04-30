import { MdOutlineAnnouncement, MdOutlineSpaceDashboard, MdUpdate } from "react-icons/md";
import { GrProjects, GrSystem } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { RiContactsBook2Line } from "react-icons/ri";
import { PiSortAscendingBold, PiSortDescendingBold, PiUsersThree } from "react-icons/pi";
import { HiOutlineInboxStack } from "react-icons/hi2";
import { FaListUl, FaSortAlphaDownAlt, FaSortAlphaUp } from "react-icons/fa";

export const sideLinks = [
    {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
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
            icon: <HiOutlineInboxStack size={ 16 } className="hover:text-Thesis-200 text-gray-700" />
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
        label: "Education",
        value: "Education"
    },
    {
        label: "Work",
        value: "Work"
    },
    {
        label: "Personal",
        value: "Personal"
    },
    {
        label: "Other",
        value: "Other"
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