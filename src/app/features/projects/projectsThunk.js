import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { PROJECTS_URL } from "../../constants.js";
import { getAllProjects } from "./projectsSlice.js";

export const getAllProjectsThunk = async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = state.user.role === "guest" ? { Authorization: `Bearer guest` } : { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(PROJECTS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const getProjectThunk = async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = state.user.role === "guest" ? { Authorization: `Bearer guest` } : { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(`${ PROJECTS_URL }/${ id }`, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


export const deleteProjectThunk = async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        // Set a timeout for the delete request
        const deleteTimeout = setTimeout(() => {
            throw new Error("Delete operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const deleteResponse = await Promise.race([
            customFetch.delete(`${ PROJECTS_URL }/${ id }`, { headers }),
            new Promise((_, reject) => deleteTimeout)
        ]);

        clearTimeout(deleteTimeout);

        const getAllProjectsPromise = thunkAPI.dispatch(getAllProjects());
        const [deleteData, getAllProjectsData] = await Promise.all([deleteResponse.data, getAllProjectsPromise]);

        return deleteData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
    }
};

export const createProjectThunk = async (project, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
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
            implementing_agency,
            contract_term,
            contractor,
            uploadedImages
        } = project;

        // Set a timeout for the create request
        const createTimeout = setTimeout(() => {
            throw new Error("Create operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const createResponse = await Promise.race([
            customFetch.post(
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
                    implementing_agency,
                    contract_term,
                    contractor,
                    uploadedImages
                },
                { headers }
            ),
            new Promise((_, reject) => createTimeout)
        ]);

        clearTimeout(createTimeout);

        const getAllProjectsPromise = thunkAPI.dispatch(getAllProjects());
        const [createData, getAllProjectsData] = await Promise.all([createResponse.data, getAllProjectsPromise]);

        return createData;
    } catch (e) {
        console.log(e);
        return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
    }
};

export const editProjectThunk = async ({ id, project }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
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
            contract_term,
            contractor,
            uploadedImages
        } = project;

        // Set a timeout for the edit request
        const editTimeout = setTimeout(() => {
            throw new Error("Edit operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const editResponse = await Promise.race([
            customFetch.patch(
                `${ PROJECTS_URL }/${ id }`,
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
                    contract_term,
                    contractor,
                    uploadedImages
                },
                { headers }
            ),
            new Promise((_, reject) => editTimeout)
        ]);

        clearTimeout(editTimeout);

        const getAllProjectsPromise = thunkAPI.dispatch(getAllProjects());
        const [editData, getAllProjectsData] = await Promise.all([editResponse.data, getAllProjectsPromise]);

        return editData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
    }
};

export const getAllFundingSourcesThunk = async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = state.user.role === "guest" ? { Authorization: `Bearer guest` } : { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(`${PROJECTS_URL}/funding-sources`, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const getFundingSourceThunk = async (id, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = state.user.role === "guest" ? { Authorization: `Bearer guest` } : { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(`${PROJECTS_URL}/funding-sources/${id}`, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};