import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { PROJECTS_URL } from "../../constants.js";

export const getAllProjectsThunk = async (_, thunkAPI) => {
    const {
        search,
        tags,
        barangays,
        status,
        sort,
        budgetRange,
        progressRange,
        viewsRange
    } = thunkAPI.getState().projects;
    let url = PROJECTS_URL;
    let queryParams = [];

    if (search) queryParams.push(`search=${ search }`);
    if (tags) queryParams.push(`tags=${ tags }`);
    if (barangays) queryParams.push(`barangays=${ barangays }`);
    if (status) queryParams.push(`status=${ status }`);
    if (sort) queryParams.push(`sort=${ sort }`);
    if (progressRange) queryParams.push(`progressRange=${ progressRange }`);
    if (viewsRange) queryParams.push(`viewsRange=${ viewsRange }`);
    if (budgetRange) queryParams.push(`budgetRange=${ budgetRange }`);

    if (queryParams.length > 0) {
        url += `?${ queryParams.join("&") }`;
    }

    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const response = await customFetch.get(url, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};
// export const getProjectThunk = async (projectId, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState().auth;
//         const headers = { userId: state.user.id };
//         const response = await customFetch.get(`${ PROJECTS_URL }/${ projectId }`, { headers });
//         return response.data;
//     } catch (e) {
//         return checkForUnauthorizedResponse(e, thunkAPI);
//     }
// };
export const createProjectThunk = async (project, thunkAPI) => {

    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const response = await customFetch.get(PROJECTS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};