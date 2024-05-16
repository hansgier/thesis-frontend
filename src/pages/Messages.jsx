import { useWindowSize } from "../hooks/index.jsx";
import React, { useEffect, useReducer } from "react";
import { IoReturnDownBack, IoSearch } from "react-icons/io5";
import { Button, Form, Input, Modal, Select, Skeleton, Tooltip } from "antd";
import { project_tags } from "../utils/data-components.jsx";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Conversations } from "./messages/Conversations.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
    createConversation,
    getAllConversations,
    getAllMessages,
    sendMessages,
    setSelectedConversation
} from "../app/features/messages/messagesSlice.js";
import moment from "moment";
import { barangaysList } from "../utils/barangaysList.js";

const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const initialState = {
    modalOpen: false,
    searchData: [],
    chatMode: false,
    value: null,
    convoSelected: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "toggleModalOpen":
            return { ...state, modalOpen: !state.modalOpen };
        case "setModalClose":
            return { ...state, modalOpen: false };
        case "setModalOpen":
            return { ...state, modalOpen: true };
        case "setSearchData":
            return { ...state, searchData: action.payload };
        case "toggleChatMode":
            return { ...state, chatMode: !state.chatMode };
        case "setChatMode":
            return { ...state, chatMode: action.payload };
        case "setValue":
            return { ...state, value: action.payload };
        case "setConvoSelected":
            return { ...state, convoSelected: action.payload };
        default:
            throw new Error;
    }
};

export const Messages = () => {
    const [form] = Form.useForm();
    const {
        conversations,
        messages,
        isMessageFetchLoading,
        isConversationFetchLoading,
        selectedConversation
    } = useSelector((store) => store.messages);
    const { user } = useSelector((store) => store.auth);
    const { width } = useWindowSize();
    const location = useLocation();
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchRedux = useDispatch();

    useEffect(() => {
        if (location.pathname !== "/project" || location.pathname !== "/singleproject") {
            sessionStorage.setItem("scrollPosition", "0");
        }
        dispatchRedux(getAllConversations());
    }, []);

    const handleSearch = (newValue) => {
        dispatch({
            type: "setSearchData", payload: newValue ? barangaysList : []
        });
    };
    //TODO: tiwasa ning create conversation functionality
    const handleChange = async (newValue) => {
        if (newValue) {
            try {
                // Create a new conversation with the selected user
                const response = await dispatchRedux(createConversation({ user2Id: newValue }));
                const { conversation } = response.payload;
                console.log(response);
                // Fetch the updated list of conversations
                await dispatchRedux(getAllConversations());

                // Remove the selected barangay from the options
                const updatedBarangaysList = barangaysList.filter(
                    (barangay) => barangay.value !== newValue
                );
                dispatch({ type: "setSearchData", payload: updatedBarangaysList });

                // Set the selected conversation and fetch messages
                dispatch({ type: "setConvoSelected", payload: conversation.id });
                dispatchRedux(setSelectedConversation({ payload: conversation.id }));
                dispatchRedux(getAllMessages(conversation.id));

                // Set the chat mode to true
                dispatch({ type: "setChatMode", payload: true });
            } catch (error) {
                console.error("Error creating conversation:", error);
            }
        }
        dispatch({ type: "setValue", payload: newValue });
        dispatch({ type: "setModalClose" });
    };

    const onFinish = (values) => {
        if (values.content) {
            dispatchRedux(sendMessages({
                conversationId: state.convoSelected, messages: {
                    content: values.content
                }
            }));
        }
        form.resetFields();
    };

    return (
        <div className="h-full max-h-full overflow-y-scroll pt-4 px-0 md:px-6">
            <div className="flex h-full w-full bg-white" data-id="1">
                { width > 768 ? (
                    <>
                        <div
                            className="bg-gray-100 border-gray-200 border-r flex-col mb-0 pb-4 pl-4 pr-2 pt-0 w-full md:flex md:pl-0 md:py-4 md:w-[300px]"
                            data-id="2">
                            <div className="flex items-center justify-between mb-4" data-id="3">
                                <h2 className="font-semibold select-none text-base md:text-lg"
                                    data-id="4">Conversations</h2>
                                <button
                                    onClick={ () => dispatch({ type: "toggleModalOpen" }) }
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                    data-id="5">
                                    <IoSearch />
                                </button>
                                <Modal
                                    title="Search a Conversation"
                                    centered
                                    open={ state.modalOpen }
                                    onOk={ () => {
                                        dispatch({ type: "setModalClose" });
                                    } }
                                    onCancel={ () => dispatch({ type: "setModalClose" }) }
                                    footer={ null }
                                    styles={ { header: { userSelect: "none" } } }
                                >
                                    <Select
                                        showSearch
                                        value={ state.value }
                                        style={ { width: "100%" } }
                                        dropdownStyle={ { maxHeight: 400 } }
                                        placeholder="Search for barangay or city government"
                                        suffixIcon={ null }
                                        filterOption={ filterOption }
                                        onSearch={ handleSearch }
                                        onChange={ handleChange }
                                        notFoundContent={ null }
                                        options={ barangaysList }
                                    />
                                </Modal>
                            </div>
                            <div className="overflow-y-scroll pr-4">
                                {/*-----------------------CONVERSATIONS-----------------------*/ }
                                <div className="h-full space-y-2" data-id="7">
                                    { isConversationFetchLoading ? <>
                                            <Skeleton active
                                                      spinning={ isConversationFetchLoading }
                                                      block />
                                            <Skeleton active
                                                      spinning={ isConversationFetchLoading }
                                                      block />
                                            <Skeleton active
                                                      spinning={ isConversationFetchLoading }
                                                      block />
                                            <Skeleton active
                                                      spinning={ isConversationFetchLoading }
                                                      block />

                                        </> :
                                        conversations.map((conversation, i) => (
                                            <div
                                                onClick={ () => {
                                                    dispatch({ type: "setChatMode", payload: true });
                                                    dispatch({ type: "setConvoSelected", payload: conversation.id });
                                                    dispatchRedux(setSelectedConversation({ payload: conversation.id }));
                                                    dispatchRedux(getAllMessages(conversation.id));
                                                } }
                                                key={ i }
                                                className={ `flex items-center gap-3 rounded-md  p-3 ${ state.convoSelected === conversation.id ? "bg-sky-200" : "bg-white" } hover:bg-sky-100 transition-all duration-200` }>
                                                <div className="flex-1 space-y-1" data-id="12">
                                                    <p className="font-medium select-none text-sm md:text-sm"
                                                       data-id="13">
                                                        { conversation.users.find((c) => c.id !== user.id).username }
                                                    </p>
                                                </div>
                                            </div>
                                        )) }
                                </div>
                            </div>
                        </div>
                        { state.convoSelected ?
                            <div className="flex-1 md:flex flex-col" data-id="24">
                                <div
                                    className="border-b border-gray-200 flex p-4"
                                    data-id="25">
                                    {/*--------NAME OF WHO YOU WANT TO CHAT--------*/ }
                                    <h2 className="flex-1 font-semibold select-none text-lg"
                                        data-id="26">
                                        { conversations.find((conversation) => conversation.id === state.convoSelected).users.find((c) => c.id !== user.id).username }
                                    </h2>
                                    { width < 768 && (
                                        <Tooltip title="Back">
                                            <Button type="text"
                                                    onClick={ () => dispatch({ type: "setChatMode", payload: false }) }
                                                    icon={ <IoReturnDownBack /> } />
                                        </Tooltip>
                                    ) }
                                </div>
                                {/*---------------------------MESSAGES---------------------*/ }
                                <div className="flex-1 mb-[70px] overflow-y-auto pt-4 px-4 flex flex-col">
                                    { messages.map((message, index) => {
                                        if (message.sender_id === user.id) {
                                            return (
                                                <div className="flex items-end gap-3 justify-end" data-id="36"
                                                     key={ `sent-${ index }` }>
                                                    <div className="flex flex-1 flex-col items-end space-y-2"
                                                         data-id="37">
                                                        <div
                                                            className="bg-gradient-to-tr from-Thesis-200 p-3 rounded-lg text-sm text-white to-Thesis-300 w-3/5"
                                                            data-id="38"
                                                        >
                                                            <p data-id="39">{ message.content }</p>
                                                        </div>
                                                        <span
                                                            className="dark:text-gray-400 select-none text-gray-500 text-xs"
                                                            data-id="40">
              { moment(message.createdAt).format("h:mm a") }
            </span>
                                                    </div>
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div className="flex items-start gap-3" data-id="28"
                                                     key={ `received-${ index }` }>
          <span
              className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
              data-id="29"
          >
            <span
                className="bg-gray-200 flex h-full items-center justify-center rounded-full select-none w-full"
                data-id="31"
            >
              OD
            </span>
          </span>
                                                    <div className="flex-1 space-y-2" data-id="32">
                                                        <div className="bg-gray-200 p-3 rounded-lg text-sm w-3/5"
                                                             data-id="33">
                                                            <p data-id="34">{ message.content }</p>
                                                        </div>
                                                        <span
                                                            className="dark:text-gray-400 select-none text-gray-500 text-xs"
                                                            data-id="35">
              { moment(message.createdAt).format("h:mm a") }
            </span>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    }) }
                                </div>


                                {/*-----------------------TYPE YOUR MESSAGE SECTION-----------------------*/ }
                                <div
                                    className="bg-white border-gray-200 bottom-0 fixed p-4 w-full md:w-[calc(100%-464px)]"
                                    data-id="52">
                                    <Form form={ form } onFinish={ onFinish }
                                          autoComplete="off"
                                          className="flex items-center gap-2 m-0 p-0"
                                          data-id="53">
                                        <Form.Item name="content" className="m-0 p-0 w-full" required>
                                            <Input
                                                className="bg-gray-100 border border-gray-100 disabled:cursor-not-allowed disabled:opacity-50 file:bg-transparent file:border-0 file:font-medium file:text-sm flex flex-1 focus-visible:outline-none focus:border-Thesis-200 focus:outline-none focus:ring-0 focus:ring-offset-0 h-10 px-3 py-2 rounded-md text-gray-700 text-sm w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-bold"
                                                placeholder="Type your message..." data-id="54" type="text" />
                                        </Form.Item>
                                        <Form.Item className="m-0 p-0">
                                            <button
                                                className="bg-gradient-to-b disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium from-yellow-400 h-10 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 inline-flex items-center justify-center rounded-md text-sm to-yellow-600 transition-colors w-10 whitespace-nowrap"
                                                data-id="55" type="submit">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24"
                                                     fill="none" stroke="currentColor" strokeWidth="2"
                                                     strokeLinecap="round"
                                                     strokeLinejoin="round" className="h-4 text-white w-4"
                                                     data-id="56">
                                                    <path d="m22 2-7 20-4-9-9-4Z"></path>
                                                    <path d="M22 2 11 13"></path>
                                                </svg>
                                            </button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                            :
                            (
                                <div className="flex flex-col items-center justify-center select-none w-full "
                                     data-id="24">
                                    <h2 className="text-xl">Search or select a barangay/city government to start
                                                            chatting</h2>
                                </div>
                            ) }
                    </>
                ) : (
                    <>
                        {/*---------------------------------------MOBILE VERSION---------------------------------------*/ }
                        {/*-----------------------CONVERSATIONS SECTION-----------------------*/ }
                        { !state.chatMode && (
                            <div
                                className="bg-gray-100 border-gray-200 border-r flex-col mb-0 pb-4 pl-4 pr-2 pt-0 w-full md:flex md:pl-0 md:py-4 md:w-[300px]"
                                data-id="2">
                                <div className="flex items-center justify-between mb-4" data-id="3">
                                    <h2 className="font-semibold select-none text-base md:text-lg"
                                        data-id="4">Conversations</h2>
                                    <button
                                        onClick={ () => dispatch({ type: "toggleModalOpen" }) }
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                                        data-id="5">
                                        <IoSearch />
                                    </button>
                                    <Modal
                                        title="Search a Conversation"
                                        centered
                                        open={ state.modalOpen }
                                        onOk={ () => {
                                            dispatch({ type: "setModalClose" });
                                        } }
                                        onCancel={ () => dispatch({ type: "setModalClose" }) }
                                        footer={ null }
                                        styles={ { header: { userSelect: "none" } } }
                                    >
                                        <Select
                                            showSearch
                                            value={ state.value }
                                            style={ { width: "100%" } }
                                            dropdownStyle={ { maxHeight: 400 } }
                                            placeholder="Search for barangay or city government"
                                            suffixIcon={ null }
                                            filterOption={ filterOption }
                                            onSearch={ handleSearch }
                                            onChange={ handleChange }
                                            notFoundContent={ null }
                                            options={ project_tags }
                                        />
                                    </Modal>
                                </div>
                                <div className="overflow-y-scroll pr-4">
                                    {/*-----------------------CONVERSATIONS-----------------------*/ }
                                    <div className="h-full space-y-2" data-id="7">
                                        {/*//TODO: map the conversations here*/ }
                                        <div onClick={ () => dispatch({ type: "setChatMode", payload: true }) }>
                                            <Conversations
                                                recipient="Brgy. Linao"
                                                lastMsgDate="9:05 AM"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                        {/*-----------------------CHAT SECTION-----------------------*/ }
                        { state.chatMode && (
                            <motion.div
                                initial={ { opacity: 0, y: -30, x: 0 } }
                                animate={ { opacity: 1, y: 0, x: 0 } }
                                transition={ { duration: 0.1 } }
                                className="md:flex flex-col h-full w-full" data-id="24">
                                <div
                                    className=" border-b border-gray-200 flex p-4"
                                    data-id="25">
                                    <h2 className="flex-1 font-semibold select-none text-lg text-black"
                                        data-id="26">Brgy.
                                                     Linao</h2>
                                    { width < 768 && (
                                        <Tooltip title="Back">
                                            <Button type="text"
                                                    onClick={ () => dispatch({ type: "setChatMode", payload: false }) }
                                                    icon={ <IoReturnDownBack color={ "white" } size={ 16 } /> } />
                                        </Tooltip>
                                    ) }
                                </div>

                                <div className="flex-1 mb-[73px] overflow-y-auto pt-4 px-4 space-y-4 bg-white">
                                    <div className="flex items-start gap-3" data-id="28">
                                            <span
                                                className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                                                data-id="29">
                                                <span
                                                    className="bg-gray-200 flex h-full items-center justify-center rounded-full select-none w-full"
                                                    data-id="31">
                                                    OD
                                                </span>
                                            </span>
                                        <div className="flex-1 space-y-2" data-id="32">
                                            <div className="bg-gray-200 p-3 rounded-lg text-sm w-3/5"
                                                 data-id="33">
                                                <p data-id="34">Hey, let's discuss the project details.</p>
                                            </div>
                                            <span
                                                className="dark:text-gray-400 select-none text-gray-500 text-xs"
                                                data-id="35">9:15 AM </span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3"
                                         data-id="36">
                                        <div className="flex flex-1 flex-col items-end space-y-2 "
                                             data-id="37">
                                            <div
                                                className="bg-gradient-to-tr from-Thesis-300 p-3  rounded-lg text-sm text-white to-cyan-600 w-3/5"
                                                data-id="38">
                                                <p data-id="39">Sounds good, I'm available anytime.</p>
                                            </div>
                                            <span
                                                className="dark:text-gray-400 select-none text-gray-500 text-xs"
                                                data-id="40">
                                                    9:16 AM
                                                </span>
                                        </div>
                                        <span
                                            className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
                                            data-id="41">
                                                <span
                                                    className="bg-gray-200 flex h-full items-center justify-center rounded-full select-none w-full"
                                                    data-id="43">
                                                    JP
                                                </span>
                                            </span>
                                    </div>
                                </div>

                                {/*-----------------------TYPE YOUR MESSAGE SECTION-----------------------*/ }
                                <div
                                    className="bg-white border-gray-200 bottom-0 fixed p-4 w-full md:w-[calc(100%-464px)]"
                                    data-id="52">
                                    <form className="flex items-center gap-2" data-id="53">
                                        <input
                                            className="bg-gray-100 border border-gray-100 disabled:cursor-not-allowed disabled:opacity-50 file:bg-transparent file:border-0 file:font-medium file:text-sm flex flex-1 focus-visible:outline-none focus:border-Thesis-200 focus:outline-none focus:ring-0 focus:ring-offset-0 h-10 px-3 py-2 rounded-md text-gray-700 text-sm w-full placeholder:text-gray-400 placeholder:text-sm placeholder:font-bold"
                                            placeholder="Type your message..." data-id="54" type="text" />
                                        <button
                                            className="bg-gradient-to-b disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 font-medium from-yellow-400 h-10 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 inline-flex items-center justify-center rounded-md text-sm to-yellow-600 transition-colors w-10 whitespace-nowrap"
                                            data-id="55" type="submit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24"
                                                 fill="none" stroke="currentColor" strokeWidth="2"
                                                 strokeLinecap="round"
                                                 strokeLinejoin="round" className="h-4 text-white w-4"
                                                 data-id="56">
                                                <path d="m22 2-7 20-4-9-9-4Z"></path>
                                                <path d="M22 2 11 13"></path>
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </motion.div>
                        ) }
                    </>
                ) }
            </div>
        </div>
    );
};