import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Task from './Task';
import FunctionalTask from './FunctionalTask';

const dummyTaskData = [
  {
      title: "Slow down",
      description: "Please don't go so fast"
  },
  {
      title: "Learn at Ada",
      description: "Do some react"
  },
  {
      title: "Go to the pub", 
      description: "Have a couple beers"
  },
  {
      title: "Do camerons work",
      description: "Do the work for that lazy git"
  }
];

class App extends Component {
  render() {
    let tasks = dummyTaskData.map(task => <FunctionalTask title={task.title} description={task.description} />);
    return (
      <div className="App">
        <Header />
        <div className="tasks">{tasks}</div>
      </div>
    );
  }
}

export default App;
