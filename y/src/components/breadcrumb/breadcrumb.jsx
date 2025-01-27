import React from "react";
import { Link } from "react-router-dom";
import "./breadcrumb.scss";
import InnerPageBanner from "../innerPageBanner/innerPageBanner";

const Breadcrumb = ({ location, page, subPage }) => {
  console.log("location>>>", location);

  return (
    <>
      <div className="banner-container">
        {location.pathname == "/contact-us" ? (
          <></>
        ) : (
          <InnerPageBanner location={location} />
        )}
        <div className="container breadcrum-container">
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
      </div>
    </>
  );
};

export default Breadcrumb;
