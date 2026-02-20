import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ onClick }) => {
  return (
    <button
      className="back-button"
      onClick={onClick}
      data-testid="back-button"
      aria-label="Go back to goal setup"
    >
      <ArrowLeft size={18} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;
