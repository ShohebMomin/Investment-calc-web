import { formatter } from "../util/investment.js";

export default function ResultTable({ data }) {
	return (
		<>
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
					{data.map(data =>
						<tr>
							<td>{data.year}</td>
							<td>{formatter.format(data.valueEndOfYear)}</td>
							<td>{formatter.format(data.interest)}</td>
							<td>{formatter.format(data.totalInterest)}</td>
							<td>{formatter.format(data.investedCapital)}</td>
						</tr>)}
				</tbody>
			</table>

		</>
	);
}
