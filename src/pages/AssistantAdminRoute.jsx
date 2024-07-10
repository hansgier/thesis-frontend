import { useSelector } from "react-redux";

export const AssistantAdminRoute = ({ children }) => {
    const { user } = useSelector((store) => store.auth);
    const { role } = user;
    if (role === "admin") {
        return <Navigates to="/dashboard" />;
    }
    return children;
};