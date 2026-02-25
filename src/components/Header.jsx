import React from 'react'

export default function Header({id}) {
  return (
    <header id={id}>
      <img src="/investment-calculator-logo.png" alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  )
}
