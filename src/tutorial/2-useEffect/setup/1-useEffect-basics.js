import React, { useState  ,useEffect } from 'react'

// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
//useEffect takes on a call back function and it runs on every render.
const [value, setValue] = useState(0);
useEffect(()=>{
  console.log("Hello this is me")
  //conditional can be used to check if there are any message unseen
  if(value>0){
  document.title =`You have (${value}) new messages`}


})
console.log("Hi my name is shyam")


return<>
<h1> {value}</h1>
<button className="btn" onClick={()=>setValue(value+1)}> CLick me</button>
 </>
};

export default UseEffectBasics;
