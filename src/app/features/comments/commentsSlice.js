import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllCommentsThunk, postCommentThunk } from "./commentsThunk.js";

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
export const postComment = createAsyncThunk("comments/postComment", postCommentThunk);


const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        resetAllComments: (state) => state.comments = null,
        clearCommentStore: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(postComment.pending, (state) => {
                state.isCommentFetchSuccess = false;
                state.isCommentFetchError = false;
                state.isCommentFetchLoading = true;
            })
            .addCase(postComment.fulfilled, (state, { payload }) => {
                state.isCommentFetchLoading = false;
                state.isCommentFetchError = false;
                state.isCommentFetchSuccess = true;
                state.totalComments = payload.totalCount;
            })
            .addCase(postComment.rejected, (state, { payload }) => {
                state.isCommentFetchLoading = false;
                state.isCommentFetchSuccess = false;
                state.isCommentFetchError = true;
                state.commentFetchErrorMessage = payload;
            })

            .addCase(getAllComments.pending, (state) => {
                state.isCommentFetchSuccess = false;
                state.isCommentFetchError = false;
                state.isCommentFetchLoading = true;
            })
            .addCase(getAllComments.fulfilled, (state, { payload }) => {
                state.isCommentFetchLoading = false;
                state.isCommentFetchError = false;
                state.isCommentFetchSuccess = true;
                state.comments = payload.msg === "No comments" ? [] : payload?.projectComments.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                state.totalComments = payload.msg === "No comments" ? 0 : payload?.totalCount;
            })
            .addCase(getAllComments.rejected, (state, { payload }) => {
                state.isCommentFetchLoading = false;
                state.isCommentFetchSuccess = false;
                state.isCommentFetchError = true;
                state.commentFetchErrorMessage = payload;
            });
    }
});

export const {
    clearCommentStore,
    resetAllComments
} = commentsSlice.actions;
export default commentsSlice.reducer;