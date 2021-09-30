import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  // conditional rendering means to do or return something if certain condition is met run certain component if block condition meets else run the other block component
  const [isLoading, setIsLoading] = useState(true);
  const[isError, setIsError] = useState(false);
  const[users, setUsers] = useState([]);

console.log(users)
  useEffect(()=>{
    fetch(url)
    .then((res)=>{ return res.json()})
    .then((data)=>{
      const{login}= data;
      setUsers(login);
      setIsLoading(false)});
  },[])

 if(isLoading){
   return <h1> Loading....</h1>
  }

 else{
   return <h1> {users}</h1>
 }



};

export default MultipleReturns;
