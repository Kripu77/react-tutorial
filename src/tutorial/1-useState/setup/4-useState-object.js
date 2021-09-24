import React, { useState } from 'react';
import {obj} from "../../../object.js"
const UseStateObject = () => {
const [person, setPerson] = useState(obj);

 
 return (<> 
 
<h1> {person.age}</h1>
<h1> {person.contact}</h1>
<h1> {person.location}</h1>
<h1 > {person.name}</h1>
{/* remember the setMethod is the one only responsible for changing the state of the main value
Hence, we just use the setperson method and change the contact object and its value inside the person object */}
<button className="btn" onClick={()=>{
  if(person.contact==="reach me on instagram"){
 setPerson({...person, contact:"Reach me On Facebook"})
  }
  else{
    setPerson({...person})
  }
  
 }}>Change Contact</button>
</>)
};

export default UseStateObject;
