import React from 'react'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'

const App = () => {

  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'',
      tag:'Satisfied'
    },
     {
      img:'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'Underserved'
    },
     {
      img:'https://images.unsplash.com/photo-1747741398165-800c80706b8d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'Underbanked'
    },
     {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'UnderServed'
    },
  ]
  return (
    <div >
      <Section1  users={users}/>
      <Section2 />
    </div>
  )
}

export default App