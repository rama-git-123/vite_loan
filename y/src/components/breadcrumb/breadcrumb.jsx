import React from "react";
import { Link } from "react-router-dom";
import "./breadcrumb.scss";

const Breadcrumb = ({ location, page, subPage }) => {
  console.log("location>>>", location);
  return (
    <div className="container">
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className={`breadcrumb-item`} aria-current={"page"}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <Link to={location.pathname} style={{ textDecoration: "none" }}>
            <li
              class="breadcrumb-item"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            >
              / {page}
            </li>
          </Link>
          <li
            class="breadcrumb-item"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            /{subPage}
          </li>
        </ol>
      </nav> */}
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li className={`breadcrumb-item`} aria-current={"page"}>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li class="breadcrumb-item">{page}</li>
          {/* <li class="breadcrumb-item active" aria-current="page">
            {subPage}
          </li> */}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
