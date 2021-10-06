import React from 'react'
import {MacTerminal} from 'react-window-ui'
export default function MacWindow(props) {
    return (
        <MacTerminal style={{
            minWidth: 300
        }}>
            {props.children}
        </MacTerminal>
    )
}
