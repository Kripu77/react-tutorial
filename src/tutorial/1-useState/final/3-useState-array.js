import React, {useState} from 'react';
import { data } from '../../../data';
const UseStateArray = () => {

  const [people, setPeople] = useState(data);
  const removeList = (id)=>{

setPeople(people.filter((value)=>{
  return value.id !== id;
}))

  }

  return <>
{
  people.map((value)=>{
    return(
    <div className="item" key={value.id}> 
    <h1> {value.name}</h1>
    
    <button onClick={
      ()=>{
        removeList(value.id)
      }
}> Remove</button>

    </div>)

    
  })

 
}
 <button className="btn" onClick={()=>{setPeople([])}}> Clear all</button>
</>
  
};

export default UseStateArray;
