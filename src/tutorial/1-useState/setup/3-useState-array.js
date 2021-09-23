import React,{useState} from 'react';
import {data} from '../../../data'

const UseStateArray = () => {


  const [person, setPerson] = useState(data);


return <>
{
person.map((value)=>{
  console.log(value)
})
}

</>


};

export default UseStateArray;
