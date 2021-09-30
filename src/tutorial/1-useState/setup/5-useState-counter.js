import React, { useState } from 'react';

const UseStateCounter = () => {
// settime out is async hence the function  inside it is taken out form the normal flow. That is why in react in order to solve the problem of not keeping inrecord of the times the user clicked the button despite the delay set. We store the count in a prevCount or prevState argument and then add it hence it will always react to all the times the user clicked the button even if its a async funcrtion
  const[count, setCount] =useState(0);
return(<>
<h1> Async counter</h1>
<h2> Total Count: {count}</h2>
<button className="btn" onClick={()=>{
  setTimeout(()=>{
    setCount((prevCount)=> prevCount+1)}, 2000)}}> IncreMENT</button>
<button className="btn" onClick={()=>{
  setTimeout(()=>{
    setCount((prevCount)=> prevCount-1)
  }, 2000)
}}> Decrement</button>
<button className="btn" onClick={()=>{setCount(0)}}> Reset</button>

</>)
};

export default UseStateCounter;
