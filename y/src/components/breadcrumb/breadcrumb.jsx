import React from "react";
import { Link } from "react-router-dom";
import "./breadcrumb.scss";

const Breadcrumb = ({ location, page }) => {
  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className={`breadcrumb-item`} aria-current={"page"}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li class="breadcrumb-item">{page}</li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
