import React, { useState } from 'react'
import '../components/UseState.css'
function HooksUseState() {
    // const arr = useState(0);
    // const counter = arr[0];
    // const setCounter = arr[1];

    //Array Destructuring
    // const [counter, setCounter] = useState(0);
    // const[name, setName] = useState("")


    //useState with Object
    const[details, setDetails] = useState({counter: 0, name: ""})

    const increaseCounter = () => {
        // setCounter(counter + 1);
        // setDetails({counter:details.counter + 1}) 

        //When we are dealing with Objects or array 
        //first we need to add all prev values and then update what we want to update
        setDetails((prev) => ({...prev, counter: prev.counter + 1}));
    }

    return (
        <div className='trialHooks'>
            <input type="text" onChange={e => e.target.value}/>
            <h1>Counter: {details.counter} times..!!</h1>
            <button onClick={increaseCounter}>Increase</button>
        </div>
    );
}

export default HooksUseState;