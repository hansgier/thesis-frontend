import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const { user, guestMode } = useSelector((store) => store.auth);
    if (guestMode) {
        return children;
    }
    if (!user) {
        return <Navigate to="/" />;
    }
    return children;
};