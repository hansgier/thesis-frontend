import { AddEditUser } from "../components/index.jsx";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../app/features/users/usersSlice.js";
import { getAllBarangays } from "../app/features/users/barangaysSlice.js";
import { UsersTable } from "./users/index.jsx";


export const Users = () => {
    const { users4admin, totalUsers, isUserFetchLoading, isUserFetchSuccess } = useSelector((store) => store.users);
    const { barangays } = useSelector((store) => store.barangays);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedUserIds, setSelectedUserIds] = useState([]);
    const location = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (location.pathname !== "/project" || location.pathname !== "/singleproject") {
            sessionStorage.setItem("scrollPosition", "0");
        }
        dispatch(getAllUsers());
        dispatch(getAllBarangays());
    }, []);

    return (
        <div className="h-full max-h-full overflow-y-scroll pt-4 px-4 md:px-6">
            <div className="flex w-full">
                <div className="flex flex-1 items-center space-x-2">
                    <h1 className="font-bold select-none text-base md:text-xl">All Users</h1>
                    <h4 className="select-none text-gray-500 text-xs md:text-sm">
                        |&nbsp; { users4admin.filter((person) => person.role !== "admin").length }
                    </h4>
                </div>
                {/*Add New User*/ }
                <div className="flex space-x-2 items-center">
                    <AddEditUser mode="add" />
                </div>
            </div>
            <div className="mt-4">
                <div className="h-full mb-6 overflow-x-auto relative shadow-md sm:rounded-lg">
                    <UsersTable />
                </div>
                {/*<div className="flex mb-6">*/ }
                {/*    <div className="flex-1">*/ }
                {/*        <Pagination defaultCurrent={ currentPage } total={ totalUsers } showSizeChanger={ false } />*/ }
                {/*    </div>*/ }
                {/*    <div className="flex items-center justify-center">*/ }
                {/*        <p className="select-none text-gray-500 text-xs md:text-sm">Showing 10 of 127</p>*/ }
                {/*    </div>*/ }
                {/*</div>*/ }
            </div>
        </div>
    );
};