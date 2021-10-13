import React from "react";

const randomQuote = (props) => {
  let length = props.basicinfo.quotes.length;
  let random = Math.floor(Math.random() * length);
  return (
    <code className="mb-12 max-w-2xl tooltip" data-tip={props.basicinfo.quotes[random].source  + " - " +  props.basicinfo.quotes[random].year}>
      <blockquote className="text-2xl">
        {props.basicinfo.quotes[random].quote}
      </blockquote>
      <cite className="text-sm text-gray-400 font-bold">
        {props.basicinfo.quotes[random].author}
      </cite>
      <div></div>
    </code>
  );
};
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
        <div className="flex items-center justify-center flex-col  my-12">
          <h2 className="text-4xl font-extrabold font-sans text-primary">
            <span className="text-base-content">My name is </span>
            {myName}
          </h2>
          <p className="text-lg font-bold text-gray-400 mt-2">
            and I'm a <span className="">web developer</span>
          </p>
          
        </div>
        {randomQuote(props)}
        <div id="splash_control" className="mt-16">
          <button
            className="btn btn-primary shadow-md"
            onClick={(e) => props.navigateTo(1)}
          >
            About Jake
          </button>
          <button
            class="btn btn-outline btn-secondary ml-4 "
            onClick={(e) => props.navigateTo(3)}
          >
            Contact
          </button>
        </div>
      </header>
    </div>
  );
}
