import { useState, useEffect } from 'react';
import '@/App.css';
import GoalSetupScreen from '@/components/GoalSetupScreen';
import Dashboard from '@/components/Dashboard';
import UnlockCelebration from '@/components/UnlockCelebration';
import ConfirmationSummary from '@/components/ConfirmationSummary';

function App() {
  // Navigation state
  const [currentScreen, setCurrentScreen] = useState('setup'); // 'setup' or 'dashboard'
  
  // Goal setup form state
  const [distractionName, setDistractionName] = useState('');
  const [distractionCategory, setDistractionCategory] = useState('');
  const [goalDescription, setGoalDescription] = useState('');
  
  // Mock assignments data - starts locked
  const [assignments, setAssignments] = useState([
    { id: 1, assignment: 'Lab 3', course: 'CMPS 101', done: false },
    { id: 2, assignment: 'Problem Set 5', course: 'MATH 23A', done: false }
  ]);

  const [isLocked, setIsLocked] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Toggle assignment completion
  const toggleAssignment = (id) => {
    setAssignments((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  // Re-evaluate lock state whenever assignments change
  useEffect(() => {
    const allDone = assignments.length === 0 || assignments.every((a) => a.done);
    const wasLocked = isLocked;
    
    setIsLocked(!allDone);

    // Trigger celebration when transitioning from locked to unlocked
    if (wasLocked && allDone && assignments.length > 0) {
      setShowCelebration(true);
      // Auto-dismiss after 3 seconds
      setTimeout(() => {
        setShowCelebration(false);
      }, 3000);
    }
  }, [assignments, isLocked]);

  // Handle goal setup submission
  const handleGoalSubmit = () => {
    // Show confirmation overlay
    setShowConfirmation(true);
    
    // After 2 seconds, hide confirmation and navigate to dashboard
    setTimeout(() => {
      setShowConfirmation(false);
      setCurrentScreen('dashboard');
    }, 2000);
  };

  // Handle back button from dashboard
  const handleBackToSetup = () => {
    setCurrentScreen('setup');
  };

  return (
    <div className="App">
      {/* Confirmation Overlay (shown after Lock It In) */}
      {showConfirmation && (
        <ConfirmationSummary
          distractionName={distractionName}
          distractionCategory={distractionCategory}
          goalDescription={goalDescription}
        />
      )}

      {/* Screen Navigation */}
      {currentScreen === 'setup' ? (
        <GoalSetupScreen
          distractionName={distractionName}
          distractionCategory={distractionCategory}
          goalDescription={goalDescription}
          onDistractionNameChange={setDistractionName}
          onDistractionCategoryChange={setDistractionCategory}
          onGoalDescriptionChange={setGoalDescription}
          onSubmit={handleGoalSubmit}
        />
      ) : showCelebration ? (
        <UnlockCelebration />
      ) : (
        <Dashboard
          assignments={assignments}
          isLocked={isLocked}
          toggleAssignment={toggleAssignment}
          onBack={handleBackToSetup}
        />
      )}
    </div>
  );
}

export default App;
