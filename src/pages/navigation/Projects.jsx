import { FilterSort } from "../../components/FilterSort.jsx";
import { InputSelect, ProjectContainer } from "../../components/index.jsx";
import { project_tags } from "../../utils/data-components.jsx";

export const Projects = () => {
    return (
        <>
            {/*-----------------------FILTER SORT SECTION-----------------------*/ }
            <FilterSort page="Projects" filters={ (
                <>
                    <InputSelect mode="multiple" placeholder="Tags"
                                 options={ project_tags } />
                    <InputSelect mode="multiple" placeholder="Location(s)"
                                 options={ project_tags } />
                    <InputSelect placeholder="Posted By"
                                 options={ project_tags } />
                    <InputSelect placeholder="Status"
                                 options={ project_tags } />
                    <InputSelect placeholder="Cost"
                                 options={ project_tags } />
                    <InputSelect placeholder="Progress"
                                 options={ project_tags } />
                    <InputSelect placeholder="Views"
                                 options={ project_tags } />
                </>
            ) } />

            {/*-----------------------PROJECTS SECTION-----------------------*/ }
            <div
                className="absolute top-16 h-[calc(100%-64px)] md:h-full md:absolute md:flex md:top-0 md:left-[270px] md:pl-0 md:pr-4 md:w-[calc(100%-270px)] overflow-y-scroll pt-0 px-0">
                <div className="md:mt-0">
                    <ProjectContainer />
                    <ProjectContainer />
                </div>
            </div>
        </>
    );
};