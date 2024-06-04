import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { USERS_URL } from "../../constants.js";

export const getAllUsersThunk = async (conversationId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(USERS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};



