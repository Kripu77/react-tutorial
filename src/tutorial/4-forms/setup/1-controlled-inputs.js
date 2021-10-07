import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
 return <>
 <article>
<form className="form">
  <div className="form-control">
    <label htmlFor="firstName">Name: </label>
    <input type="text" id="firstName" name="FirstName"/>
  </div>
  <div>
    <label htmlFor="lastName">Name: </label>
    <input type="text" id="lastName" name="lastName"/>

  </div>
      <button type="submit"> Add person</button>
</form>


 </article>
 </>
};

export default ControlledInputs;
