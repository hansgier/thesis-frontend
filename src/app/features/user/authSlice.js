import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../../utils/axios.js";
import { AUTH_URL, USERS_URL } from "../../constants.js";
import {
    addUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocalStorage
} from "../../../utils/localStorage.jsx";

const initialState = {
    isSidebarOpen: false,
    isNotificationsOpen: false,
    isFeedbackOpen: false,
    isAddProjectMode: false,
    isAddAnnouncementMode: false,
    view: 0,
    isLoading: false,
    user: getUserFromLocalStorage(),
    userProfile: null,
    authError: false,
    authErrorMessage: "",
    authSuccess: false,
    isError: false,
    isFetchLoading: false
};

export const registerUser = createAsyncThunk("auth/register", async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post(`${ AUTH_URL }/register`, user);
            return resp.data;
        } catch (e) {
            console.log(e.response.data.message);
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);

export const loginUser = createAsyncThunk("auth/login", async (user, thunkAPI) => {
        try {
            const resp = await customFetch.post(`${ AUTH_URL }/login`, user);
            return resp.data;
        } catch (e) {
            console.log(e.response.data.message);
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);

export const logoutUser = createAsyncThunk("auth/logout", async (user, thunkAPI) => {
        try {
            await customFetch.delete(`${ AUTH_URL }/logout`);
        } catch (e) {
            console.log(e.response.data.message);
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);

export const showCurrentUser = createAsyncThunk("users/me", async (userProfile, thunkAPI) => {
        try {
            const response = await customFetch.get(`${ USERS_URL }/me`);
            return response.data;
        } catch (e) {
            console.log(e.response.data.message);
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);


const authSlice = createSlice({
    name: "auth",
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
    },
    extraReducers(builder) {
        builder
            .addCase(showCurrentUser.pending, (state) => {
                state.isFetchLoading = true;
            })
            .addCase(showCurrentUser.fulfilled, (state, { payload }) => {
                state.isFetchLoading = false;
                state.userProfile = payload;
                state.isError = false;
            })
            .addCase(showCurrentUser.rejected, (state) => {
                state.isFetchLoading = false;
                state.isError = true;
            })

            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.isSidebarOpen = false;
                state.authSuccess = true;
                state.authError = false;
                removeUserFromLocalStorage();
            })
            .addCase(logoutUser.rejected, (state) => {
                state.isLoading = false;
                state.authError = true;
                state.authSuccess = false;
            })

            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.user = user;
                state.authSuccess = true;
                state.authError = false;
                addUserToLocalStorage(user);
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.authError = true;
                state.authSuccess = false;
                state.authErrorMessage = payload;
            })

            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.user = user;
                state.authSuccess = true;
                state.authError = false;
                addUserToLocalStorage(user);
            })
            .addCase(loginUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.authError = true;
                state.authSuccess = false;
                state.authErrorMessage = payload;
            });
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
} = authSlice.actions;
export default authSlice.reducer;