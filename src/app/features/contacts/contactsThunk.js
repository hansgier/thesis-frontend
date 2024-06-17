import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { CONTACTS_URL } from "../../constants.js";
import { getAllContacts } from "./contactsSlice.js";

export const getAllContactsThunk = async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = state.user.role === "guest" ? { Authorization: `Bearer guest` } : { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(`${ CONTACTS_URL }`, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
    }
};

export const postContactThunk = async (contacts, thunkAPI) => {
    const { name, logo, address, emails, phones } = contacts;
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        // Set a timeout for the post request
        const postTimeout = setTimeout(() => {
            throw new Error("Post operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const postResponse = await Promise.race([
            customFetch.post(`${ CONTACTS_URL }`, { name, logo, address, emails, phones }, { headers }),
            new Promise((_, reject) => postTimeout)
        ]);

        clearTimeout(postTimeout);

        const getAllContactsPromise = thunkAPI.dispatch(getAllContacts());
        const [postData, getAllContactsData] = await Promise.all([postResponse.data, getAllContactsPromise]);
        return postData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
    }
};

export const updateContactThunk = async ({ id, contacts }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const { name, logo, address, emails, phones } = contacts;

        // Set a timeout for the update request
        const updateTimeout = setTimeout(() => {
            throw new Error("Update operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const updateResponse = await Promise.race([
            customFetch.patch(`${ CONTACTS_URL }/${ id }`, { name, logo, address, emails, phones }, { headers }),
            new Promise((_, reject) => updateTimeout)
        ]);

        clearTimeout(updateTimeout);

        // const getAllContactsPromise = thunkAPI.dispatch(getAllContacts());
        const [updateData] = await Promise.all([updateResponse.data]);
        return updateData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
    }
};

export const deleteContactThunk = async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        // Set a timeout for the delete request
        const deleteTimeout = setTimeout(() => {
            throw new Error("Delete operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const deleteResponse = await Promise.race([
            customFetch.delete(`${ CONTACTS_URL }/${ id }`, { headers }),
            new Promise((_, reject) => deleteTimeout)
        ]);

        clearTimeout(deleteTimeout);

        const getAllContactsPromise = thunkAPI.dispatch(getAllContacts());
        const [deleteData, getAllContactsData] = await Promise.all([deleteResponse.data, getAllContactsPromise]);

        return deleteData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
    }
};

export const deleteAllContactsThunk = async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        // Set a timeout for the delete all request
        const deleteAllTimeout = setTimeout(() => {
            throw new Error("Delete all operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const deleteAllResponse = await Promise.race([
            customFetch.delete(`${ CONTACTS_URL }`, { headers }),
            new Promise((_, reject) => deleteAllTimeout)
        ]);

        clearTimeout(deleteAllTimeout);

        const getAllContactsPromise = thunkAPI.dispatch(getAllContacts());
        const [deleteAllData, getAllContactsData] = await Promise.all([deleteAllResponse.data, getAllContactsPromise]);

        return deleteAllData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
    }
};