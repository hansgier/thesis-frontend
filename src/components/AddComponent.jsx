import { Button, DatePicker, Form, Input, InputNumber, Select, Slider, Space } from "antd";
import { project_tags } from "../utils/data-components.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const { RangePicker } = DatePicker;

const range_formatter = (value) => `${ value }%`;


export const AddComponent = ({ attributes }) => {
    const [form] = Form.useForm();
    const { isAddProjectMode } = useSelector((store) => store.user);

    useEffect(() => {
        if (isAddProjectMode === false) {
            form.resetFields();
        }
    }, [isAddProjectMode]);

    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <Form scrollToFirstError form={ form } onFinish={ onFinish }>
            <div className="h-[500px] overflow-y-auto pr-3">
                { attributes.map((attribute, index) => {
                    const { name, input_type, placeholder, required, autoSize } = attribute;
                    return (
                        <Form.Item name={ name.toLowerCase() } key={ index } rules={ [{ required }] }>
                            <div className="text-xs mb-2 uppercase font-bold select-none">{ name }</div>
                            { input_type === "text" && <Input placeholder={ placeholder } /> }
                            { input_type === "textarea" && <Input.TextArea autoSize={ autoSize }
                                                                           placeholder={ placeholder } /> }
                            { input_type === "select" &&
                                <Select placeholder={ placeholder } options={ project_tags } /> }
                            { input_type === "multiple_select" &&
                                <Select mode="multiple" placeholder={ placeholder } options={ project_tags } /> }
                            { input_type === "range" &&
                                <Slider
                                    className="mx-3 my-3"
                                    tooltip={ {
                                        range_formatter
                                    } }
                                /> }
                            { input_type === "number" && (
                                <Space direction="vertical" style={ { width: "100%" } }>
                                    <InputNumber min={ 0 }
                                                 placeholder={ name === "Cost" ? "Enter cost in pesos" : placeholder }
                                                 style={ { width: "100%" } } />
                                </Space>
                            ) }
                            { input_type === "date" && (
                                <Space direction="vertical" style={ { width: "100%" } }>
                                    <RangePicker showNow style={ { width: "100%" } } format={ {
                                        format: "MM/DD/YYYY HH:mm"
                                    } } showTime={ {
                                        format: "HH:mm"
                                    } } />
                                </Space>
                            ) }
                            { input_type === "completion_date" && (
                                <Space direction="vertical" style={ { width: "100%" } }>
                                    <DatePicker showTime={ {
                                        format: "HH:mm"
                                    } } style={ { width: "100%" } } />
                                </Space>
                            ) }

                        </Form.Item>
                    );
                }) }
            </div>
            <div className="flex justify-end pr-3">
                <Form.Item>
                    <Button key="reset" type="text" onClick={ () => form.resetFields() }
                            className="hover:border-red-700 hover:!text-red-700 hover:bg-none mr-2">
                        Reset
                    </Button>

                </Form.Item>
                <Form.Item>
                    <Button key="submit" type="default" htmlType="submit" className="bg-cyan-600 text-white">
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};