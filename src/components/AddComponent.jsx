import { Button, DatePicker, Form, Input, InputNumber, Select, Slider, Space } from "antd";
import { project_tags } from "../utils/data-components.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const { RangePicker } = DatePicker;

const range_formatter = (value) => `${ value }%`;


export const AddComponent = ({ attributes }) => {
    const [form] = Form.useForm();
    const { isAddProjectMode } = useSelector((store) => store.user);
    const [dates, setDates] = useState([]);
    const [completionDate, setCompletionDate] = useState(null);

    // Disable dates for the start date that are after the current end date
    const disabledStartDate = (current) => {
        return current && current > dates[1];
    };

    // Disable dates for the end date that are before the current start date
    const disabledEndDate = (current) => {
        return current && current < dates[0];
    };

    // Disable dates for the completion date that are before the start date
    const disabledCompletionDate = (current) => {
        return current && current < dates[0];
    };


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
                    const { name, value, input_type, placeholder, required, autoSize } = attribute;
                    return (
                        <Form.Item name={ value } key={ index }>
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
                                    <InputNumber
                                        min={ 0 }
                                        prefix="₱"
                                        // placeholder={ name === "Cost" ? "Enter cost in pesos" : placeholder }
                                        decimalSeparator="."
                                        style={ { width: "100%" } }
                                        keyboard={ true }
                                        stringMode
                                        defaultValue={ 0 }
                                    />
                                </Space>
                            ) }
                            { input_type === "date" && (
                                <Space direction="vertical" style={ { width: "100%" } }>
                                    <RangePicker
                                        showNow
                                        style={ { width: "100%" } }
                                        format={ {
                                            format: "MMMM DD, YYYY hh:mm A"
                                        } }
                                        showTime={ {
                                            format: "hh:mm A"
                                        } }
                                        disabledDate={ (current) => {
                                            // If there is no start date selected, don't disable any dates
                                            if (!dates[0]) {
                                                return false;
                                            }
                                            // Use disabledStartDate to disable dates after the selected end date
                                            if (dates[1]) {
                                                return current && current > dates[1].endOf("day");
                                            }
                                            // Use disabledEndDate to disable dates before the selected start date
                                            return current && current < dates[0].startOf("day");
                                        } }
                                        onCalendarChange={ (val) => setDates(val) }
                                    />
                                </Space>
                            ) }
                            { input_type === "completion_date" && (
                                <Space direction="vertical" style={ { width: "100%" } }>
                                    <DatePicker
                                        format={ {
                                            format: "MMMM DD, YYYY hh:mm A"
                                        } }
                                        showTime={ {
                                            format: "hh:mm A"
                                        } }
                                        style={ { width: "100%" } }
                                        disabledDate={ disabledCompletionDate }
                                        onChange={ (val) => setCompletionDate(val) }
                                    />
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