// Project Imports
import { formatter } from '../util/investment';

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

export default function Results() {
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
  );
}
