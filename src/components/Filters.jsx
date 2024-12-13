import { Col, Form, Row, Select } from "antd";
import { project_cost, project_progress, project_status, project_tags } from "../utils/data-components.jsx";
import React, { useCallback } from "react";
import { useWindowSize } from "../hooks/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { resetProjectFilters, setFilteredProjects } from "../app/features/projects/projectsSlice.js";
import {
    resetAnnouncementFilters,
    setFilteredAnnouncements
} from "../app/features/announcements/announcementsSlice.js";

const filterProjects = (projects, filters) => {
    if (!projects || !filters) return projects;

    return projects.filter(project => {
        // Check tags (multiple select)
        if (filters.tags?.length > 0) {
            const projectTagIds = project.tags.map(tag => tag.id.toString());
            if (!filters.tags.some(tagId => projectTagIds.includes(tagId))) {
                return false;
            }
        }

        // Check locations (multiple select)
        if (filters.locations?.length > 0) {
            const projectBarangayIds = project.barangays.map(barangay => barangay.id);
            if (!filters.locations.some(locationId => projectBarangayIds.includes(locationId))) {
                return false;
            }
        }

        // Check posted_by (single select)
        if (filters.posted_by && project.createdBy !== filters.posted_by) {
            return false;
        }

        // Check status (single select)
        if (filters.status && project.status !== filters.status) {
            return false;
        }

        // Check cost (single select)
        if (filters.cost && parseFloat(project.cost) > filters.cost) {
            return false;
        }

        return true;
    });
};


const filterAnnouncements = (announcements, filters) => {
    // let filteredAnnouncements = [...announcements];
    // // Filter by posted_by
    // if (filters.posted_by) {
    //     filteredAnnouncements = filteredAnnouncements.filter(
    //         project => project.createdBy === filters.posted_by
    //     );
    // }
    //
    // return filteredAnnouncements;

    if (!announcements || !filters) return announcements;
    return announcements.filter(announcement => {
        // Check posted_by (single select)
        if (filters.posted_by && announcement.createdBy !== filters.posted_by) {
            return false;
        }
        return true
    })
};

export const Filters = React.memo(({ mode, page }) => {
    const [form] = Form.useForm();
    const { barangays } = useSelector((store) => store.barangays);
    const { users4admin } = useSelector((store) => store.users);
    const { projects } = useSelector((store) => store.projects);
    const { announcements } = useSelector((store) => store.announcements);
    const { width } = useWindowSize();
    const dispatch = useDispatch();

    const onFinish = useCallback((values) => {
        const { cost, locations, posted_by, status, tags } = values;
        const hasFilters = Object.values(values).some(value =>
            Array.isArray(value) ? value.length > 0 : Boolean(value)
        );
        if (page === "Projects") {
            // console.log("Values: ", values);
            // if (!cost && !locations && !posted_by && !status && !tags) {
            //     return;
            //     // dispatch(setFilteredProjects(projects));
            // } else {
            //     const filteredProjects = filterProjects(projects, values);
            //     console.log(filteredProjects);
            //     dispatch(setFilteredProjects(filteredProjects));
            // }

            // // Check if any filter is applied
            // const hasFilters = Object.values(values).some(value =>
            //     Array.isArray(value) ? value.length > 0 : Boolean(value)
            // );

            if (!hasFilters) {
                dispatch(resetProjectFilters());
                return;
            }

            const filteredResults = filterProjects(projects, values);
            dispatch(setFilteredProjects(filteredResults));
        } else if (page === "Announcements") {
            // if (!posted_by) {
            //     return;
            //     // dispatch(setFilteredAnnouncements(announcements));
            // } else {
            //     const filteredAnnouncements = filterAnnouncements(announcements, values);
            //     dispatch(setFilteredAnnouncements(filteredAnnouncements));
            // }

            if (!hasFilters) {
                dispatch(resetAnnouncementFilters());
                return;
            }
            const filteredResults = filterAnnouncements(announcements, values);
            dispatch(setFilteredAnnouncements(filteredResults));
        }
    }, [page, dispatch, projects, announcements]);

    const handleReset = () => {
        form.resetFields();
        if (page === "Announcements") {
            dispatch(resetAnnouncementFilters());
        } else if (page === "Projects") {
            dispatch(resetProjectFilters());
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Add Project Failed", errorInfo);
    };

    return (
        <>
            { (mode === "desktop" && width > 768) && (
                <Form form={ form } onFinish={ onFinish } onFinishFailed={ onFinishFailed }
                      className="space-y-2 flex flex-col h-full"
                      autoComplete="off" initialValues={ { remember: true } }>
                    <span className="font-extrabold select-none text-pink-700 text-xs">FILTER</span>
                    {/*Filters*/ }
                    <div className="space-y-2 overflow-y-auto pr-2 flex flex-col flex-1">
                        { page === "Projects" && (
                            <>
                                <Form.Item name="tags" className="m-0 p-0">
                                    <Select mode="multiple" placeholder="Tags" allowClear>
                                        { project_tags.sort((a, b) => a.label.localeCompare(b.label)).map((tag, i) => {
                                            return <Select.Option key={ i }
                                                                  value={ tag.values }>{ tag.label }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="locations" className="m-0 p-0">
                                    <Select mode="multiple" placeholder="Location(s)" allowClear
                                            filterOption={ (input, option) => (option.children.toLowerCase()).includes(input.toLowerCase()) }
                                    >
                                        { barangays.map((barangay) => {
                                            return <Select.Option key={ barangay.id }
                                                                  value={ barangay.id }>{ barangay.name }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="posted_by" className="m-0 p-0">
                                    <Select placeholder="Posted By" allowClear showSearch
                                            filterOption={ (input, option) => (option.children.toLowerCase()).includes(input.toLowerCase()) }
                                    >
                                        { users4admin.map((user) => {
                                            if (user.role === "barangay" || user.role === "admin")
                                                return <Select.Option key={ user.id }
                                                                      value={ user.id }>{ user.username }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="status" className="m-0 p-0">
                                    <Select placeholder="Status" allowClear>
                                        { project_status.map((status, i) => {
                                            return <Select.Option key={ i }
                                                                  value={ status.value }>{ status.label }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="cost" className="m-0 p-0">
                                    <Select placeholder="Cost" allowClear>
                                        { project_cost.map((cost, i) => {
                                            return <Select.Option key={ i }
                                                                  value={ cost.value }>{ cost.label }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                            </>
                        ) }
                        { page === "Announcements" && (
                            <>
                                <Form.Item name="posted_by" className="m-0 p-0">
                                    <Select placeholder="Posted By" allowClear showSearch
                                            filterOption={ (input, option) => (option.children.toLowerCase()).includes(input.toLowerCase()) }
                                    >
                                        { users4admin.map((user) => {
                                            if (user.role === "admin" || user.role === "barangay")
                                                return <Select.Option key={ user.id }
                                                                      value={ user.id }>{ user.username }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                            </>
                        ) }
                    </div>

                    {/*Clear all and Apply buttons*/ }
                    <Row gutter={ 10 }>
                        <Col xs={ { flex: "50%" } }>
                            <Form.Item className="m-0 p-0">
                                <button
                                    type="reset"
                                    onClick={ () => {
                                        form.resetFields();
                                        page === "Announcements" ? dispatch(resetAnnouncementFilters()) : page === "Projects" && dispatch(resetProjectFilters());
                                    } }
                                    className="bg-white border border-pink-700 font-medium hover:bg-pink-50 py-1 rounded-md text-pink-700 text-sm w-full">Clear
                                                                                                                                                          Filters
                                </button>
                            </Form.Item>

                        </Col>
                        <Col xs={ { flex: "50%" } }>
                            <Form.Item className="m-0 p-0">
                                <button
                                    type="submit"
                                    className="bg-pink-700 font-semibold hover:bg-opacity-80 py-1 rounded-md text-sm text-white w-full">Apply
                                                                                                                                        Filters
                                </button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ) }
            { (mode === "mobile" && width <= 768) && (
                <Form form={ form } onFinish={ onFinish } onFinishFailed={ onFinishFailed } className="space-y-2"
                      autoComplete="off" initialValues={ { remember: true } }>
                    {/*Filters*/ }
                    <div className="space-y-2 overflow-y-auto pr-2 mb-4 flex flex-col">
                        { page === "Projects" && (
                            <>
                                <Form.Item name="tags" className="m-0 p-0">
                                    <Select mode="multiple" placeholder="Tags" allowClear showSearch={ false }>
                                        { project_tags.map((tags, i) => {
                                            return <Select.Option key={ i }
                                                                  value={ tags.value }>{ tags.label }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="locations" className="m-0 p-0">
                                    <Select mode="multiple" placeholder="Location(s)" allowClear showSearch
                                            filterOption={ (input, option) => (option.children.toLowerCase()).includes(input.toLowerCase()) }
                                    >
                                        { barangays.map((barangay) => {
                                            return <Select.Option key={ barangay.id }
                                                                  value={ barangay.id }>{ barangay.name }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="posted_by" className="m-0 p-0">
                                    <Select placeholder="Posted By" allowClear showSearch
                                            filterOption={ (input, option) => (option.children.toLowerCase()).includes(input.toLowerCase()) }
                                    >
                                        { users4admin.map((user) => {
                                            return <Select.Option key={ user.id }
                                                                  value={ user.id }>{ user.username }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="status" className="m-0 p-0">
                                    <Select placeholder="Status" allowClear>
                                        { project_status.map((status, i) => {
                                            return <Select.Option key={ i }
                                                                  value={ status.value }>{ status.label }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="cost" className="m-0 p-0">
                                    <Select placeholder="Cost" allowClear>
                                        { project_cost.map((cost, i) => {
                                            return <Select.Option key={ i }
                                                                  value={ cost.value }>{ cost.label }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="progress" className="m-0 p-0">
                                    <Select placeholder="Progress" allowClear>
                                        { project_progress.map((progress, i) => {
                                            return <Select.Option key={ i }
                                                                  value={ progress.value }>{ progress.label }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                            </>
                        ) }
                        { page === "Announcements" && (
                            <>
                                <Form.Item name="posted_by" className="m-0 p-0">
                                    <Select placeholder="Posted By" allowClear showSearch
                                            filterOption={ (input, option) => (option.children.toLowerCase()).includes(input.toLowerCase()) }
                                    >
                                        { users4admin.map((user) => {
                                            if (user.role === "admin" || user.role === "barangay")
                                                return <Select.Option key={ user.id }
                                                                      value={ user.id }>{ user.username }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                            </>
                        ) }
                    </div>

                    {/*Clear all and Apply buttons*/ }
                    <Row gutter={ 10 }>
                        <Col xs={ { flex: "50%" } }>
                            <Form.Item className="m-0 p-0">
                                <button
                                    type="reset"
                                    // onClick={ () => {
                                    //     form.resetFields();
                                    //     page === "Announcements" ? dispatch(resetAnnouncementFilters()) : page === "Projects" && dispatch(resetProjectFilters());
                                    // } }
                                    onClick={handleReset}
                                    className="bg-white border border-pink-700 font-medium hover:bg-pink-50 py-1 rounded-md text-pink-700 text-sm w-full">Clear
                                                                                                                                                          Filters
                                </button>
                            </Form.Item>

                        </Col>
                        <Col xs={ { flex: "50%" } }>
                            <Form.Item className="m-0 p-0">
                                <button
                                    type="submit"
                                    className="bg-pink-700 font-semibold hover:bg-opacity-80 py-1 rounded-md text-sm text-white w-full">Apply
                                                                                                                                        Filters
                                </button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            ) }
        </>
    );
});