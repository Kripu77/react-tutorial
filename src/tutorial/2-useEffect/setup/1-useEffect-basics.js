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
  //rules of hook doesnot allow you to use hooks inside the conditional but you can place conditional within the hook which will not throw any error
  
  if(value>3){
  document.title =`You have (${value}) new messages`}

  // in any condition where we would not like our useffect to render more than once we pass another argument to the useffect function and leave the array empty which will not have any other dependencies
// if we want useEffect to run only when certain condition is met then we can pass that in the array i.e. our second argument as an dependecny
},[value])
//we can have as many as use effect as we want



return<>
<h1> {value}</h1>
<button className="btn" onClick={()=>setValue(value+1)}> CLick me</button>
 </>
};

export default UseEffectBasics;
