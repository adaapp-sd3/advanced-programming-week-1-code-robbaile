import React, { useState } from 'react';
import './Task.css';

function Task(props) {
    let [accepted, setAccepted] = useState(false);
    return (
        <div className={`task task__${accepted}`}>
            <div className="title-container">
                <div className={`circle circle__${accepted}`}></div>
                <h2 className="task__heading">Task: {props.title}</h2>
            </div>
            <p className="task__description">Description: {props.description}</p>
            <p>Check to accept task</p><input type="checkbox" onClick={() => setAccepted(!accepted)}></input>
            {accepted && <p className="p-accepted">This task has been accepted</p>}
        </div>
    )
}

export default Task;