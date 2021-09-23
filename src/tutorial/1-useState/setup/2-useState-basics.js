import React, { useState } from 'react';


const UseStateBasics = ({title="Kripu Khadka"}) => {
 //first index is the value itself and second is the one which refers to the method which will control it.
 const[text, setText]= useState("Hi my name is "+title)
 const handleBtnClick = ()=>{

//to check or add the toggle functionality use the if else loop 
if(text==="Hi my name is Kripu Khadka"){
setText (`Hi my name is ${title="Asim Bastola"}`);
}
else{
  setText(`Hi my name is ${title}`); //we have used both props and state to understand this
}
 }
 return(
   <React.Fragment>
<h1> {text}</h1>
<button className="btn" onClick={handleBtnClick}> Click me</button>
   </React.Fragment>
 );

  };
export default UseStateBasics;
