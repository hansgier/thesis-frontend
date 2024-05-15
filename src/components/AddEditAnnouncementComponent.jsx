import { Button, Form, Input, Select } from "antd";
import { announcement_types, project_attributes } from "../utils/data-components.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
//TODO: get the values of announcement for editing mode


export const AddEditAnnouncementComponent = ({ mode }) => {
    const [form] = Form.useForm();
    const { isAddAnnouncementMode } = useSelector((store) => store.auth);

    useEffect(() => {
        if (isAddAnnouncementMode === false) {
            form.resetFields();
        }
    }, [isAddAnnouncementMode]);

    const onFinish = (values) => {
        console.log(values);
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
                    rules={ [{ required: true, message: "Title is required" }] }
                >
                    <Input placeholder="Enter a title" />
                </Form.Item>

                {/*----------CONTENT----------*/ }
                <div className="text-xs mb-1 uppercase font-bold select-none">CONTENT</div>
                <Form.Item
                    name="content"
                    rules={ [{ required: true, message: "Content is required" }] }
                >
                    <Input.TextArea autoSize={ project_attributes[1].autoSize }
                                    placeholder="Write the content of your announcement" />
                </Form.Item>

                {/*----------TYPE----------*/ }
                <div className="text-xs mb-1 uppercase font-bold select-none">TYPE</div>
                <Form.Item
                    name="type"
                    rules={ [{ required: true, message: "Type of announcement is required" }] }

                >
                    <Select placeholder="Select type of announcement" options={ announcement_types } />
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
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};