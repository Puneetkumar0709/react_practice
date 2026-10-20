import React ,{useState} from 'react'

const App = () => {

  const [num, setNum] = useState({user:'Puneet', age:22})

  function changeNum(){
    const newNum = {...num}

    newNum.user='Monu'
    newNum.age=23
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num.user} , {num.age}</h1>
      <button onClick={changeNum}>click me</button>
    </div>
  )
}

export default App