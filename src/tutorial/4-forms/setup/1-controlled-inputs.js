import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
 
    // prevent default behaviour from happening that is page refresh
    const handleClick =  (e)=>{
e.preventDefault();
    }


return <>
<article>
<form onSubmit={handleClick}>
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
    <br/>
<button type="submit"> Add user?</button>

</div>





</form>

</article>

</>
};

export default ControlledInputs;
