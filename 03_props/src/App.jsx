import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     
      <Card user='Aman' age={18}/> 
      <Card user='Rahul' age={38}/> 
      <Card user='Puneet' age={28}/>   
    </div>
  )
}

export default App