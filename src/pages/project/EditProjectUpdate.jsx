import { toggleEditModeProjectUpdate } from "../../app/features/projects/projectsSlice.js";
import { Button, Form, Input } from "antd";
import { FaCheck, FaTrash } from "react-icons/fa";
import moment from "moment";
import { deleteProjectUpdate, editProjectUpdate } from "../../app/features/projects/updatesSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import React from "react";

export const EditProjectUpdate = React.memo(({ update }) => {
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
        dispatch(editProjectUpdate({
            projectId: projectId,
            id: update.id,
            update: {
                remarks: values.remarks || "",
                progress: values.progress || "",
                uploadedImages: []
            }
        }));
        form.resetFields();
        dispatch(toggleEditModeProjectUpdate());
    };

    const onFinishFailed = (errorInfo) => {
        console.log(`Project Update Form Failed: ${ errorInfo }`);
    };

    return (
        <>
            { isEditModeProjectUpdate ?
                <Form form={ form } className="m-0 p-0" onFinishFailed={ onFinishFailed } onFinish={ onFinish }>
                    <div className="hover:bg-blue-50 hover:cursor-pointer mb-5 mr-2 p-2 rounded-md">
                        {/*----------Project Update Content----------*/ }
                        <Form.Item name="remarks" className="mb-2 !p-0 w-full">
                            <Input.TextArea autoSize={ { minRows: 2 } }
                                            placeholder={ update.remarks } />
                        </Form.Item>
                        <div className="flex items-center justify-between" data-id="20">
                            <div className="flex items-center gap-2" data-id="24">
                                <Form.Item className="m-0 p-0">
                                    <Button onClick={ () => {
                                        dispatch(toggleEditModeProjectUpdate());
                                        dispatch(deleteProjectUpdate({
                                            projectId: projectId,
                                            id: update.id
                                        }));
                                    } }
                                            icon={ <FaTrash color="red" /> }
                                            type="text" size="small"
                                            className="m-0" loading={ isUpdateFetchLoading } />
                                </Form.Item>
                                <Form.Item className="m-0 p-0">
                                    <Button
                                        icon={ <FaCheck color="green" /> }
                                        type="text" size="small"
                                        className="m-0" htmlType="submit" loading={ isUpdateFetchLoading } />
                                </Form.Item>
                            </div>
                        </div>
                    </div>
                </Form>
                :
                <div className="m-0 p-0">
                    <div className="hover:bg-blue-50 hover:cursor-pointer mb-5 mr-2 p-2 rounded-md">
                        {/*----------Project Update Content----------*/ }
                        <div className="mb-3 text-gray-700 text-sm" data-id="19">
                            { update.remarks }
                        </div>

                        <div className="flex items-center justify-between" data-id="20">
                            <div className="flex items-center gap-2" data-id="21">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                     strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                     className="dark:text-gray-400 h-4 text-yellow-700 w-4"
                                     data-id="22">
                                    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                                    <line x1="16" x2="16" y1="2" y2="6"></line>
                                    <line x1="8" x2="8" y1="2" y2="6"></line>
                                    <line x1="3" x2="21" y1="10" y2="10"></line>
                                    <path d="M8 14h.01"></path>
                                    <path d="M12 14h.01"></path>
                                    <path d="M16 14h.01"></path>
                                    <path d="M8 18h.01"></path>
                                    <path d="M12 18h.01"></path>
                                    <path d="M16 18h.01"></path>
                                </svg>
                                {/*----------Moment Post Date----------*/ }
                                <span className="select-none text-gray-500 text-xs" data-id="23">
                        { `Last update: ${ moment(update.createdAt).format("MMMM D, YYYY h:mm A") }` }
                    </span>
                            </div>
                            {/*        <div className="flex items-center gap-2" data-id="24">*/ }
                            {/*            /!*----------Project Update Progress----------*/ }
                            {/*            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"*/ }
                            {/*                 fill="#a7f3d0" className="w-5 ">*/ }
                            {/*                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>*/ }
                            {/*                <g id="SVGRepo_tracerCarrier" strokeLinecap="round"*/ }
                            {/*                   strokeLinejoin="round"></g>*/ }
                            {/*                <g id="SVGRepo_iconCarrier">*/ }
                            {/*                    <path fill="#76a790" fillRule="evenodd"*/ }
                            {/*                          d="M0,8 C0,6.34315 1.34315,5 3,5 L13,5 C14.6569,5 16,6.34315 16,8 C16,9.65685 14.6569,11 13,11 L3,11 C1.34315,11 0,9.65685 0,8 Z M10,7 L13,7 C13.5523,7 14,7.44772 14,8 C14,8.55228 13.5523,9 13,9 L8,9 L10,7 Z"></path>*/ }
                            {/*                </g>*/ }
                            {/*            </svg>*/ }
                            {/*            <span className="select-none text-green-500 text-sm"*/ }
                            {/*                  data-id="26">*/ }
                            {/*    { update.progress }*/ }
                            {/*</span>*/ }
                            {/*        </div>*/ }
                        </div>
                    </div>
                </div>
            }
        </>

    );
});