import React from "react";
import { useInView } from "react-intersection-observer";
import bg from "../assets/carbg.bmp";
export default function About() {
  const { ref, inView, entry } = useInView({
    threshold: 0.25,
  });
  return (
    <div>
      <section className="full_height_section">
        <h2 id="about-me">About Me</h2>
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
