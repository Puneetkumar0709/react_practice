
import React,{useEffect, useState} from 'react'
import axios from 'axios'

const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData= async ()=>{
   const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)

   setUserData(response.data);
   console.log(response.data)
   
  }
 useEffect(function(){
  getData()
 },[index])

  let printUserData= <h3 className='text-gray-400 text-xs absolute top-1/2 left-1/2 -trasnlate-x-1/2 -trasnlate-y-1/2'>Loading...</h3>

  if(userData.length>0){
    printUserData = userData.map(function(elem,idx){

      return <div key={idx}>
        <a href={elem.url}>
          <div className='h-40 w-40 overflow-hidden rounded-xl bg-white'>
        <img className='h-full w-full  object-cover' src={elem.download_url} alt="" />
      </div>
      <h2 className='font-xl'>{elem.author}</h2>
        </a>
      </div>
    })
  }

  return (
    <div className='bg-black h-screen  p-4 overflow-auto text-white'>
      
      <div className='flex flex-wrap justify-evenly rounded-xl gap-4 mt-2'>
           {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 m-5 gap-8 '>
        <button
         className='bg-amber-400 text-black rounded-xl cursor-pointer active:scale-95 px-4 py-2'
         
         onClick={()=>{
          
          if(index>1){
            setIndex(index-1)
            setUserData([])
          }
         }}
         >
          Prev
         </button>

         Page {index}
         
        <button 
        className='bg-amber-400 text-black rounded-xl cursor-pointer active:scale-95 px-4 py-2'
        
        onClick={()=>{
          setUserData([])
           setIndex(index+1)
        }}
        >
          Next</button>
      </div>
    </div>
  )
}

export default App