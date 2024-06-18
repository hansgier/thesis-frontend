import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { ANNOUNCEMENTS_URL } from "../../constants.js";
import { getAllAnnouncements } from "./announcementsSlice.js";

export const getAllAnnouncementsThunk = async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = state.user.role === "guest" ? { Authorization: `Bearer guest` } : { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(ANNOUNCEMENTS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const editAnnouncementThunk = async ({ id, announcement }, thunkAPI) => {
    const { title, content } = announcement;
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        // Set a timeout for the edit request
        const editAnnouncementTimeout = setTimeout(() => {
            throw new Error("Edit operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const editResponse = await Promise.race([
            customFetch.patch(`${ ANNOUNCEMENTS_URL }/${ id }`, { title, content }, { headers }),
            new Promise((_, reject) => editAnnouncementTimeout)
        ]);

        clearTimeout(editAnnouncementTimeout);

        const getAllAnnouncementsPromise = thunkAPI.dispatch(getAllAnnouncements());
        const [editData, getAllAnnouncementsData] = await Promise.all([editResponse.data, getAllAnnouncementsPromise]);
        return editData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const postAnnouncementThunk = async (announcement, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        // Set a timeout for the post request
        const postAnnouncementTimeout = setTimeout(() => {
            throw new Error("Edit operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const postResponse = await Promise.race([
            customFetch.post(`${ ANNOUNCEMENTS_URL }`, announcement, { headers }),
            new Promise((_, reject) => postAnnouncementTimeout)
        ]);

        clearTimeout(postAnnouncementTimeout);

        const getAllAnnouncementsPromise = thunkAPI.dispatch(getAllAnnouncements());
        const [postData, getAllAnnouncementsData] = await Promise.all([postResponse.data, getAllAnnouncementsPromise]);

        return postData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const deleteAnnouncementThunk = async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        // Set a timeout for the delete request
        const deleteAnnouncementTimeout = setTimeout(() => {
            throw new Error("Edit operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const deleteResponse = await Promise.race([
            customFetch.delete(`${ ANNOUNCEMENTS_URL }/${ id }`, { headers }),
            new Promise((_, reject) => deleteAnnouncementTimeout)
        ]);

        clearTimeout(deleteAnnouncementTimeout);

        const getAllAnnouncementsPromise = thunkAPI.dispatch(getAllAnnouncements());
        const [deleteData, getAllAnnouncementsData] = await Promise.all([deleteResponse.data, getAllAnnouncementsPromise]);

        return deleteData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

