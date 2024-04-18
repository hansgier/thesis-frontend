import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./app/features/user/userSlice.jsx";

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
});