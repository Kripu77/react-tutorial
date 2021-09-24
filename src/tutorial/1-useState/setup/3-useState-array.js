import React,{useState} from 'react';
import {data} from "../../../data.js";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
const removeSelection = (id) =>{
  let newPeople = people.filter((person)=>{
     return person.id !== id
   
  })
   setPeople(newPeople)
}

return <> 
{

  people.map((value)=>{
    const{id, name} = value;
    console.log(value);
 
return(
      <div className="item" key={id}>  
    <h4> {name}</h4> 
    <button onClick= {()=>{return removeSelection(id)}}> remove</button>
    </div>)

  
  })

}
<button className="btn" onClick={()=>{setPeople([])}}> remove</button>
</>
};

export default UseStateArray;
