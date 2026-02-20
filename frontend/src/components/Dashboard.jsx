import React from 'react';
import BackButton from './BackButton';
import LockStatusBanner from './LockStatusBanner';
import AssignmentCard from './AssignmentCard';
import ProgressBar from './ProgressBar';

const Dashboard = ({ assignments, isLocked, toggleAssignment, onBack }) => {
  return (
    <div className="dashboard" data-testid="dashboard">
      {/* Back button in top left */}
      <BackButton onClick={onBack} />

      {/* Lock status banner at top */}
      <LockStatusBanner isLocked={isLocked} />

      {/* Progress bar */}
      <ProgressBar assignments={assignments} />

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
