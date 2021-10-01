import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
const[ text, setText] = useState('');
const[isError, setIsError] = useState(false);
//if first value is falsy then in the case of OR operator it returns the second value
  const firstValue = text || 'hello world';
  //if the first value is flasy in AND operator it returns the 1st value.

  const secondValue = text && 'hello world';
  // in summary these two are exactly opposite to each other and commonly used to setup expression in JSX
  return <>
<h1> {text||"The text is falsy"}</h1>
<h1> {isError && "ERROR 404"}</h1>
  <button className="btn" onClick={()=>{setIsError(!isError)}}> toogle Error</button>
   </> 
};

export default ShortCircuit;
