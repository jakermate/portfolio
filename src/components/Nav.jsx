import React from "react";
import style from "../scss/nav.scss";
import {Link} from 'react-awesome-slider/dist/navigation'
export default function Nav(props) {
  const location = window.location.pathname
  console.log(location)
  return (
    <div className="nav">
      <div id="nav-wrapper">
        <div id="nav-branding"></div>
        <nav id="nav-navigation" className="text-base md:text-xl font-bold text-base-content">
          {
            props.locationMap.map((locationObj, index) => {
              return (
                <button className="mx-3 px-3" key={`nav-${index}`} onClick={e => props.navigateTo(index)} >{locationObj.title}</button>
              )
            })
          }
        </nav>
      </div>
    </div>
  );
}
