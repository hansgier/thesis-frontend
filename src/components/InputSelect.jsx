import { Select, Space } from "antd";

export const InputSelect = ({ placeholder, options, mode }) => {
    return (
        <>
            <Space
                style={ {
                    width: "100%"
                } }
                direction="vertical"
            >
                <Select
                    mode={ mode || null }
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