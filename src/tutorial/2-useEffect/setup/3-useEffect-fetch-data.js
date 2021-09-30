import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
   //initially I would just declare an empty useState array
   const[users, setUsers] = useState([])
     console.log(users) //to check the data once the user has been set to new fetch json file after fetch promise is fulfilled
   useEffect(()=>{
     fetch(url)
     .then((res)=>{ return res.json()})
     .then((data)=>setUsers(data));
   
   },[])


   return <> {
users.map((value)=>{

})


   }</>

  

}
 


export default UseEffectFetchData;
