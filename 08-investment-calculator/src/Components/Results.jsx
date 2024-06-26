import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";

export default function Results({ input }) {
  const allData = calculateInvestmentResults(input);
  const initialInvestment = input.initialInvestment;

  console.log(allData);

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
      <tbody>
        {allData &&
          allData.map((yearData) => {
            const TotalInterest =
              yearData.valueEndOfYear -
              yearData.annualInvestment * yearData.year -
              initialInvestment;
            const investedCapital = yearData.valueEndOfYear - TotalInterest;
            return (
              <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(TotalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
