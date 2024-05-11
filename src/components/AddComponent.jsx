import { Button, DatePicker, Form, Input, InputNumber, Select, Slider, Space } from "antd";
import { project_attributes, project_status, project_tags } from "../utils/data-components.jsx";
import { useSelector } from "react-redux";
import { useEffect, useReducer } from "react";

const range_formatter = (value) => `${ value }%`;

const initialState = {
    title: "",
    description: "",
    progress: 0,
    barangayIds: [],
    tagsIds: [],
    start_date: "",
    due_date: "",
    completion_date: "",
    status: "",
    cost: 0,
    implementing_agency: "",
    contract_term: "",
    contractor: ""
};

const reducer = (state, action) => {
    switch (action.type) {
        case "new_title":
            return { ...state, title: action.payload };
        case "new_description":
            return { ...state, description: action.payload };
        case "new_progress":
            return { ...state, progress: action.payload };
        case "new_barangayIds":
            return { ...state, barangayIds: action.payload };
        case "new_tagsIds":
            return { ...state, tagsIds: action.payload };
        case "new_start_date":
            return { ...state, start_date: action.payload };
        case "new_due_date":
            return { ...state, due_date: action.payload };
        case "new_completion_date":
            return {
                ...state,
                completion_date: action.payload,
                status: action.payload ? project_status[1].value : state.status
            };
        case "new_status":
            return { ...state, status: action.payload };
        case "new_cost":
            return { ...state, cost: parseFloat(action.payload) };
        case "new_implementing_agency":
            return { ...state, implementing_agency: action.payload };
        case "new_contract_term":
            return { ...state, contract_term: action.payload };
        case "new_contractor":
            return { ...state, contractor: action.payload };
        default:
            throw new Error;
    }
};

export const AddComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [form] = Form.useForm();
    const { isAddProjectMode } = useSelector((store) => store.user);

    const disabledStartDate = (current, dueDate) => {
        if (!dueDate) {
            return false;
        }
        return current.isAfter(dueDate);
    };

    const disabledEndDate = (current, startDate) => {
        if (!startDate) {
            return false;
        }
        return current.isBefore(startDate);
    };

    const disabledCompletionDate = (current) => {
        if (!state.start_date) {
            return false;
        }
        return current && current.isBefore(state.start_date, "day");
    };

    useEffect(() => {
        if (isAddProjectMode === false) {
            form.resetFields();
        }
    }, [isAddProjectMode]);

    useEffect(() => {
        if (state.completion_date) {
            dispatch({ type: "new_status", payload: "completed" });
        } else {
            dispatch({ type: "new_status", payload: "" });
        }
    }, [state.completion_date]);

    const handleSubmit = () => {
        console.log(state);
    };


    return (
        <Form scrollToFirstError form={ form }>
            <div className="h-[500px] overflow-y-auto pr-3">
                { project_attributes.map((attribute, index) => {
                    const { label, name, value, input_type, placeholder, required, required_msg, autoSize } = attribute;
                    return (
                        <Form.Item name={ name } key={ index } required={ true }>
                            <div className="text-xs mb-2 uppercase font-bold select-none">{ label }</div>
                            { input_type === "text" &&
                                <Input onChange={ (e) => dispatch({ type: `new_${ value }`, payload: e.target.value }) }
                                       placeholder={ placeholder } /> }
                            { input_type === "textarea" &&
                                <Input.TextArea autoSize={ autoSize } placeholder={ placeholder }
                                                onChange={ (e) => dispatch({
                                                    type: "new_description",
                                                    payload: e.target.value
                                                }) } /> }
                            { input_type === "select" &&
                                <Select
                                    placeholder={ placeholder }
                                    options={ value === "status" && project_status }
                                    onChange={ (v) => dispatch({ type: `new_${ value }`, payload: v }) }
                                    value={ state.status || null }
                                /> }
                            { input_type === "multiple_select" &&
                                <Select
                                    mode="multiple"
                                    placeholder={ placeholder }
                                    options={ project_tags }
                                    onChange={ (v) => dispatch({ type: `new_${ value }`, payload: v }) }
                                /> }
                            { input_type === "range" &&
                                <Slider
                                    className="mx-3 my-3"
                                    tooltip={ { range_formatter } }
                                    onChange={ (v) => dispatch({ type: "new_progress", payload: v }) }
                                /> }
                            { input_type === "cost" && (
                                <Space direction="vertical" style={ { width: "100%" } }>
                                    <InputNumber
                                        min={ 0 }
                                        prefix={ value === "cost" ? "₱" : null }
                                        placeholder={ value === "cost" ? "0.00" : null }
                                        decimalSeparator="."
                                        style={ { width: "100%" } }
                                        keyboard={ true }
                                        stringMode={ true }
                                        step={ 0.01 }
                                        formatter={ value === "cost" ? (v) => v.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                            : null }
                                        parser={ (v) => v.replace(/\₱\s?|(,*)/g, "") }
                                        onChange={ (v) => {
                                            dispatch({ type: "new_cost", payload: parseFloat(v) });
                                        } }
                                    />
                                </Space>
                            ) }
                            { input_type === "date" && (
                                <Space direction="vertical" style={ { width: "100%" } }>
                                    <DatePicker
                                        showNow
                                        style={ { width: "100%" } }
                                        format={ {
                                            format: "MMMM DD, YYYY hh:mm A"
                                        } }
                                        showTime={ {
                                            format: "hh:mm A"
                                        } }
                                        disabledDate={
                                            value === "start_date"
                                                ? (current) => disabledStartDate(current, state.due_date)
                                                : value === "due_date"
                                                    ? (current) => disabledEndDate(current, state.start_date)
                                                    : value === "completion_date"
                                                        ? disabledCompletionDate
                                                        : null
                                        }
                                        onChange={ (v) => {
                                            if (value === "start_date") {
                                                dispatch({ type: "new_start_date", payload: v });
                                            } else if (value === "due_date") {
                                                dispatch({ type: "new_due_date", payload: v });
                                            } else if (value === "completion_date") {
                                                dispatch({
                                                    type: "new_completion_date",
                                                    payload: v
                                                });
                                            }
                                        } }
                                    />
                                </Space>
                            ) }
                        </Form.Item>
                    );
                }) }
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
                    <Button onClick={ handleSubmit } key="submit" type="default" htmlType="submit"
                            className="bg-cyan-600 text-white">
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};