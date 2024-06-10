import axios from "axios";
import { BASE_URL } from "../app/constants.js";
import { clearStore } from "../app/features/auth/authSlice.js";
import { removeUserFromLocalStorage } from "./localStorage.jsx";


const customFetch = axios.create({
    baseURL: BASE_URL
});

// customFetch.interceptors.request.use(
//     (config) => {
//         const auth = getUserFromLocalStorage();
//         if (auth) {
//             config.headers["Authorization"] = `Bearer ${ auth.token }`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );
//
export const checkForUnauthorizedResponse = (error, thunkAPI) => {
    if (error.response.status === 401) {
        removeUserFromLocalStorage();
        thunkAPI.dispatch(clearStore());
        // thunkAPI.dispatch(logout());

        return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.message);
};

export default customFetch;