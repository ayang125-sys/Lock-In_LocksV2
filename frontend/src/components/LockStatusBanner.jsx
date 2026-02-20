import React from 'react';

// Custom SVG padlock with animated shackle
const PadlockSVG = ({ isLocked }) => {
  return (
    <svg
      width="80"
      height="100"
      viewBox="0 0 80 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="padlock-svg"
    >
      {/* Shackle - the part that swings open */}
      <g className={`shackle ${isLocked ? '' : 'open'}`}>
        <path
          d="M 20 40 Q 20 15, 40 15 Q 60 15, 60 40 L 60 50"
          stroke={isLocked ? '#ff4444' : '#00ff88'}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Lock body */}
      <rect
        x="15"
        y="45"
        width="50"
        height="45"
        rx="5"
        fill={isLocked ? '#ff4444' : '#00ff88'}
        className="lock-body"
      />

      {/* Keyhole */}
      <circle cx="40" cy="62" r="4" fill="#0f0f1a" />
      <rect x="38" y="62" width="4" height="12" rx="2" fill="#0f0f1a" />
    </svg>
  );
};

const LockStatusBanner = ({ isLocked }) => {
  return (
    <div className="lock-status-banner" data-testid="lock-status-banner">
      <PadlockSVG isLocked={isLocked} />
      <h1 className="status-text" data-testid="lock-status-text">
        {isLocked ? 'LOCKED' : 'UNLOCKED'}
      </h1>
      <p className="status-subtitle">
        {isLocked
          ? 'Complete all assignments to unlock'
          : 'All done! Lock released.'}
      </p>
    </div>
  );
};

export default LockStatusBanner;
