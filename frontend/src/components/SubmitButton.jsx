import React from 'react';
import { Lock } from 'lucide-react';

const SubmitButton = ({ isValid, onClick }) => {
  return (
    <button
      className={`submit-button ${!isValid ? 'disabled' : 'active'}`}
      disabled={!isValid}
      onClick={onClick}
      data-testid="submit-button"
    >
      <Lock size={20} />
      <span>Lock It In</span>
    </button>
  );
};

export default SubmitButton;
