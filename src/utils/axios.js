import axios from "axios";
import { removeUserFromLocalStorage } from "./localStorage.jsx";
import { BASE_URL } from "../app/constants.js";

const customFetch = axios.create({
    baseURL: BASE_URL,
    timeout: 15000 // optional: helps detect hung requests
});

// do NOT import authSlice here to avoid circular deps
export const checkForUnauthorizedResponse = (error, thunkAPI) => {
    const status = error?.response?.status;
    if (status === 401) {
        removeUserFromLocalStorage();
        // dispatch via plain action type to avoid importing the slice
        thunkAPI.dispatch({ type: "auth/clearStore" });
        return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
    }
    const message = error?.response?.data?.message || error?.message || "Something went wrong";
    return thunkAPI.rejectWithValue(message);
};

export default customFetch;
