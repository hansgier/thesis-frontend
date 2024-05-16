import { Button, Col, DatePicker, Form, Input, InputNumber, message, Row, Select, Slider, Upload } from "antd";
import { project_attributes, project_status, project_tags } from "../utils/data-components.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { deleteImages, uploadImages } from "../app/features/projects/projectsSlice.js";
//TODO: get the values of project for editing mode
const { Dragger } = Upload;

const range_formatter = (value) => `${ value }%`;

export const AddEditProjectComponent = React.memo(({ mode }) => {
    const { uploadedImages, uploadLoading, uploadError } = useSelector((state) => state.projects);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { isAddProjectMode } = useSelector((store) => store.auth);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        if (isAddProjectMode === false) {
            form.resetFields();
        }
    }, [isAddProjectMode]);

    const handleUpload = async (files) => {
        try {
            await dispatch(uploadImages(files));
            message.success("Images uploaded successfully");
        } catch (error) {
            message.error("Failed to upload images");
        }
    };

    const handleCancel = async () => {
        const publicIds = uploadedImages.map((image) => image.id);
        await dispatch(deleteImages(publicIds));
        message.info("Images deleted successfully");
    };

    const onFinish = (values) => {
        console.log(values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Add Project Failed", errorInfo);
    };

    const disabledStartDate = (current) => {
        const dueDate = form.getFieldValue("due_date");
        return dueDate && current.isAfter(dueDate, "day");
    };

    const disabledDueDate = (current) => {
        const startDate = form.getFieldValue("start_date");
        return startDate && current.isBefore(startDate, "day");
    };

    const disabledCompletionDate = (current) => {
        const startDate = form.getFieldValue("start_date");
        return startDate && current.isBefore(startDate, "day");
    };

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <Form scrollToFirstError form={ form } onFinish={ onFinish } onFinishFailed={ onFinishFailed }
              autoComplete="off" initialValues={ { remember: true } }>
            <div className="h-[500px] overflow-y-auto pr-3">
                {/*----------TITLE----------*/ }

                <div
                    className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[0].label }</div>
                <Form.Item
                    name="title"
                    rules={ [{ required: true, message: project_attributes[0].required_msg }] }
                >
                    <Input placeholder={ project_attributes[0].placeholder } />
                </Form.Item>

                {/*----------DESCRIPTION----------*/ }
                <div
                    className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[1].label }</div>
                <Form.Item
                    name="description"
                    rules={ [{ required: true, message: project_attributes[1].required_msg }] }
                >
                    <Input.TextArea autoSize={ project_attributes[1].autoSize }
                                    placeholder={ project_attributes[1].placeholder } />
                </Form.Item>

                {/*----------PROGRESS----------*/ }
                <div
                    className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[2].label }</div>
                <Form.Item
                    name="progress"
                >
                    <Slider className="mx-3 my-3" tooltip={ { range_formatter } } />
                </Form.Item>

                {/*----------LOCATIONS----------*/ }
                <div
                    className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[3].label }</div>
                <Form.Item
                    name="locations"
                    rules={ [{ required: true, message: project_attributes[3].required_msg }] }
                >
                    <Select
                        mode="multiple"
                        placeholder={ project_attributes[3].placeholder }
                        options={ project_tags }
                    />
                </Form.Item>

                {/*----------TAGS----------*/ }
                <div
                    className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[4].label }</div>
                <Form.Item
                    name="tags"
                    rules={ [{ required: true, message: project_attributes[4].required_msg }] }
                >
                    <Select
                        mode="multiple"
                        placeholder={ project_attributes[4].placeholder }
                        options={ project_tags }
                    />
                </Form.Item>

                <Row gutter={ 20 }>
                    <Col md={ { flex: "50%" } } xs={ { flex: "100%" } }>
                        {/*----------START DATE----------*/ }
                        <div
                            className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[5].label }</div>
                        <Form.Item
                            name="start_date"
                            rules={ [{ required: true, message: project_attributes[5].required_msg }] }
                        >
                            <DatePicker
                                showNow
                                style={ { width: "100%" } }
                                format={ {
                                    format: "MMMM DD, YYYY hh:mm A"
                                } }
                                showTime={ {
                                    format: "hh:mm A"
                                } }
                                disabledDate={ disabledStartDate }
                            />
                        </Form.Item>
                    </Col>
                    <Col md={ { flex: "50%" } } xs={ { flex: "100%" } }>
                        {/*----------DUE DATE----------*/ }
                        <div
                            className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[6].label }</div>
                        <Form.Item
                            name="due_date"
                        >
                            <DatePicker
                                showNow
                                style={ { width: "100%" } }
                                format={ {
                                    format: "MMMM DD, YYYY hh:mm A"
                                } }
                                showTime={ {
                                    format: "hh:mm A"
                                } }
                                disabledDate={ disabledDueDate }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={ 20 }>
                    <Col md={ { flex: "50%" } } xs={ { flex: "100%" } }>
                        {/*----------STATUS----------*/ }
                        <div
                            className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[8].label }</div>
                        <Form.Item
                            name="status"
                            rules={ [{ required: true, message: project_attributes[8].required_msg }] }
                        >
                            <Select
                                placeholder={ project_attributes[8].placeholder }
                                options={ project_status }
                                value={ status }
                            />
                        </Form.Item>
                    </Col>
                    <Col md={ { flex: "50%" } } xs={ { flex: "100%" } }>
                        {/*----------COMPLETION DATE----------*/ }
                        <div
                            className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[7].label }</div>
                        <Form.Item
                            name="completion_date"
                        >
                            <DatePicker
                                showNow
                                style={ { width: "100%" } }
                                format={ {
                                    format: "MMMM DD, YYYY hh:mm A"
                                } }
                                showTime={ {
                                    format: "hh:mm A"
                                } }
                                disabledDate={ disabledCompletionDate }
                                onChange={ (value) => {
                                    if (value) {
                                        form.setFields([
                                            {
                                                name: "status",
                                                value: "completed"
                                            }
                                        ]);
                                        setStatus("completed");
                                    } else {
                                        form.setFields([
                                            {
                                                name: "status",
                                                value: null
                                            }
                                        ]);
                                        setStatus(null);
                                    }
                                } }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={ 20 }>
                    <Col md={ { flex: "50%" } } xs={ { flex: "100%" } }>
                        {/*----------COST----------*/ }
                        <div
                            className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[9].label }</div>
                        <Form.Item
                            name="cost"
                        >
                            <InputNumber
                                min={ 0 }
                                prefix="₱"
                                placeholder="0.00"
                                decimalSeparator="."
                                style={ { width: "100%" } }
                                keyboard={ true }
                                stringMode={ true }
                                step={ 0.01 }
                                formatter={ (value) => {
                                    const [wholeNumber, decimalPart] = (value || "").toString().split(".");
                                    const formattedWholeNumber = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                    return decimalPart ? `${ formattedWholeNumber }.${ decimalPart.toFixed() }` : formattedWholeNumber;
                                } }
                                parser={ (value) => value.replace(/\₱\s?|(,*)/g, "") }
                            />
                        </Form.Item>
                    </Col>
                    <Col md={ { flex: "50%" } } xs={ { flex: "100%" } }>
                        {/*----------IMPLEMENTING AGENCY----------*/ }
                        <div
                            className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[10].label }</div>
                        <Form.Item
                            name="implementing_agency"
                        >
                            <Input
                                placeholder={ project_attributes[10].placeholder }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={ 20 }>
                    <Col md={ { flex: "50%" } } xs={ { flex: "100%" } }>
                        {/*----------CONTRACT TERM----------*/ }
                        <div
                            className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[11].label }</div>
                        <Form.Item
                            name="contract_term"
                        >
                            <Input
                                placeholder={ project_attributes[11].placeholder }
                            />
                        </Form.Item>
                    </Col>
                    <Col md={ { flex: "50%" } } xs={ { flex: "100%" } }>
                        {/*----------CONTRACTOR----------*/ }
                        <div
                            className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[12].label }</div>
                        <Form.Item
                            name="contractor"
                        >
                            <Input
                                placeholder={ project_attributes[12].placeholder }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Form.Item
                    name="media"
                    valuePropName="fileList"
                    getValueFromEvent={ normFile }
                >
                    <Dragger
                        multiple="true"
                        listType="picture-card"
                        showUploadList={ {
                            showRemoveIcon: true
                        } }
                        action="https://api.cloudinary.com/v1_1/your_cloudinary_cloud_name/image/upload"
                        className="flex items-center justify-center"
                    >
                        <FaCloudUploadAlt size={ 50 } className="w-full mt-8" />
                        <p className="mb-8 mt-2 text-gray-600">Click or drag file to this area to
                                                               upload.</p>
                    </Dragger>
                </Form.Item>
            </div>
            <div className="flex justify-end pr-3">
                <Form.Item>
                    <Button key="reset" type="text" onClick={ () => {
                        form.resetFields();
                    } }
                            className="hover:border-red-700 hover:!text-red-700 hover:bg-none mr-2">
                        Reset
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="default" htmlType="submit"
                            className="bg-cyan-600 text-white">
                        { mode === "add" ? "Submit" : mode === "edit" && "Save" }
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
});