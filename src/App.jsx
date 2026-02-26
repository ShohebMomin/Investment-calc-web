import Header from './components/Header.jsx'
import ResultTable from './components/ResultTable.jsx'
import UserInput from './components/UserInput.jsx'
import { useState } from 'react'
import { calculateInvestmentResults } from './util/investment.js'


function App() {
  const [userInput, setUserInput] = useState({
    "initial-investment": "",
    "anual-investment": "",
    "expected-return": "",
    "duration": ""
  })
  function inputHandler(e) {
    setUserInput({ ...userInput, [e.target.name]: Number(e.target.value) })
  }
  const data = calculateInvestmentResults({
    initialInvestment: Number(userInput["initial-investment"]),
    annualInvestment: Number(userInput["anual-investment"]),
    expectedReturn: Number(userInput["expected-return"]),
    duration: Number(userInput["duration"]),
  })
  return (
    <>
      <Header id="header" />
      <UserInput onChange={inputHandler} userInput={userInput} />
      <ResultTable data={data} />
    </>
  )
}

export default App
