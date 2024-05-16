import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { ANNOUNCEMENTS_URL } from "../../constants.js";

export const getAllAnnouncementsThunk = async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const response = await customFetch.get(ANNOUNCEMENTS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};