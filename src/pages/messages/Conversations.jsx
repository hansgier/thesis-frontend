import { useSelector } from "react-redux";
import React from "react";

export const Conversations = React.memo(({ conversation }) => {
    const { user } = useSelector((store) => store.auth);

    // const recipient = conversation.users.find((c) => c.id !== auth.id).username;

    return (
        <>

        </>
    );
});