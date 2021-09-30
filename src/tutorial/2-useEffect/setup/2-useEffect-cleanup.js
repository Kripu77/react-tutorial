import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
let [size, setSize] = useState(window.innerWidth);
const checkSize = ()=>{
  setSize(window.innerWidth);
}
 if(size>1000){
    setSize("i'm home");
    document.title="the size is perfect"
  }
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
