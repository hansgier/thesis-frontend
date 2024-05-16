import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { BARANGAYS_URL } from "../../constants.js";

export const getAllBarangaysThunk = async (conversationId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const response = await customFetch.get(BARANGAYS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};



