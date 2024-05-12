import { AddEditProjectComponent, FilterSort, ProjectContainer } from "../components/index.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { FloatButton, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleAddProjectMode } from "../app/features/user/userSlice.js";

export const Projects = () => {
    const { isAddProjectMode } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const [addProjectMode, setAddProjectMode] = useState(false);
    // Ref for the scrollable div
    const scrollDivRef = useRef(null);

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
            {/*TODO: map the projects here from the server*/ }
            <div
                ref={ scrollDivRef }
                onScroll={ saveScrollPosition }
                className="absolute top-16 h-[calc(100%-64px)] md:h-full md:absolute md:flex md:top-0 md:left-[270px] md:pl-0 md:pr-4 md:w-[calc(100%-270px)] overflow-y-scroll pt-0 px-0 w-full">
                <div className="md:mt-0 w-full">
                    <ProjectContainer />
                    <ProjectContainer />
                    <ProjectContainer />
                    <ProjectContainer />
                    <ProjectContainer />
                    <ProjectContainer />
                    <ProjectContainer />
                    <ProjectContainer />
                    <ProjectContainer />
                </div>
            </div>
            <FloatButton icon={ <GoPlus /> } type="primary"
                         className="float-add-btn"
                         style={ {
                             right: 24,
                             width: "50px",
                             height: "50px"
                         } }
                         onClick={ () => dispatch(toggleAddProjectMode()) } />
            <Modal centered title="Add Project" open={ isAddProjectMode }
                   onCancel={ () => dispatch(toggleAddProjectMode()) }
                   footer={ null } wrapClassName="add-project-modal" width={ 800 }>
                <div className="pb-1 border-b-2 mb-3 select-none">Fill in the details of the new project.</div>
                <AddEditProjectComponent mode="add" />
            </Modal>
        </>


    );
};