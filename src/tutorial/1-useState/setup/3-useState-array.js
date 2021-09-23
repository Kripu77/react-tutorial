import React,{useState} from 'react';
import {data} from '../../../data'

const UseStateArray = () => {


  const [person, setPerson] = useState(data);


return <>
{
person.map((value)=>{
  const {id, name} = value;
  return (
    <div key={id} className="item">
      <h1> {name} </h1>
    </div>
  )
})
} 
{/* simple gotcha is to just set the whole person array to an empty array which basically clears the whole page */}
<button onClick={()=>{setPerson([])}} className="btn">Clear items</button>
</>


};

export default UseStateArray;
