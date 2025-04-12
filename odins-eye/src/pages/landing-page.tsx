import React, { useEffect, useState } from "react";
import '../styles/landingpage.css';
import Globe from "../assets/global.png";
import logo from "../assets/logo.png";
import arrow from "../assets/drop down.png";
import DashboardPreview from "../assets/dashboard preivew.png";
import GoogleTranslateProvider from "../providers/GoogleTranslateProvider";


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

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "quick-check", "report", "claim-registry"];
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItem = (label: string, id: string) => (
    <li 
      className="nav-item"
      onMouseEnter={() => setHoveredItem(id)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {label}
      {hoveredItem === id && <span className="nav-item-indicator"></span>}
    </li>
  );

  return (
    <div className="landing-page">
      <GoogleTranslateProvider />

      {/* Navbar */}
      <nav className="navbar">
        <img src={logo} alt="TruthCheck Logo" className="logo" />
        <ul className="nav-links">
          {navItem("Home", "home")}
          {navItem("Quick Check", "quick-check")}
          {navItem("Report", "report")}
          {navItem("Claim Registry", "claim-registry")}
          <li 
            className="nav-item globe-item"
            onMouseEnter={() => setHoveredItem("English")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="globe-container">
              <img src={Globe} alt="Globe Icon" className="globe-icon" />
              <span>English</span>
              <img src={arrow} alt="drop down" className="dropdown-icon" />
            </div>
            {hoveredItem === "English" && <span className="nav-item-indicator"></span>}
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section" >
        <h1 className="hero-title">
          Empowering Nigerians <br /> with the Truth
        </h1>
        <p className="hero-description">
          Verify news, social media posts, and public claims — instantly.
        </p>
        <div className="hero-form">
          <input
            type="text"
            placeholder="Paste a message, link, or describe the claim"
            className="claim-input"
          />
          <button className="verify-btn">Verify claim</button>
        </div>
      </section>

      {/* Dashboard Preview Image */}
      <section className="dashboard-preview">
        <img src={DashboardPreview} alt="Dashboard Preview" />
      </section>
    </div>
  );
}