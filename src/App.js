import "./App.css";
import "./scss/index.scss";
import Splash from "./components/Splash";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Slider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import About from "./components/About";
import { useEffect, useState } from "react";
import $ from "jquery";
import Nav from "./components/Nav";
import { Helmet } from "react-helmet";
import Theme from "./components/Theme";

function App() {
  // load user specific data
  const [basicInfo, setBasicInfo] = useState();
  useEffect(() => {
    getBasicInfo();
  }, []);
  const getBasicInfo = () => {
    $.getJSON("basicInfo.json").then((basicInfoObj) =>
      setBasicInfo(basicInfoObj)
    );
  };
  // location map
  const locationMap = [
    {
      title: "Home",
      path: '/',
      icon: '',
      component: <Splash basicinfo={basicInfo}></Splash>,
      background: 'bg-base-300'
    },
    {
      title: "About",
      path: '/about',
      icon: '',
      component: <About basicinfo={basicInfo}></About>,
      background: 'bg-neutral'
    },
    {
      title: "Work",
      path: '/work',
      icon: '',
      component: <Work basicinfo={basicInfo}></Work>,
      background: 'rgb(35,42,52)'
    },
    {
      title: "Contact",
      path: '/contact',
      icon: '',
      component: <Contact basicinfo={basicInfo}></Contact>,
      background: 'rgb(58, 70, 171)'
    }
  ]
  // Slider component
  const slider = (
    <Slider bullets={false} fillParent>
      {
        locationMap.map((locationObj, index) => {
          return (
            <div id={`${locationObj.title}_section`} className={`slider_page ${locationObj.background}`} style={{
            }}>
              {locationObj.component}
            </div>
          )
        })
      }

    </Slider>
  );
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Nav locationMap={locationMap}></Nav>
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
      <Theme></Theme>

    </div>
  );
}

export default App;
