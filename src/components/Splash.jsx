import React from "react";
import Typical from "react-typical";
import MacWindow from "./MacWindow";

const subtitleSteps = [
  "front-end developer",
  "back-end developer",
  "linux admin",
  "gamer",
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
        className="flex items-center flex-col justify-center text-white min-w-full"
      >
        <div className="flex items-center justify-center flex-col ">
          <img
            src={
              "https://icongr.am/devicon/github-original.svg?size=128&color=currentColor"
            }
            alt=""
            width={200}
          />
          <h2 className="text-4xl font-sans my-12 text-primary"><span className="text-base-content">My name is </span>{myName}</h2>
          <MacWindow>
            <div className="text-left px-4">
              <span className="text-sm md:text-xl font-mono text-primary">~{myName.trim().replace(' ', "").toLowerCase()} -&gt; </span>
              <Typical
                className="text-sm md:text-xl font-mono font-thin text-base-content"
                wrapper="span"
                loop={50}
                steps={subtitleSteps
                  .map((title) => [title, 2800])
                  .flat()}
              ></Typical>
            </div>
          </MacWindow>
        </div>
        <div id="splash_control" className="mt-16">
          <button className="btn btn-primary shadow-md">About Jake</button>
          <button class="btn btn-outline btn-secondary ml-4 ">Contact</button>
        </div>
      </header>
    </div>
  );
}
