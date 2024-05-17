import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsersThunk } from "./usersThunk.js";
import { addToLocalStorage, getItemLocalStorage } from "../../../utils/localStorage.jsx";

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
    users4admin: getItemLocalStorage("users"),
    ...initialFiltersState
};

export const getAllUsers = createAsyncThunk("users/getAllUsers", getAllUsersThunk);


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setSelectedUser: (state, { payload }) => {
            state.selectedUser = payload;
        },
        resetUserConvState: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.isUserFetchSuccess = false;
                state.isUserFetchError = false;
                state.isUserFetchLoading = true;
            })
            .addCase(getAllUsers.fulfilled, (state, { payload }) => {
                state.isUserFetchLoading = false;
                state.isUserFetchError = false;
                state.isUserFetchSuccess = true;
                state.users4admin = payload.users;
                state.totalUsers = payload.count;
                addToLocalStorage(payload.users, "users");
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
    resetUserConvState
} = usersSlice.actions;
export default usersSlice.reducer;