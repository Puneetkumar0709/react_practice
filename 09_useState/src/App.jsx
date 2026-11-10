import React, { useState } from 'react'

const App = () => {
  
  const [num, setNum] = useState(10);

  function chnageNum(){
    setNum(num+2)
  }
  
  return (
    
    <div>
      <h1>Value of a is {num}</h1>
      <button onClick={chnageNum} >Click me</button>
    </div>
  )
}

export default App