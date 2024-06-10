import React from "react";
import { Button, Form, Input, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setAddModeProjectUpdate, toggleEditModeProjectUpdate } from "../../app/features/projects/projectsSlice.js";
import { createProjectUpdate } from "../../app/features/projects/updatesSlice.js";
import { useParams } from "react-router-dom";

const { Dragger } = Upload;

export const ProjectUpdate = React.memo(({ mode }) => {
    const [form] = Form.useForm();
    const { projectId } = useParams();
    const dispatch = useDispatch();
    const { singleProject, isEditModeProjectUpdate, isAddModeProjectUpdate } = useSelector((store) => store.projects);
    const { isUpdateFetchLoading, isUpdateFetchSuccess } = useSelector((store) => store.updates);
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    const onFinish = (values) => {
        dispatch(createProjectUpdate({
            projectId: projectId,
            update: {
                remarks: values.remarks || "",
                progress: values.progress || "",
                uploadedImages: []
            }
        }));
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log(`Project Update Form Failed: ${ errorInfo }`);
    };

    return (
        <>
            <Form form={ form } className="m-0 p-0" onFinishFailed={ onFinishFailed } onFinish={ onFinish }>
                <div className="hover:cursor-pointer mb-0 mr-2 p-2 rounded-md ml-0">
                    {/*----------Project Update Content----------*/ }
                    <Form.Item name="remarks" className="mb-2 !p-0 w-full ml-0 pl-0"
                               rules={ [{ required: true, message: "Remarks is required" }] }>
                        <Input.TextArea autoSize={ { minRows: 2, maxRows: 8 } }
                                        placeholder="Type your remarks..." />
                    </Form.Item>
                    <div className="flex items-center justify-end" data-id="20">
                        <div className="flex items-center gap-2" data-id="24">
                            <Form.Item className="m-0 p-0">
                                <Button onClick={ () => {
                                    mode === "add" ? dispatch(setAddModeProjectUpdate(false)) : mode === "edit" && dispatch(toggleEditModeProjectUpdate());
                                    form.resetFields();
                                } }
                                        type="text" size="middle"
                                        className="hover:border-red-500" disabled={ isUpdateFetchLoading }>
                                    Cancel
                                </Button>
                            </Form.Item>
                            <Form.Item className="m-0 p-0">
                                <Button
                                    type="default" size="middle"
                                    className="bg-cyan-600 text-white" htmlType="submit"
                                    loading={ isUpdateFetchLoading }>
                                    Submit
                                </Button>
                            </Form.Item>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    );
});