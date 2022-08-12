import { Route, Routes, Navigate } from "react-router-dom";
import KioskMainPage from "./pages/KioskMainPage";
import KioskLoginPage from "./pages/KioskLoginPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate push to="kiosk/login" />} />
        <Route path="/kiosk" element={<KioskMainPage />} />
        <Route path="/kiosk/login" element={<KioskLoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
