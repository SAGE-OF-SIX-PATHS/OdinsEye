import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import QuickCheck from "./components/QuickCheck";
// import ClaimRegistry from "./components/ClaimRegistry";
// import "./App.css";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import QuickCheck from "./pages/QuickCheck";
import GoogleTranslateProvider from "./providers/GoogleTranslateProvider";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar onLogout={logout} />
        {/* {isAuthenticated && <Sidebar onLogout={logout} />} */}
        <div className={`content-area ${!isAuthenticated ? "full-width" : ""}`}>
          <Routes>
            {/* Public routes */}
            {/* <Route path="/" element={<LandingPage />} /> */}
            {/* <Route path="/login" element={<Login onLogin={login} />} /> */}
            {/* <Route path="/signup" element={<Signup onSignup={login} />} /> */}

            {/* Protected routes */}

            <Route path="/" element={<Dashboard />} />
            <Route path="/quick-check" element={<QuickCheck />} />
          </Routes>
        </div>
      </div>
      <GoogleTranslateProvider />
    </Router>
  );
};

export default App;
