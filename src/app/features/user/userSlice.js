import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    isNotificationsOpen: false,
    isFeedbackOpen: false,
    isAddProjectMode: false,
    isAddAnnouncementMode: false,
    view: 0,
    user: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        toggleNotifications: (state) => {
            state.isNotificationsOpen = !state.isNotificationsOpen;
        },
        toggleFeedback: (state) => {
            state.isFeedbackOpen = !state.isFeedbackOpen;
        },
        toggleAddProjectMode: (state) => {
            state.isAddProjectMode = !state.isAddProjectMode;
        },
        toggleAddAnnouncementMode: (state) => {
            state.isAddAnnouncementMode = !state.isAddAnnouncementMode;
        },
        toggleView: (state) => {
            state.view = (state.view + 1) % 2;
        },
        resetView: (state) => {
            state.view = 0;
        }
    }
});

export const {
    toggleSidebar,
    toggleNotifications,
    toggleFeedback,
    toggleAddProjectMode,
    toggleAddAnnouncementMode,
    toggleView,
    resetView
} = userSlice.actions;
export default userSlice.reducer;