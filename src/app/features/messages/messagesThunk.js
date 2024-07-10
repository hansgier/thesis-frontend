import customFetch, { checkForUnauthorizedResponse } from "../../../utils/axios.js";
import { CONVERSATIONS_URL } from "../../constants.js";
import { getAllConversations, getAllMessages } from "./messagesSlice.js";

export const getAllMessagesThunk = async (conversationId, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(`${ CONVERSATIONS_URL }/${ conversationId }/messages`, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


export const sendMessagesThunk = async ({ conversationId, messages }, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };

        // Set a timeout for the post request
        const postTimeout = setTimeout(() => {
            throw new Error("Post operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const postResponse = await Promise.race([
            customFetch.post(`${ CONVERSATIONS_URL }/${ conversationId }/messages`, messages, { headers }),
            new Promise((_, reject) => postTimeout)
        ]);

        clearTimeout(postTimeout);

        const getAllMessagesPromise = thunkAPI.dispatch(getAllMessages(conversationId));
        const [postData, getAllMessagesData] = await Promise.all([postResponse.data, getAllMessagesPromise]);
        return postData;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


export const getAllConversationsThunk = async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        const response = await customFetch.get(CONVERSATIONS_URL, { headers });
        return response.data;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};

export const createConversationThunk = async (data, thunkAPI) => {
    try {
        const state = thunkAPI.getState().auth;
        const headers = { Authorization: `Bearer ${ state.user.accessToken }` };
        // const existingConversations = thunkAPI.getState().messages.conversations;
        //
        // // Check if a conversation with the selected auth already exists
        // const existingConversation = existingConversations.find(
        //     (conversation) =>
        //         conversation.users.some(
        //             (user) => user.id === data.user2Id || user.id === state.user.id
        //         )
        // );
        //
        // if (existingConversation) {
        //     // If a conversation already exists, return the existing conversation
        //     return { conversation: existingConversation };
        // }

        // // Create a new conversation if it doesn't exist
        // const { msg, conversation } = response.data;
        //
        // // Dispatch the getAllConversations action to fetch the updated list of conversations
        // thunkAPI.dispatch(getAllConversations());
        //
        // return { conversation };

        // Set a timeout for the post request
        const postTimeout = setTimeout(() => {
            throw new Error("Post operation timed out");
        }, 150000); // 2 minutes and 30 seconds (150000 milliseconds)

        const postResponse = await Promise.race([
            customFetch.post(`${ CONVERSATIONS_URL }`, data, { headers }),
            new Promise((_, reject) => postTimeout)
        ]);

        clearTimeout(postTimeout);

        const getAllConversationsPromise = thunkAPI.dispatch(getAllConversations());
        const [postData, getAllConversationsData] = await Promise.all([postResponse.data, getAllConversationsPromise]);
        return postData.conversation;
    } catch (e) {
        return checkForUnauthorizedResponse(e, thunkAPI);
    }
};


