import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCommentsThunk } from "./commentsThunk.js";

const initialFiltersState = {
    search: "",
    sort: "",
    commented_by: ""
};

const initialState = {
    isCommentFetchLoading: false,
    isCommentFetchSuccess: true,
    commentFetchErrorMessage: "",
    isCommentFetchError: false,
    totalComments: 0,
    comments: [],
    ...initialFiltersState
};

export const getAllComments = createAsyncThunk("comments/getAllComments", getAllCommentsThunk);


const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllComments.pending, (state) => {
                state.isCommentFetchSuccess = false;
                state.isCommentFetchError = false;
                state.isCommentFetchLoading = true;
            })
            .addCase(getAllComments.fulfilled, (state, { payload }) => {
                state.isCommentFetchLoading = false;
                state.isCommentFetchError = false;
                state.isCommentFetchSuccess = true;
                state.comments = payload.comments;
                state.totalComments = payload.totalCount;
            })
            .addCase(getAllComments.rejected, (state, { payload }) => {
                state.isCommentFetchLoading = false;
                state.isCommentFetchSuccess = false;
                state.isCommentFetchError = true;
                state.commentFetchErrorMessage = payload;
            });

    }
});

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;