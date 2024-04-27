import { FilterSort } from "../../components/FilterSort.jsx";
import { ProjectContainer } from "../../components/index.jsx";

export const Projects = () => {
    const project = 0;
    return (
        <>
            <FilterSort />
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