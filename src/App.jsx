// NPM Packages
import { useState } from 'react';

// Project Imports
import Results from './components/Results';
import UserInput from './components/UserInput';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 12000,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    const updatedUserInput = (currentInput) => {
      return {
        ...currentInput,
        [inputIdentifier]: +newValue,
      };
    };

    setUserInput(updatedUserInput);
  }

  return (
    <main>
      <UserInput userInput={userInput} onHandleChange={handleChange} />
      <Results userInput={userInput} />
    </main>
  );
}

export default App;
