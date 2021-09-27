import React,{useState} from 'react';
import {data} from "../../../data"

const UseStateArray = () => {
 const [users, setusers] = useState(data);
 //the common factor to understand is x is just afunction parameter and while we attach it to onClick we are actually taking the id of the person as an argumement
 const removeList =(x)=>{
setusers(users.filter((value)=>{
  return value.id !== x;
}))
 }
return <>
{users.map((value)=>{
  const{id,name}=value;
return(
  <div className="item" key={id}> 
  <h1> {name}</h1>
  <button onClick={()=>{removeList(id)}}> remove</button>
  
  </div>)
})}
<button onClick={()=>{setusers([])}} className="btn"> Remove </button>
</>
 
}
export default UseStateArray;
