import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { PROJECTS_URL } from "../../constants.js";
import { getAllProjectUpdates } from "./updatesSlice.js";

export const getAllProjectUpdatesThunk = async (projectId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const url = `${ PROJECTS_URL }/${ projectId }/update`;
        const response = await customFetch.get(url, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const createProjectUpdateThunk = async ({ projectId, update }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        const createTimeout = setTimeout(() => {
            throw new Error("Create operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const createResponse = await Promise.race([
            customFetch.post(`${ PROJECTS_URL }/${ projectId }/update`, update, { headers }),
            new Promise((_, reject) => createTimeout)
        ]);

        clearTimeout(createTimeout);

        const getAllProjectUpdatesPromise = thunkAPI.dispatch(getAllProjectUpdates(projectId));
        const [createResponseData, getAllProjectUpdatesData] = await Promise.all([createResponse.data, getAllProjectUpdatesPromise]);

        return createResponseData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


export const editProjectUpdateThunk = async ({ id, projectId, update }, thunkAPI) => {

    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        
        const editTimeout = setTimeout(() => {
            throw new Error("Create operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const editResponse = await Promise.race([
            customFetch.patch(`${ PROJECTS_URL }/${ projectId }/update/${ id }`, update, { headers }),
            new Promise((_, reject) => editTimeout)
        ]);

        clearTimeout(editTimeout);

        const getAllProjectUpdatesPromise = thunkAPI.dispatch(getAllProjectUpdates(projectId));
        const [editResponseData, getAllProjectUpdatesData] = await Promise.all([editResponse.data, getAllProjectUpdatesPromise]);

        return editResponseData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const deleteProjectUpdateThunk = async ({ id, projectId }, thunkAPI) => {

    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.delete(`${ PROJECTS_URL }/${ projectId }/update/${ id }`, { headers });
        await thunkAPI.dispatch(getAllProjectUpdates(projectId));
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


