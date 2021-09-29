import React, { useState  ,useEffect } from 'react'

// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
const [value, setValue] = useState(0);
  //the way this function works is similar to map, filter concept. IT takes a callback fucntion and performs some action on every render
  useEffect(()=>{
    // fun fact is consolke.log is also considered as side effect
    console.log('call useEffect');
    document.title =` new mnessage (${value})`
  })

  console.log('render component')
  
  return(
 <>
 <h1> {value}</h1>
 <button className="btn" onClick={()=>{setValue(value+1)}}> New Button</button>
 </>)
};

export default UseEffectBasics;
