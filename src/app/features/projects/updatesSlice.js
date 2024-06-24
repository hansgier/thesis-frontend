import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    createProjectUpdateThunk,
    deleteProjectUpdateThunk,
    editProjectUpdateThunk,
    getAllProjectUpdatesThunk
} from "./updatesThunk.js";
import { clearUploadedMedia } from "../media/mediaSlice.js";
import { message } from "antd";

const initialFiltersState = {
    search: "",
    sort: "newest",
    updated_by: ""
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
        },
        clearUpdateStore: () => initialState,
        sortUpdates: (state, action) => {
            state.sort = action.payload;

            if (action.payload === "newest") {
                state.updates = state.updates.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            } else if (action.payload === "oldest") {
                state.updates = state.updates.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            }
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
                message.success({ content: "Update deleted!", key: "deletable_update" });
            })
            .addCase(deleteProjectUpdate.rejected, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = true;
                state.updateFetchErrorMessage = payload;
                message.error({ content: "Error update delete", key: "deletable_update" });
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
                message.success({ content: "Update created!", key: "creatable_update" });
                clearUploadedMedia();
            })
            .addCase(createProjectUpdate.rejected, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = true;
                state.updateFetchErrorMessage = payload;
                message.error({ content: "Error update create!", key: "creatable_update" });
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
                message.success({ content: "Update edited successfully!", key: "editable_update" });
                clearUploadedMedia();
            })
            .addCase(editProjectUpdate.rejected, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = true;
                state.updateFetchErrorMessage = payload;
                message.error({ content: "Error update edit!", key: "editable_update" });
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
    setSelectedUpdate,
    clearUpdateStore,
    sortUpdates
} = updatesSlice.actions;
export default updatesSlice.reducer;