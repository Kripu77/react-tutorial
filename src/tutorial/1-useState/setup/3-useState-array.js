import React,{useState} from 'react';
import {data} from "../../../data.js";

const UseStateArray = () => {

  const[people, setPeople] = useState(data);
  const removeList = (id)=>{
const newPeople = people.filter((value)=>{
  return value.id !== id;
})
setPeople(newPeople)
  }
  return <>
  {
    people.map((value)=>{
const {id, name} = value;
return(
  <div className="item" key={id}>
    <h1> {name}</h1>
    <button onClick={()=>{removeList(id)}}> remove</button>
  </div>
)

    })
    
  }
  <button className="btn"  onClick={()=>{setPeople([])}}> Rmeove</button>
  
  </>
 
}
export default UseStateArray;
