import React from "react";
import PropTypes from "prop-types";

//importing router dom from https://v5.reactrouter.com/web/guides/quick-start
import {Link } from "react-router-dom";

export default function Navbar(props) {
  
  // (props.mode==='')
  
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} 
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.tittle}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
          <div className="d-flex mx-3">
            <button className="bg-primary rounded mx-1"  onClick={()=>{props.userMode('primary')}} style={{height:'30px',width:'30px'}} ></button>
            <button className="btn btn-secondary rounded mx-1"  onClick={()=>{props.userMode('secondary')}} style={{height:'30px',width:'30px'}} ></button>
            <button className="btn btn-success rounded mx-1"  onClick={()=>{props.userMode('success')}} style={{height:'30px',width:'30px'}} ></button>
            <button className="btn btn-danger rounded mx-1"  onClick={()=>{props.userMode('danger')}} style={{height:'30px',width:'30px'}} ></button>
            <button className="btn btn-warning rounded mx-1"  onClick={()=>{props.userMode('warning')}} style={{height:'30px',width:'30px'}} ></button>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={()=>{props.userMode(null)}}
            />
            <label className={`form-check-label text-${(props.mode==='dark')?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">
              {props.modeBtn}
            </label>
          </div>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  tittle: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  tittle: "App name",
  about: "About us",
};
