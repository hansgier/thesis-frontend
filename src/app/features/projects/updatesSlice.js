import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    createProjectUpdateThunk,
    deleteProjectUpdateThunk,
    editProjectUpdateThunk,
    getAllProjectUpdatesThunk
} from "./updatesThunk.js";

const initialFiltersState = {
    search: "",
    sort: "",
    updateed_by: ""
};

const initialState = {
    isUpdateFetchLoading: false,
    isUpdateFetchSuccess: true,
    updateFetchErrorMessage: "",
    isUpdateFetchError: false,
    totalUpdates: 0,
    updates: [],
    selectedUpdate: null,
    ...initialFiltersState
};

export const getAllProjectUpdates = createAsyncThunk("updates/getAllProjectUpdatesThunk", getAllProjectUpdatesThunk);
export const editProjectUpdate = createAsyncThunk("updates/editProjectUpdateThunk", editProjectUpdateThunk);
export const createProjectUpdate = createAsyncThunk("updates/createProjectUpdateThunk", createProjectUpdateThunk);
export const deleteProjectUpdate = createAsyncThunk("updates/deleteProjectUpdateThunk", deleteProjectUpdateThunk);


const updatesSlice = createSlice({
    name: "updates",
    initialState,
    reducers: {
        setSelectedUpdate: (state, { payload }) => {
            state.selectedUpdate = payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(deleteProjectUpdate.pending, (state) => {
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = false;
                state.isUpdateFetchLoading = true;
            })
            .addCase(deleteProjectUpdate.fulfilled, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchError = false;
                state.isUpdateFetchSuccess = true;
            })
            .addCase(deleteProjectUpdate.rejected, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = true;
                state.updateFetchErrorMessage = payload;
            })

            .addCase(createProjectUpdate.pending, (state) => {
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = false;
                state.isUpdateFetchLoading = true;
            })
            .addCase(createProjectUpdate.fulfilled, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchError = false;
                state.isUpdateFetchSuccess = true;
            })
            .addCase(createProjectUpdate.rejected, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = true;
                state.updateFetchErrorMessage = payload;
            })

            .addCase(editProjectUpdate.pending, (state) => {
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = false;
                state.isUpdateFetchLoading = true;
            })
            .addCase(editProjectUpdate.fulfilled, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchError = false;
                state.isUpdateFetchSuccess = true;
            })
            .addCase(editProjectUpdate.rejected, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = true;
                state.updateFetchErrorMessage = payload;
            })

            .addCase(getAllProjectUpdates.pending, (state) => {
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = false;
                state.isUpdateFetchLoading = true;
            })
            .addCase(getAllProjectUpdates.fulfilled, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchError = false;
                state.isUpdateFetchSuccess = true;
                state.updates = payload.updates ? payload.updates.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) : [];
                state.totalUpdates = payload.totalCount ? payload.totalCount : 0;
            })
            .addCase(getAllProjectUpdates.rejected, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = true;
                state.updateFetchErrorMessage = payload;
            });

    }
});

export const {
    setSelectedUpdate
} = updatesSlice.actions;
export default updatesSlice.reducer;