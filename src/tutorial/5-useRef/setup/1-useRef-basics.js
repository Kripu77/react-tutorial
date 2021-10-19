import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const inputRef = useRef('')


 //to handlethe submission

 const handleClick = (e)=>{
   e.preventDefault();
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
