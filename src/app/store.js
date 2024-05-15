import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/user/authSlice.js";

export const store = configureStore({
    reducer: {
        auth: authSlice
    }
});