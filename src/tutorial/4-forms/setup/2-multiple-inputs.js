import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
const [details, setDetails] = useState({firstName:'', lastName:'', email:''})

  const handleSubmit = (e)=>{
e.preventDefault();
  }

  //fn to handle change
  const handleChange = (e)=>{

    const name= e.target.name;
    // name will dynamically refer to the value that we are typing
    const value= e.target.value;
    setDetails({...details, [name]:value})

  }
return <>
<div className="form">
  <form  onSubmit={handleSubmit}>
    <label htmlFor="firstName"> First Name:</label>
    <input type="text" id="firstName" name="firstName" value={details.firstName} onChange={handleChange}>
    </input>
    <br/>
    <br/>
    <label htmlFor="lastName"> Last Name: </label>
    <input type="text" id="lastName" name="lastName" value={details.lastName} onChange={handleChange}></input>
    <br/>
    <br/>
    <label htmlFor="email"> Email:</label>
    <input type="text" id="email" name="email" value={details.email} onChange={handleChange}></input>
    <br/>
    <br/>
    <button type="submit">Add Student?</button>
  </form>


</div>
</>
};

export default ControlledInputs;
