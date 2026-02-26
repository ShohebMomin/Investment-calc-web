export default function UserInput({ onChange, userInput }) {
    return (
        <main id="user-input">
            <section className='input-group'>
                    <p>
                      <label htmlFor="initial-investment">Initial Investment</label>
                      <input type="number" name='initial-investment' required value={userInput['initial-investment']} onChange={onChange} />
                    </p>
                    <p>
                      <label htmlFor="anual-investment">Anual Investment</label>
                      <input type="number" name='anual-investment' required value={userInput['anual-investment']} onChange={onChange} />
                    </p>
                  </section>
            
                    <section className='input-group'>
                      <p>
                        <label htmlFor="expected-return">Expected Return</label>
                        <input type="number" name='expected-return' required value={userInput['expected-return']} onChange={onChange} />
                      </p>
                      <p>
                        <label htmlFor="duration">Duration</label>
                        <input type="number" name='duration' required value={userInput['duration']} onChange={onChange} />
                      </p>
                    </section>

        </main>
    )
}
