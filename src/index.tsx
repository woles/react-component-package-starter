import React, { useState } from 'react'

export const Counter: React.SFC<{}> = () => {

  const [counter, setCounter] = useState(0)

  const setCounterUp = () => setCounter(counter + 1) 
  
  return (
    <>
      {counter}
      <button onClick={setCounterUp}>Like +1</button>
    </>
  )
}
