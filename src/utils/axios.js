import axios from "axios";
import { BASE_URL } from "../app/constants.js";
import { getUserFromLocalStorage } from "./localStorage.jsx";

const customFetch = axios.create({
    baseURL: BASE_URL
});

customFetch.interceptors.request.use(
    (config) => {
        const user = getUserFromLocalStorage();
        if (user) {
            config.headers["Authorization"] = `Bearer ${ user.token }`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
    if (error.response.status === 401) {
        // thunkAPI.dispatch(clearStore());
        return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.message);
};

export default customFetch;