import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Product from './pages/Product'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import { useNavigate } from 'react-router-dom'

const App = () => {

  const navigate= useNavigate()

  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />

        <div>
      <button onClick={()=>{
        navigate('/')
      }} className='bg-red-500 rounded-2xl px-5 py-5 m-2 cursor-pointer active:scale-90'> Retrn to Home Page</button>
      <button onClick={()=>{
        navigate(-1)  //ek page piche jane k liye
      }} className='bg-red-500 rounded-2xl px-5 py-5 m-2 cursor-pointer active:scale-90'> Back</button>
      
    </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        {/* Dynamic Rounting */}
        <Route path='/courses/:id' element={<CourseDetails/>}/>
        
        {/* Nested routing */}

        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>} />
          <Route path='women' element={<Women/>} />
          <Route path='kids' element={<Kids/>} />
        </Route>
        
        <Route path='*' element={<Notfound/>}/> 
        
      </Routes>

      <Footer/>
    </div>
  )
}

export default App