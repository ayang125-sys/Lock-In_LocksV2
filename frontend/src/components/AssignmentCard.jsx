import React from 'react';
import { Check } from 'lucide-react';

const AssignmentCard = ({ assignment, onToggle }) => {
  const { id, assignment: name, course, done } = assignment;

  return (
    <div
      className={`assignment-card ${done ? 'done' : ''}`}
      data-testid={`assignment-card-${id}`}
    >
      <div className="assignment-info">
        <p className={`assignment-name ${done ? 'strikethrough' : ''}`}>
          {name}
        </p>
        <p className="course-name">{course}</p>
      </div>

      <button
        className={`checkbox-btn ${done ? 'checked' : ''}`}
        onClick={() => onToggle(id)}
        data-testid={`assignment-checkbox-${id}`}
        aria-label={`Mark ${name} as ${done ? 'incomplete' : 'complete'}`}
      >
        {done && <Check size={16} strokeWidth={3} />}
      </button>
    </div>
  );
};

export default AssignmentCard;
