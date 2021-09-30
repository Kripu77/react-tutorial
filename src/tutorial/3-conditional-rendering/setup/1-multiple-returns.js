import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  // conditional rendering means to do or return something if certain condition is met run certain component if block condition meets else run the other block component

  const [isLoading, setIsLoading] = useState(true); //initally true 
  const[isError, setIsError] =useState(false); //initially false
  const [users, setUsers] = useState([]);


  useEffect(()=>{
    fetch(url) .then((res)=>{
      if(res.status>=200 && res.status<299){
        return res.json();
      
      }
      else{
        setIsError(true);
        setIsLoading(false);
      }
    }) 
    .then((data)=>{
      //to make the process more fancy we can use a set time out function prior to the value  gets to false
      setUsers(data.login)
     setTimeout(()=>{setIsLoading(false)}, 2000);
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])
if(isLoading){
  return <h1> Is Loading.....</h1>
}

if(isError){
  return <h1> There is an error please contact adminstrator</h1>
}
return <>{users}</>
}

export default MultipleReturns;
