import React from 'react'

export default function index(props) {
    return (
        <div>
            <button onClick={props.action} disabled={props.disable} style={props.style}> {props.label} </button>
        </div>
    )
}
