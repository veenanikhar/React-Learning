import React, { useEffect, useState } from 'react'

function EmptyArray() {
    const[count, setCount] = useState(1);

    useEffect(()=>{
        document.title = `${count} new message...!!!`;
    },[]);
    return (
        <div>
            <h3>{count} new meassage!</h3>
            <button onClick={()=>setCount(count+1)}>Increase</button>
        </div>
    )
}

export default EmptyArray