import React from 'react';
import JobList from './JobList';

function JobBoard() {
    return (
      <div className="JobBoard">
        <h2>Available Jobs</h2>
        <JobList />
      </div>
    );
  }

export default JobBoard;
