// Project Imports
import { formatter } from './util/investment';

const annualData = [
  {
    year: 1,
    investmentValue: 10_850,
    interest: 550,
    totalInterest: 550,
    investedCapital: 10_300,
  },
  {
    year: 2,
    investmentValue: 11_747,
    interest: 597,
    totalInterest: 1_147,
    investedCapital: 10_600,
  },
];

function App() {
  const annualResult = annualData.map((data) => {
    const { investedCapital, investmentValue, totalInterest, year, interest } =
      data;

    return (
      <tr key={year}>
        <td>{year}</td>
        <td>{formatter.format(investmentValue)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(investedCapital)}</td>
      </tr>
    );
  });
  return (
    <main>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label htmlFor="investment">Initial Investment</label>
            <input type="text" placeholder="10000" />
          </p>

          <p>
            <label htmlFor="investment">Annual Investment</label>
            <input type="text" placeholder="300" />
          </p>
        </div>

        <div className="input-group">
          <p>
            <label htmlFor="investment">Expected Return</label>
            <input type="text" placeholder="5,5" />
          </p>

          <p>
            <label htmlFor="investment">Duration</label>
            <input type="text" placeholder="12" />
          </p>
        </div>
      </div>

      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>

        <tbody>{annualResult}</tbody>
      </table>
    </main>
  );
}

export default App;
