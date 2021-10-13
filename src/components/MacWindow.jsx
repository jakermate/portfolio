import React from 'react'
import {MacTerminal} from 'react-window-ui'
import '../scss/mac.scss'
export default function MacWindow(props) {
    return (
        <MacTerminal className="mac_window" style={{
            minWidth: '100%'
        }}>
            {props.children}
        </MacTerminal>
    )
}
