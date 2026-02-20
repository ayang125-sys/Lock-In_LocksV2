import React from 'react';
import LockStatusBanner from './LockStatusBanner';
import AssignmentCard from './AssignmentCard';

const Dashboard = ({ assignments, isLocked, toggleAssignment }) => {
  return (
    <div className="dashboard" data-testid="dashboard">
      {/* Lock status banner at top */}
      <LockStatusBanner isLocked={isLocked} />

      {/* Assignment cards below */}
      <div className="assignments-list" data-testid="assignments-list">
        {assignments.map((assignment) => (
          <AssignmentCard
            key={assignment.id}
            assignment={assignment}
            onToggle={toggleAssignment}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
