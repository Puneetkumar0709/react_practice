import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)


  useEffect(function(){
    console.log('useEffect is working')
  },[num])
  return (
    <div>
         <h1>num is:{num}</h1>
         <h1>num@ is:{num2}</h1>
      <button onMouseEnter={()=>{
        setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum2(num2+100)
      }}
      >Hover</button>
    </div>
  )
}

export default App