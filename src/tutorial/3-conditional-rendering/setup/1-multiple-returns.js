import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  // conditional rendering means to do or return something if certain condition is met run certain component if block condition meets else run the other block component
const [isLoading, setIsLoading] = useState(true);
const [isError, setIsError] = useState(false);
const [users, setUsers] = useState([]);

useEffect(()=>{
  fetch(url) .then((res)=>{ return res.json()}) 
  .then((data)=>{
    setUsers(data.login);
    setIsLoading(false);
  }) //incase of any error
  .catch((error)=>{
    console.log(error)
    setUsers("problem")
  })
},[] 
) //till the document has not finished loading the loading... logo will appear. Once the loading is completed and the data fecthing process is done the setIsLoading is set to false which renders the users component.
if(isLoading){
  return <h1> Loading....</h1>
}
else{
  return <h2> {users}</h2>
}
}

export default MultipleReturns;
