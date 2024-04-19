import { MdOutlineAnnouncement, MdOutlineSpaceDashboard } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { VscFeedback } from "react-icons/vsc";
import { RiContactsBook2Line } from "react-icons/ri";
import { PiUsersThree } from "react-icons/pi";

export const sideLinks = [
    {
        id: 1,
        name: "Dashboard",
        path: "/",
        svg: {
            active:
                <MdOutlineSpaceDashboard size={ 24 } color={ "#ffffff" } />,
            inactive:
                <MdOutlineSpaceDashboard size={ 24 } color={ "#5c5c5c" } />
        }
    },
    {
        id: 2,
        name: "Projects",
        path: "projects",
        svg: {
            active:
                <GrProjects size={ 18 } color={ "#ffffff" } />,
            inactive:
                <GrProjects size={ 18 } color={ "#5c5c5c" } />
        }
    },
    {
        id: 3,
        name: "Announcements",
        path: "announcements",
        svg: {
            active:
                <MdOutlineAnnouncement size={ 22 } color={ "#ffffff" } />,
            inactive:
                <MdOutlineAnnouncement size={ 22 } color={ "#5c5c5c" } />
        }
    },
    {
        id: 4,
        name: "Messages",
        path: "messages",
        svg: {
            active:
                <VscFeedback size={ 22 } color={ "#ffffff" } />,
            inactive:
                <VscFeedback size={ 22 } color={ "#5c5c5c" } />
        }
    },
    {
        id: 5,
        name: "Contacts",
        path: "contacts",
        svg: {
            active:
                <RiContactsBook2Line size={ 22 } color={ "#ffffff" } />,
            inactive:
                <RiContactsBook2Line size={ 22 } color={ "#5c5c5c" } />
        }
    },
    {
        id: 6,
        name: "Users",
        path: "users",
        svg: {
            active:
                <PiUsersThree size={ 24 } color={ "#ffffff" } />,
            inactive:
                <PiUsersThree size={ 24 } color={ "#5c5c5c" } />
        }
    }
];
