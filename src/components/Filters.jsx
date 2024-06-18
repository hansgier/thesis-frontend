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
    let filteredProjects = [...projects];

    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
        filteredProjects = filteredProjects.filter(project =>
            project.tags.some(tag => filters.tags.includes(tag.id.toString()))
        );
    }

    // Filter by locations
    if (filters.locations && filters.locations.length > 0) {
        filteredProjects = filteredProjects.filter(project =>
            project.barangays.some(barangay => filters.locations.includes(barangay.id))
        );
    }

    // Filter by posted_by
    if (filters.posted_by) {
        filteredProjects = filteredProjects.filter(
            project => project.createdBy === filters.posted_by
        );
    }

    // Filter by status
    if (filters.status) {
        filteredProjects = filteredProjects.filter(
            project => project.status === filters.status
        );
    }

    // Filter by cost
    if (filters.cost) {
        filteredProjects = filteredProjects.filter(
            project => parseFloat(project.cost) <= filters.cost
        );
    }

    // Filter by progress
    if (filters.progress) {
        filteredProjects = filteredProjects.filter(
            project => filters.progress - 1 >= project.progress <= filters.progress
        );
    }

    return filteredProjects;
};

const filterAnnouncements = (announcements, filters) => {
    let filteredAnnouncements = [...announcements];
    // Filter by posted_by
    if (filters.posted_by) {
        filteredAnnouncements = filteredAnnouncements.filter(
            project => project.createdBy === filters.posted_by
        );
    }

    return filteredAnnouncements;
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
        const { cost, locations, posted_by, progress, status, tags } = values;
        if (page === "Projects") {
            if (!cost && !locations && !posted_by && !status && !tags && !progress) {
                return;
                // dispatch(setFilteredProjects(projects));
            } else {
                const filteredProjects = filterProjects(projects, values);
                dispatch(setFilteredProjects(filteredProjects));
            }
        } else if (page === "Announcements") {
            if (!posted_by) {
                return;
                // dispatch(setFilteredAnnouncements(announcements));
            } else {
                const filteredAnnouncements = filterAnnouncements(announcements, values);
                dispatch(setFilteredAnnouncements(filteredAnnouncements));
            }
        }
    }, [page, dispatch, projects, announcements]);

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
                                        { project_tags.map((tag, i) => {
                                            return <Select.Option key={ i }
                                                                  value={ tag.values }>{ tag.label }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="locations" className="m-0 p-0">
                                    <Select mode="multiple" placeholder="Location(s)" allowClear
                                            filterOption={ (input, option) => (option?.children.toLowerCase()).includes(input.toLowerCase()) }
                                    >
                                        { barangays.map((barangay) => {
                                            return <Select.Option key={ barangay.id }
                                                                  value={ barangay.id }>{ barangay.name }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="posted_by" className="m-0 p-0">
                                    <Select placeholder="Posted By" allowClear showSearch
                                            filterOption={ (input, option) => (option?.children.toLowerCase()).includes(input.toLowerCase()) }
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
                                            filterOption={ (input, option) => (option?.children.toLowerCase()).includes(input.toLowerCase()) }
                                    >
                                        { users4admin.map((user, i) => {
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
                                            filterOption={ (input, option) => (option?.children.toLowerCase()).includes(input.toLowerCase()) }
                                    >
                                        { barangays.map((barangay) => {
                                            return <Select.Option key={ barangay.id }
                                                                  value={ barangay.id }>{ barangay.name }</Select.Option>;
                                        }) }
                                    </Select>
                                </Form.Item>
                                <Form.Item name="posted_by" className="m-0 p-0">
                                    <Select placeholder="Posted By" allowClear showSearch
                                            filterOption={ (input, option) => (option?.children.toLowerCase()).includes(input.toLowerCase()) }
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
                                            filterOption={ (input, option) => (option?.children.toLowerCase()).includes(input.toLowerCase()) }
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
        </>
    );
});