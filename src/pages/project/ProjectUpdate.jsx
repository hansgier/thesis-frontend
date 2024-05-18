import React from "react";
import { Button, Form, Input, InputNumber, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { toggleEditModeProjectUpdate } from "../../app/features/projects/projectsSlice.js";
import { createProjectUpdate } from "../../app/features/projects/updatesSlice.js";

const { Dragger } = Upload;

export const ProjectUpdate = React.memo(({ mode }) => {
    const [form] = Form.useForm();
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
        console.log(singleProject.payload.id);
        dispatch(createProjectUpdate({
            projectId: singleProject.payload.id,
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
                <div className="hover:bg-blue-50 hover:cursor-pointer mb-5 mr-2 p-2 rounded-md">
                    {/*----------Project Update Content----------*/ }
                    <Form.Item name="remarks" className="mb-2 !p-0 w-full"
                               rules={ [{ required: true, message: "Remarks is required" }] }>
                        <Input.TextArea autoSize={ { minRows: 2 } }
                                        placeholder="Type your remarks..." />
                    </Form.Item>
                    <Form.Item name="progress" className="mb-2 !p-0 w-full">
                        <InputNumber className="w-full" placeholder="What's the progress..." />
                    </Form.Item>
                    <div className="flex items-center justify-between" data-id="20">
                        <div className="flex items-center gap-2" data-id="24">
                            <Form.Item className="m-0 p-0">
                                <Button onClick={ () => dispatch(toggleEditModeProjectUpdate()) }
                                        type="text" size="small"
                                        className="m-0" loading={ isUpdateFetchLoading }>
                                    Cancel
                                </Button>
                            </Form.Item>
                            <Form.Item className="m-0 p-0">
                                <Button
                                    type="default" size="small"
                                    className="m-0" htmlType="submit" loading={ isUpdateFetchLoading }>
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