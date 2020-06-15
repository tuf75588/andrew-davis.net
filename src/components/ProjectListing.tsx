import React from 'react';

function ProjectListing() {
  const projects = ['one', 'two', 'three', 'four', 'five', 'six'];
  return (
    <div>
      <h1>project listing:</h1>
      {projects.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}

export default ProjectListing;
