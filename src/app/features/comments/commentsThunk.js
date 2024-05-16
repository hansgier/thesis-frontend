import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { PROJECTS_URL } from "../../constants.js";

export const getAllCommentsThunk = async (projectId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const COMMENTS_URL = `${ PROJECTS_URL }/${ projectId }/comments`;
        const response = await customFetch.get(COMMENTS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};