import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllAnnouncementsThunk } from "./announcementsThunk.js";

const initialFiltersState = {
    search: "",
    title: "",
    announcement_type: "",
    createdBy: ""
};

const initialState = {
    isAnnouncementFetchLoading: false,
    isAnnouncementFetchSuccess: true,
    announcementFetchErrorMessage: "",
    isAnnouncementFetchError: false,
    totalAnnouncements: 0,
    announcements: [],
    ...initialFiltersState
};

export const getAllAnnouncements = createAsyncThunk("announcements/getAllAnnouncements", getAllAnnouncementsThunk);


const announcementSlice = createSlice({
    name: "announcements",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllAnnouncements.pending, (state) => {
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchLoading = true;
            })
            .addCase(getAllAnnouncements.fulfilled, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchSuccess = true;
                state.announcements = payload.announcements;
                state.totalAnnouncements = payload.totalCount;
            })
            .addCase(getAllAnnouncements.rejected, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = true;
                state.announcementFetchErrorMessage = payload;
            });

    }
});

export const {} = announcementSlice.actions;
export default announcementSlice.reducer;