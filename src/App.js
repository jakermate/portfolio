import "./App.css";
import "./scss/index.scss";
import Splash from "./components/Splash";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Slider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import About from "./components/About";
import { useEffect, useState } from "react";
import $ from "jquery";
import Nav from "./components/Nav";
import { Helmet } from "react-helmet";
import Theme from "./components/Theme";
import GithubLink from "./components/GithubLink";
// nav slider

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
      path: "home",
      icon: "",
      component: (
        <Splash basicinfo={basicInfo} navigateTo={requestNavigation}></Splash>
      ),
      background: "bg-base-300",
    },
    {
      title: "About",
      path: "about",
      icon: "",
      component: <About basicinfo={basicInfo}></About>,
      background: "bg-neutral",
    },
    {
      title: "Work",
      path: "work",
      icon: "",
      component: <Work basicinfo={basicInfo}></Work>,
      background: "rgb(35,42,52)",
    },
    {
      title: "Contact",
      path: "contact",
      icon: "",
      component: <Contact basicinfo={basicInfo}></Contact>,
      background: "rgb(58, 70, 171)",
    },
  ];
  const [page, setPage] = useState(0)
  const [index1, setIndex] = useState(0)

  function requestNavigation(index) {
    console.log('request for ' + index)
    setPage(index);
  }


  const slider = (
    <Slider
      bullets={false}
      fillParent
      infinite={false}
      animation="openAnimation"
      selected={page}
      onTransitionStart={e => setIndex(e.currentIndex)}
    >
      {locationMap.map((locationObj, index) => {
        return (
          <div
            key={`location_index_${index}`}
            id={`${locationObj.title}_section`}
            className={`slider_page ${locationObj.background}`}
            style={{}}
          >
          <Nav key={`nav_index_${index}`} index={index}  locationMap={locationMap} navigateTo={requestNavigation}></Nav>

            {locationObj.component}
          </div>
        );
      })}
    </Slider>
  );
  // const slider = (
  //   <NavSlider
  //   // startupScreen={<div>sdsdsds</div>}
  //     className="awesome-slider"
  //     media={
  //       locationMap.map((locationObj, index)=>{
  //         return(
  //           {
  //             slug: locationObj.path,
  //             className: `${locationObj.path} autoheight`,
  //             children: locationObj.component,
  //           }
  //         )
  //       })
  //       }
  //   ></NavSlider>
  // );
  return (
    <div className="App" style={{ height: "100vh" }}>
      {basicInfo && (
        <div>
          <GithubLink />
          <Helmet>
            <title>{basicInfo.title}</title>
            <meta name="description" content={basicInfo.description} />
            <meta name="geo.placename" content={basicInfo.location} />
            <meta property="og:title" content={basicInfo.title} />
            <meta property="og:description" content={basicInfo.description} />
            <meta property="og:image" content={basicInfo.image} />
            <meta property="og:url" content={window.location.href}></meta>
            <meta property="twitter:title" content={basicInfo.title} />
            <meta
              property="twitter:description"
              content={basicInfo.description}
            />
            <meta property="twitter:image" content={basicInfo.image} />
          </Helmet>

          {slider}
          <Theme></Theme>
        </div>
      )}
    </div>
  );
}

export default App;
