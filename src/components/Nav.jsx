import style from "../scss/nav.scss";
import { useSpring, animated } from 'react-spring'
import { useEffect } from "react";
export default function Nav(props) {
  const anime = useSpring({
    from:{
      transform: 'translateY(-200px)',
      opacity: 0
    },
    to:{
      transform: 'translateY(0)',
      opacity: 1
    },
    delay: 300
  })
  useEffect(()=>{
    console.log('nav mounted')
  },[])
  return (
    <animated.div className="nav relative" style={anime}>
      <div id="nav-wrapper">
        <div id="nav-branding"></div>
        <nav id="nav-navigation" className="text-sm md:text-xl font-bolder text-base-content">
          {
            props.locationMap.map((locationObj, index) => {
              return (
                <button className={`mx-3 px-3 font-bold ${props.index === index ? 'active' : ''}`} key={`nav-${index}`} onClick={e => props.navigateTo(index)} >{locationObj.title}</button>
              )
            })
          }
        </nav>
      </div>
    </animated.div>
  );
}
