export function getInitials(username) {
    const names = username.split(" ");
    return names.map(name => name[0].toUpperCase()).join("");
}