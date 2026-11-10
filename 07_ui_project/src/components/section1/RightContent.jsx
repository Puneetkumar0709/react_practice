import { Ribbon } from 'lucide-react'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
import RightCardContent from './RightCardContent'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full  flex rounded-4xl flex-nowrap overflow-x-auto w-2/3 p-4  gap-2'>
      {props.users.map(function(elem,idx){

       
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent