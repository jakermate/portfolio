import "./App.css";
import "./scss/index.scss";
import Splash from "./components/Splash";
import Slider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import About from "./components/About";
import { useEffect, useState } from "react";
import $ from "jquery";
import Nav from "./components/Nav";
import { Helmet } from "react-helmet";
function App() {
  const [basicInfo, setBasicInfo] = useState();
  useEffect(() => {
    getBasicInfo();
  }, []);
  const getBasicInfo = () => {
    $.getJSON("basicInfo.json").then((basicInfoObj) =>
      setBasicInfo(basicInfoObj)
    );
  };
  // Slider component
  const slider = (
    <Slider bullets={false} fillParent>
      <div className="slider_page" style={{background: 'rgb(35, 42, 52)'}}>
        <Splash basicinfo={basicInfo}></Splash>
      </div>
      <div className="slider_page" style={{background: 'rgb(58, 70, 171)'}}>
        <About basicinfo={basicInfo}></About>
      </div>
      <div style={{background: '#3061ab'}}>
        
      </div>

    </Slider>
  );
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Nav></Nav>
      {basicInfo && (
        <Helmet>
          <title>{basicInfo.title}</title>
          <meta name="description" content={basicInfo.description} />
          <meta name="geo.placename" content={basicInfo.location} />
          <meta property="og:title" content={basicInfo.title} />
          <meta property="og:description" content={basicInfo.description} />
          <meta property="og:image" content={basicInfo.image} />
          <meta property="og:url" content={window.location.href}></meta>
          <meta property="twitter:title" content={basicInfo.title} />
          <meta property="twitter:description" content={basicInfo.description} />
          <meta property="twitter:image" content={basicInfo.image} />
        </Helmet>
      )}

      {slider}
    </div>
  );
}

export default App;
