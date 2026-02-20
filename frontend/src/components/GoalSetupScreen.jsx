import { useState } from 'react';
import DistractionField from './DistractionField';
import GoalField from './GoalField';
import SubmitButton from './SubmitButton';

const GoalSetupScreen = ({
  distractionName,
  distractionCategory,
  goalDescription,
  onDistractionNameChange,
  onDistractionCategoryChange,
  onGoalDescriptionChange,
  onSubmit
}) => {
  // Check if both fields are filled
  const isFormValid = distractionName.trim() && distractionCategory && goalDescription.trim();

  return (
    <div className="goal-setup-screen" data-testid="goal-setup-screen">
      <div className="goal-setup-container">
        {/* Header */}
        <div className="setup-header">
          <h1 className="setup-title">Lock-in Locks</h1>
          <p className="setup-subtitle">Make a commitment to yourself</p>
        </div>

        {/* Form Fields */}
        <div className="setup-fields">
          <DistractionField
            name={distractionName}
            category={distractionCategory}
            onNameChange={onDistractionNameChange}
            onCategoryChange={onDistractionCategoryChange}
          />

          <GoalField
            value={goalDescription}
            onChange={onGoalDescriptionChange}
          />
        </div>

        {/* Submit Button */}
        <SubmitButton
          isValid={isFormValid}
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default GoalSetupScreen;
