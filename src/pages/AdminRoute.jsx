import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AdminRoute = ({ children }) => {
    const { user } = useSelector((store) => store.auth);
    const { role } = user;
    if (role !== "admin") {
        return <Navigate to="/dashboard" />;
    }
    return children;
};