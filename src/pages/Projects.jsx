import { AddEditProjectComponent, FilterSort, ProjectContainer } from "../components/index.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { FloatButton, Modal, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddProjectMode } from "../app/features/user/authSlice.js";
import { getAllProjects } from "../app/features/projects/projectsSlice.js";
import { getAllUsers } from "../app/features/users/usersSlice.js";
import { removeItemLocalStorage } from "../utils/localStorage.jsx";

export const Projects = () => {
    const { isAddProjectMode, user } = useSelector((store) => store.auth);
    const {
        projects,
        isProjectFetchLoading,
        isProjectFetchSuccess,
        totalProjects
    } = useSelector((store) => store.projects);
    const dispatch = useDispatch();
    const location = useLocation();
    const [addProjectMode, setAddProjectMode] = useState(false);
    const [uploadedImagesFromInput, setUploadedImagesFromInput] = useState([]);
    // Ref for the scrollable div
    const scrollDivRef = useRef(null);

    useEffect(() => {
        dispatch(getAllProjects());
        dispatch(getAllUsers());
        removeItemLocalStorage("singleProject");
    }, []);

    // Function to save the scroll position to sessionStorage
    const saveScrollPosition = () => {
        const scrollY = scrollDivRef.current.scrollTop;
        sessionStorage.setItem("scrollPosition", scrollY);
    };

    // Function to restore the scroll position from sessionStorage
    const restoreScrollPosition = () => {
        const savedScrollY = sessionStorage.getItem("scrollPosition");
        if (savedScrollY) {
            scrollDivRef.current.scrollTop = parseInt(savedScrollY, 10);
        }
    };

    // Effect to add event listener for saving scroll position on unmount
    useEffect(() => {
        window.addEventListener("beforeunload", saveScrollPosition);

        // Restore scroll position when component mounts
        restoreScrollPosition();

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener("beforeunload", saveScrollPosition);
        };
    }, []);


    return (
        <>
            {/*-----------------------VIEW FILTER SORT SECTION-----------------------*/ }
            <FilterSort page="Projects" />

            {/*-----------------------PROJECTS SECTION-----------------------*/ }
            <div
                ref={ scrollDivRef }
                onScroll={ saveScrollPosition }
                className="absolute top-16 h-[calc(100%-64px)] md:h-full md:absolute md:flex md:top-0 md:left-[270px] md:pl-0 md:pr-4 md:w-[calc(100%-270px)] overflow-y-scroll pt-0 px-0 w-full">
                <div className="md:mt-0 w-full h-full">
                    { isProjectFetchLoading ? <div className="mx-3">
                            <Skeleton spinning={ isProjectFetchLoading } block active />
                            <Skeleton spinning={ isProjectFetchLoading } block active />
                            <Skeleton spinning={ isProjectFetchLoading } block active />
                            <Skeleton spinning={ isProjectFetchLoading } block active />
                            <Skeleton spinning={ isProjectFetchLoading } block active />
                        </div> :
                        <>
                            { projects ? projects.map((project, i) => (
                                    <ProjectContainer key={ i } project={ project } />
                                ))
                                :
                                <div className="h-full flex items-center justify-center bg-white">No projects</div>
                            }
                        </>
                    }
                </div>

            </div>
            { (user.role === "admin" || user.role === "barangay") && (
                <>
                    <FloatButton icon={ <GoPlus /> } type="primary"
                                 className="float-add-btn"
                                 style={ {
                                     right: 24,
                                     width: "50px",
                                     height: "50px"
                                 } }
                                 onClick={ () => dispatch(toggleAddProjectMode()) } />
                    <Modal centered title="Add Project" open={ isAddProjectMode }
                           onCancel={ async () => {
                               try {
                                   // Call the deleteUploadedImages function from ImageUploader component
                                   await deleteUploadedImages();
                                   setUploadedImagesFromInput([]);
                               } catch (error) {
                                   console.error("Error deleting images:", error);
                               }
                               dispatch(toggleAddProjectMode());
                           } }
                           footer={ null } wrapClassName="add-project-modal" width={ 800 }>
                        <div className="pb-1 border-b-2 mb-3 select-none">Fill in the details of the new project.
                        </div>
                        <AddEditProjectComponent mode="add" uploadedImagesFromInput={ uploadedImagesFromInput }
                                                 setUploadedImagesFromInput={ setUploadedImagesFromInput } />
                    </Modal>
                </>
            ) }
        </>


    );
};