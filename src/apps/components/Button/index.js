import React from 'react'

export default function index(props) {
    return (
        <div>
            <button onClick={props.action} disabled={props.disable}> {props.label} </button>
        </div>
    )
}
