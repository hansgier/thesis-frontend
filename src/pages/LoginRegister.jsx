import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Form, Input, Select } from "antd";
import { loginUser, registerUser } from "../app/features/user/userSlice.js";
import indexbg from "../assets/indexbg.png";

const initialState = {
    username: "",
    email: "",
    password: "",
    barangay: "",
    isMember: true
};

export const LoginRegister = () => {
    const { isLoading, user } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const [isLoginMode, setIsLoginMode] = useState(true);

    const onFinish = (values) => {
        if (isLoginMode) {
            dispatch(loginUser({ email: values.email, password: values.password }));
        } else {
            dispatch(registerUser({
                username: values.username,
                email: values.email,
                password: values.password,
                barangay: values.barangay
            }));
        }
    };

    return (
        <div
            className="flex flex-col gap-4 h-screen items-center justify-center overflow-hidden relative text-center w-full"
            style={ {
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            } }>
            <img src={ indexbg } className="fixed h-screen rotate-180 w-full" loading="lazy" />
            <div className="bg-transparent flex flex-col h-full items-center justify-center w-full z-50">
                <div className="flex items-center justify-center">
                    <img alt="Logo" width="100" height="100" className="bg-cover rounded-xl sm:mb-2"
                         src="https://www.ormoc.gov.ph/assets/img/official_seal.webp" loading="lazy" />
                </div>
                <div className="space-y-4">
                    <h1 className="font-bold px-3 text-3xl text-black tracking-tighter sm:px-0 sm:text-4xl md:text-5xl">Ormoc
                                                                                                                        City
                                                                                                                        Project
                                                                                                                        Information
                                                                                                                        System</h1>
                    <p className="px-4 text-base text-gray-700 w-full sm:text-normal md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Access
                                                                                                                                                 project
                                                                                                                                                 information
                                                                                                                                                 in
                                                                                                                                                 Ormoc
                                                                                                                                                 City.
                                                                                                                                                 Sign
                                                                                                                                                 up
                                                                                                                                                 or
                                                                                                                                                 log
                                                                                                                                                 in
                                                                                                                                                 to
                                                                                                                                                 get
                                                                                                                                                 started.</p>
                </div>
                <Form
                    form={ form }
                    onFinish={ onFinish }
                    className="border-Thesis-200 border-opacity-75 border-solid max-w-sm mt-4 pt-4 px-4 space-y-7 w-full sm:px-0">
                    <div className="space-y-4">
                        { isLoginMode ? (
                            <>
                                <Form.Item name="email" rules={ [{
                                    required: true,
                                    message: "Email is required"
                                }] }>
                                    <Input placeholder="Email Address"
                                           id="index_input"
                                           className="bg-transparent hover:bg-transparent focus:bg-transparent focus-within:bg-transparent indexinput border-t-0 border-l-0 border-r-0 border-b-2 rounded-none px-4 py-2 outline-0 focus-within:outline-0 focus-within:ring-0 focus:!outline-0 focus:border-t-0 ring-0" />
                                </Form.Item>
                                <Form.Item name="password" rules={ [{
                                    required: true,
                                    message: "Password is required"
                                }] }>
                                    <Input.Password placeholder="Password"
                                                    rootClassName="index-input-password"
                                                    className="bg-transparent hover:bg-transparent focus:bg-transparent focus-within:bg-transparent indexinput border-t-0 border-l-0 border-r-0 border-b-2 rounded-none px-4 py-2 outline-0 focus-within:outline-0 focus-within:ring-0 focus:!outline-0 focus:border-t-0" />
                                </Form.Item>
                            </>
                        ) : (
                            <>
                                <Form.Item name="username" rules={ [{
                                    required: true,
                                    message: "Username is required"
                                }] }>
                                    <Input placeholder="Username"
                                           id="index_input"
                                           className="bg-transparent hover:bg-transparent focus:bg-transparent focus-within:bg-transparent indexinput border-t-0 border-l-0 border-r-0 border-b-2 rounded-none px-4 py-2 outline-0 focus-within:outline-0 focus-within:ring-0 focus:!outline-0 focus:border-t-0 ring-0" />
                                </Form.Item>
                                <Form.Item name="email" rules={ [{
                                    required: true,
                                    message: "Email is required"
                                }] }>
                                    <Input placeholder="Email Address"
                                           id="index_input"
                                           className="bg-transparent hover:bg-transparent focus:bg-transparent focus-within:bg-transparent indexinput border-t-0 border-l-0 border-r-0 border-b-2 rounded-none px-4 py-2 outline-0 focus-within:outline-0 focus-within:ring-0 focus:!outline-0 focus:border-t-0 ring-0" />
                                </Form.Item>
                                <Form.Item name="password" rules={ [{
                                    required: true,
                                    message: "Password is required"
                                }] }>
                                    <Input.Password placeholder="Password"
                                                    rootClassName="index-input-password"
                                                    className="bg-transparent hover:bg-transparent focus:bg-transparent focus-within:bg-transparent indexinput border-t-0 border-l-0 border-r-0 border-b-2 rounded-none px-4 py-2 outline-0 focus-within:outline-0 focus-within:ring-0 focus:!outline-0 focus:border-t-0" />
                                </Form.Item>
                                <Form.Item name="barangay" rules={ [{
                                    required: true,
                                    message: "Please select a barangay. Choose guest if you're a visitor"
                                }] }>
                                    <Select placeholder="Barangay"
                                            options={ [
                                                {
                                                    label: "Guest",
                                                    value: "guest"
                                                },
                                                {
                                                    label: "Linao",
                                                    value: "linao"
                                                }
                                            ] }
                                            rootClassName="index-select-barangay"
                                            popupClassName="tae"
                                    />
                                </Form.Item>
                            </>
                        ) }
                    </div>
                    <Form.Item>
                        <button
                            className="bg-gradient-to-r font-bold font-sans from-[#24C6DC] h-11 hover:bg-gradient-to-l hover:duration-300 hover:ease-in-out hover:from-Thesis-300 hover:to-blue-300 hover:transition-all px-4 py-2 rounded-sm text-base text-indigo-100 to-[#514A9D] tracking-widest uppercase w-full"
                            type="submit">{ isLoginMode ? "Sign in" : "Register" }
                        </button>
                    </Form.Item>
                </Form>
                <div className="group max-w-sm mt-4 px-4 space-y-4 w-full sm:px-0 md:px-0">
                    <NavLink
                        to="/dashboard"
                        className="bg-opacity-25border-opacity-100 border-2 border-Thesis-100 border-solid font-medium hover:border-Thesis-300 hover:duration-300 hover:ease-in-out hover:text-Thesis-300 hover:transition-all inline-block px-4 py-2 ring-0 ring-offset-0 rounded-sm text-base text-black w-full md:px-0"
                    >
                        Continue as a guest
                    </NavLink>
                </div>
                <div className="max-w-sm mt-6 space-y-4 w-full" data-id="15">
                    <p className="flex flex-col text-base text-gray-600 sm:block" data-id="16">
                        { isLoginMode ? "Don't have an account?" : "Already have an account?" }
                        <button
                            onClick={ () => {
                                setIsLoginMode(!isLoginMode);
                                form.resetFields();
                            } }
                            className="font-bold hover:text-Thesis-300 text-Thesis-200 underline underline-offset-2"
                            data-id="17">
                            { isLoginMode ? "Sign up for an account" : "Sign in" }
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};