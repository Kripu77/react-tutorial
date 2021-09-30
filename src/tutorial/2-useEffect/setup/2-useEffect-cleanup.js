import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  // useState fn
let [size, setSize] = useState(window.innerWidth);
// fn which willl set the size 
const checkSize = ()=>{
  setSize(window.innerWidth);
}
// when the screen size is greater than 1000px
 if(size>1000){
    setSize("i'm home");
    document.title="the size is perfect"
  }
  // when the size is smaller than 1000px
  else{
    document.title="React App"
  }
  useEffect(()=>{
window.addEventListener('resize', checkSize)
console.log('This is how many timesx use effect is being invoked')
  
//clean up function, it is a good practice to set up a clean up function
return ()=>{
    window.removeEventListener('resize', checkSize);
  }
//  how weever we can set the second argument which will only render the side effect once but, there are scenarios where we have to use clean up fn for preventing from various mess
  })
  return <> 
  {size}</>
}


export default UseEffectCleanup;
