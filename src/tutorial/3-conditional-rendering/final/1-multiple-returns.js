import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';
const MultipleReturns = () => {
  const [isLoading, setIsLaoding] = useState(true);
  const [isError, setIsError] = useState(false);
  const[users, setUsers] = useState([]);
  console.log(users)
  useEffect(()=>{

    //if response doesnot fall under the criteria then the error message will trigger
    //in our case the error is 404 which is not found
    fetch(url) .then((res)=>{ 
      if(res.status>=200 && res.status<299){
        return res.json();
      }
      else{
    setIsError(true);
    setIsLaoding(false);
      }
    }) .then((data)=>{
      setUsers(data);
      setIsLaoding(false)
    })
    .catch((error)=>{
      setIsError(true);
    })
  },[])

 
  if(isLoading){
    return <h1> Loading....</h1>
  }
  if(isError){
    return<h1> There is an error please reveiw your code</h1>
  }
  return <>
  {users.map((value)=>{
    const {id, login}= value;
    return <div className="item" key={id}>
      <h1> {login}</h1>

    </div>
  })}
  </>
}
 

export default MultipleReturns;
