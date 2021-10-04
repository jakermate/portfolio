import "./App.css";
import "./scss/index.scss";
import Splash from "./components/Splash";
import Slider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import About from "./components/About";
import { useEffect, useState } from "react";
import $ from "jquery";
import Page from "./components/Page";
import Nav from "./components/Nav";
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
      <Page>
        <Splash basicinfo={basicInfo}></Splash>
      </Page>
      <Page>
      <About basicinfo={basicInfo}></About>

      </Page>
    </Slider>
  );
  return <div className="App" style={{height: '100vh'}}>
    <Nav></Nav>
    {slider}
    </div>;
}

export default App;
