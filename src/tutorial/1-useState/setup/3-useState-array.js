import React,{useState} from 'react';
import {data} from "../../../data.js"

const UseStateArray = () => {
    const[users, setUsers] = useState(data);
    const removedList= (id)=>{
        setUsers(
            users.filter((value)=>{
                return value.id != id;
            })
        )}
return<> 
 {
     users.map((value)=>{
         const{id, name} =value;
         return(<div key={id} className="item"> 
         <h1> {name}</h1>
         <button onClick={()=>{removedList(id)}}> remove</button>

         </div>)

     })
 }
 <button className="btn" onClick={()=>{setUsers([])}}> Clear all</button>

 </>

}
export default UseStateArray;
