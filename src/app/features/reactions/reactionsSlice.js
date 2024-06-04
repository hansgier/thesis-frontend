import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProjectReactionsThunk } from "./reactionsThunk.js";

const initialFiltersState = {
    search: "",
    sort: "",
    reaction_by: ""
};

const initialState = {
    isReactionFetchLoading: false,
    isReactionFetchSuccess: true,
    reactionFetchErrorMessage: "",
    isReactionFetchError: false,
    totalReactions: 0,
    reactions: [],
    projectReactions: [],
    ...initialFiltersState
};

export const getAllProjectReactions = createAsyncThunk("reactions/getAllProjectReactionsThunk", getAllProjectReactionsThunk);


const reactionsSlice = createSlice({
    name: "reactions",
    initialState,
    reducers: {
        clearReactionStore: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllProjectReactions.pending, (state) => {
                state.isReactionFetchSuccess = false;
                state.isReactionFetchError = false;
                state.isReactionFetchLoading = true;
            })
            .addCase(getAllProjectReactions.fulfilled, (state, { payload }) => {
                state.isReactionFetchLoading = false;
                state.isReactionFetchError = false;
                state.isReactionFetchSuccess = true;
                state.reactions = !payload.reactions ? [] : payload.reactions;
                state.totalReactions = payload.reactions.length;
            })
            .addCase(getAllProjectReactions.rejected, (state, { payload }) => {
                state.isReactionFetchLoading = false;
                state.isReactionFetchSuccess = false;
                state.isReactionFetchError = true;
                state.reactionFetchErrorMessage = payload;
            });

    }
});

export const { clearReactionStore } = reactionsSlice.actions;
export default reactionsSlice.reducer;