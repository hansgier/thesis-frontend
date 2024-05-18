import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { PROJECTS_URL } from "../../constants.js";
import { getAllProjectUpdates } from "./updatesSlice.js";

export const getAllProjectUpdatesThunk = async (projectId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
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
        const headers = { userId: state.user.id };
        const response = await customFetch.post(`${ PROJECTS_URL }/${ projectId }/update`, update, { headers });
        await thunkAPI.dispatch(getAllProjectUpdates(projectId));
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


export const editProjectUpdateThunk = async ({ id, projectId, update }, thunkAPI) => {

    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const {
            remarks,
            progress
        } = update;
        const response = await customFetch.patch(`${ PROJECTS_URL }/${ projectId }/update/${ id }`, update, { headers });
        await thunkAPI.dispatch(getAllProjectUpdates(projectId));
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const deleteProjectUpdateThunk = async ({ id, projectId }, thunkAPI) => {

    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const response = await customFetch.delete(`${ PROJECTS_URL }/${ projectId }/update/${ id }`, { headers });
        await thunkAPI.dispatch(getAllProjectUpdates(projectId));
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


