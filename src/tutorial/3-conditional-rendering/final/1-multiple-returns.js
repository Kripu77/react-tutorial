import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users';
const MultipleReturns = () => {
  const [isLoading, setIsLaoding] = useState(true);
  const [isError, setIsError] = useState(false);
  const[users, setUsers] = useState([]);
 
  //filtering and setting the users whose value is not equal to the invoked value in the function
  const removedList = (id)=>{
    setUsers(users.filter((value)=>{
      return value.id != id;
    }))
  }
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

 //initial state
  if(isLoading){
    return <h1> Loading....</h1>
  }
  //when error
  if(isError){
    return<h1> There is an error please reveiw your code</h1>
  }
  //when none of the condition are met and data is successfully fetched 
  return <>
  {users.map((value)=>{
    const {id, login}= value;
    return <div className="item" key={id}>
      <h1> {login}</h1>
      <button onClick={()=>{ removedList(id)}}> remove</button>

    </div>
  })}
{/* onclick the users is set to an empty array removing the list of all users */}
  <buton onClick={()=>
    setUsers([])
  } className="btn"> Clear all</buton>
  </>
}
 

export default MultipleReturns;
