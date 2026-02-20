import React from 'react';

const ProgressBar = ({ assignments }) => {
  const total = assignments.length;
  const completed = assignments.filter(a => a.done).length;
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="progress-section" data-testid="progress-section">
      <p className="progress-text">
        {completed} of {total} assignments done
      </p>
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
          data-testid="progress-bar-fill"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
