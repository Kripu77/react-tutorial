import React, { useState  ,useEffect } from 'react'

// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  //the way useEffect works is we pass in the call back function, within this call back function what ever we place will run after every render
  useEffect(()=>{
    console.log("call use effect")
  })

console.log("render component")
  return <>
  
  
  </>;
};

export default UseEffectBasics;
