import React from 'react'

export default function index(props) {
    return (
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Created at</th>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        </div>
    )
}
