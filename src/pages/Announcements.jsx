import { FloatButton } from "antd";
import { FilterSort } from "../components/FilterSort.jsx";
import { project_tags } from "../utils/data-components.jsx";
import { AnnouncementCard, InputSelect } from "../components/index.jsx";

export const Announcements = () => {
    return (
        <>
            {/*-----------------------FILTER SORT SECTION-----------------------*/ }
            <FilterSort page="Projects" filters={ (
                <>
                    <InputSelect placeholder="Type"
                                 options={ project_tags } />
                    <InputSelect placeholder="Posted By"
                                 options={ project_tags } />
                </>
            ) } />

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
                <FloatButton.BackTop />
            </div>
        </>
    );
};