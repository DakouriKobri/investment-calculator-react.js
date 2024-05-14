// Project Imports
import Input from './Input';

export default function UserInput({ userInput, onHandleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <Input
          label="Initial Investment"
          value={userInput.initialInvestment}
          changeHandler={(event) =>
            onHandleChange('initialInvestment', event.target.value)
          }
        />
        <Input
          label="Annual Investment"
          value={userInput.annualInvestment}
          changeHandler={(event) =>
            onHandleChange('annualInvestment', event.target.value)
          }
        />
      </div>

      <div className="input-group">
        <Input
          label="Expected Return"
          value={userInput.expectedReturn}
          changeHandler={(event) =>
            onHandleChange('expectedReturn', event.target.value)
          }
        />
        <Input
          label="Duration"
          value={userInput.duration}
          changeHandler={(event) =>
            onHandleChange('duration', event.target.value)
          }
        />
      </div>
    </section>
  );
}
