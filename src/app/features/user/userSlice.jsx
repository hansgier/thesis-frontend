import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
    },
});

export const { toggleSidebar } = userSlice.actions;
export default userSlice.reducer;