import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='py-10 items-center gap-10 flex  h-[90vh] px-18'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content