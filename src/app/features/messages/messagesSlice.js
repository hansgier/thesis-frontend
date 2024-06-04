import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    createConversationThunk,
    getAllConversationsThunk,
    getAllMessagesThunk,
    sendMessagesThunk
} from "./messagesThunk.js";

const initialFiltersState = {
    search: "",
    sort: "",
    sender_id: "",
    conversation_id: ""
};

const initialState = {
    isMessageFetchLoading: false,
    isMessageFetchSuccess: true,
    messageFetchErrorMessage: "",
    isMessageFetchError: false,
    isConversationFetchLoading: false,
    isConversationFetchSuccess: false,
    isConversationFetchError: false,
    isConversationFetchMessage: "",
    totalMessages: 0,
    totalConversations: 0,
    messages: [],
    conversations: [],
    selectedConversation: "",
    ...initialFiltersState
};

export const createConversation = createAsyncThunk("messages/createConversation", createConversationThunk);

export const getAllConversations = createAsyncThunk("messages/getAllConversations", getAllConversationsThunk);
export const getAllMessages = createAsyncThunk("messages/getAllMessages", getAllMessagesThunk);
export const sendMessages = createAsyncThunk("messages/sendMessages", sendMessagesThunk);


const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        setSelectedConversation: (state, { payload }) => {
            state.selectedConversation = payload;
        },
        clearMessageStore: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessages.pending, (state) => {
                state.isMessageFetchSuccess = false;
                state.isMessageFetchError = false;
                state.isMessageFetchLoading = true;
            })
            .addCase(sendMessages.fulfilled, (state, { payload }) => {
                state.isMessageFetchLoading = false;
                state.isMessageFetchError = false;
                state.isMessageFetchSuccess = true;
                state.messages = [...state.messages, payload];
            })
            .addCase(sendMessages.rejected, (state, { payload }) => {
                state.isMessageFetchLoading = false;
                state.isMessageFetchSuccess = false;
                state.isMessageFetchError = true;
                state.messageFetchErrorMessage = payload;
            })

            .addCase(getAllMessages.pending, (state) => {
                state.isMessageFetchSuccess = false;
                state.isMessageFetchError = false;
                state.isMessageFetchLoading = true;
            })
            .addCase(getAllMessages.fulfilled, (state, { payload }) => {
                state.isMessageFetchLoading = false;
                state.isMessageFetchError = false;
                state.isMessageFetchSuccess = true;
                state.messages = !payload.messages ? [] : payload.messages.slice().sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                state.totalMessages = payload.totalCount;
            })
            .addCase(getAllMessages.rejected, (state, { payload }) => {
                state.isMessageFetchLoading = false;
                state.isMessageFetchSuccess = false;
                state.isMessageFetchError = true;
                state.messageFetchErrorMessage = payload;
            })


            .addCase(getAllConversations.pending, (state) => {
                state.isConversationFetchSuccess = false;
                state.isConversationFetchError = false;
                state.isConversationFetchLoading = true;
            })
            .addCase(getAllConversations.fulfilled, (state, { payload }) => {
                state.isConversationFetchLoading = false;
                state.isConversationFetchError = false;
                state.isConversationFetchSuccess = true;
                state.conversations = payload.conversations;
                state.totalConversations = payload.total_conversation;
            })
            .addCase(getAllConversations.rejected, (state, { payload }) => {
                state.isConversationFetchLoading = false;
                state.isConversationFetchSuccess = false;
                state.isConversationFetchError = true;
                state.isConversationFetchMessage = payload;
            })

            .addCase(createConversation.pending, (state) => {
                state.isConversationFetchSuccess = false;
                state.isConversationFetchError = false;
                state.isConversationFetchLoading = true;
            })
            .addCase(createConversation.fulfilled, (state, { payload }) => {
                state.isConversationFetchLoading = false;
                state.isConversationFetchError = false;
                state.isConversationFetchSuccess = true;
                state.conversations = [...state.conversations, payload.conversation];
            })
            .addCase(createConversation.rejected, (state, { payload }) => {
                state.isConversationFetchLoading = false;
                state.isConversationFetchSuccess = false;
                state.isConversationFetchError = true;
                state.isConversationFetchMessage = payload;
            });
    }
});

export const {
    setSelectedConversation,
    clearMessageStore
} = messagesSlice.actions;
export default messagesSlice.reducer;