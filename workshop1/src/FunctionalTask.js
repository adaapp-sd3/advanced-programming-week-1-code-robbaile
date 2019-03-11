import React, { useState } from 'react';
import './Task.css';

function Task(props) {
    let [accepted, setAccepted] = useState(false);
    return (
        <div className={`task__${accepted}`}>
            <h2>Task: {props.title}</h2>
            <p>Description: {props.description}</p>
            <p>Check to accept task</p><input type="checkbox" onClick={() => setAccepted(!accepted)}></input>
            {accepted && <p className="p-accepted">This task has been accepted</p>}
        </div>
    )
}

export default Task;