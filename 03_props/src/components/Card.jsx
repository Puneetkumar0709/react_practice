import React from 'react'

const Card = (props) => {

 // console.log(props);
  return (
    <div className="card">
           <img src="https://plus.unsplash.com/premium_photo-1788758733427-77928d35040d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D" alt="kuch to haiii" />
           <h1>{props.user}, {props.age}</h1>
           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, nihil?</p>
           <button>View profile</button>
         </div>
  )
}

export default Card