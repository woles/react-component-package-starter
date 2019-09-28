import React, { useState } from 'react'

type CounterProps = {
  value: number,
}

export const Counter: React.SFC<CounterProps> = ({ value }) => {

  const [counter, setCounter] = useState(0)

  const setCounterUp = () => setCounter(counter + value)

  return (
    <div style={{ padding: 20 }}>
      {counter}
      <button onClick={setCounterUp} style={{ marginLeft: 15 }}>Like +{value}</button>
    </div>
  )
}
