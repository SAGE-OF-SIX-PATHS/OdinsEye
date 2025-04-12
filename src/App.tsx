import React from "react";
import "./styles/dashboard.css";
import dashboardIcon from "./assets/element-1.png";
import checkIcon from "./assets/search-status3.png";
import reportIcon from "./assets/note.png";
import globeIcon from "./assets/global1.png";
import TruthCheckLogo from './assets/logo1.png';
import ProfileAvatar from './assets/Ellipse 842.png';
import bookmark from './assets/bookmark.png';
import search from './assets/search-status.png';
import settings from './assets/search-status.png';
import logouticon from './assets/logout.png';
import notificationIcon from './assets/notification.png';
import GoogleTranslateProvider from './providers/googletranslateprovider';

export default function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <aside className="sidebar">
          <div className="logo">
            <img src={TruthCheckLogo} alt="TruthCheck Logo" />
          </div>
          <nav className="nav-links">
            <a href="#"><img src={dashboardIcon} alt="Dashboard" /> Dashboard</a>
            <a href="#"><img src={checkIcon} alt="Quick Check" /> Quick Check</a>
            <a href="#"><img src={reportIcon} alt="Report Claim" /> Report claim</a>
            <div className="language-dropdown">
              <img src={globeIcon} alt="Language" /> <span>Language</span>
            </div>
          </nav>
          <div className="logout-container">
            <img src={logouticon} alt="logout-icon" />
            <button className="logout-button">Log Out</button>
          </div>
        </aside>

        <main className="main-content">
          <header className="header">
            <div className="header-content">
              <h1>Dashboard</h1>
              <div className="notification-bell">
                <img src={notificationIcon} alt="Notifications" />
              </div>
            </div>
          </header>

          <section className="welcome-section">
            <img src={ProfileAvatar} alt="Profile Avatar" />
            <div className="welcome-text">
              <h2>Welcome back, Truth Ninja!🤗</h2>
              <p>Good morning,</p>
            </div>
          </section>

          <section className="activity-section">
            <div className="my-activity">
              <h3>My Activity</h3>
              <div className="activity-cards">
                <div className="card">
                  <div className="icon">
                    <img src={bookmark} alt="bookmark" />
                  </div>
                  <h4>Your Saved Claims</h4>
                  <p>Revisit the claims you've bookmarked.</p>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src={search} alt="search" />
                  </div>
                  <h4>Recent Searches</h4>
                  <p>See what you've recently looked up.</p>
                </div>
                <div className="card">
                  <div className="icon">
                    <img src={settings} alt="account-settings" />
                  </div>
                  <h4>Account Settings</h4>
                  <p>Manage your account details, update personal info.</p>
                </div>
              </div>
            </div>

            <div className="recent-activity">
              <h3>Recent Activity</h3>
              
              <div className="activity-box">
                <div className="activity-content">
                  <p>You verified a claim <br />"Naira redesigned again"</p>
                </div>
                <div className="status-tag false">● False</div>
              </div>
              
              <div className="activity-box">
                <div className="activity-content">
                  <p>You made a report</p>
                  <p className="ptag">"Fuel subsidy removal"</p>
                </div>
                <div className="status-tag verified">● Verified</div>
              </div>
              
              <div className="activity-box">
                <div className="activity-content">
                  <p>New claim request submitted <br />"Tinubu dissolves EFCC"</p>
                </div>
                <div className="status-tag pending">● Pending</div>
              </div>
              
              <a href="#" className="see-all">See all</a>
            </div>
          </section>

          <div className="action-buttons">
            <button className="quick-check">Run Quick check</button>
            <button className="submit-claim">Submit new claim request</button>
          </div>

          <footer className="footer">
            <p>Powered by Trusted sources and Verified data.</p>
            <p>© Copyright 2025 TRUTHCHECK.</p>
            <div className="footer-links">
              <a href="#">Privacy policy</a>
              <a href="#">Report issue</a>
              <a href="#">About TruthCheck</a>
            </div>
          </footer>
        </main>
      </div>
      <GoogleTranslateProvider />
    </>
  );
}