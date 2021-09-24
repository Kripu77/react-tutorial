import React,{useState} from 'react';
import {data} from "../../../data.js";

const UseStateArray = () => {

 const [people, setPeople]= useState(data);
//  we only want to keep those peoples whose id doesnt match to the button where it is clicked
const removeList =(id)=>{
  let newPeople = people.filter((value)=>{
    return value.id !== id;
  })
  setPeople(newPeople); //setting the newpeople to the setPeople method for people
}
 return <>
 {
  //  map over each array to print out the valyes
   people.map((value, index)=>{
const {id, name}= value;
return (
  <div className="item" key={id}>
    <h4> {name}</h4>
    <button onClick={()=>{removeList(id)}}> remove</button>

  </div>
)
   })
 }
 <button className ="btn" onClick ={()=>{setPeople([])}}> Remove</button>
 </>
 
}
export default UseStateArray;
