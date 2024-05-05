import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, Modal } from "antd";
import { toggleFeedback } from "../app/features/user/userSlice.js";

export const Feedback = () => {
    const { isFeedbackOpen } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const handleSubmit = ({ feedback_title, feedback_content }) => {
        console.log(feedback_title, feedback_content);
    };

    return (
        <Modal centered
               open={ isFeedbackOpen }
               onOk={ handleSubmit }
               onCancel={ () => {
                   form.resetFields();
                   dispatch(toggleFeedback());
               } }
               footer={ null }
               title="Send Feedback"
        >
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
    );
};