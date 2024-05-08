import { FilterSort, InputSelect, ProjectContainer } from "../components/index.jsx";
import { project_tags } from "../utils/data-components.jsx";
import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { GoPlus } from "react-icons/go";
import { Button, FloatButton, Form, Input, Modal, Space } from "antd";

export const Projects = () => {
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
                ref={ scrollDivRef }
                onScroll={ saveScrollPosition }
                className="absolute top-16 h-[calc(100%-64px)] md:h-full md:absolute md:flex md:top-0 md:left-[270px] md:pl-0 md:pr-4 md:w-[calc(100%-270px)] overflow-y-scroll pt-0 px-0">
                <div className="md:mt-0">
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
            <FloatButton icon={ <GoPlus /> } type="primary" style={ { right: 24, backgroundColor: "#172554" } }
                         onClick={ () => setAddProjectMode(!addProjectMode) } />
            <Modal centered title="Add Project" open={ addProjectMode } onCancel={ () => setAddProjectMode(false) }
                   footer={ null }>
                {/*TODO: tiwasi ning add project modal*/ }
                <div>A</div>
                <Form scrollToFirstError="">
                    <Form.Item>
                        <Input />
                    </Form.Item>

                    <Form.Item>
                        <Space>
                            <Button htmlType="reset">Reset</Button>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};