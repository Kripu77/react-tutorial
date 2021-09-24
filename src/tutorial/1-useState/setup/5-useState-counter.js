import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0)
  return(
    <> 
    
    <section style={{margin:"4rem 0"}}>
<h2> regular counter</h2>
<h1> {count}</h1>
<button className="btn" onClick={()=>{setCount(count+1)}}> Increment</button>
<button className="btn" onClick ={()=>{setCount(count-1)}}> Decrement</button>
<button className="btn" onClick={()=>{setCount(0)}}> Reset</button>

    </section>
    </>
  )
};

export default UseStateCounter;
