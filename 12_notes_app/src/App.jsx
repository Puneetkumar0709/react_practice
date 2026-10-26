import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('') 
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()

    const copyTask=[...task];  // create a copy of task array bcoz jb koi nya task add kre to purana wala v rhee

    copyTask.push({title,details})


    setTask(copyTask) 

    setTitle('')
    setDetails('')
  }

  const deleteNote=(idx)=>{
     const copyTask= [...task];

     copyTask.splice(idx,1)

     setTask(copyTask)
    
  }
  
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex items-start flex-col  gap-4 lg:w-1/2  p-10 '>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
       
       {/*phla input for Heading*/ }
       <input 
        className='px-5 w-full py-2 border-2 rounded outline-none '
        type="text"
        placeholder='Enter Task Heading'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />
        
        {/*Detailed Input*/ }
         
        <textarea type="text"
         placeholder='Write Details'
         className='px-5 w-full h-20 py-2 border-2 rounded outline-none' 
         value={details}
         onChange={(e)=>{
          setDetails(e.target.value)
         }}
         />

         <button className='bg-white text-black  px-5 w-full active:bg-gray-500 py-2 border-2 rounded outline-none '>Add Notes</button>
        
      </form>
      <div className='lg:w-1/2 lg:border-l-2  p-10'>
      <h1 className='text-xl font-bold'>Your Notes</h1>
        <div className='flex flex-wrap items-start justify-start h-[90%] gap-5 mt-5 overflow-auto'>
          {task.map(function(elem, idx){

          return <div key={idx} className='flex justify-between flex-col item-start relative h-52 w-40 rounded-xl text-black pt-9 pb-5 px-4 bg-white'>
            
            <div>
              <h3 className='leading-tight tex-xl font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
            </div>
            <button onClick={()=>{
              deleteNote(idx)
            }} className='w-full cursor-pointer active:scale-95  bg-red-500 py-1 text-xs rounded-2xl font-bold text-white'>Delete Note</button>
          </div>
          
          })}
        </div>
      </div>
    </div>
  )
}

export default App