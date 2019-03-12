import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  constructor() {
    super()
    this.state = {
      isAccepted: false,
    };
  }

  handleAcceptTask = () => {
    this.setState({
      isAccepted: !this.state.isAccepted,
    });
    
  };

  render() {
    return (
    <div className={`task task__${this.state.isAccepted}`}>
        <h2 className="task__title">Task: {this.props.title}</h2>
        <p className="task__body">Description: {this.props.description}</p>
        <p>Check to accept task</p><input type="checkbox" onClick={this.handleAcceptTask}></input>
        {this.state.isAccepted && <p className="p-accepted">This task has been accepted</p>}
    </div>
    );
  }
}

export default Task;