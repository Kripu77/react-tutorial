import React,{useState} from 'react';
import {data} from "../../../data.js";

const UseStateArray = () => {
  
  const [ people, setPeople] = useState(data);
  const removeList = (xx)=>{
    
  let newpeople = people.filter((value)=>{
    return value.id !== xx;
  })
  setPeople(newpeople);
  }


  return <> 
  {
    people.map((value)=>{
const {id, name} = value;
return (
<div className="item" key={id}>
  <h4> {name}</h4>
  <button onClick={()=>{removeList(id)}}>  remove
    </button> </div>


)

    })
  }
  <button  class="btn" onClick={()=>{setPeople([])}}> Remove</button>
  </>
};

export default UseStateArray;
