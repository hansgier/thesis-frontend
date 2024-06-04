import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { ANNOUNCEMENTS_URL } from "../../constants.js";
import { getAllAnnouncements } from "./announcementsSlice.js";

export const getAllAnnouncementsThunk = async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(ANNOUNCEMENTS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const editAnnouncementThunk = async ({ id, announcement }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.patch(`${ ANNOUNCEMENTS_URL }/${ id }`, announcement, { headers });
        thunkAPI.dispatch(getAllAnnouncements());
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const postAnnouncementThunk = async (announcement, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.post(`${ ANNOUNCEMENTS_URL }`, announcement, { headers });
        thunkAPI.dispatch(getAllAnnouncements());
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const deleteAnnouncementThunk = async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.delete(`${ ANNOUNCEMENTS_URL }/${ id }`, { headers });
        thunkAPI.dispatch(getAllAnnouncements());
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

