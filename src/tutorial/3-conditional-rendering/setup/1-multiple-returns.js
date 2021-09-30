import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  // conditional rendering means to do or return something if certain condition is met run certain component if block condition meets else run the other block component

  const[isLoading, setIsLoading]= useState(true);
  const[ isError, setIsError] = useState(false);
  const[users, setUsers] = useState([]);

  useEffect(()=>{
    fetch(url) //fetch the data coming from the url
.then((res)=>{
if(res.status>=200 && res.status<299){
  return res.json();
}
else{
  setIsError(true);
  setIsLoading(false); //setLoading to false in case of EZRRROr
}


})
.then((data)=>{
  setUsers(data.login)
  setIsLoading(false);
})
.catch((err)=>{
  console.log(err)
  setIsError(true);
})
  }, [])

  if(isLoading){
    return <h1> Loading......</h1>
  }
if(isError){
  return <h1> please check code there is an error</h1>
}
  return <> {users}</>
}

export default MultipleReturns;
