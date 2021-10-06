import React from "react";
import style from "../scss/nav.scss";
export default function Nav(props) {
  return (
    <div className="nav">
      <div id="nav-wrapper">
        <div id="nav-branding"></div>
        <nav id="nav-navigation" className="text-base md:text-xl font-bold">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Work</a>
        </nav>
      </div>
    </div>
  );
}
