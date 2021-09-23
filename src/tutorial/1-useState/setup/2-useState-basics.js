import React, { useState } from 'react';


const UseStateBasics = () => {
 //first index is the value itself and second is the one which refers to the method which will control it.
 const [text, setText] = useState("Hi my name is Kripu Khadka");
  return (  <React.Fragment> 
  <h2>{text}</h2>
  </React.Fragment>
  )};
export default UseStateBasics;
