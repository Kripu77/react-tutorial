import React,{useState} from 'react';
import {data} from "../../../data.js";

const UseStateArray = () => {
  const [person, setPerson] = useState(data);

return <> 
{
 person.map((value)=>{
  const {id, name} = value;
  return(
<div key={id}className="item">
<h1> {name}</h1>

</div>)
 })
}

 </>


};

export default UseStateArray;
