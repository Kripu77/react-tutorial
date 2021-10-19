import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
const inputRef =  useRef('')
const divRef = useRef('')
  // handleSubmit fn
  const handleSubmit = (e)=>{
e.preventDefault();
// if we console log then we get access to a current property from the ref hook
console.log(inputRef.current.value)
console.log(divRef)
console.log(divRef.current)
  }

  //use effect to check the focus and run only once, hence no need to have any dependency if it will only trigger once
  useEffect(()=>{
inputRef.current.focus();

  })
return <>


<form className='form' onSubmit={handleSubmit}>
  <input type='text' ref={inputRef}></input>
  <button className='submit' >Submit</button>
</form>

<div ref={divRef}> 
  <h1> hello</h1>
</div>
</>
};

export default UseRefBasics;
