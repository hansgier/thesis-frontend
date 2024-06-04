import { clearAuthStore } from "./authSlice.js";
import { clearUsersStore } from "../users/usersSlice.js";
import { clearBarangayStore } from "../users/barangaysSlice.js";
import { clearAnnouncementStore } from "../announcements/announcementsSlice.js";
import { clearCommentStore } from "../comments/commentsSlice.js";
import { clearContactStore } from "../contacts/contactsSlice.js";
import { clearMediaStore } from "../media/mediaSlice.js";
import { clearMessageStore } from "../messages/messagesSlice.js";
import { clearProjectStore } from "../projects/projectsSlice.js";
import { clearUpdateStore } from "../projects/updatesSlice.js";
import { clearReactionStore } from "../reactions/reactionsSlice.js";

export const clearStoreThunk = async (message, thunkAPI) => {
    try {
        thunkAPI.dispatch(clearAuthStore());
        thunkAPI.dispatch(clearUsersStore());
        thunkAPI.dispatch(clearBarangayStore());
        thunkAPI.dispatch(clearAnnouncementStore());
        thunkAPI.dispatch(clearCommentStore());
        thunkAPI.dispatch(clearContactStore());
        thunkAPI.dispatch(clearMediaStore());
        thunkAPI.dispatch(clearMessageStore());
        thunkAPI.dispatch(clearProjectStore());
        thunkAPI.dispatch(clearUpdateStore());
        thunkAPI.dispatch(clearReactionStore());
        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e);
    }
};