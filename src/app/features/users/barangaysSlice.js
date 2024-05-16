import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllBarangaysThunk } from "./barangaysThunk.js";

const initialFiltersState = {
    search: "",
    sort: ""
};

const initialState = {
    isBarangayFetchLoading: false,
    isBarangayFetchSuccess: true,
    barangayFetchErrorBarangay: "",
    isBarangayFetchError: false,
    totalBarangays: 0,
    barangays: [],
    ...initialFiltersState
};

export const getAllBarangays = createAsyncThunk("barangays/getAllBarangays", getAllBarangaysThunk);


const barangaysSlice = createSlice({
    name: "barangays",
    initialState,
    reducers: {
        setSelectedBarangay: (state, { payload }) => {
            state.selectedBarangay = payload;
        },
        resetBarangayConvState: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllBarangays.pending, (state) => {
                state.isBarangayFetchSuccess = false;
                state.isBarangayFetchError = false;
                state.isBarangayFetchLoading = true;
            })
            .addCase(getAllBarangays.fulfilled, (state, { payload }) => {
                state.isBarangayFetchLoading = false;
                state.isBarangayFetchError = false;
                state.isBarangayFetchSuccess = true;
                state.barangays = payload.barangays;
                state.totalBarangays = payload.count;
            })
            .addCase(getAllBarangays.rejected, (state, { payload }) => {
                state.isBarangayFetchLoading = false;
                state.isBarangayFetchSuccess = false;
                state.isBarangayFetchError = true;
                state.barangayFetchErrorBarangay = payload;
            });
    }
});

export const {
    setSelectedBarangay,
    resetBarangayConvState
} = barangaysSlice.actions;
export default barangaysSlice.reducer;