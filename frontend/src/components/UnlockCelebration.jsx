import React from 'react';

// Full screen unlock celebration with padlock animation
const UnlockCelebration = () => {
  return (
    <div className="unlock-celebration" data-testid="unlock-celebration">
      {/* Glow burst effect */}
      <div className="glow-burst"></div>

      {/* Animated padlock */}
      <div className="celebration-padlock">
        <svg
          width="120"
          height="150"
          viewBox="0 0 80 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shackle swinging open */}
          <g className="shackle-swing">
            <path
              d="M 20 40 Q 20 15, 40 15 Q 60 15, 60 40 L 60 50"
              stroke="#ff4444"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              className="shackle-transition"
            />
          </g>

          {/* Lock body */}
          <rect
            x="15"
            y="45"
            width="50"
            height="45"
            rx="5"
            className="lock-body-transition"
          />

          {/* Keyhole */}
          <circle cx="40" cy="62" r="4" fill="#0f0f1a" />
          <rect x="38" y="62" width="4" height="12" rx="2" fill="#0f0f1a" />
        </svg>
      </div>

      {/* Celebration text */}
      <div className="celebration-text" data-testid="celebration-text">
        <h1>All done.</h1>
        <h2>Lock released.</h2>
        <p>You earned it.</p>
      </div>
    </div>
  );
};

export default UnlockCelebration;
