import { BARANGAYS_URL } from "../../constants.js";
import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";

export const getAllBarangaysThunk = async (conversationId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(BARANGAYS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};



