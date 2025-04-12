// Modify Sidebar.tsx to include logout functionality
import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

interface SidebarProps {
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <span>TruthCheck</span>
      </div>
      <nav className="nav-menu">
        <NavLink to="/dashboard">
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/quick-check">
          <span>Quick Check</span>
        </NavLink>
      </nav>
      <div className="logout" onClick={onLogout}>
        <span>Log Out</span>
      </div>
    </div>
  );
};

export default Sidebar;
