import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    AdminRoute,
    Announcements,
    AssistantAdminRoute,
    Contacts,
    Dashboard,
    LoginRegister,
    Messages,
    NotFound,
    Profile,
    Projects,
    ProtectedRoute,
    SharedLayout,
    Users
} from "./pages/index.jsx";
import { SingleProject } from "./pages/project/index.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <SharedLayout />
                    </ProtectedRoute>
                }>
                    <Route path="dashboard" element={ <Dashboard /> } />
                    <Route path="projects" element={ <Projects /> } />
                    <Route path="projects/:projectId" element={ <SingleProject /> } />
                    <Route path="announcements" element={ <Announcements /> } />
                    <Route path="messages" element={ <AssistantAdminRoute><Messages /></AssistantAdminRoute> } />
                    <Route path="contacts" element={ <Contacts /> } />
                    <Route path="profile" element={ <Profile /> } />
                    <Route path="users" element={ <AdminRoute><Users /></AdminRoute> } />
                </Route>
                <Route index path="/" element={ <LoginRegister /> } />
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
