import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { CONVERSATIONS_URL } from "../../constants.js";
import { getAllConversations, getAllMessages } from "./messagesSlice.js";

export const getAllMessagesThunk = async (conversationId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const response = await customFetch.get(`${ CONVERSATIONS_URL }/${ conversationId }/messages`, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


export const sendMessagesThunk = async ({ conversationId, messages }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const response = await customFetch.post(`${ CONVERSATIONS_URL }/${ conversationId }/messages`, messages, { headers });
        thunkAPI.dispatch(getAllMessages(conversationId)); // Dispatch the getAllMessages action with the conversationId
        return response.data.message; // Return the message object from the response
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


export const getAllConversationsThunk = async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const response = await customFetch.get(CONVERSATIONS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const createConversationThunk = async (data, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { userId: state.user.id };
        const existingConversations = thunkAPI.getState().messages.conversations;

        // Check if a conversation with the selected user already exists
        const existingConversation = existingConversations.find(
            (conversation) =>
                conversation.users.some(
                    (user) => user.id === data.user2Id || user.id === state.user.id
                )
        );

        if (existingConversation) {
            // If a conversation already exists, return the existing conversation
            return { conversation: existingConversation };
        }

        // Create a new conversation if it doesn't exist
        const response = await customFetch.post(`${ CONVERSATIONS_URL }`, data, { headers });
        const { msg, conversation } = response.data;

        // Dispatch the getAllConversations action to fetch the updated list of conversations
        thunkAPI.dispatch(getAllConversations());

        return { conversation };
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


