import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { editUserThunk, getAllUsersThunk } from "./usersThunk.js";
import { message } from "antd";

const initialFiltersState = {
    search: "",
    sort: ""
};

const initialState = {
    isUserFetchLoading: false,
    isUserFetchSuccess: true,
    userFetchErrorUser: "",
    isUserFetchError: false,
    totalUsers: 0,
    users4admin: [],
    selected_user: null,
    ...initialFiltersState
};

export const getAllUsers = createAsyncThunk("users/getAllUsers", getAllUsersThunk);
export const editUser = createAsyncThunk("users/editUser", editUserThunk);


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setSelectedUser: (state, { payload }) => {
            state.selected_user = payload;
        },
        clearUsersStore: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(editUser.pending, (state) => {
                state.isUserFetchSuccess = false;
                state.isUserFetchError = false;
                state.isUserFetchLoading = true;
            })
            .addCase(editUser.fulfilled, (state, { payload }) => {
                state.isUserFetchLoading = false;
                state.isUserFetchError = false;
                state.isUserFetchSuccess = true;
                message.success({ content: "User edited successfully", key: "editable-user" });
            })
            .addCase(editUser.rejected, (state, { payload }) => {
                state.isUserFetchLoading = false;
                state.isUserFetchSuccess = false;
                state.isUserFetchError = true;
                state.userFetchErrorUser = payload;
                message.error({ content: "Error user edit", key: "editable-user" });
            })

            .addCase(getAllUsers.pending, (state) => {
                state.isUserFetchSuccess = false;
                state.isUserFetchError = false;
                state.isUserFetchLoading = true;
            })
            .addCase(getAllUsers.fulfilled, (state, { payload }) => {
                state.isUserFetchLoading = false;
                state.isUserFetchError = false;
                state.isUserFetchSuccess = true;
                state.users4admin = payload.users.length < 1 ? [] : payload?.users.slice().sort((a, b) => {
                    const nameA = a.username.toUpperCase();
                    const nameB = b.username.toUpperCase();

                    // If both names contain "CITY GOVERNMENT" or neither does, sort alphabetically
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                state.totalUsers = payload.count;
            })
            .addCase(getAllUsers.rejected, (state, { payload }) => {
                state.isUserFetchLoading = false;
                state.isUserFetchSuccess = false;
                state.isUserFetchError = true;
                state.userFetchErrorUser = payload;
            });
    }
});

export const {
    setSelectedUser,
    clearUsersStore
} = usersSlice.actions;
export default usersSlice.reducer;