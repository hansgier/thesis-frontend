import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Form, Input, Modal, Row, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { toggleFeedback } from "../app/features/user/userSlice.js";
import { useEffect, useState } from "react";

export const Feedback = () => {
    const { isFeedbackOpen } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);
                reader.onload = () => resolve(reader.result);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    useEffect(() => {
        form.resetFields();
    }, [isFeedbackOpen]);

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
            <Form form={ form } onFinish={ handleSubmit } layout="vertical">
                <Row>
                    <Col flex="1">
                        <Form.Item
                            name="feedback_title"
                            rules={ [
                                { required: true, message: "Title is required" }
                            ] }
                        >
                            <Input placeholder="Enter your title..." />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col flex="1">
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
                    </Col>
                </Row>
                <Row>
                    <Col flex="1">
                        <Form.Item
                            name="feedback_upload"
                        >
                            <ImgCrop rotationSlider>
                                <Upload
                                    listType="picture-card"
                                    fileList={ fileList }
                                    onChange={ onChange }
                                    onPreview={ onPreview }
                                >
                                    { fileList.length < 5 && "+ Upload" }
                                </Upload>
                            </ImgCrop>
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col flex="1">
                        <Form.Item className="flex justify-end">
                            <Button key="cancel" type="text" onClick={ () => dispatch(toggleFeedback()) }
                                    className="hover:border-red-700 hover:!text-red-700 hover:bg-none mr-2">
                                Cancel
                            </Button>
                            <Button key="submit" type="default" htmlType="submit" className="bg-cyan-600 text-white">
                                Submit
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
};