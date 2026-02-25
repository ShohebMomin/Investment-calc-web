import React from 'react'

export default function UserInput({ id }) {
    return (
        <main id="user-input">
            <section className='input-group'>
                <span>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input type="number" name='initial-investment' />
                </span>
                <span>
                    <label htmlFor="anual-investment">Anual Investment</label>
                    <input type="number" name='anual-investment' />
                </span>
            </section>

            <section className='input-group'>
                <span>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input type="number" name='anual-investment' />
                </span>
                <span>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" name='anual-investment' />
                </span>
            </section>

        </main>
    )
}
