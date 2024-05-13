export default function UserInput({ userInput, onHandleChange }) {
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
              onHandleChange('initialInvestment', event.target.value)
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
              onHandleChange('annualInvestment', event.target.value)
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
              onHandleChange('expectedReturn', event.target.value)
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
            onChange={(event) => onHandleChange('duration', event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
