import React from 'react';

const ConfirmationSummary = ({ distractionName, distractionCategory, goalDescription }) => {
  // Get category emoji
  const getCategoryEmoji = (category) => {
    const emojiMap = {
      phone: '📱',
      gaming: '🎮',
      tv: '📺',
      snacks: '🍕',
      music: '🎵',
      other: '🔒'
    };
    return emojiMap[category] || '🔒';
  };

  return (
    <div className="confirmation-overlay" data-testid="confirmation-overlay">
      <div className="confirmation-card">
        <div className="confirmation-item">
          <span className="confirmation-icon">{getCategoryEmoji(distractionCategory)}</span>
          <div>
            <p className="confirmation-label">Locking:</p>
            <p className="confirmation-value">{distractionName}</p>
          </div>
        </div>

        <div className="confirmation-item">
          <span className="confirmation-icon">🎯</span>
          <div>
            <p className="confirmation-label">Until:</p>
            <p className="confirmation-value">{goalDescription}</p>
          </div>
        </div>

        <div className="confirmation-footer">
          <p className="confirmation-active">Your lock is now active.</p>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationSummary;
