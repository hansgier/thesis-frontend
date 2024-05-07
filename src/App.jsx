import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
    Announcements,
    Contacts,
    Dashboard,
    FeedbacksAdmin,
    Messages,
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
                <Route path="/" element="" />
                <Route path="/" element={ <SharedLayout /> }>
                    <Route path="dashboard" element={ <Dashboard /> } />
                    <Route path="projects" element={ <Projects /> } />
                    <Route path="projects/singleprojects" element={ <SingleProject /> } />
                    <Route path="announcements" element={ <Announcements /> } />
                    <Route path="messages" element={ <Messages /> } />
                    <Route path="contacts" element={ <Contacts /> } />
                    <Route path="profile" element={ <Profile /> } />
                    <Route path="feedbacks" element={ <FeedbacksAdmin /> } />
                    <Route path="users" element={ <Users /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
