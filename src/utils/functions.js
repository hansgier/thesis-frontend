import { useSelector } from "react-redux";

export function getInitials(username) {
    const names = username.split(" ");
    return names.map(name => name[0].toUpperCase()).join("");
}

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function sortMessagesByDate(messages) {
    return messages.sort((a, b) => {
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        return dateB - dateA;
    });
}

// Helper function to create a DateTimeFormat instance with the desired time zone
export const getDateTimeFormat = () => {
    return new Intl.DateTimeFormat([], {
        timeZone: "Asia/Manila",
        hour12: false,
        hourCycle: "h23"
    });
};

export function getNameByCreatedBy(createdBy) {
    const { users4admin } = useSelector((store) => store.users);
    const { barangays } = useSelector((store) => store.barangays);
    const user = users4admin.find((user) => user.id === createdBy);

    if (user) {
        if (user.role === "barangay") {
            const barangay = barangays.find((b) => b.id === user.barangay_id);
            return barangay ? barangay.name : "Unknown Barangay";
        } else if (user.role === "admin") {
            return "City Government";
        } else {
            return user.username;
        }
    }

    return "Unknown User";
}