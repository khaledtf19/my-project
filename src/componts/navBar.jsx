import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Active
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
