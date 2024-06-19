import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { PROJECTS_URL } from "../../constants.js";
import { getAllComments } from "./commentsSlice.js";

export const getAllCommentsThunk = async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = state.user.role === "guest" ? { Authorization: `Bearer guest` } : { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(`${ PROJECTS_URL }/${ id }/comments`, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const postCommentThunk = async ({ id, comments }, thunkAPI) => {
    const { content } = comments;
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        // Set a timeout for the post request
        const postTimeout = setTimeout(() => {
            throw new Error("Post operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const postResponse = await Promise.race([
            customFetch.post(`${ PROJECTS_URL }/${ id }/comments`, { content }, { headers }),
            new Promise((_, reject) => postTimeout)
        ]);

        clearTimeout(postTimeout);

        const getAllCommentsPromise = thunkAPI.dispatch(getAllComments(id));
        const [postData, getAllCommentsData] = await Promise.all([postResponse.data, getAllCommentsPromise]);
        return postData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

