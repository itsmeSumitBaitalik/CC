import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/Home.jsx"
import Login from "./pages/Authentication/Login.jsx";
import Signup from "./pages/Authentication/Signup.jsx";

import DashboardLayout from "./pages/Dashboard/DashboardLayout.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";
import EventsPage from "./pages/Events/EventsPage.jsx";
import MentorsPage from "./pages/Mentors/MentorsPage.jsx";
import SettingPage from "./pages/Setting/SettingPage.jsx";
import Chatting    from "./pages/Chat/Chatting.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard with shared sidebar layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="mentors" element={<MentorsPage />} />
        </Route>

        {/* Chat — standalone full-screen page (opens in new tab) */}
        <Route path="/dashboard/chat" element={<Chatting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;