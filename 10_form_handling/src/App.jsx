import React from 'react'

const App = () => {

 const submitHadler=(e)=>{
  e.preventDefault()  // this will prevent the default brhavoir of form (i.e submit pe reload ni hoga )
   console.log('form submit')
 }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHadler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App