import React,{useState} from 'react';
import {data} from '../../../data'

const UseStateArray = () => {


  const [person, setPerson] = useState(data);


return <>
{
person.map((value)=>{
  return (
    <div key={value.id} className="item">
      <h1> {value.name} </h1>
    </div>
  )
})
}

</>


};

export default UseStateArray;
