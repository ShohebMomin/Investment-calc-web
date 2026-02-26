import Header from './components/Header.jsx'
import ResultTable from './components/ResultTable.jsx'
import UserInput from './components/UserInput.jsx'
import { useState } from 'react'
import { calculateInvestmentResults } from './util/investment.js'


function App() {
  const [userInput, setUserInput] = useState({
    "initial-investment": 10000,
    "anual-investment": 1000,
    "expected-return": 7,
    "duration": 12
  })
  const isInputvalid = userInput.duration >= 1;
  function inputHandler(e) {
    setUserInput(prev => ({
      ...prev,
      [e.target.name]: Number(e.target.value)
    }));
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
      {!isInputvalid && <p className='center'>Please Enter Duration Greater than Zero.</p>}
      {isInputvalid && <ResultTable data={data} />}

    </>
  )
}

export default App
