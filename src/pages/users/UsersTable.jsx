import { Popconfirm, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AddEditUser } from "../../components/index.jsx";
import React, { useState } from "react";
import { NameCell } from "./NameCell.jsx";
import { EmailCell } from "./EmailCell.jsx";
import { RoleCell } from "./RoleCell.jsx";
import { BarangayCell } from "./BarangayCell.jsx";
import { deleteUser } from "../../app/features/users/usersSlice.js";


export const UsersTable = () => {
    const { users4admin, isUserFetchLoading } = useSelector((store) => store.users);
    const { barangays } = useSelector((store) => store.barangays);
    const dispatch = useDispatch();

    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    return (
        <Table
            dataSource={ users4admin.filter((person) => person.role !== "admin").map((person) => {
                return {
                    key: person.id,
                    name: person.username,
                    email: person.email,
                    role: person.role,
                    barangay: barangays.find((barangay) => barangay.id === person.barangay_id)?.name
                };
            }) }
            columns={ [
                {
                    title: "NAME",
                    dataIndex: "name",
                    key: "name",
                    render: (text, record, index) => {
                        return <>
                            <NameCell value={ text } />
                            <EmailCell value={ record?.email } />
                        </>;
                    },
                    defaultSortOrder: "DESCENDING",
                    sorter: (a, b) => {
                        return a.name.toUpperCase() === b.name.toUpperCase() ? 0 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
                    }
                },
                {
                    title: "ROLE",
                    dataIndex: "role",
                    key: "role",
                    render: (text, record, index) => {
                        return <RoleCell text={ text } record={ record } />;
                    },
                    filters: [
                        {
                            text: "Assistant Admin",
                            value: "assistant_admin"
                        },
                        {
                            text: "Barangay",
                            value: "barangay"
                        },
                        {
                            text: "Resident/Visitor",
                            value: "resident"
                        }
                    ],
                    onFilter: (value, record) => record.role.startsWith(value)
                },
                {
                    title: "BARANGAY",
                    dataIndex: "barangay",
                    key: "barangay",
                    render: (text, record, index) => {
                        return <BarangayCell value={ text } />;
                    },
                    filters: barangays.map((barangay) => {
                        return {
                            text: barangay.name.charAt(0).toUpperCase() + barangay.name.slice(1),
                            value: barangay.id
                        };
                    }),
                    filterSearch: true,
                    onFilter: (value, record) => record.barangay?.startsWith(barangays.find((barangay) => barangay?.id === value)?.name)
                },
                {
                    title: "ACTION",
                    key: "action",
                    render: (_, record) => {
                        return <div className="flex">
                            <AddEditUser mode="edit" user={ users4admin.find((person) => person.id === record.key) }
                                         selectedRowKeys={ selectedRowKeys } />
                            <Popconfirm title="Delete User"
                                        description="Are you sure you want to delete this user?"
                                        onConfirm={ () => dispatch(deleteUser(record.key)) }
                            >
                                <button type="button">
                                    <svg viewBox="0 0 1024 1024"
                                         xmlns="http://www.w3.org/2000/svg"
                                         fill="#000000"
                                         className="w-5">
                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                           strokeLinejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            <path fill="#d60000"
                                                  d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path>
                                        </g>
                                    </svg>
                                </button>
                            </Popconfirm>
                        </div>;
                    },
                    shouldCellUpdate: false
                }
            ] }
            rowSelection={ {
                selectedRowKeys,
                onChange: (newSelectedRowKeys) => {
                    setSelectedRowKeys(newSelectedRowKeys);
                    console.log(selectedRowKeys);
                },
                columnWidth: "60px",
                renderCell: (checked, record, index, originNode) => {
                    return <CheckboxCell originNode={ originNode } checked={ checked } record={ record }
                                         index={ index } />;
                }
            } }
            rowKey={ (record) => record?.key }
            onHeaderRow={ (column, index) => {
                if (index === 0) {
                    return {
                        className: "text-xs uppercase"
                    };
                }
                return {};
            } }
            pagination={ {
                position: ["bottomCenter"]
            } }
            loading={ isUserFetchLoading }
        />
    );
};

const CheckboxCell = React.memo(({ originNode, checked, record, index }) => {
    return originNode;
}, (prevProps, nextProps) => {
    return prevProps.checked === nextProps.checked && prevProps.index === nextProps.index && prevProps.record.key === nextProps.record.key;
});