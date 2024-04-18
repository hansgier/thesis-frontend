import { FilterSort } from "../../components/FilterSort.jsx";
import { ProjectContainer } from "../../components/index.jsx";

export const Projects = () => {
    const project = 0;
    return (
        <div
            className="absolute bg-transparent flex-1 h-[calc(100%-64px)] ml-0 overflow-y-hidden top-16 z-0 md:ml-[272px] w-full md:w-[calc(100%-272px)]">
            <div className="h-full max-h-full overflow-y-scroll pt-0 px-0 md:px-6">
                <FilterSort />
                <div>
                    { project < 1 ?
                        <div className="text-gray-500 flex justify-center pt-8 h-full items-center w-full">
                            No projects found.
                        </div>
                        :
                        <ProjectContainer />
                    }
                </div>
            </div>
        </div>
    );
};