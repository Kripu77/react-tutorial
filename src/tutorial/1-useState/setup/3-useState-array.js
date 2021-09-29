import React,{useState} from 'react';
import {data} from "../../../data.js"

const UseStateArray = () => {
 const [people, setPeople] = useState(data);
 return <> 
 {
     people.map((value)=>{
const {id, name} = value;
return (
<div key={id} className="item">
    <h1> {name}</h1>
    <button> remove</button>
     </div>
     )

     })
 }

 <button className="btn" onClick={()=>{setPeople([])}}> Clear all</button> 
 
 </>
}
export default UseStateArray;
