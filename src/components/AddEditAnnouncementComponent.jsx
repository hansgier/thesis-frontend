import { Button, Form, Input } from "antd";
import { project_attributes } from "../utils/data-components.jsx";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import {
    editAnnouncement,
    postAnnouncement,
    setSelectedAnnouncement
} from "../app/features/announcements/announcementsSlice.js";
import {
    setAddAnnouncementMode,
    setEditAnnouncementMode,
    toggleAddAnnouncementMode
} from "../app/features/auth/authSlice.js";


export const AddEditAnnouncementComponent = React.memo(({ mode, announcement }) => {
    const [form] = Form.useForm();
    const { isAddAnnouncementMode, isEditAnnouncementMode } = useSelector((store) => store.auth);
    const {
        isAnnouncementFetchLoading,
        isAnnouncementFetchSuccess
    } = useSelector((store) => store.announcements);
    const { barangays } = useSelector((store) => store.barangays);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAddAnnouncementMode === false) {
            form.resetFields();
        }
        if (mode === "edit") {
            const initialValues = {
                title: announcement?.title || null,
                content: announcement?.content || null
            };
            form.setFieldsValue(initialValues);
        }
    }, [announcement?.id, mode, form, isAddAnnouncementMode, isEditAnnouncementMode]);


    const onFinish = (values) => {
        if (mode === "edit") {
            dispatch(setEditAnnouncementMode(false));
            dispatch(editAnnouncement({
                id: announcement.id,
                announcement: {
                    title: values.title,
                    content: values.content
                }
            })).then(() => {
                dispatch(setEditAnnouncementMode(false));
            }).catch(() => {
                dispatch(setEditAnnouncementMode(true));
            });
        } else if (mode === "add") {
            dispatch(setAddAnnouncementMode(true));
            dispatch(postAnnouncement({
                title: values.title,
                content: values.content
            })).then(() => dispatch(setAddAnnouncementMode(false))).catch(() => dispatch(setAddAnnouncementMode(true)));
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
            </div>
            <div className="flex justify-end pr-3">
                <Form.Item>
                    <Button key="reset" type="text" onClick={ () => {
                        form.resetFields();
                    } }
                            disabled={ isAnnouncementFetchLoading }
                            className="hover:border-red-700 hover:!text-red-700 hover:bg-none mr-2">
                        Reset
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="text" danger htmlType="button"
                            className="border-red-700 mr-3 hover:bg-red-400"
                            disabled={ isAnnouncementFetchLoading }
                            onClick={ () => {
                                mode === "add" ? dispatch(toggleAddAnnouncementMode()) : mode === "edit" && dispatch(setEditAnnouncementMode(false));
                                mode === "edit" && dispatch(setSelectedAnnouncement(null));
                                form.resetFields();
                            } }
                    >
                        Cancel
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
}, (prevProps, nextProps) => {
    return prevProps.mode === nextProps.mode && prevProps.announcement?.id === nextProps.announcement?.id;
});