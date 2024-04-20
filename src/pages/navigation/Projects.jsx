import { FilterSort } from "../../components/FilterSort.jsx";
import { ProjectContainer } from "../../components/index.jsx";

export const Projects = () => {
    const project = 0;
    return (
        <>
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
        </>
    );
};