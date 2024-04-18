import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Announcements, Contacts, Dashboard, Feedback, Projects, SharedLayout } from "./pages/navigation/index.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <SharedLayout/> }>
                    <Route index element={ <Dashboard/> }/>
                    <Route path="projects" element={ <Projects/> }/>
                    <Route path="announcements" element={ <Announcements/> }/>
                    <Route path="feedback" element={ <Feedback/> }/>
                    <Route path="contacts" element={ <Contacts/> }/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
