import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../../utils/axios.js";
import { AUTH_URL, USERS_URL } from "../../constants.js";
import {
    addUserToLocalStorage,
    getUserFromLocalStorage,
    removeUserFromLocalStorage
} from "../../../utils/localStorage.jsx";
import { clearUsersStore } from "../users/usersSlice.js";
import { clearBarangayStore } from "../users/barangaysSlice.js";
import { clearAnnouncementStore } from "../announcements/announcementsSlice.js";
import { clearCommentStore } from "../comments/commentsSlice.js";
import { clearContactStore } from "../contacts/contactsSlice.js";
import { clearMediaStore } from "../media/mediaSlice.js";
import { clearMessageStore } from "../messages/messagesSlice.js";
import { clearProjectStore } from "../projects/projectsSlice.js";
import { clearUpdateStore } from "../projects/updatesSlice.js";
import { clearReactionStore } from "../reactions/reactionsSlice.js";


const initialState = {
    isSidebarOpen: false,
    isNotificationsOpen: false,
    isFeedbackOpen: false,
    isAddProjectMode: false,
    isEditProjectMode: false,
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
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);

export const loginUser = createAsyncThunk("auth/login", async (user, thunkAPI) => {
        try {
            if (user === "guest") return {
                username: "Guest",
                role: "guest"
            }; else {
                const resp = await customFetch.post(`${ AUTH_URL }/login`, user);
                return resp.data;
            }
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async (user, thunkAPI) => {
        try {
            const state = thunkAPI.getState().auth;
            const headers = state.user.role === "guest" ? { Authorization: `Bearer guest` } : { Authorization: `Bearer ${ state.user.accessToken }` };
            const resp = await customFetch.delete(`${ AUTH_URL }/logout`, { headers });
            return resp.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);


export const updateUser = createAsyncThunk("users/updateUser", async (user, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const resp = await customFetch.patch(`${ USERS_URL }/update-user`, user, {
            headers
        });
        return resp.data;
    } catch (e) {
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
        toggleEditProjectMode: (state) => {
            state.isEditProjectMode = !state.isEditProjectMode;
        },
        setEditProjectMode: (state, action) => {
            state.isEditProjectMode = action.payload;
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
        setGuestMode: (state, { payload }) => {
            state.guestMode = payload;
        },
        logoutUser: (state) => {
            state.user = null;
            state.userProfile = null;
            removeUserFromLocalStorage();
        },
        clearAuthStore: () => initialState,
        clearStore: (state) => {
            clearUsersStore();
            clearBarangayStore();
            clearAnnouncementStore();
            clearCommentStore();
            clearContactStore();
            clearMediaStore();
            clearMessageStore();
            clearProjectStore();
            clearUpdateStore();
            clearReactionStore();
            // clearAuthStore();
            // state.user = null;
            // state.userProfile = null;
            return { ...state, ...initialState, user: null, userProfile: null };
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

            .addCase(logout.pending, (state) => {
                state.authSuccess = false;
                state.authError = false;
                state.isLoading = true;
            })
            .addCase(logout.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.userProfile = null;
                state.user = null;
                state.authSuccess = true;
                state.authError = false;
                state.authErrorMessage = "";
                state.guestMode = false;
                removeUserFromLocalStorage();
                clearStore();
                state.isSidebarOpen = false;
            })
            .addCase(logout.rejected, (state, { payload }) => {
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
                state.userProfile = payload.role === "guest" ? payload : user;
                state.user = payload.role === "guest" ? payload : user;
                state.authSuccess = true;
                state.authError = false;
                state.authErrorMessage = "";
                state.guestMode = false;
                payload.role === "guest" ? addUserToLocalStorage(payload) : addUserToLocalStorage(user);
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
    setGuestMode,
    setOldPassword,
    clearAuthStore,
    clearStore,
    toggleEditProjectMode,
    setEditProjectMode
} = authSlice.actions;
export default authSlice.reducer;