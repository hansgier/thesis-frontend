export const addUserToLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
};
export const addToLocalStorage = (entity, name) => {
    localStorage.setItem(name, JSON.stringify(entity));
};
export const removeItemLocalStorage = (name) => {
    localStorage.removeItem(name);
};
export const getItemLocalStorage = (name) => {
    const result = localStorage.getItem(name);
    return result ? JSON.parse(result) : null;
};
export const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
};
export const getUserFromLocalStorage = () => {
    const result = localStorage.getItem("user");
    return result ? JSON.parse(result) : null;
};
