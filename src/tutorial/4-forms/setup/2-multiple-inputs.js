import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
 
return <>

<div className="form">
<form>

<label htmlFor="fName">
  First Name:
</label>

<input type="text" id="fName" name="fName" ></input>
<br/>
<br/>

<label htmlFor="LName">
  Last Name
</label>

<input type="text" id="LName" name="LName" ></input>
<br/>
<br/>


<label htmlFor="email">
Email:
</label>

<input type="text" id="email" name="email" ></input>
<br/>
<br/>
<button type="submit"> Add user</button>
</form>


</div>

</>
};

export default ControlledInputs;
