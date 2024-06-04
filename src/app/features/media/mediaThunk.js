import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { MEDIA_URL } from "../../constants.js";

export const deleteMediumThunk = async ({ url }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }`, media_url: url };
        // Set a timeout for the delete request
        const deleteTimeout = setTimeout(() => {
            throw new Error("Delete operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const deleteResponse = await Promise.race([
            customFetch.delete(`${ MEDIA_URL }`, { headers }),
            new Promise((_, reject) => deleteTimeout)
        ]);

        clearTimeout(deleteTimeout);

        const [deleteData] = await Promise.all([deleteResponse.data]);

        return deleteData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI) || e.message;
    }
};