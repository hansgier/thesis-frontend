import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteMediumThunk } from "./mediaThunk.js";

const initialState = {
    isMediumFetchLoading: false,
    isMediumFetchSuccess: true,
    mediumFetchErrorMessage: "",
    isMediumFetchError: false,
    totalMedia: 0,
    media: [],
    isAddMediumMode: false,
    uploadedMedia: ""
};

export const deleteMedium = createAsyncThunk("media/deleteMedium", deleteMediumThunk);


const mediaSlice = createSlice({
    name: "media",
    initialState,
    reducers: {
        setUploadedMedia: (state, action) => {
            state.uploadedMedia = action.payload;
        },
        clearUploadedMedia: (state) => state.uploadedMedia = "",
        clearMediaStore: () => initialState
    },
    extraReducers: (builder) => {
        builder
            // .addCase(deleteUpdateMediaWithoutUrl.pending, (state) => {
            //     state.isMediumFetchSuccess = false;
            //     state.isMediumFetchError = false;
            //     state.isMediumFetchLoading = true;
            // })
            // .addCase(deleteUpdateMediaWithoutUrl.fulfilled, (state, { payload }) => {
            //     state.isMediumFetchLoading = false;
            //     state.isMediumFetchError = false;
            //     state.isMediumFetchSuccess = true;
            // })
            // .addCase(deleteUpdateMediaWithoutUrl.rejected, (state, { payload }) => {
            //     state.isMediumFetchLoading = false;
            //     state.isMediumFetchSuccess = false;
            //     state.isMediumFetchError = true;
            //     state.mediumFetchErrorMessage = payload;
            // })
            //
            // .addCase(deleteMediaWithoutUrl.pending, (state) => {
            //     state.isMediumFetchSuccess = false;
            //     state.isMediumFetchError = false;
            //     state.isMediumFetchLoading = true;
            // })
            // .addCase(deleteMediaWithoutUrl.fulfilled, (state, { payload }) => {
            //     state.isMediumFetchLoading = false;
            //     state.isMediumFetchError = false;
            //     state.isMediumFetchSuccess = true;
            // })
            // .addCase(deleteMediaWithoutUrl.rejected, (state, { payload }) => {
            //     state.isMediumFetchLoading = false;
            //     state.isMediumFetchSuccess = false;
            //     state.isMediumFetchError = true;
            //     state.mediumFetchErrorMessage = payload;
            // })

            .addCase(deleteMedium.pending, (state) => {
                state.isMediumFetchSuccess = false;
                state.isMediumFetchError = false;
                state.isMediumFetchLoading = true;
            })
            .addCase(deleteMedium.fulfilled, (state, { payload }) => {
                state.isMediumFetchLoading = false;
                state.isMediumFetchError = false;
                state.isMediumFetchSuccess = true;
            })
            .addCase(deleteMedium.rejected, (state, { payload }) => {
                state.isMediumFetchLoading = false;
                state.isMediumFetchSuccess = false;
                state.isMediumFetchError = true;
                state.mediumFetchErrorMessage = payload;
            });


    }
});

export const {
    setUploadedMedia,
    clearMediaStore,
    clearUploadedMedia
} = mediaSlice.actions;
export default mediaSlice.reducer;