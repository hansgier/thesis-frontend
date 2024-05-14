import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSidebarOpen: false,
    isNotificationsOpen: false,
    isFeedbackOpen: false,
    isAddProjectMode: false,
    isAddAnnouncementMode: false,
    view: 0,
    isLoading: false,
    user: null
};

export const registerUser = createAsyncThunk("auth/register", async (user, thunkAPI) => {
        console.log(`Register user: ${ JSON.stringify(user) }`);
    }
);

export const loginUser = createAsyncThunk("auth/login", async (user, thunkAPI) => {
        console.log(`Login user: ${ JSON.stringify(user) }`);
    }
);


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