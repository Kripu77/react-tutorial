import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
 const[ details, setDetails] = useState({firstName:"", lastName:"",email:""})
const [people, setPeople] = useState([])
const handleSubmit = (e)=>{
e.preventDefault();
}

//fn to handle change
const handleChange = (e)=>{
  const name=e.target.name;
const value= e.target.value;

console.log(name, value)
setDetails({...details, [name]:value})
}

return <>

<div className="form">
<form onSubmit={handleSubmit}>

<label htmlFor="fName">
  First Name:
</label>

<input type="text" id="fName" name="firstName" value={details.firstName} onChange={handleChange}></input>
<br/>
<br/>

<label htmlFor="LName" >
  Last Name
</label>

<input type="text" id="LName" name="lastName" value={details.lastName}  onChange={handleChange}></input>
<br/>
<br/>


<label htmlFor="email">
Email:
</label>

<input type="text" id="email" name="email" value={details.email}  onChange={handleChange}></input>
<br/>
<br/>
<button type="submit"> Add user</button>
</form>


</div>

</>
};

export default ControlledInputs;
