import React, { useState } from 'react';

const UseStateCounter = () => {
const[count, setCount] = useState(0);

  return(
    <>
    <h1> Welcome to my simple counter</h1>\
    <h2> The count right now is {count}</h2>
<button className="btn"  onClick={()=>{setCount(count+1)}}> Increment Count</button>
<button className="btn"  onClick={()=>{setCount(count-1)}}> Decrement Count</button>  
<button className="btn"  onClick={()=>{setCount(0)}}> Reset Count</button>    
    </>
  )

};

export default UseStateCounter;
