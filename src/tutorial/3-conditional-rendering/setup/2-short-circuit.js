import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator ? 

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

  {/* we use question mark and a semi colon as an ternary operator in which ? takes the if block and return something while the : takes the else block and returns something on the same side */}
  { isError ? <p> There is an error </p> : <div> <h2>There is no any error</h2></div>}
  
  </>
};

export default ShortCircuit;
