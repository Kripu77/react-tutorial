import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  //while setting up the initial empty state we have to ensure the name matches to the input form 

  const [details, setDetails] = useState({firstName:'', lastName:"", email:""})
  
  //fn to prevent default behaviour of refresh
  const handleSubmit = (e)=>{
    e.preventDefault();
   

  }

  //fn to handle change

  const handleChange = (e)=>{
const name= e.target.name;
const value = e.target.value;
// spread the previous value and then set the name which is in the form equal to the value that we are typing dynamically
setDetails({...details,[name]:value})
  }
return <>

<div className="form" onSubmit={handleSubmit}>
  <form>
<label htmlFor="firstName">First Name:</label>
<input type="text" id="firstName" name="firstName" value={details.firstName} onChange={handleChange}></input>
<br/>
<br/>
<label htmlFor="lastName"> Last Name:</label>
<input type="text" id="lastName" name="lastName" value={details.lastName} onChange={handleChange}></input>

<br/>
<br/>
<label htmlFor="email"> Email:</label>
<input type="text" id="email" name="email" value={details.email} onChange={handleChange}></input>
<br/>
<button type="onSumbit"> Submit</button>
  </form>

</div>
</>
};

export default ControlledInputs;
