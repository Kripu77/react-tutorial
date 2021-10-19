import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputRef = useRef('')


 //to handlethe submission

 const handleClick = (e)=>{
   e.preventDefault();
  //  if we console.log our ref property then we get access to current object from which we can get access to the value that we type on the input feild
 console.log(inputRef)
 console.log(inputRef.current.value)

 }
 return <>
  
  <form className='form' onSubmit={handleClick}>
    <input type='text' ref={inputRef}></input>
    <button type="Submit" > Submit</button>

  </form>
  
  </>
};

export default UseRefBasics;
