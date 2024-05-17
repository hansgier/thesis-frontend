import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProjectUpdatesThunk } from "./updatesThunk.js";

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
            .addCase(getAllProjectUpdates.pending, (state) => {
                state.isUpdateFetchSuccess = false;
                state.isUpdateFetchError = false;
                state.isUpdateFetchLoading = true;
            })
            .addCase(getAllProjectUpdates.fulfilled, (state, { payload }) => {
                state.isUpdateFetchLoading = false;
                state.isUpdateFetchError = false;
                state.isUpdateFetchSuccess = true;
                state.updates = payload.updates;
                state.totalUpdates = payload.updates.length;
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