// App.tsx
import React, {  useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QuickCheck from "./pages/QuickCheck";
import Quickcheckresult from "./pages/Quickcheckresult";
import LandingPage from "./pages/LandingPage";
import GoogleTranslateProvider from "./providers/GoogleTranslateProvider";
import ProtectedRoute from "./components/ProtectedRoute";

interface GoogleTranslateInlineLayout {
  HORIZONTAL: number;
  VERTICAL: number;
  SIMPLE: number;
}

interface GoogleTranslateElement {
  new (options: GoogleTranslateOptions, elementId: string): void;
  InlineLayout?: GoogleTranslateInlineLayout;
}

interface GoogleTranslate {
  translate?: {
    TranslateElement?: GoogleTranslateElement;
  };
}

interface GoogleTranslateOptions {
  pageLanguage: string;
  includedLanguages: string;
  layout?: number;
  autoDisplay?: boolean;
}

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: GoogleTranslate;
  }
}

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
            <Route path="/" element={<LandingPage/>} />
            <Route path="/login" element={<Login onLogin={login} />} />
            <Route path="/signup" element={<Signup onSignup={login} />} />
            <Route path="/quick-check/result" element={<Quickcheckresult />} />


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
           
          </Routes>
        </div>
      </div>
      <GoogleTranslateProvider />
    </Router>
  );
};

export default App;
