import React, { useState, useEffect } from 'react';

function JobDetail({ match }) {
  const jobId = match.params.id;
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Simulate fetching job details from an API
    fetch(`/api/job-listings/${jobId}`)
      .then((response) => response.json())
      .then((data) => setJob(data));
  }, [jobId]);

  return (
    <div>
      {job ? (
        <>
          <h2>{job.title}</h2>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>{job.description}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default JobDetail;
