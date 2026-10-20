import React ,{useState}from 'react'

const App = () => {

  const [title, setTitle] = useState('')

 const submitHadler=(e)=>{
  e.preventDefault()  // this will prevent the default brhavoir of form (i.e submit pe reload ni hoga )
   console.log('form submitted by ' , title)

   setTitle('') // submit hone ke bad input field khali krne k liyee 
 }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHadler(e)
      }}>
        <input type="text"
         placeholder='Enter your name'
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App