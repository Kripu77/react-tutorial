import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
 
return <>
<article>
<form>
<div className="form">
    <label htmlFor="firstName">
        First Name
    </label>
    <input type="text" name="firstName" id="firstName"/>

<br/>
<br/>

    <label htmlFor="lastName">
        Last Name
    </label>
    <input type="text" name="lastName" id="lastName"/>
    
<br/>
<br/>

    <label htmlFor="email">
      Email
    </label>
    <input type="text" name="email" id="email"/>


</div>
<button> Add user?</button>




</form>

</article>

</>
};

export default ControlledInputs;
