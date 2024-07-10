import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { USERS_URL } from "../../constants.js";
import { getAllUsers } from "./usersSlice.js";

export const getAllUsersThunk = async (conversationId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = state.user.role === "guest" ? { Authorization: `Bearer guest` } : { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(USERS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const addUserThunk = async ({ username, email, password, barangay_id, role }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        const addTimeout = setTimeout(() => {
            throw new Error("Add operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const addResponse = await Promise.race([
            customFetch.post(`${ USERS_URL }`, { username, email, password, barangay_id, role }, { headers }),
            new Promise((_, reject) => addTimeout)
        ]);

        clearTimeout(addTimeout);

        const getAllUsersPromise = thunkAPI.dispatch(getAllUsers());
        const [addResponseData, getAllUsersData] = await Promise.all([addResponse.data, getAllUsersPromise]);

        return addResponseData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


export const editUserThunk = async ({ id, username, email, password, barangay_id }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        const editTimeout = setTimeout(() => {
            throw new Error("Edit operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const editResponse = await Promise.race([
            customFetch.patch(`${ USERS_URL }/${ id }`, { username, email, password, barangay_id }, { headers }),
            new Promise((_, reject) => editTimeout)
        ]);

        clearTimeout(editTimeout);

        const getAllUsersPromise = thunkAPI.dispatch(getAllUsers());
        const [editResponseData, getAllUsersData] = await Promise.all([editResponse.data, getAllUsersPromise]);

        return editResponseData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const deleteUserThunk = async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        const deleteTimeout = setTimeout(() => {
            throw new Error("Delete operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const deleteResponse = await Promise.race([
            customFetch.delete(`${ USERS_URL }/${ id }`, { headers }),
            new Promise((_, reject) => deleteTimeout)
        ]);

        clearTimeout(deleteTimeout);

        const getAllUsersPromise = thunkAPI.dispatch(getAllUsers());
        const [deleteResponseData, getAllUsersData] = await Promise.all([deleteResponse.data, getAllUsersPromise]);

        return deleteResponseData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

