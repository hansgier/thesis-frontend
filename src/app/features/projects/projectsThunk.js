import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { PROJECTS_URL } from "../../constants.js";
import { getAllProjects } from "./projectsSlice.js";

export const getAllProjectsThunk = async (_, thunkAPI) => {
    // const {
    //     search,
    //     tags,
    //     barangays,
    //     status,
    //     sort,
    //     budgetRange,
    //     progressRange,
    //     viewsRange
    // } = thunkAPI.getState().projects;
    // let url = PROJECTS_URL;
    // let queryParams = [];
    //
    // if (search) queryParams.push(`search=${ search }`);
    // if (tags) queryParams.push(`tags=${ tags }`);
    // if (barangays) queryParams.push(`barangays=${ barangays }`);
    // if (status) queryParams.push(`status=${ status }`);
    // if (sort) queryParams.push(`sort=${ sort }`);
    // if (progressRange) queryParams.push(`progressRange=${ progressRange }`);
    // if (viewsRange) queryParams.push(`viewsRange=${ viewsRange }`);
    // if (budgetRange) queryParams.push(`budgetRange=${ budgetRange }`);
    //
    // if (queryParams.length > 0) {
    //     url += `?${ queryParams.join("&") }`;
    // }

    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const response = await customFetch.get(PROJECTS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const createProjectThunk = async (project, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const {
            title,
            description,
            cost,
            start_date,
            due_date,
            completion_date,
            status,
            tagsIds,
            barangayIds,
            funding_source,
            uploadedImages
        } = project;

        const response = await customFetch.post(
            PROJECTS_URL,
            {
                title,
                description,
                cost,
                start_date,
                due_date,
                completion_date,
                status,
                tagsIds,
                barangayIds,
                funding_source,
                uploadedImages
            },
            { headers }
        );
        thunkAPI.dispatch(getAllProjects()); // Dispatch getAllProjects to fetch the updated list of projects
        return response.data;
    } catch (e) {
        console.log(e);
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const editProjectThunk = async ({ id, project }, thunkAPI) => {

    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const {
            title,
            description,
            cost,
            start_date,
            due_date,
            completion_date,
            status,
            tagsIds,
            barangayIds,
            funding_source,
            uploadedImages
        } = project;

        const response = await customFetch.patch(`${ PROJECTS_URL }/${ id }`, {
            title,
            description,
            cost,
            start_date,
            due_date,
            completion_date,
            status,
            tagsIds,
            barangayIds,
            funding_source,
            uploadedImages
        }, { headers });
        thunkAPI.dispatch(getAllProjects());
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const deleteProjectThunk = async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const response = await customFetch.delete(`${ PROJECTS_URL }/${ id }`, { headers });
        await thunkAPI.dispatch(getAllProjects());
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};
