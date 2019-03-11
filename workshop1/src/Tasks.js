import React, { Component } from 'react';
import './Task.css';




class Task extends Component {

  render() {
    return (
    <div className="task">
        <h2 className="task__title">Task: {this.props.title}</h2>
        <p className="task__body">Description: {this.props.description}</p>
    </div>
    );
  }
}

export default Task;