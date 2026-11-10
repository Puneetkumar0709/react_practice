import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
               <h2 className='bg-white  text-2xl  font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>          
              
             
          <p className='text-xl  text-white mb-10'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore corporis eaque modi. Delectus, laboriosam expedita?</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-semibold px-7 py-3 rounded-full text-lg' > {props.tag}</button>
            <button className='bg-blue-600 text-white font-semibold px-5 py-3 rounded-full text-lg'><i className='ri-arrow-right-line'></i></button>
            </div>
          </div>
        </div>
  )
}

export default RightCardContent