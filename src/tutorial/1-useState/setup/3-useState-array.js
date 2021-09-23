import React,{useState} from 'react';
import {data} from '../../../data'

const UseStateArray = ({btnTitle}) => {


  const [person, setPerson] = useState(data);

let removeItem =  (id)=>{
          let NewPeopleList = person.filter((value)=>value.id !==id);
          setPerson(NewPeopleList);

        }
return <>
{
person.map((value)=>{
  const {id, name} = value;
  return (
    <div key={id} className="item">
      <h1> {name} </h1>
      <button onClick={ ()=> removeItem(id)
       
      }> remove </button>
    </div>
  )
})
} 
{/* simple gotcha is to just set the whole person array to an empty array which basically clears the whole page */}
<button onClick={()=>{
  if(person==data){
    setPerson([]);

  }
  else{
    setPerson(data);

  }
}} className="btn">{btnTitle="Add or remove"}</button>
</>


};

export default UseStateArray;
