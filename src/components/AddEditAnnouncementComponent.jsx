import { Button, Form, Input } from "antd";
import { project_attributes } from "../utils/data-components.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { editAnnouncement, postAnnouncement } from "../app/features/announcements/announcementsSlice.js";
//TODO: get the values of announcement for editing mode


export const AddEditAnnouncementComponent = ({ mode, announcement }) => {
    const [form] = Form.useForm();
    const { isAddAnnouncementMode } = useSelector((store) => store.auth);
    const { isAnnouncementFetchLoading, isAnnouncementFetchSuccess } = useSelector((store) => store.announcements);
    const { barangays } = useSelector((store) => store.barangays);
    const dispatch = useDispatch();


    useEffect(() => {
        if (isAddAnnouncementMode === false) {
            form.resetFields();
        }

    }, [isAddAnnouncementMode]);

    const onFinish = (values) => {
        if (values.content || values.title) {
            if (mode === "edit") {
                dispatch(editAnnouncement({
                    id: announcement.id, announcement: {
                        title: values.title,
                        content: values.content
                    }
                }));
            } else if (mode === "add") {
                dispatch(postAnnouncement({
                    title: values.title,
                    content: values.content
                }));
            }
        }
        form.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Add Announcement Failed", errorInfo);
    };


    return (
        <Form scrollToFirstError form={ form } onFinish={ onFinish } onFinishFailed={ onFinishFailed }
              autoComplete="off" initialValues={ { remember: true } }>
            <div className="overflow-y-auto pr-3">
                {/*----------TITLE----------*/ }

                <div className="text-xs mb-1 uppercase font-bold select-none">TITLE</div>
                <Form.Item
                    name="title"
                    rules={ mode === "add" ? [{
                        required: true,
                        message: "Title is required"
                    }] : false }
                >
                    <Input placeholder={ mode === "add" ? "Enter title" : announcement.title } />
                </Form.Item>

                {/*----------CONTENT----------*/ }
                <div className="text-xs mb-1 uppercase font-bold select-none">CONTENT</div>
                <Form.Item
                    name="content"
                    rules={ mode === "add" ? [{
                        required: true,
                        message: "Content is required"
                    }] : false }
                >
                    <Input.TextArea autoSize={ project_attributes[1].autoSize }
                                    placeholder={ mode === "add" ? "Type your content..." : announcement.content } />
                </Form.Item>

                {/*/!*----------TYPE----------*/ }
                {/*<div className="text-xs mb-1 uppercase font-bold select-none">TYPE</div>*/ }
                {/*<Form.Item*/ }
                {/*    name="type"*/ }
                {/*    rules={ [{ required: true, message: "Type of announcement is required" }] }*/ }

                {/*>*/ }
                {/*    <Select placeholder="Select type of announcement" options={ announcement_types } />*/ }
                {/*</Form.Item>*/ }

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
                            className="bg-cyan-600 text-white" loading={ isAnnouncementFetchLoading }>
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};