import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    isNotificationsOpen: false,
    isFeedbackOpen: false,
    view: "stack",
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
        }

    }
});

export const {
    toggleSidebar,
    toggleNotifications,
    toggleFeedback
} = userSlice.actions;
export default userSlice.reducer;