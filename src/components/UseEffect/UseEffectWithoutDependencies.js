import React, { useEffect, useState } from 'react'

function UseEffectWithoutDependencies() {
    const[counter, setCounter] = useState(0);
    
    useEffect( () => {
        document.title = `${counter} new meassage.`
    })
    
    return (
        <div>
            <h3>
                {counter} new message..!!
            </h3>
            <button onClick={() => setCounter(counter+1)}>
                Increase
            </button>
        </div>
    )
}

export default UseEffectWithoutDependencies;