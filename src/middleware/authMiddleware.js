// authMiddleware.js
import { getUserFromLocalStorage } from "../utils/localStorage";

const authMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    // Check if the action is dispatched on application load
    const isAppLoadAction = action.type === "@@redux/INIT";

    if (isAppLoadAction) {
        // Retrieve auth data from localStorage
        const user = getUserFromLocalStorage();

        // If auth data exists, dispatch an action to update the store
        if (user) {
            store.dispatch({
                type: "auth/loginUser/fulfilled",
                payload: { user }
            });
        }
    }

    return result;
};

export default authMiddleware;