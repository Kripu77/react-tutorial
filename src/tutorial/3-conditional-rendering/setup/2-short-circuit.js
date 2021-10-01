import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const[text, setText] = useState('');
  const[isError, setIsError] = useState(false);
  return <>
  {/* the or operator if it is false then it returns the second parameters */}
  <h1> {isError||"There is no any error"}</h1>
  {/* the and operator if it is false then it return the 1st paramter */}
  <h1> {isError&&"Error....404"}</h1>
  {/* every time we click we toggle the error from its previous state */}
  <button className="btn" onClick={()=>{setIsError(!isError)}}>click me</button>
  
  </>
};

export default ShortCircuit;
