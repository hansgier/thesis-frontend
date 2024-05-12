import { Col, Form, Row, Select } from "antd";
import {
    announcement_types,
    project_cost,
    project_progress,
    project_status,
    project_views
} from "../utils/data-components.jsx";
import React from "react";
import { useWindowSize } from "../hooks/index.jsx";


export const Filters = React.memo(({ mode, page }) => {
    const [form] = Form.useForm();
    const { width } = useWindowSize();

    const onFinish = (values) => {
        console.log(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Add Project Failed", errorInfo);
    };

    return (
        <>
            { (mode === "desktop" && width > 768) && (
                <Form form={ form } onFinish={ onFinish } onFinishFailed={ onFinishFailed } className="space-y-2"
                      autoComplete="off" initialValues={ { remember: true } }>
                    <span className="font-extrabold select-none text-pink-700 text-xs">FILTER</span>
                    {/*Filters*/ }
                    <div className="space-y-2 overflow-y-auto pr-2 flex flex-col h-[292px]">
                        { page === "Projects" && (
                            <>
                                <Form.Item name="tags" className="m-0 p-0">
                                    <Select mode="multiple" placeholder="Tags"
                                            options={ null } />
                                </Form.Item>
                                <Form.Item name="locations" className="m-0 p-0">
                                    <Select mode="multiple" placeholder="Location(s)"
                                            options={ null } />
                                </Form.Item>
                                <Form.Item name="posted_by" className="m-0 p-0">
                                    <Select placeholder="Posted By"
                                            options={ null } />
                                </Form.Item>
                                <Form.Item name="status" className="m-0 p-0">
                                    <Select placeholder="Status"
                                            options={ project_status } />
                                </Form.Item>
                                <Form.Item name="cost" className="m-0 p-0">
                                    <Select placeholder="Cost"
                                            options={ project_cost } />
                                </Form.Item>
                                <Form.Item name="progress" className="m-0 p-0">
                                    <Select placeholder="Progress"
                                            options={ project_progress } />
                                </Form.Item>
                                <Form.Item name="views" className="m-0 p-0">
                                    <Select placeholder="Views"
                                            options={ project_views } />
                                </Form.Item>
                            </>
                        ) }
                        { page === "Announcements" && (
                            <>
                                <Form.Item name="type" className="m-0 p-0">
                                    <Select placeholder="Type"
                                            options={ announcement_types } />
                                </Form.Item>
                                <Form.Item name="posted_by" className="m-0 p-0">
                                    <Select placeholder="Posted By"
                                            options={ null } />
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
                                    onClick={ () => form.resetFields() }
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
                                    <Select mode="multiple" placeholder="Tags"
                                            options={ null } />
                                </Form.Item>
                                <Form.Item name="locations" className="m-0 p-0">
                                    <Select mode="multiple" placeholder="Location(s)"
                                            options={ null } />
                                </Form.Item>
                                <Form.Item name="posted_by" className="m-0 p-0">
                                    <Select placeholder="Posted By"
                                            options={ null } />
                                </Form.Item>
                                <Form.Item name="status" className="m-0 p-0">
                                    <Select placeholder="Status"
                                            options={ project_status } />
                                </Form.Item>
                                <Form.Item name="cost" className="m-0 p-0">
                                    <Select placeholder="Cost"
                                            options={ project_cost } />
                                </Form.Item>
                                <Form.Item name="progress" className="m-0 p-0">
                                    <Select placeholder="Progress"
                                            options={ project_progress } />
                                </Form.Item>
                                <Form.Item name="views" className="m-0 p-0">
                                    <Select placeholder="Views"
                                            options={ project_views } />
                                </Form.Item>
                            </>
                        ) }
                        { page === "Announcements" && (
                            <>
                                <Form.Item name="type" className="m-0 p-0">
                                    <Select placeholder="Type"
                                            options={ announcement_types } />
                                </Form.Item>
                                <Form.Item name="posted_by" className="m-0 p-0">
                                    <Select placeholder="Posted By"
                                            options={ null } />
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
                                    onClick={ () => form.resetFields() }
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