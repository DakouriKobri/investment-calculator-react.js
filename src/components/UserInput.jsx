// NPM Packages
import { useState } from 'react';

export default function UserInput() {
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
        [inputIdentifier]: newValue,
      };
    };

    setUserInput(updatedUserInput);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment">Initial Investment</label>
          <input
            type="number"
            required
            aria-required
            placeholder="10000"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange('initialInvestment', event.target.value)
            }
          />
        </p>

        <p>
          <label htmlFor="investment">Annual Investment</label>
          <input
            type="number"
            required
            aria-required
            placeholder="300"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange('annualInvestment', event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="investment">Expected Return</label>
          <input
            type="number"
            required
            aria-required
            placeholder="5,5"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange('expectedReturn', event.target.value)
            }
          />
        </p>

        <p>
          <label htmlFor="investment">Duration</label>
          <input
            type="number"
            required
            aria-required
            placeholder="12"
            value={userInput.duration}
            onChange={(event) => handleChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
