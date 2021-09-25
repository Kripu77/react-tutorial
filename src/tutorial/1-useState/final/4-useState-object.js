import React, { useState } from 'react';
import {obj} from "../../../object.js";

const UseStateObject = () => {
  const[ people, setPeople] =  useState(obj)
    
  return(<>
<h1> {people.age}, {people.name} </h1>
<button className="btn" onClick={()=>{setPeople({...people, name:"Asim Bastola"})}}> Update student</button>
  </>)
};

export default UseStateObject;
