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
        path: "/",
        svg: {
            active:
                <MdOutlineSpaceDashboard className="h-6 w-6 md:w-6 md:h-6" color={ "#ffffff" } />,
            inactive:
                <MdOutlineSpaceDashboard className="h-6 w-6 md:w-6 md:h-6" color={ "#5c5c5c" } />
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

    ],
    filter: [
        {
            id: 1,
            name: "Tags"
        }
    ]
};