import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
     let output = fetch(url)
  .then((res)=>{ return res.json()})
  .then((data)=>{ console.log(data)})

  const[users, setUsers] = useState(output)
  console.log(users);
  
return <> </>

}
 


export default UseEffectFetchData;
