import React from "react";
import style from "../scss/nav.scss";
export default function Nav(props) {
  return (
    <div className="nav">
      <div id="nav-wrapper">
        <div id="nav-branding"></div>
        <nav id="nav-navigation" className="text-base md:text-xl font-bold text-base-content">
          {
            props.locationMap.map((locationObj, index) => {
              return (
                <a href={locationObj.path}>{locationObj.title}</a>
              )
            })
          }
        </nav>
      </div>
    </div>
  );
}
