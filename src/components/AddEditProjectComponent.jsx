import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select, Slider, Upload } from "antd";
import { project_attributes, project_status, project_tags } from "../utils/data-components.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { getDateTimeFormat } from "../utils/functions.js";
import { FaCloudUploadAlt } from "react-icons/fa";
import { createProject, editProject, setUploadedImagesArray } from "../app/features/projects/projectsSlice.js";
import { toggleAddProjectMode } from "../app/features/auth/authSlice.js";
import { deleteMedium } from "../app/features/media/mediaSlice.js";

const { Dragger } = Upload;

const range_formatter = (value) => `${ value }%`;

export const AddEditProjectComponent = React.memo(({
                                                       mode,
                                                       project
                                                   }) => {
    const { uploadedImagesArray, uploadLoading, uploadError, singleProject } = useSelector((state) => state.projects);
    const { barangays } = useSelector((state) => state.barangays);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { isAddProjectMode } = useSelector((store) => store.auth);
    const [status, setStatus] = useState(null);
    const [inputStartDate, setInputStartDate] = useState("");
    const [inputDueDate, setInputDueDate] = useState("");
    const [inputCompletionDate, setInputCompletionDate] = useState("");
    const philippineDateTimeFormat = getDateTimeFormat();

    useEffect(() => {
        if (isAddProjectMode === false) {
            form.resetFields();
        }
    }, [isAddProjectMode]);

    const deleteUploadedImages = () => {

    };

    const onFinish = (values) => {
        const {
            title,
            description,
            cost,
            status,
            tags,
            locations,
            funding_source,
            contract_term,
            contractor
        } = values;

        let tagsIds;
        let barangayIds;
        if (mode === "add") {
            tagsIds = tags.join(",");
            barangayIds = locations.join(",");
        } else if (mode === "edit") {
            tagsIds = tags ? tags.map(Number) : [];
            barangayIds = locations ? locations.map(Number) : [];
        }


        const formattedStartDate = inputStartDate;
        const formattedDueDate = inputDueDate;
        const formattedCompletionDate = inputCompletionDate;

        if (mode === "add") {
            return dispatch(
                createProject({
                    title: title || "",
                    description: description || "",
                    cost: cost || "0",
                    start_date: formattedStartDate,
                    due_date: formattedDueDate === "" ? null : formattedDueDate,
                    completion_date: formattedCompletionDate === "" ? null : formattedCompletionDate,
                    status,
                    tagsIds,
                    barangayIds,
                    funding_source: funding_source || "",
                    contract_term: contract_term || "",
                    contractor: contractor || "",
                    uploadedImages: uploadedImagesArray.length > 0 ? uploadedImagesArray : []
                })
            );
        } else if (mode === "edit") {
            return dispatch(editProject({
                id: project.id, project: {
                    title: title || project.title,
                    description: description || project.description,
                    cost: cost || project.cost,
                    start_date: formattedStartDate || project.start_date,
                    due_date: formattedDueDate || project.due_date,
                    completion_date: formattedCompletionDate || project.completion_date,
                    status: status || project.status,
                    tagsIds,
                    barangayIds,
                    funding_source: funding_source || project.funding_source,
                    uploadedImages: uploadedImagesArray.length > 0 ? uploadedImagesArray : []
                }
            }));
        }
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
                    rules={ mode === "add" ? [{
                        required: true,
                        message: project_attributes[0].required_msg
                    }] : null }
                >
                    <Input placeholder={ project_attributes[0].placeholder } />
                </Form.Item>

                {/*----------DESCRIPTION----------*/ }
                <div
                    className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[1].label }</div>
                <Form.Item
                    name="description"
                    rules={ mode === "add" ? [{
                        required: true,
                        message: project_attributes[1].required_msg
                    }] : null }
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
                    rules={ mode === "add" ? [{
                        required: true,
                        message: project_attributes[3].required_msg
                    }] : null }
                >
                    <Select
                        mode="multiple"
                        allowClear
                        placeholder={ project_attributes[3].placeholder }>
                        { barangays.map((barangay) => {
                            return <Select.Option key={ barangay.id }
                                                  value={ barangay.id }>{ barangay.name }</Select.Option>;
                        }) }

                    </Select>
                </Form.Item>

                {/*----------TAGS----------*/ }
                <div
                    className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[4].label }</div>
                <Form.Item
                    name="tags"
                    rules={ mode === "add" ? [{
                        required: true,
                        message: project_attributes[4].required_msg
                    }] : null }
                >
                    <Select
                        mode="multiple"
                        placeholder={ project_attributes[4].placeholder }>
                        { project_tags.map((tag, i) => {
                            return <Select.Option key={ i } value={ tag.value }>
                                { tag.label }
                            </Select.Option>;
                        }) }
                    </Select>
                </Form.Item>

                <Row gutter={ 20 }>
                    <Col md={ { flex: "50%" } } xs={ { flex: "100%" } }>
                        {/*----------START DATE----------*/ }
                        <div
                            className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[5].label }</div>
                        <Form.Item
                            name="start_date"
                            rules={ mode === "add" ? [{
                                required: true,
                                message: project_attributes[5].required_msg
                            }] : null }
                        >
                            <DatePicker
                                showNow
                                style={ { width: "100%" } }
                                format={ {
                                    format: "MMMM DD, YYYY"
                                } }
                                disabledDate={ disabledStartDate }
                                onChange={ (value, dateString) => {
                                    setInputStartDate(`${ value.$y }-${ value.$M + 1 }-${ value.$D }`);
                                } }
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
                                    format: "MMMM DD, YYYY"
                                } }
                                disabledDate={ disabledDueDate }
                                onChange={ (value, dateString) => {
                                    setInputDueDate(`${ value.$y }-${ value.$M + 1 }-${ value.$D }`);
                                } }
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
                            rules={ mode === "add" ? [{
                                required: true,
                                message: project_attributes[8].required_msg
                            }] : null }
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
                                    format: "MMMM DD, YYYY"
                                } }
                                disabledDate={ disabledCompletionDate }
                                getPopupContainer={ (node) => node.parentNode }
                                onChange={ (value, dateString) => {
                                    setInputCompletionDate(`${ value.$y }-${ value.$M + 1 }-${ value.$D }`);
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
                        {/*----------FUNDING SOURCE----------*/ }
                        <div
                            className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[10].label }</div>
                        <Form.Item
                            name="funding_source"
                        >
                            <Input
                                placeholder={ project_attributes[10].placeholder }
                            />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={ 20 }>
                    <Col md={ { flex: "50%" } } xs={ { flex: "100%" } }>
                        {/*/!*----------CONTRACT TERM----------*/ }
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
                        {/*/!*----------CONTRACTOR----------*/ }
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
                <Form.Item>
                    <Dragger
                        multiple="true"
                        accept="image"
                        listType="picture-card"
                        showUploadList={ {
                            showRemoveIcon: true
                        } }
                        className="flex items-center justify-center mb-3"
                        action="https://api.cloudinary.com/v1_1/ddh4rh4ci/image/upload?upload_preset=ixqbobsf"
                        onChange={ (info) => {
                            info.fileList.map((file) => {
                                if (file.status === "done") {
                                    dispatch(setUploadedImagesArray([...uploadedImagesArray, file.response]));
                                }
                            });
                        } }
                        onRemove={ (value) => dispatch(deleteMedium({ url: value.response.public_id })) }
                    >
                        <FaCloudUploadAlt size={ 50 } className="w-full mt-8" />
                        <p className="mb-8 mt-2 text-gray-600">
                            Click or drag image(s) to this area to upload.
                        </p>
                    </Dragger>
                </Form.Item>
            </div>
            <div className="flex justify-end pr-3">
                <Form.Item>
                    <Button key="reset" type="text" onClick={ () => {
                        form.resetFields();
                    } }
                            className="mr-2">
                        Reset
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="text" danger htmlType="button"
                            className="border-red-700 mr-3 hover:bg-red-400"
                            onClick={ () => {
                                dispatch(toggleAddProjectMode());
                                uploadedImagesArray.length > 0 && uploadedImagesArray.map((img) => dispatch(deleteMedium({ url: img.secure_url })));
                            } }
                    >
                        Cancel
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