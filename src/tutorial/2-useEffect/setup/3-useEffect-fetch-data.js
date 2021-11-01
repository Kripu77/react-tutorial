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
    //  setting the data obtained to the user information with the help of the method
   
   },[]) //empty array dependency to prevent infinte fetch


   return <><h1> The list of GitHub Users</h1><ul className="users">  {
    // map over the users array 
users.map((value)=>{
  const{id, login, avatar_url, html_url } = value;
return (<li key={id} className="item">
  <img src={avatar_url} alt={login}/>
<div> 
  <h4> {login}</h4>

<a href = {html_url}> profile </a>
</div>

</li>)

})


   }</ul></>

  

}
 


export default UseEffectFetchData;
