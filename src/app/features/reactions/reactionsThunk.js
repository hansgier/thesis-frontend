import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { PROJECTS_URL } from "../../constants.js";

export const getAllProjectReactionsThunk = async (projectId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = state.user.role === "guest" ? { Authorization: `Bearer guest` } : { Authorization: `Bearer ${ state.user.accessToken }` };
        const url = `${ PROJECTS_URL }/${ projectId }/reactions`;
        const response = await customFetch.get(url, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const createProjectReactionThunk = async ({ reaction_type, reactionTarget, projectId }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const url = `${ PROJECTS_URL }/${ projectId }/reactions`;
        const response = await customFetch.post(url, { reaction_type, reactionTarget }, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

