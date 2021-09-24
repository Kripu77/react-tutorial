import React, { useState } from 'react';
import {obj }from "../../../object";
const UseStateObject = () => {
  const [person, setPerson] = useState(obj);
let changeMessage= ()=>{
  // remember if you do not use spread operator while working with objects then you will essentially wipe out other data then the ones that is selected using the set method
  return setPerson({...person, location:"hornsby"});
}
  return <> 
<h1> {person.name}</h1>
<p> {person.age}</p>
<p> {person.contact}</p>
<p> {person.location}</p>
<button className="btn" onClick={()=>{changeMessage()}}> Change Message</button>

 </>;
};

export default UseStateObject;
