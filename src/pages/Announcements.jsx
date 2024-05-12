import { FloatButton, Modal } from "antd";
import { FilterSort } from "../components/FilterSort.jsx";
import { AddEditAnnouncementComponent, AnnouncementCard } from "../components/index.jsx";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { GoPlus } from "react-icons/go";
import { toggleAddAnnouncementMode } from "../app/features/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";

export const Announcements = () => {
    const { isAddAnnouncementMode } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/project" || location.pathname !== "/singleproject") {
            sessionStorage.setItem("scrollPosition", "0");
        }
    }, []);
    return (
        <>
            {/*-----------------------FILTER SORT SECTION-----------------------*/ }
            <FilterSort page="Announcements" />

            {/*-----------------------ANNOUNCEMENTS SECTION-----------------------*/ }
            <div
                className="h-[calc(100%-64px)] mt-16 overflow-y-scroll pt-0 px-0 md:mt-0 md:absolute md:flex md:h-full md:flex-col md:left-[270px] md:pl-0 md:pr-4 md:w-[calc(100%-270px)]">
                <AnnouncementCard type="system" title="System Update" content="The system has been updated."
                                  postedBy="City Government" dateTime="March 23, 2023" />
                <AnnouncementCard type="basic" title="Concert unya" content="Dili daw madayon haha"
                                  postedBy="Brgy. Linao" dateTime="March 23, 2023" />
                <AnnouncementCard type="system" title="System Update" content="The system has been updated."
                                  postedBy="City Government" dateTime="March 23, 2023" />
                <AnnouncementCard type="basic" title="Concert unya" content="Dili daw madayon haha"
                                  postedBy="Brgy. Linao" dateTime="March 23, 2023" />
                <AnnouncementCard type="system" title="System Update" content="The system has been updated."
                                  postedBy="City Government" dateTime="March 23, 2023" />
                <AnnouncementCard type="basic" title="Concert unya" content="Dili daw madayon haha"
                                  postedBy="Brgy. Linao" dateTime="March 23, 2023" />
                <AnnouncementCard type="system" title="System Update" content="The system has been updated."
                                  postedBy="City Government" dateTime="March 23, 2023" />
                <AnnouncementCard type="basic" title="Concert unya" content="Dili daw madayon haha"
                                  postedBy="Brgy. Linao" dateTime="March 23, 2023" />
                <AnnouncementCard type="system" title="System Update" content="The system has been updated."
                                  postedBy="City Government" dateTime="March 23, 2023" />
                <AnnouncementCard type="basic" title="Concert unya" content="Dili daw madayon haha"
                                  postedBy="Brgy. Linao" dateTime="March 23, 2023" />
                <AnnouncementCard type="system" title="System Update" content="The system has been updated."
                                  postedBy="City Government" dateTime="March 23, 2023" />
                <AnnouncementCard type="basic" title="Concert unya" content="Dili daw madayon haha"
                                  postedBy="Brgy. Linao" dateTime="March 23, 2023" />
            </div>
            <FloatButton icon={ <GoPlus /> } type="primary"
                         className="float-add-btn"
                         style={ {
                             right: 24,
                             width: "50px",
                             height: "50px"
                         } }
                         onClick={ () => dispatch(toggleAddAnnouncementMode()) } />
            <Modal centered title="Add Announcement" open={ isAddAnnouncementMode }
                   onCancel={ () => dispatch(toggleAddAnnouncementMode()) }
                   footer={ null } wrapClassName="add-project-modal" width={ 800 }>
                <div className="pb-1 border-b-2 mb-3 select-none">Fill in the details of the new announcement.</div>
                <AddEditAnnouncementComponent mode="add" />
            </Modal>
        </>
    );
};