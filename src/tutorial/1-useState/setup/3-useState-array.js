import React,{useState} from 'react';
import {data} from "../../../data.js"
//filter the list and only return those values whose value is not equal to the invoked value when the button is clicked 
const UseStateArray = () => {
 const [people, setPeople] = useState(data);
 const removePeople = (id)=>{
setPeople(people.filter((value)=>{
    return value.id!= id;
    //the new value is set once the filtering is done

}))
 }
 return <> 
 {/* map over the data that is coming from our JSON file */}
 {
     people.map((value)=>{
const {id, name} = value;
return (
<div key={id} className="item">
    <h1> {name}</h1>
    {/* set the method to an empty array which does the job in removing the list */}
    <button onClick={()=>removePeople(id)}> remove </button>
     </div>
     )

     })
 }

 <button className="btn" onClick={()=>{setPeople([])}}> Clear all</button> 
 
 </>
}
export default UseStateArray;
