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
    userProfile: getUserFromLocalStorage(),
    authError: false,
    authErrorMessage: "",
    authSuccess: false,
    isError: false,
    isFetchLoading: false,
    guestMode: false,
    oldPassword: ""
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

export const updateUser = createAsyncThunk("users/updateUser", async (user, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = {
            userId: state.user.id
        };
        const resp = await customFetch.patch(`${ USERS_URL }/update-user`, user, {
            headers
        });
        return resp.data;
    } catch (e) {
        console.log(e.response.data.message);
        return thunkAPI.rejectWithValue(e.response.data.message);
    }
});


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
        },
        setOldPassword: (state, { payload }) => {
            state.oldPassword = payload;
        },
        setLoading: (state) => {
            state.isLoading = false;
        },
        logoutUser: (state) => {
            state.user = null;
            state.userProfile = null;
            state.isSidebarOpen = false;
            state.isLoading = false;
            removeUserFromLocalStorage();
        },
        setGuestMode: (state, { payload }) => {
            state.guestMode = payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(updateUser.pending, (state) => {
                state.authError = false;
                state.authSuccess = false;
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.userProfile = user;
                state.user = user;
                state.authSuccess = true;
                state.authError = false;
                state.authErrorMessage = "";
                addUserToLocalStorage(user);
            })
            .addCase(updateUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.authError = true;
                state.authSuccess = false;
                state.authErrorMessage = payload;
            })

            .addCase(registerUser.pending, (state) => {
                state.authSuccess = false;
                state.authError = false;
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.user = user;
                state.authSuccess = true;
                state.guestMode = false;
                state.authError = false;
                state.authErrorMessage = "";
                addUserToLocalStorage(user);
            })
            .addCase(registerUser.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.authError = true;
                state.authSuccess = false;
                state.authErrorMessage = payload;
            })

            .addCase(loginUser.pending, (state) => {
                state.authSuccess = false;
                state.authError = false;
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, { payload }) => {
                const { user } = payload;
                state.isLoading = false;
                state.userProfile = user;
                state.user = user;
                state.authSuccess = true;
                state.authError = false;
                state.authErrorMessage = "";
                state.guestMode = false;
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
    resetView,
    logoutUser,
    setLoading,
    setGuestMode,
    setOldPassword
} = authSlice.actions;
export default authSlice.reducer;