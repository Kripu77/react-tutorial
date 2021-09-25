import React, { useState } from 'react';

const UseStateCounter = () => {
const[count, setCount] = useState(0);
// setTime is async hence it is taken out from the normal flow
  return(
    <>
    <h1> Welcome to my simple counter</h1>\
    <h2> The count right now is {count}</h2>
<button className="btn"  onClick={()=>{
 setTimeout(()=>{
   setCount((prevState)=>{
     return prevState+1
   })
 }, 2000)
 }}> Increment Count</button>
<button className="btn"  onClick={()=>{
  setTimeout(()=>{
    setCount((prevState)=>{
      return prevState-1
    })
  }, 2000)
  }}> Decrement Count</button>  
<button className="btn"  onClick={()=>{setCount(0)}}> Reset Count</button>    
    </>
  )

};

export default UseStateCounter;
