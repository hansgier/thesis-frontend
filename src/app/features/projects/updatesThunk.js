import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { PROJECTS_URL } from "../../constants.js";

export const getAllProjectUpdatesThunk = async (projectId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const url = `${ PROJECTS_URL }/${ projectId }/updates`;
        const response = await customFetch.get(url, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};