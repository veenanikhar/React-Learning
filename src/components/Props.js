import React from 'react'
import '../components/Props.css'

// function Student({ name, age}) {
//     name = "Veena"
//       return <h1>Hello, {name}! You are {age} years old.</h1>;
//     }
    

function Student(props) { 
    // props.name = "veena"
  return (
    // Props
    <div className='student'>
        <p>I am {props.name}</p>
        <p>Age is {props.age}</p>
        <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  )
}

export default Student;