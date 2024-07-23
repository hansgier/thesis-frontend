import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    deleteAnnouncementThunk,
    editAnnouncementThunk,
    getAllAnnouncementsThunk,
    postAnnouncementThunk
} from "./announcementsThunk.js";
import { message } from "antd";

const initialFiltersState = {
    announcement_search: "",
    title: "",
    announcement_type: "",
    createdBy: "",
    sort: "newest"
};

const initialState = {
    isAnnouncementFetchLoading: false,
    isAnnouncementFetchSuccess: true,
    announcementFetchErrorMessage: "",
    isAnnouncementFetchError: false,
    totalAnnouncements: 0,
    announcements: [],
    filtered_announcements: null,
    selected_announcement: null,
    ...initialFiltersState
};

export const getAllAnnouncements = createAsyncThunk("announcements/getAllAnnouncements", getAllAnnouncementsThunk);
export const editAnnouncement = createAsyncThunk("announcements/editAnnouncement", editAnnouncementThunk);
export const deleteAnnouncement = createAsyncThunk("announcements/deleteAnnouncement", deleteAnnouncementThunk);
export const postAnnouncement = createAsyncThunk("announcements/postAnnouncement", postAnnouncementThunk);


const announcementSlice = createSlice({
    name: "announcements",
    initialState,
    reducers: {
        sortAnnouncements: (state, action) => {
            state.sort = action.payload;
            if (action.payload === "newest") {
                state.announcements = state.announcements.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                state.filtered_announcements = state.filtered_announcements.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            } else if (action.payload === "oldest") {
                state.announcements = state.announcements.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                state.filtered_announcements = state.filtered_announcements.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            } else if (action.payload === "az") {
                state.announcements = state.announcements.sort((a, b) => {
                    return a.title.toUpperCase() === b.title.toUpperCase() ? 0 : a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1;
                });
                state.filtered_announcements = state.filtered_announcements.sort((a, b) => {
                    return a.title.toUpperCase() === b.title.toUpperCase() ? 0 : a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1;
                });
            } else if (action.payload === "za") {
                state.announcements = state.announcements.sort((a, b) => {
                    return b.title.toUpperCase() === a.title.toUpperCase() ? 0 : b.title.toUpperCase() > a.title.toUpperCase() ? 1 : -1;
                });
                state.filtered_announcements = state.filtered_announcements.sort((a, b) => {
                    return b.title.toUpperCase() === a.title.toUpperCase() ? 0 : b.title.toUpperCase() > a.title.toUpperCase() ? 1 : -1;
                });
            }
        },
        setFilteredAnnouncements: (state, action) => {
            // state.filtered_announcements = action?.payload;
            const searchTerm = action.payload.toLowerCase();
            if (searchTerm === "") {
                state.filtered_announcements = state.announcements;
            } else {
                state.filtered_announcements = state.announcements.filter(announcement =>
                    announcement.title.toLowerCase().includes(searchTerm) ||
                    announcement.content.toLowerCase().includes(searchTerm)
                );
            }
        },
        resetAnnouncementFilters: (state) => {
            state.filtered_announcements = state.announcements;
        },
        setSelectedAnnouncement: (state, action) => {
            state.selected_announcement = action.payload;
        },
        clearAnnouncementStore: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(postAnnouncement.pending, (state) => {
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchLoading = true;
                message.loading({ content: "Posting announcement...", key: "creatable-a" });
            })
            .addCase(postAnnouncement.fulfilled, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchSuccess = true;
                message.success({ content: "Announcement posted", key: "creatable-a" });
            })
            .addCase(postAnnouncement.rejected, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = true;
                state.announcementFetchErrorMessage = payload;
                message.error({ content: "There was an error in posting the announcement", key: "creatable-a" });
            })

            .addCase(deleteAnnouncement.pending, (state) => {
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchLoading = true;
                message.loading({ content: "Deleting announcement...", key: "deletable-a" });
            })
            .addCase(deleteAnnouncement.fulfilled, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchSuccess = true;
                message.success({ content: "Announcement deleted", key: "deletable-a" });
            })
            .addCase(deleteAnnouncement.rejected, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = true;
                state.announcementFetchErrorMessage = payload;
                message.error({ content: "There was an error in deleting the announcement", key: "deletable-a" });
            })

            .addCase(editAnnouncement.pending, (state) => {
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchLoading = true;
                message.loading({ content: "Updating announcement...", key: "updatable-a" });
            })
            .addCase(editAnnouncement.fulfilled, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchError = false;
                state.isAnnouncementFetchSuccess = true;
                message.success({ content: "Announcement updated successfully!", key: "updatable-a" });
            })
            .addCase(editAnnouncement.rejected, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = true;
                state.announcementFetchErrorMessage = payload;
                message.error({ content: "There was an error updating the announcement", key: "updatable-a" });
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
                state.announcements = !payload.announcements ? [] : payload.announcements.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                state.totalAnnouncements = payload.totalCount;
                state.filtered_announcements = state.announcements;
            })
            .addCase(getAllAnnouncements.rejected, (state, { payload }) => {
                state.isAnnouncementFetchLoading = false;
                state.isAnnouncementFetchSuccess = false;
                state.isAnnouncementFetchError = true;
                state.announcementFetchErrorMessage = payload;
            });

    }
});

export const {
    clearAnnouncementStore,
    setFilteredAnnouncements,
    resetAnnouncementFilters,
    sortAnnouncements,
    setSelectedAnnouncement
} = announcementSlice.actions;
export default announcementSlice.reducer;