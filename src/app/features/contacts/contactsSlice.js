import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    deleteAllContactsThunk,
    deleteContactThunk,
    getAllContactsThunk,
    postContactThunk,
    updateContactThunk
} from "./contactsThunk.js";
import { clearUploadedMedia } from "../media/mediaSlice.js";

const initialFiltersState = {
    search: "",
    sort: "az",
    contacted_by: ""
};

const initialState = {
    isContactFetchLoading: false,
    isContactDeleteLoading: false,
    isContactUpdateLoading: false,
    isContactFetchSuccess: true,
    contactFetchErrorMessage: "",
    isContactFetchError: false,
    totalContacts: 0,
    contacts: [],
    filtered_contacts: [],
    isAddContactMode: false,
    isEditContactMode: false,
    isContactSaved: false,
    isContactFormReset: false,
    createdContact: false,
    ...initialFiltersState
};

export const getAllContacts = createAsyncThunk("contacts/getAllContacts", getAllContactsThunk);
export const postContact = createAsyncThunk("contacts/postContact", postContactThunk);
export const deleteContact = createAsyncThunk("contacts/deleteContact", deleteContactThunk);
export const deleteAllContacts = createAsyncThunk("contacts/deleteAllContacts", deleteAllContactsThunk);
export const updateContact = createAsyncThunk("contacts/updateContact", updateContactThunk);


const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        toggleAddContactMode: (state) => {
            state.isAddContactMode = !state.isAddContactMode;
        },
        toggleEditContactMode: (state) => {
            state.isEditContactMode = !state.isEditContactMode;
        },
        toggleContactFetchSuccess: (state, action) => {
            state.isContactFetchSuccess = action.payload;
        },
        contactSaved: (state, action) => {
            state.isContactSaved = action.payload;
        },
        contactFormReset: (state, action) => {
            state.isContactFormReset = action.payload;
        },
        sortContacts: (state, action) => {
            state.sort = action.payload;
            if (action.payload === "az") {
                state.contacts = state.contacts.sort((a, b) => {
                    return a.name.toUpperCase() === b.name.toUpperCase() ? 0 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
                });
                state.filtered_contacts = state.filtered_contacts.sort((a, b) => {
                    return a.name.toUpperCase() === b.name.toUpperCase() ? 0 : a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
                });
            } else if (action.payload === "za") {
                state.contacts = state.contacts.sort((a, b) => {
                    return b.name.toUpperCase() === a.name.toUpperCase() ? 0 : b.name.toUpperCase() > a.name.toUpperCase() ? 1 : -1;
                });
                state.filtered_contacts = state.filtered_contacts.sort((a, b) => {
                    return b.name.toUpperCase() === a.name.toUpperCase() ? 0 : b.name.toUpperCase() > a.name.toUpperCase() ? 1 : -1;
                });
            }
        },
        setFilteredContacts: (state, action) => {
            state.filtered_contacts = action?.payload;
        },
        clearContactStore: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateContact.pending, (state) => {
                state.isContactFetchSuccess = false;
                state.isContactFetchError = false;
                state.isContactUpdateLoading = true;
            })
            .addCase(updateContact.fulfilled, (state, { payload }) => {
                state.isContactUpdateLoading = false;
                state.isContactFetchError = false;
                state.isContactFetchSuccess = true;
                state.isContactSaved = true;
                state.isEditContactMode = false;
                clearUploadedMedia();
            })
            .addCase(updateContact.rejected, (state, { payload }) => {
                state.isContactUpdateLoading = false;
                state.isContactFetchSuccess = false;
                state.isContactFetchError = true;
                state.contactFetchErrorMessage = payload;
            })

            .addCase(deleteAllContacts.pending, (state) => {
                state.isContactFetchSuccess = false;
                state.isContactFetchError = false;
                state.isContactDeleteLoading = true;
            })
            .addCase(deleteAllContacts.fulfilled, (state, { payload }) => {
                state.isContactDeleteLoading = false;
                state.isContactFetchError = false;
                state.isContactFetchSuccess = true;
            })
            .addCase(deleteAllContacts.rejected, (state, { payload }) => {
                state.isContactDeleteLoading = false;
                state.isContactFetchSuccess = false;
                state.isContactFetchError = true;
                state.contactFetchErrorMessage = payload;
            })

            .addCase(deleteContact.pending, (state) => {
                state.isContactDeleteLoading = true;
                state.isContactFetchSuccess = false;
                state.isContactFetchError = false;
            })
            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.isContactDeleteLoading = false;
                state.isContactFetchError = false;
                state.isContactFetchSuccess = true;
            })
            .addCase(deleteContact.rejected, (state, { payload }) => {
                state.isContactDeleteLoading = false;
                state.isContactFetchSuccess = false;
                state.isContactFetchError = true;
                state.contactFetchErrorMessage = payload;
            })

            .addCase(postContact.pending, (state) => {
                state.isContactFetchSuccess = false;
                state.isContactFetchError = false;
                state.isContactFetchLoading = true;
            })
            .addCase(postContact.fulfilled, (state, { payload }) => {
                state.isContactFetchLoading = false;
                state.isContactFetchError = false;
                state.isContactFetchSuccess = true;
                state.isContactSaved = true;
                state.isAddContactMode = false;
                clearUploadedMedia();
            })
            .addCase(postContact.rejected, (state, { payload }) => {
                state.isContactFetchLoading = false;
                state.isContactFetchSuccess = false;
                state.isContactFetchError = true;
                state.contactFetchErrorMessage = payload;
            })

            .addCase(getAllContacts.pending, (state) => {
                state.isContactFetchSuccess = false;
                state.isContactFetchError = false;
                state.isContactFetchLoading = true;
            })
            .addCase(getAllContacts.fulfilled, (state, { payload }) => {
                state.isContactFetchLoading = false;
                state.isContactFetchError = false;
                state.isContactFetchSuccess = true;
                state.contacts = !payload.contacts ? [] : payload?.contacts.slice().sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();

                    // Check if either name contains "CITY GOVERNMENT"
                    const containsCityGovA = nameA.includes("City Government");
                    const containsCityGovB = nameB.includes("City Government");

                    // If one name contains "CITY GOVERNMENT" and the other doesn't, prioritize the one that contains it
                    if (containsCityGovA && !containsCityGovB) {
                        return -1;
                    }
                    if (!containsCityGovA && containsCityGovB) {
                        return 1;
                    }

                    // If both names contain "CITY GOVERNMENT" or neither does, sort alphabetically
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                state.totalContacts = !payload.totalCount ? 0 : payload?.totalCount;
                state.filtered_contacts = state.contacts;
            })
            .addCase(getAllContacts.rejected, (state, { payload }) => {
                state.isContactFetchLoading = false;
                state.isContactFetchSuccess = false;
                state.isContactFetchError = true;
                state.contactFetchErrorMessage = payload;
            });
    }
});

export const {
    toggleAddContactMode,
    clearContactStore,
    toggleContactFetchSuccess,
    contactSaved,
    contactFormReset,
    toggleEditContactMode,
    sortContacts,
    setFilteredContacts
} = contactsSlice.actions;
export default contactsSlice.reducer;