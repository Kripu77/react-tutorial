import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
 const[ details, setDetails] = useState([{firstName:""}, {lastName:""} ,{email:""}])
const [people, setPeople] = useState([])
const handleSubmit = (e)=>{
e.preventDefault();
}


return <>

<div className="form">
<form onSubmit={handleSubmit}>

<label htmlFor="fName">
  First Name:
</label>

<input type="text" id="fName" name="fName" value={details[0].firstName} onChange={handleChange}></input>
<br/>
<br/>

<label htmlFor="LName" >
  Last Name
</label>

<input type="text" id="LName" name="LName" value={details[0].lastName}  onChange={handleChange}></input>
<br/>
<br/>


<label htmlFor="email">
Email:
</label>

<input type="text" id="email" name="email" value={details[0].email}  onChange={handleChange}></input>
<br/>
<br/>
<button type="submit"> Add user</button>
</form>


</div>

</>
};

export default ControlledInputs;
