import { useCallback, useEffect, useState } from "react";
import { Button, Form, Input, Select, Spin } from "antd";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { barangaysList } from "../utils/barangaysList.js";
import { updateUser } from "../app/features/auth/authSlice.js";
import { getAllBarangays } from "../app/features/users/barangaysSlice.js";

export const Profile = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const {
        isFetchLoading,
        isError,
        userProfile,
        isLoading,
        authSuccess,
        oldPassword,
        authErrorMessage,
        authError,
        user
    } = useSelector((store) => store.auth);
    const { barangays } = useSelector((store) => store.barangays);
    const location = useLocation();
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [saved, setSaved] = useState(false);

    const getBarangayLabel = useCallback((val) => {
        const barangay = barangaysList.find(b => b.value === val);
        return barangay ? barangay.label : null;
    }, []);

    useEffect(() => {
        dispatch(getAllBarangays());
        if (authSuccess) setIsEditMode(false);
        if (location.pathname !== "/project" || location.pathname !== "/singleproject") {
            sessionStorage.setItem("scrollPosition", "0");
        }
    }, [authSuccess]);

    const onFinish = (values) => {
        dispatch(updateUser({
            username: values.username,
            email: values.email,
            password: values.password,
            barangay_id: values.barangay_id
        }));
    };

    return (
        <div className="h-full max-h-full overflow-y-scroll pt-4 px-0 md:px-6">
            <div>
                <div className="bg-white md:ml-0 mx-4 rounded-xl">
                    <div className="flex-col gap-1 grid p-6 select-none space-y-1.5">
                        <h3 className="font-semibold leading-none select-none text-xl tracking-tight whitespace-nowrap md:text-2xl">User
                                                                                                                                    Profile</h3>
                        <p className="select-none text-muted-foreground text-xs md:text-sm">Your personal details
                                                                                            here</p>
                    </div>
                    { !isEditMode ? (
                        <div className=" col-start-1 grid grid-cols-2 pb-6 pt-0 px-6 md:gap-y-4">
                            <h6 className="font-semibold mb-2 select-none text-Thesis-300 text-xs md:mb-0 md:text-sm">Details</h6>
                            <div className="flex justify-end mb-2 md:justify-start md:mb-0">
                                <button
                                    onClick={ () => {
                                        setIsEditMode(!isEditMode);
                                        form.resetFields();
                                    } }
                                    className="flex focus:outline-none focus:ring-0 focus:ring-offset-0 group hover:cursor-pointer hover:text-Thesis-50 items-center justify-center space-x-2"
                                    type="button">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                         className="h-full w-4">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinejoin="round" strokeLinecap="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                                                  fill="#5c5c5c"></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                            {/*Details*/ }
                            <h6 className="col-span-2 select-none text-gray-600 text-sm md:col-span-1 md:text-base">Username</h6>
                            <p className="break-words col-span-2 mb-4 select-none text-sm md:col-span-1 md:mb-0 md:text-base">{ userProfile.username }</p>
                            <h6 className="col-span-2 max-w-lg select-none text-gray-600 text-sm md:col-span-1 md:text-base">Email</h6>
                            <p className="break-words col-span-2 mb-4 select-none text-sm md:col-span-1 md:mb-0 md:text-base">{ userProfile.email }</p>
                            { user.role !== "admin" && (
                                <>
                                    <h6 className="col-span-2 select-none text-gray-600 text-sm md:col-span-1 md:text-base">Barangay</h6>
                                    <p className="break-words col-span-2 mb-4 select-none text-sm md:col-span-1 md:mb-0 md:text-base">
                                        { getBarangayLabel(userProfile.barangay_id) }
                                    </p>
                                </>
                            ) }
                        </div>
                    ) : (
                        <Form form={ form } onFinish={ onFinish }
                              className="grid grid-cols-1 md:grid-cols-2 pb-6 pt-0 px-6 md:gap-y-4"
                              initialValues={ {
                                  username: user.username,
                                  email: user.email,
                                  barangay_id: user.barangay_id
                              } }
                        >
                            <h6 className="font-semibold mb-2 select-none text-Thesis-300 text-xs md:mb-0 md:text-sm">Details</h6>
                            <div className="flex justify-end mb-2 md:justify-start md:mb-0">
                                <button
                                    onClick={ () => setIsEditMode(!isEditMode) }
                                    className="flex focus:outline-none focus:ring-0 focus:ring-offset-0 group hover:cursor-pointer hover:text-Thesis-50 items-center justify-center space-x-2"
                                    type="button">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                         className="h-full w-4">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinejoin="round" strokeLinecap="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                  d="M20.8477 1.87868C19.6761 0.707109 17.7766 0.707105 16.605 1.87868L2.44744 16.0363C2.02864 16.4551 1.74317 16.9885 1.62702 17.5692L1.03995 20.5046C0.760062 21.904 1.9939 23.1379 3.39334 22.858L6.32868 22.2709C6.90945 22.1548 7.44285 21.8693 7.86165 21.4505L22.0192 7.29289C23.1908 6.12132 23.1908 4.22183 22.0192 3.05025L20.8477 1.87868ZM18.0192 3.29289C18.4098 2.90237 19.0429 2.90237 19.4335 3.29289L20.605 4.46447C20.9956 4.85499 20.9956 5.48815 20.605 5.87868L17.9334 8.55027L15.3477 5.96448L18.0192 3.29289ZM13.9334 7.3787L3.86165 17.4505C3.72205 17.5901 3.6269 17.7679 3.58818 17.9615L3.00111 20.8968L5.93645 20.3097C6.13004 20.271 6.30784 20.1759 6.44744 20.0363L16.5192 9.96448L13.9334 7.3787Z"
                                                  fill="#5c5c5c"></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>

                            {/*Input*/ }
                            <h6 className="col-span-2 select-none text-gray-600 text-sm md:col-span-1 md:text-base">Username</h6>
                            <Form.Item name="username" className="m-0 p-0 mb-4">
                                <Input placeholder="Input username" />
                            </Form.Item>
                            <h6 className="col-span-2 select-none text-gray-600 text-sm md:col-span-1 md:text-base">Email</h6>
                            <Form.Item name="email" className="m-0 p-0 mb-4">
                                <Input placeholder="Input email address" />
                            </Form.Item>
                            <h6 className="col-span-2 select-none text-gray-600 text-sm md:col-span-1 md:text-base">Password</h6>
                            <Form.Item name="password" className="m-0 p-0 mb-4">
                                <Input.Password placeholder="Password must be at least 6 characters" />
                            </Form.Item>
                            { user.role !== "admin" && (
                                <>
                                    <h6 className="col-span-2 select-none text-gray-600 text-sm md:col-span-1 md:text-base">Barangay</h6>
                                    <Form.Item name="barangay_id" className="m-0 p-0 mb-4">
                                        <Select placeholder="Select barangay" allowClear showSearch
                                                filterOption={ (input, option) => (option?.children.toLowerCase()).includes(input.toLowerCase()) }
                                        >
                                            { barangays.map((barangay) => {
                                                return <Select.Option key={ barangay.id }
                                                                      value={ barangay.id }>{ barangay.name }
                                                </Select.Option>;
                                            }) }
                                        </Select>
                                    </Form.Item>
                                </>
                            ) }
                            {/*Edit mode buttons*/ }
                            <div className="col-span-2 flex justify-end space-x-2">
                                <Button
                                    onClick={ () => {
                                        setIsEditMode(false);
                                        form.resetFields();
                                    } }
                                    className="border-2 border-gray-500 border-opacity-50 hover:bg-blue-50 hover:duration-300 hover:transition-all md:text-sm px-3 py-1 rounded-3xl text-sm"
                                    type="button">
                                    Cancel
                                </Button>
                                <Form.Item className="m-0 p-0">
                                    <Spin spinning={ isLoading }>
                                        <Button
                                            className="bg-Thesis-200 border-2 border-Thesis-100 border-opacity-50 hover:bg-opacity-90 hover:duration-300 hover:transition-all px-3 py-1 rounded-3xl text-sm text-white md:text-sm"
                                            htmlType="submit">
                                            Save
                                        </Button>
                                    </Spin>
                                </Form.Item>
                            </div>
                        </Form>
                    ) }
                </div>
            </div>
        </div>
    );
};