import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import JobList from './JobList';
// import JobDetail from './JobDetail';
import './App.css';
import JobBoard from './JobBoard';

function App() {
  return (
    <div className="App">
      <p> Welcome To Job </p>
      <JobBoard/>
    </div>
  );
}

export default App;
