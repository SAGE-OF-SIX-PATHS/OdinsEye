import React from "react";
import "./Quickcheckresult.css";
import Header from "../components/Header";
import Arrow from "../assets/img/Arrow 1.svg"; // adjust path if needed

import { Link } from "react-router-dom";

const Quickcheckresult: React.FC = () => {
  return (
    <>
      <Header headertitle="Quick Check" />
      <Link to={"/quick-check"} className="backLink">
        <img src={Arrow} alt="backarrow" />
        Back to previous page
      </Link>

      <div className="fact-check-container">
        <div className="search-category">
          <span className="search-text">SEARCH CATEGORY - FINANCE</span>
        </div>

        <div className="fact-check-content">
          <h1 className="headline">
            No, NYSC corp members' salary was not increased to ₦450k
          </h1>

          <div className="metadata">
            <span className="date">9 April, 2025</span>
            <span className="status">
              Status - <span className="false-tag">FALSE</span>
            </span>
          </div>

          <div className="sources">
            <span className="sources-text">
              Sources:{" "}
              <a href="#" className="source-link">
                FactCheckNG
              </a>{" "}
              |{" "}
              <a href="#" className="source-link">
                AfriCheck
              </a>{" "}
              |{" "}
              <a href="#" className="source-link">
                VanguardFactCheck
              </a>
            </span>
          </div>

          <div className="fact-check-details">
            <div className="claim-section">
              <h2 className="section-title">CLAIM</h2>
              <p className="claim-text">
                NYSC corp members' salary increased to ₦450,000 monthly.
              </p>
            </div>

            <div className="summary-section">
              <h2 className="section-title">SUMMARY</h2>
              <p className="summary-text">
                Various fact-checking bodies debunked the claim, stating that
                there is no official record or announcement of such an increase.
                The salary remains ₦77,000.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quickcheckresult;
