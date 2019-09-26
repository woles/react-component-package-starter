import React, { useState } from 'react'

export const Counter: React.SFC<{}> = () => {

  const [counter, setCounter] = useState(0)

  const setCounterUp = () => setCounter(counter + 1) 
  
  return (
    <div style={{ padding: 20 }}>
      {counter}
      <button onClick={setCounterUp} style={{ marginLeft: 15 }}>Like +1</button>
    </div>
  )
}
