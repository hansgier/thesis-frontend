import React, { useRef, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Popconfirm, Space, Table } from "antd";
import Highlighter from "react-highlight-words";
import { useDispatch, useSelector } from "react-redux";
import { AddEditUser } from "../../components/index.jsx";
import { NameCell } from "./NameCell.jsx";
import { EmailCell } from "./EmailCell.jsx";
import { RoleCell } from "./RoleCell.jsx";
import { BarangayCell } from "./BarangayCell.jsx";
import { deleteUser } from "../../app/features/users/usersSlice.js";

export const UsersTable = () => {
    const { users4admin, isUserFetchLoading } = useSelector((store) => store.users);
    const { barangays } = useSelector((store) => store.barangays);
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const searchInput = useRef(null);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns = [
        {
            title: "NAME",
            dataIndex: "name",
            key: "name",
            ...getColumnSearchProps('name'),
            sorter: (a, b) => a.name.localeCompare(b.name),
            render: (text, record) => (
                <>
                    <NameCell value={text} />
                    <EmailCell value={record.email} />
                </>
            ),
        },
        {
            title: "ROLE",
            dataIndex: "role",
            key: "role",
            // ...getColumnSearchProps('role'),
            render: (text, record) => <RoleCell text={text} record={record} />,
            filters: [
                { text: "Assistant Admin", value: "assistant_admin" },
                { text: "Barangay", value: "barangay" },
                { text: "Resident/Visitor", value: "resident" }
            ],
            onFilter: (value, record) => record.role.startsWith(value)
        },
        {
            title: "BARANGAY",
            dataIndex: "barangay",
            key: "barangay",
            render: (text) => <BarangayCell value={text} />,
            filters: barangays.map((barangay) => ({
                text: barangay.name.charAt(0).toUpperCase() + barangay.name.slice(1),
                value: barangay.id
            })),
            filterSearch: true,
            onFilter: (value, record) => record.barangay?.startsWith(barangays.find((barangay) => barangay?.id === value)?.name),

        },
        {
            title: "ACTION",
            key: "action",
            render: (_, record) => (
                <div className="flex">
                    <AddEditUser mode="edit" user={users4admin.find((person) => person.id === record.key)} selectedRowKeys={selectedRowKeys} />
                    <Popconfirm
                        title="Delete User"
                        description="Are you sure you want to delete this user?"
                        onConfirm={() => dispatch(deleteUser(record.key))}
                    >
                        <button type="button">
                            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="w-5">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path fill="#d60000" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>
                                </g>
                            </svg>
                        </button>
                    </Popconfirm>
                </div>
            ),
        }
    ];

    const dataSource = users4admin
        .filter((person) => person.role !== "admin")
        .map((person) => ({
            key: person.id,
            name: person.username,
            email: person.email,
            role: person.role,
            barangay: barangays.find((barangay) => barangay.id === person.barangay_id)?.name
        }));

    return (
        <Table
            columns={columns}
            dataSource={dataSource}
            rowSelection={{
                selectedRowKeys,
                onChange: (newSelectedRowKeys) => {
                    setSelectedRowKeys(newSelectedRowKeys);
                    console.log(selectedRowKeys);
                },
                columnWidth: "60px",
                renderCell: (checked, record, index, originNode) => (
                    <CheckboxCell originNode={originNode} checked={checked} record={record} index={index} />
                )
            }}
            rowKey={(record) => record?.key}
            onHeaderRow={(column, index) => ({
                className: index === 0 ? "text-xs uppercase" : ""
            })}
            pagination={{
                position: ["bottomCenter"]
            }}
            loading={isUserFetchLoading}
        />
    );
};

const CheckboxCell = React.memo(({ originNode, checked, record, index }) => {
    return originNode;
}, (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked && prevProps.index === nextProps.index && prevProps.record.key === nextProps.record.key;
});