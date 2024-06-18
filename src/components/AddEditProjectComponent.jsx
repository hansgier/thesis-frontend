import { Button, Col, DatePicker, Form, Input, InputNumber, message, Row, Select, Upload } from "antd";
import { project_attributes, project_status, project_tags } from "../utils/data-components.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import {
    clearUploadedImagesArray,
    createProject,
    editProject,
    setSelectedProject,
    setUploadedImagesArray
} from "../app/features/projects/projectsSlice.js";
import { setAddProjectMode, toggleAddProjectMode, toggleEditProjectMode } from "../app/features/auth/authSlice.js";
import { deleteMedium } from "../app/features/media/mediaSlice.js";
import moment from "moment";
import dayjs from "dayjs";

const { Dragger } = Upload;

export const AddEditProjectComponent = React.memo(({
                                                       mode,
                                                       project
                                                   }) => {
    const {
        uploadedImagesArray,
        uploadLoading,
        uploadError,
        singleProject,
        isProjectFetchLoading
    } = useSelector((state) => state.projects);
    const { barangays } = useSelector((state) => state.barangays);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const { isAddProjectMode } = useSelector((store) => store.auth);
    const [status, setStatus] = useState(null);
    const [inputStartDate, setInputStartDate] = useState("");
    const [inputDueDate, setInputDueDate] = useState("");
    const [inputCompletionDate, setInputCompletionDate] = useState("");

    useEffect(() => {
        if (mode === "edit") {
            const initialValues = {
                title: project?.title || null,
                description: project?.description || null,
                locations: project?.barangays.map((barangay) => barangay.id) || null,
                tags: project?.tags.map((tag) => tag.id) || null,
                start_date: dayjs(moment(project?.start_date).format("MMMM DD, YYYY")) || null,
                due_date: (!project?.due_date ? null : dayjs(moment(project?.due_date).format("MMMM DD, YYYY"))) || null,
                completion_date: (!project?.completion_date ? null : dayjs(moment(project?.completion_date).format("MMMM DD, YYYY"))) || null,
                status: project?.status || null,
                cost: 1200 || null,
                funding_source: project?.funding_source || null,
                contract_term: project?.contract_term || null,
                contractor: project?.contractor || null,
                uploadedMediaList: project?.media.length > 0 ?
                    project?.media.map((media) => {
                        const urlParts = media.url.split("/");
                        return {
                            response: {
                                uid: media.id,
                                id: media.id,
                                url: media.url,
                                secure_url: media.url,
                                bytes: media.bytes || 1,
                                resource_type: urlParts[urlParts.length - 4]
                            }
                        };
                    })
                    : null
            };
            form.setFieldsValue(initialValues);
        }
    }, [project?.id, mode, form]);

    const onFinish = useCallback((values) => {
        const {
            title,
            description,
            cost,
            status,
            tags,
            locations,
            funding_source,
            contract_term,
            contractor,
            uploadedMediaList
        } = values;

        let tagsIds;
        let barangayIds;
        tagsIds = tags.join(",");
        barangayIds = locations.join(",");
        let uploadedImages;


        const formattedStartDate = inputStartDate;
        const formattedDueDate = inputDueDate;
        const formattedCompletionDate = inputCompletionDate;

        if (mode === "add") {
            return dispatch(createProject({
                    title: title || "",
                    description: description || "",
                    cost: cost || "0",
                    start_date: formattedStartDate,
                    due_date: formattedDueDate === "" ? null : formattedDueDate,
                    completion_date: formattedCompletionDate === "" ? null : formattedCompletionDate,
                    status,
                    tagsIds,
                    barangayIds,
                    funding_source: funding_source || null,
                    contract_term: contract_term || null,
                    contractor: contractor || null,
                    uploadedImages: uploadedImagesArray.length > 0 ? uploadedImagesArray : null
                })
            ).then(() => dispatch(setAddProjectMode(false)));
        } else if (mode === "edit") {
            if (uploadedImagesArray.length < 1 && uploadedMediaList.length === project?.media.length) {
                // return dispatch(toggleEditProjectMode());
            }
            if (uploadedImagesArray.length > 0) {
                uploadedImages = uploadedMediaList.fileList.length > 0 ? uploadedMediaList.fileList.map((val) => {
                    if (val.response) {
                        return {
                            id: null,
                            uid: null,
                            secure_url: val.response.secure_url,
                            url: val.response.secure_url,
                            bytes: val.response.bytes,
                            resource_type: val.response.resource_type
                        };
                    } else {
                        return {
                            id: val.id,
                            uid: val.uid,
                            secure_url: val.secure_url,
                            url: val.url,
                            bytes: val.size,
                            resource_type: val.resource_type
                        };
                    }
                }) : null;
            }
            let newUploadedImages = null;
            if (uploadedImages && uploadedImages.length > 0) {
                newUploadedImages = uploadedImages;
            } else if (uploadedMediaList && uploadedMediaList.length > 0) {
                newUploadedImages = uploadedMediaList.map((val) => val.response);
            }
            dispatch(toggleEditProjectMode());
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
                    contract_term: contract_term || project.contract_term,
                    contractor: contractor || project.contractor,
                    uploadedImages: newUploadedImages
                }
            }));
        }
        dispatch(clearUploadedImagesArray());
    }, [inputStartDate, inputDueDate, inputCompletionDate, mode, dispatch, uploadedImagesArray, project?.id, project?.title, project?.description, project?.cost, project?.start_date, project?.due_date, project?.completion_date, project?.status, project?.funding_source, project?.contract_term, project?.contractor, project?.media.length]);

    const onFinishFailed = useCallback((errorInfo) => {
        console.log("Add Project Failed", errorInfo);
    }, []);

    const disabledStartDate = useCallback((current) => {
        const dueDate = form.getFieldValue("due_date");
        return dueDate && current.isAfter(dueDate, "day");
    }, [form]);

    const disabledDueDate = useCallback((current) => {
        const startDate = form.getFieldValue("start_date");
        return startDate && current.isBefore(startDate, "day");
    }, [form]);

    const disabledCompletionDate = useCallback((current) => {
        const startDate = form.getFieldValue("start_date");
        return startDate && current.isBefore(startDate, "day");
    }, [form]);

    return (
        <>
            <Form scrollToFirstError form={ form } onFinish={ onFinish } onFinishFailed={ onFinishFailed }
                  autoComplete="off"
            >
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
                                        placeholder={ project_attributes[1].placeholder }
                        />
                    </Form.Item>

                    {/*/!*----------PROGRESS----------*/ }
                    {/*<div*/ }
                    {/*    className="text-xs mb-1 uppercase font-bold select-none">{ project_attributes[2].label }</div>*/ }
                    {/*<Form.Item*/ }
                    {/*    name="progress"*/ }
                    {/*>*/ }
                    {/*    <Slider className="mx-3 my-3" tooltip={ { range_formatter } }*/ }
                    {/*            defaultValue={ mode === "edit" ? project.progress : null } />*/ }
                    {/*</Form.Item>*/ }


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
                            placeholder={ project_attributes[3].placeholder }
                            filterOption={ (input, option) => (option?.children.toLowerCase()).includes(input.toLowerCase()) }
                        >
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
                            placeholder={ project_attributes[4].placeholder }
                            filterOption={ (input, option) => (option?.children.toLowerCase()).includes(input.toLowerCase()) }
                        >
                            { project_tags.map((tag, i) => {
                                return <Select.Option key={ Number(tag.value) } value={ Number(tag.value) }>
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
                                        return decimalPart ? `${ formattedWholeNumber }.${ decimalPart }` : formattedWholeNumber;
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
                    <Form.Item name="uploadedMediaList">
                        <Dragger
                            multiple
                            accept="image"
                            listType="picture-card"
                            showUploadList={ {
                                showRemoveIcon: true
                            } }
                            className="flex items-center justify-center mb-3"
                            action="https://api.cloudinary.com/v1_1/ddh4rh4ci/image/upload?upload_preset=ixqbobsf"
                            onChange={ (info) => {
                                // info.fileList.map((file) => {
                                //     if (file.status === "done") {
                                //         dispatch(setUploadedImagesArray([...uploadedImagesArray, file.response]));
                                //     }
                                // });
                                const newFiles = info.fileList.filter(
                                    (file) =>
                                        file.status === "done" &&
                                        !uploadedImagesArray.find(
                                            (uploadedFile) => uploadedFile.public_id === file.response.public_id
                                        )
                                );
                                if (newFiles.length > 0) {
                                    dispatch(
                                        setUploadedImagesArray([
                                            ...uploadedImagesArray,
                                            ...newFiles.map((file) => file.response)
                                        ])
                                    );
                                }
                            } }
                            onRemove={ (value) => {
                                if (mode === "add") {
                                    dispatch(deleteMedium({ url: value.response.public_id }));
                                } else if (mode === "edit") {
                                    if (uploadedImagesArray.length > 0) {
                                        dispatch(deleteMedium({ url: value.url || value.response.public_id }));
                                        const newArr = uploadedImagesArray.filter((obj) => obj.public_id !== (value.url || value.response.public_id));
                                        dispatch(setUploadedImagesArray(newArr));
                                    } else {
                                        dispatch(deleteMedium({
                                            id: value.id,
                                            projectId: project?.id,
                                            url: value.secure_url
                                        })).then(() => message.success("Media deleted"));
                                    }
                                }
                            } }
                            defaultFileList={ mode === "edit" ? (project?.media.length > 0 ? project?.media.map((media) => {
                                const urlParts = media.url.split("/");
                                return {
                                    uid: media.id,
                                    id: media.id,
                                    url: media.url,
                                    secure_url: media.url,
                                    size: media.bytes || 1,
                                    resource_type: urlParts[urlParts.length - 4]
                                };
                            }) : null) : null }
                        >
                            <FaCloudUploadAlt size={ 50 } className="w-full mt-8" />
                            <p className="mb-8 mt-2 text-gray-600">
                                Click or drag image(s) to this area to upload.
                            </p>
                        </Dragger>
                        {/*{ project.media.length > 0 && (*/ }
                        {/*    */ }
                        {/*) }*/ }
                    </Form.Item>
                </div>
                <div className="flex justify-end pr-3">
                    { mode === "add" && (
                        <Form.Item>
                            <Button key="reset" type="text" onClick={ () => {
                                form.resetFields();
                            } }
                                    disabled={ isProjectFetchLoading }
                                    className="mr-2">
                                Reset
                            </Button>
                        </Form.Item>
                    ) }
                    <Form.Item>
                        <Button type="text" danger htmlType="button"
                                className="border-red-700 mr-3 hover:bg-red-400"
                                disabled={ isProjectFetchLoading }
                                onClick={ () => {
                                    mode === "add" ? dispatch(toggleAddProjectMode()) : mode === "edit" && dispatch(toggleEditProjectMode());
                                    uploadedImagesArray.length > 0 && uploadedImagesArray.map((img) => dispatch(deleteMedium({ url: img.secure_url })));
                                    mode === "edit" && dispatch(setSelectedProject(null));
                                    dispatch(setUploadedImagesArray([]));
                                    form.resetFields();
                                } }
                        >
                            Cancel
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="default" htmlType="submit"
                                className="bg-cyan-600 text-white"
                                loading={ isProjectFetchLoading }
                        >
                            { mode === "add" ? "Submit" : mode === "edit" && "Save" }
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </>
    );
}, (prevProps, nextProps) => {
    // Custom equality check for props
    return prevProps.mode === nextProps.mode && prevProps.project?.id === nextProps.project?.id;
});