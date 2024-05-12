import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    Announcements,
    Contacts,
    Dashboard,
    LoginRegister,
    Messages,
    NotFound,
    Profile,
    Projects,
    SharedLayout,
    Users
} from "./pages/index.jsx";
import { SingleProject } from "./pages/project/index.jsx";

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route index element={ <LoginRegister /> } />
                <Route path="/" element={ <SharedLayout /> }>
                    <Route path="dashboard" element={ <Dashboard /> } />
                    <Route path="projects" element={ <Projects /> } />
                    <Route path="projects/singleprojects" element={ <SingleProject /> } />
                    <Route path="announcements" element={ <Announcements /> } />
                    <Route path="messages" element={ <Messages /> } />
                    <Route path="contacts" element={ <Contacts /> } />
                    <Route path="profile" element={ <Profile /> } />
                    <Route path="users" element={ <Users /> } />
                </Route>
                <Route path="*" element={ <NotFound /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
