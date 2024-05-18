import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    deleteAnnouncementThunk,
    editAnnouncementThunk,
    getAllAnnouncementsThunk,
    postAnnouncementThunk
} from "./announcementsThunk.js";

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
export const editAnnouncement = createAsyncThunk("announcements/editAnnouncement", editAnnouncementThunk);
export const deleteAnnouncement = createAsyncThunk("announcements/deleteAnnouncement", deleteAnnouncementThunk);
export const postAnnouncement = createAsyncThunk("announcements/postAnnouncement", postAnnouncementThunk);


const announcementSlice = createSlice({
    name: "announcements",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postAnnouncement.pending, (state) => {
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchLoading = true;
            })
            .addCase(postAnnouncement.fulfilled, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchSuccess = true;
            })
            .addCase(postAnnouncement.rejected, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = true;
                state.announcementFetchErrorMessage = payload;
            })

            .addCase(deleteAnnouncement.pending, (state) => {
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchLoading = true;
            })
            .addCase(deleteAnnouncement.fulfilled, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchSuccess = true;
            })
            .addCase(deleteAnnouncement.rejected, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = true;
                state.announcementFetchErrorMessage = payload;
            })

            .addCase(editAnnouncement.pending, (state) => {
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchLoading = true;
            })
            .addCase(editAnnouncement.fulfilled, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchSuccess = true;
            })
            .addCase(editAnnouncement.rejected, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = true;
                state.announcementFetchErrorMessage = payload;
            })

            .addCase(getAllAnnouncements.pending, (state) => {
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchLoading = true;
            })
            .addCase(getAllAnnouncements.fulfilled, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchSuccess = true;
                state.announcements = payload.announcements.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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