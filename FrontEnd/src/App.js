import { Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CalendarPage from "./pages/CalendarPage";
import KioskMainPage from './pages/KioskMainPage';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate push to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/kiosk" element={<KioskMainPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
