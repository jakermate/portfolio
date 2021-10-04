import React from 'react'
import Typical from 'react-typical'
import icon from '../logo.svg'
const subtitleSteps = [
    'Front-end Developer',
    'Back-end Developer',
    'Linux Admin',
    'Gamer'
]
export default function Splash(props) {
    if(!props.basicinfo) return <div></div>
    const myName = props.basicinfo.name
    return (
        <header id="header" style={{position: "relative"}} className="flex items-center justify-center text-white">
                <div className="flex items-center justify-center flex-col">
                    <img src={icon} alt="" width={200} />
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        {myName}
                    </h2>
                    <Typical className="font-mono text-3xl font-thin" wrapper="p" loop={50} steps={subtitleSteps.map(title => [title.toUpperCase(), 1800]).flat()}></Typical>
            </div>
        </header>
    )
}
