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




