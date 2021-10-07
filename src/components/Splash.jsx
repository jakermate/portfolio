import React from "react";
import Typical from "react-typical";
import MacWindow from "./MacWindow";

const subtitleSteps = [
  "Front-end Developer",
  "Back-end Developer",
  "Linux Admin",
  "Gamer",
];
export default function Splash(props) {
  if (!props.basicinfo) return <div></div>;

  const myName = props.basicinfo.name;
  return (
    <div className="full_height_section">
      <header
        id="splash"
        style={{
          position: "relative",
          transition: 10000,
        }}
        className="flex items-center justify-center text-white"
      >
        <div className="flex items-center justify-center flex-col">
          <img
            src={
              "https://icongr.am/devicon/github-original.svg?size=128&color=currentColor"
            }
            alt=""
            width={200}
          />
          <h2 className="text-4xl font-bold mb-4 text-white">{myName}</h2>
          <MacWindow>
            <div className="text-left px-4">
              <p className="text-red-600 font-bold">I'M A</p>
              <span className="text-xl"> > </span>
              <Typical
                className="font-mono text-xl md:text-2xl font-thin"
                wrapper="span"
                loop={50}
                steps={subtitleSteps
                  .map((title) => [title.toUpperCase(), 1800])
                  .flat()}
              ></Typical>
            </div>
          </MacWindow>
        </div>
      </header>
    </div>
  );
}
