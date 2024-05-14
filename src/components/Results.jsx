// Project Imports
import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ userInput }) {
  const resultsData = calculateInvestmentResults(userInput);
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].annualInvestment -
    resultsData[0].interest;

  const annualResults = resultsData.map((yearData) => {
    const { annualInvestment, interest, valueEndOfYear, year } = yearData;

    const totalInterest =
      valueEndOfYear - annualInvestment * year - initialInvestment;

    const investedCapital = valueEndOfYear - totalInterest;

    return (
      <tr key={year}>
        <td>{year}</td>
        <td>{formatter.format(valueEndOfYear)}</td>
        <td>{formatter.format(interest)}</td>
        <td>{formatter.format(totalInterest)}</td>
        <td>{formatter.format(investedCapital)}</td>
      </tr>
    );
  });

  return (
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

      <tbody>{annualResults}</tbody>
    </table>
  );
}
