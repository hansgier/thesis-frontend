import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    createProjectThunk,
    deleteProjectThunk,
    editProjectThunk,
    getAllProjectsThunk,
    getProjectThunk
} from "./projectsThunk.js";
import { resetReactions } from "../reactions/reactionsSlice.js";
import { resetAllComments } from "../comments/commentsSlice.js";
import { setEditProjectMode } from "../auth/authSlice.js";
import { message } from "antd";


const initialFitlersState = {
    project_search: "",
    sort: "newest"
};

const initialState = {
    isProjectFetchLoading: false,
    isProjectFetchSuccess: true,
    projectFetchErrorMessage: "",
    isProjectFetchError: false,
    totalProjects: 0,
    projects: [],
    filtered_projects: null,
    project: null,
    singleProject: null,
    selected_project: null,
    completed: 0,
    ongoing: 0,
    planned: 0,
    cancelled: 0,
    on_hold: 0,
    featuredProjects: [],
    upcomingProjects: [],
    feedbackSummaries: [],
    uploadedImagesArray: [],
    uploadLoading: false,
    uploadError: null,
    isEditModeProjectUpdate: false,
    isAddModeProjectUpdate: false,
    ...initialFitlersState
};


export const getAllProjects = createAsyncThunk("projects/getAllProjects", getAllProjectsThunk);
export const getSingleProject = createAsyncThunk("projects/getSingleProject", getProjectThunk);
export const createProject = createAsyncThunk("projects/createProject", createProjectThunk);
export const editProject = createAsyncThunk("projects/editProject", editProjectThunk);
export const deleteProject = createAsyncThunk("projects/deleteProject", deleteProjectThunk);


const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setSingleProject: (state, { payload }) => {
        },
        resetSingleProject: (state) => {
            state.singleProject = null;
        },
        toggleEditModeProjectUpdate: (state) => {
            state.isEditModeProjectUpdate = !state.isEditModeProjectUpdate;
        },
        setEditModeProjectUpdate: (state, { payload }) => {
            state.isEditModeProjectUpdate = payload;
        },
        setAddModeProjectUpdate: (state, { payload }) => {
            state.isAddModeProjectUpdate = payload;
        },
        setSelectedProject: (state, action) => {
            state.selected_project = action.payload;
        },
        clearSelectedProject: (state, action) => state.selected_project = action.payload,
        toggleAddModeProjectUpdate: (state) => {
            state.isAddModeProjectUpdate = !state.isAddModeProjectUpdate;
        },
        setUploadedImagesArray: (state, action) => {
            state.uploadedImagesArray = action.payload;
        },
        clearUploadedImagesArray: (state) => state.uploadedImagesArray = [],
        clearProjectStore: () => initialState,
        sortProjects: (state, action) => {
            state.sort = action.payload;
            if (action.payload === "newest") {
                state.projects = state.projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                state.filtered_projects = state.filtered_projects.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            } else if (action.payload === "oldest") {
                state.projects = state.projects.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                state.filtered_projects = state.filtered_projects.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            } else if (action.payload === "az") {
                state.projects = state.projects.sort((a, b) => {
                    return a.title.toUpperCase() === b.title.toUpperCase() ? 0 : a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1;
                });
                state.filtered_projects = state.filtered_projects.sort((a, b) => {
                    return a.title.toUpperCase() === b.title.toUpperCase() ? 0 : a.title.toUpperCase() > b.title.toUpperCase() ? 1 : -1;
                });
            } else if (action.payload === "za") {
                state.projects = state.projects.sort((a, b) => {
                    return b.title.toUpperCase() === a.title.toUpperCase() ? 0 : b.title.toUpperCase() > a.title.toUpperCase() ? 1 : -1;
                });
                state.filtered_projects = state.filtered_projects.sort((a, b) => {
                    return b.title.toUpperCase() === a.title.toUpperCase() ? 0 : b.title.toUpperCase() > a.title.toUpperCase() ? 1 : -1;
                });
            }
        },
        setFilteredProjects: (state, action) => {
            // // state.filtered_projects = action?.payload;
            // const searchTerm = action?.payload
            // if (searchTerm === "") {
            //     state.filtered_projects = state.projects;
            // } else {
            //     state.filtered_projects = state.projects.filter(project =>
            //         project.title.toLowerCase().includes(searchTerm) ||
            //         project.description.toLowerCase().includes(searchTerm)
            //     );
            // }

            // If action.payload is an array, it's filtered projects
            if (Array.isArray(action.payload)) {
                state.filtered_projects = action.payload;
            }
            // If action.payload is a string, it's a search term
            else if (typeof action.payload === 'string') {
                const searchTerm = action.payload.toLowerCase();
                state.filtered_projects = state.projects.filter(project =>
                    project.title.toLowerCase().includes(searchTerm) ||
                    project.description.toLowerCase().includes(searchTerm)
                );
            }
        },
        resetProjectFilters: (state) => {
            state.filtered_projects = state.projects;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(deleteProject.pending, (state) => {
                state.isProjectFetchSuccess = false;
                state.isProjectFetchError = false;
                state.isProjectFetchLoading = true;
                message.loading({ content: "Deleting project...", key: "deletable_project" });
            })
            .addCase(deleteProject.fulfilled, (state, { payload }) => {
                state.isProjectFetchLoading = false;
                state.isProjectFetchError = false;
                state.isProjectFetchSuccess = true;
                message.success({ content: "Project deleted!", key: "deletable_project" });
            })
            .addCase(deleteProject.rejected, (state, { payload }) => {
                state.isProjectFetchLoading = false;
                state.isProjectFetchSuccess = false;
                state.projectFetchErrorMessage = payload;
                state.isProjectFetchError = true;
                message.error({ content: "There was an error in deleting the project", key: "deletable_project" });
            })

            .addCase(editProject.pending, (state) => {
                state.isProjectFetchSuccess = false;
                state.isProjectFetchError = false;
                state.isProjectFetchLoading = true;
                message.loading({ content: "Updating project...", key: "updatable" });
                setEditProjectMode(false);
            })
            .addCase(editProject.fulfilled, (state, { payload }) => {
                state.isProjectFetchLoading = false;
                state.isProjectFetchError = false;
                state.isProjectFetchSuccess = true;
                state.uploadedImagesArray = [];
                state.selected_project = null;
                setEditProjectMode(false);
                message.success({ content: "Project updated successfully!", key: "updatable" });

            })
            .addCase(editProject.rejected, (state, { payload }) => {
                state.isProjectFetchLoading = false;
                state.isProjectFetchSuccess = false;
                state.projectFetchErrorMessage = payload;
                state.isProjectFetchError = true;
                message.error({ content: "There was an error updating the project", key: "updatable" });

            })

            .addCase(createProject.pending, (state) => {
                state.isProjectFetchSuccess = false;
                state.isProjectFetchError = false;
                state.isProjectFetchLoading = true;
                message.loading({ content: "Posting project...", key: "creatable-project" });
            })
            .addCase(createProject.fulfilled, (state, { payload }) => {
                state.isProjectFetchLoading = false;
                state.isProjectFetchError = false;
                state.isProjectFetchSuccess = true;
                state.uploadedImagesArray = [];
                message.success({ content: "Project created!", key: "creatable-project" });
            })
            .addCase(createProject.rejected, (state, { payload }) => {
                state.isProjectFetchLoading = false;
                state.isProjectFetchSuccess = false;
                state.projectFetchErrorMessage = payload;
                state.isProjectFetchError = true;
                message.error({ content: "There was an error in creating the project", key: "creatable-project" });
            })

            .addCase(getSingleProject.pending, (state) => {
                state.isProjectFetchSuccess = false;
                state.isProjectFetchError = false;
                state.isProjectFetchLoading = true;
            })
            .addCase(getSingleProject.fulfilled, (state, { payload }) => {
                state.isProjectFetchLoading = false;
                state.isProjectFetchError = false;
                state.isProjectFetchSuccess = true;
                state.singleProject = payload.project;
            })
            .addCase(getSingleProject.rejected, (state, { payload }) => {
                state.isProjectFetchLoading = false;
                state.isProjectFetchSuccess = false;
                state.projectFetchErrorMessage = payload;
                state.isProjectFetchError = true;
            })

            .addCase(getAllProjects.pending, (state) => {
                state.isProjectFetchSuccess = false;
                state.isProjectFetchError = false;
                state.isProjectFetchLoading = true;
            })
            .addCase(getAllProjects.fulfilled, (state, { payload }) => {
                state.isProjectFetchLoading = false;
                state.isProjectFetchError = false;
                state.isProjectFetchSuccess = true;
                state.singleProject = null;
                resetAllComments();
                resetReactions();
                state.projects = !payload.projects ? [] : payload.projects.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                state.totalProjects = !payload.projects ? 0 : payload.totalCount;
                state.completed = !payload.projects ? 0 : payload.projects.filter(project => project.status === "completed").length;
                state.ongoing = !payload.projects ? 0 : payload.projects.filter(project => project.status === "ongoing").length;
                state.planned = !payload.projects ? 0 : payload.projects.filter(project => project.status === "planned").length;
                state.cancelled = !payload.projects ? 0 : payload.projects.filter(project => project.status === "cancelled").length;
                state.on_hold = !payload.projects ? 0 : payload.projects.filter(project => project.status === "on_hold").length;
                state.filtered_projects = state.projects;

                if (payload.projects) {
                    // Select first 3 most recently created projects
                    const sortedProjects = payload.projects.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    state.featuredProjects = sortedProjects.slice(0, 3);

                    // Select upcoming projects with "planned" status
                    const upcomingProjects = payload.projects.filter(project => project.status === "planned");
                    const maxUpcomingProjects = Math.min(3, upcomingProjects.length);
                    state.upcomingProjects = upcomingProjects.slice(0, maxUpcomingProjects);

                    //select 3 random projects with feedback or comment
                    const feedBackSummaries = [];
                    const shuffledProjects2 = payload.projects.sort(() => 0.5 - Math.random());
                    const maxFeaturedProjects2 = Math.min(3, shuffledProjects2.length);
                    for (let i = 0; i < maxFeaturedProjects2; i++) {
                        feedBackSummaries.push(shuffledProjects2[i]);
                    }
                    state.feedbackSummaries = feedBackSummaries;
                }

            })
            .addCase(getAllProjects.rejected, (state, { payload }) => {
                state.isProjectFetchLoading = false;
                state.isProjectFetchSuccess = false;
                state.projectFetchErrorMessage = payload;
                state.isProjectFetchError = true;
            });
    }
});

export const {
    setSingleProject,
    toggleEditModeProjectUpdate,
    toggleAddModeProjectUpdate,
    setEditModeProjectUpdate,
    setAddModeProjectUpdate,
    clearProjectStore,
    setUploadedImagesArray,
    clearUploadedImagesArray,
    resetSingleProject,
    sortProjects,
    resetProjectSort,
    resetProjectFilters,
    filterProjects,
    setFilteredProjects,
    setSelectedProject,
    clearSelectedProject
} = projectsSlice.actions;
export default projectsSlice.reducer;