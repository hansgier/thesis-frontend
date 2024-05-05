import { Button, Form, Input, Modal } from "antd";
import { IoAdd } from "react-icons/io5";
import { useState } from "react";

export const AddNewUser = () => {
    const [openAddNewUserModal, setOpenAddNewUserModal] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <>
            <Button onClick={ () => setOpenAddNewUserModal(!openAddNewUserModal) } type="default"
                    icon={ <IoAdd size={ 18 } className="text-white hover:text-cyan-500" /> }
                    className="bg-cyan-500 border-bg-cyan-500 border-0 hover:bg-cyan-300" />
            <Modal title="Add New User" centered open={ openAddNewUserModal }
                   onOk={ () => setOpenAddNewUserModal(false) }
                   onCancel={ () => setOpenAddNewUserModal(false) } footer={ null }>
                <Form form={ form } onFinish={ handleSubmit }>
                    <Form.Item
                        name="feedback_title"
                        rules={ [
                            { required: true, message: "Title is required" }
                        ] }
                    >
                        <Input placeholder="Enter your title..." />
                    </Form.Item>
                    <Form.Item
                        name="feedback_content"
                        rules={ [
                            { required: true, message: "Content is required" }
                        ] }
                    >
                        <Input.TextArea
                            placeholder="Enter your feedback message..."
                            autoSize={ { minRows: 2, maxRows: 6 } }
                        />
                    </Form.Item>
                    <Form.Item className="flex justify-end">
                        <Button key="submit" type="default" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};