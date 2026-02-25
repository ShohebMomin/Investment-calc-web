import Header from './components/Header.jsx'
import ResultTable from './components/ResultTable.jsx'
import UserInput from './components/UserInput.jsx'
import { useState } from 'react'
import { calculateInvestmentResults } from './util/investment.js'
import { formatter } from './util/investment.js'


function App() {
  const [value, setValue] = useState({
    "initial-investment": "",
    "anual-investment": "",
    "expected-return": "",
    "duration": ""
  })
  function inputHandler(e) {
    setValue({ ...value, [e.target.name]: Number(e.target.value) })
    // console.log(e.target.name)
    // console.log(e.target.value)
  }
  const investment = {
    initialInvestment: Number(value["initial-investment"]),
    annualInvestment: Number(value["anual-investment"]),
    expectedReturn: Number(value["expected-return"]),
    duration: Number(value["duration"]),
  }

  const data = calculateInvestmentResults(investment)
  // const investedCapital = []
  // investedCapital.push(investment.initialInvestment +(investment.annualInvestment * investment.duration))
  // console.log(investedCapital[investedCapital.length -1])
  console.log(data.map(data => data))
  return (
    <>
      <Header id="header" />
      <UserInput ><section className='input-group'>
        <span>
          <label htmlFor="initial-investment">Initial Investment</label>
          <input type="number" name='initial-investment' value={value['initial-investment']} onChange={inputHandler} />
        </span>
        <span>
          <label htmlFor="anual-investment">Anual Investment</label>
          <input type="number" name='anual-investment' value={value['anual-investment']} onChange={inputHandler} />
        </span>
      </section>

        <section className='input-group'>
          <span>
            <label htmlFor="expected-return">Expected Return</label>
            <input type="number" name='expected-return' value={value['expected-return']} onChange={inputHandler} />
          </span>
          <span>
            <label htmlFor="duration">Duration</label>
            <input type="number" name='duration' value={value['duration']} onChange={inputHandler} />
          </span>
        </section></UserInput>

      <ResultTable>
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
      </ResultTable>
    </>
  )
}

export default App
