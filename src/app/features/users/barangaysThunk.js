import { BARANGAYS_URL } from "../../constants.js";
import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";

export const getAllBarangaysThunk = async (_, thunkAPI) => {
    try {
        const response = await customFetch.get(BARANGAYS_URL);
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};



