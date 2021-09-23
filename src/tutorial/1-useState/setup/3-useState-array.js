import React,{useState} from 'react';
import {data} from '../../../data'

const UseStateArray = ({btnTitle}) => {


const [people, setPeople] = useState(data);
const removeItem = (id)=>{
let newPeople = people.filter((person)=>{
  return person.id !== id})
setPeople(newPeople);
}
 
return <> 
{
  people.map((person)=>{
    const {id, name} =person;
return(
  <div key={person.id} className="item"> 
    <h1> {person.name}</h1>
    <button className="btn" onClick={()=>{removeItem(id)}}>Remove </button>
  </div>
)


  })
}
<button className="btn" onClick = {()=>setPeople([])}> Remove all </button>
</>

};

export default UseStateArray;
