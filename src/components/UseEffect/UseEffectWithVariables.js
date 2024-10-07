import React, { useEffect, useState } from 'react'

function WithVariable() {
    const[count, setCount] = useState(5);

    useEffect(()=>{
        document.title=`${count} new message..!`
    }, [count]);
    return (
        <div>
            <h3>
                {count} new message..!!
            </h3>
            <button onClick={()=>setCount(count+5)}>Increase</button>
        </div>
    )
}

export default WithVariable