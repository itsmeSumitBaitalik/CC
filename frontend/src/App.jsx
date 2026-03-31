import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage/Home.jsx"
import LandingPage from "./pages/HomePage/LandingPage/LandingPage.jsx";
import Login from "./pages/Authentication/Login/Login.jsx";
import Signup from "./pages/Authentication/Signup/Signup.jsx";
import About from "./pages/HomePage/About/About.jsx";

import DashboardLayout from "./pages/Dashboard/DashboardLayout.jsx";
import DashboardPage from "./pages/Dashboard/DashboardPage.jsx";
import EventsPage from "./pages/Dashboard/Events/EventsPage.jsx";
import MentorsPage from "./pages/Dashboard/Mentors/MentorsPage.jsx";
import SettingPage from "./pages/Setting/SettingPage.jsx";
import Chatting from "./pages/Chat/Chatting.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
        </Route>
        
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