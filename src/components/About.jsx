import React from "react";
import { useInView } from "react-intersection-observer";
import bg from "../assets/carbg.bmp";
import MacWindow from "./MacWindow";
import Typical from "react-typical";

const subtitleSteps = [
  "front-end developer",
  "back-end developer",
  "full-stack developer",
  "linux guy",
  "gamer",
];
export default function About(props) {
  const { ref, inView, entry } = useInView({
    threshold: 0.25,
  });
  return (
    <div>
      <section className="full_height_section">
        <h2 id="about-me">About Me</h2>
        <MacWindow>
            <div className="text-left px-4">
              <span className="text-sm md:text-xl font-mono text-primary">
                ~{props.basicinfo.name.trim().replace(" ", "").toLowerCase()} -&gt;{" "}
              </span>
              <Typical
                className="text-sm md:text-xl font-mono font-thin text-base-content"
                wrapper="span"
                loop={50}
                steps={subtitleSteps.map((title) => [title, 2800]).flat()}
              ></Typical>
            </div>
          </MacWindow>
        <div className="icon-scroll"></div>
      </section>
      <section
        ref={ref}
        className="full_height_section"
        style={{
          transition: "1s",
          // backgroundImage: `url(${bg})`,
          background: "#333",
          backgroundSize: "cover",
          opacity: inView ? 1 : 0,
        }}
      >
        <div>this is the second section</div>
      </section>
    </div>
  );
}
