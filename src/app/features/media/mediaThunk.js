import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { MEDIA_URL, PROJECTS_URL } from "../../constants.js";

export const deleteMediumThunk = async ({ url, id, projectId, updateId }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        let headers;
        let mediaUrl;
        if (!projectId && !updateId && url) {
            headers = { Authorization: `Bearer ${ state.user.accessToken }`, media_url: url };
            mediaUrl = MEDIA_URL;
        } else if (projectId && updateId) {
            headers = { Authorization: `Bearer ${ state.user.accessToken }`, media_url: url };
            mediaUrl = `${ PROJECTS_URL }/${ projectId }/update/${ updateId }/media/${ id }`;
        } else if (projectId) {
            headers = { Authorization: `Bearer ${ state.user.accessToken }`, media_url: url };
            mediaUrl = `${ PROJECTS_URL }/${ projectId }/media/${ id }`;
        }
        // Set a timeout for the delete request
        const deleteTimeout = setTimeout(() => {
            throw new Error("Delete operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const deleteResponse = await Promise.race([
            customFetch.delete(mediaUrl, { headers }),
            new Promise((_, reject) => deleteTimeout)
        ]);

        clearTimeout(deleteTimeout);

        const [deleteData] = await Promise.all([deleteResponse.data]);

        return deleteData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
    }
};

// export const deleteMediaWithoutUrlThunk = async ({ projectId, id, media_url }, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState().auth;
//         const headers = {
//             Authorization: `Bearer ${ state.user.accessToken }`,
//             projectId: projectId,
//             media_url: media_url
//         };
//         // Set a timeout for the delete request
//         const deleteTimeout = setTimeout(() => {
//             throw new Error("Delete operation timed out");
//         }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)
//
//         const deleteResponse = await Promise.race([
//             customFetch.delete(`${ MEDIA_URL }/${ id }`, { headers }),
//             new Promise((_, reject) => deleteTimeout)
//         ]);
//
//         clearTimeout(deleteTimeout);
//
//         const [deleteData] = await Promise.all([deleteResponse.data]);
//
//         return deleteData;
//     } catch (e) {
//         return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
//     }
// };

// export const deleteUpdateMediaWithoutUrlThunk = async ({ updateId, projectId, id, media_url }, thunkAPI) => {
//     try {
//         const state = thunkAPI.getState().auth;
//         const headers = {
//             Authorization: `Bearer ${ state.user.accessToken }`,
//             projectId: projectId,
//             updateId: updateId,
//             media_url: media_url
//         };
//         // Set a timeout for the delete request
//         const deleteTimeout = setTimeout(() => {
//             throw new Error("Delete operation timed out");
//         }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)
//
//         const deleteResponse = await Promise.race([
//             customFetch.delete(`${ MEDIA_URL }/${ id }`, { headers }),
//             new Promise((_, reject) => deleteTimeout)
//         ]);
//
//         clearTimeout(deleteTimeout);
//
//         const [deleteData] = await Promise.all([deleteResponse.data]);
//
//         return deleteData;
//     } catch (e) {
//         return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
//     }
// };

