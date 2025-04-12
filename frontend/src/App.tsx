// App.tsx
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QuickCheck from "./pages/QuickCheck";
import Quickcheckresult from "./pages/Quickcheckresult";
import GoogleTranslateProvider from "./providers/GoogleTranslateProvider";
import ProtectedRoute from "./components/ProtectedRoute";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && <Sidebar onLogout={logout} />}
        <div className={`content-area ${!isAuthenticated ? "full-width" : ""}`}>
          <Routes>
            <Route path="/" element={<Login onLogin={login} />} />
            <Route path="/login" element={<Login onLogin={login} />} />
            <Route path="/signup" element={<Signup onSignup={login} />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quick-check"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <QuickCheck />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quick-check/result"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Quickcheckresult />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
      <GoogleTranslateProvider />
    </Router>
  );
};

export default App;
