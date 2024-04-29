import { Select, Space } from "antd";

export const MultiSelect = ({ placeholder, options }) => {
    return (
        <>
            <Space
                style={ {
                    width: "100%"
                } }
                direction="vertical"
            >
                <Select
                    mode="multiple"
                    allowClear
                    className="text-sm"
                    style={ {
                        width: "100%"
                    } }
                    placeholder={ placeholder }
                    options={ options }
                >
                </Select>
            </Space>
        </>
    );
};