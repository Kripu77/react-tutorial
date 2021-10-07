import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
    // store the input value in state
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[people, setPeople] = useState([]);
 
    // prevent default behaviour from happening that is page refresh which submit button is clicked
    const handleClick =  (e)=>{
e.preventDefault();
if(firstName && lastName && email){
    const person = {firstName, lastName, email}
        console.log(person)
   const allPerson = [...people,person];
   console.log(allPerson)
   setPeople(allPerson)

}

    }


return <>
<article>
    {/* using the onsubmit method */}
    {/* while we pass on a function to check something we just refer to the function rather than invoking it */}
<form onSubmit={handleClick}>
<div className="form">
    <label htmlFor="firstName">
        First Name
    </label>
    {/* once we have the value we need to have the onChange property if not we are only following readonly approach */}
    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>

<br/>
<br/>

    <label htmlFor="lastName">
        Last Name
    </label>
    <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
    
<br/>
<br/>

    <label htmlFor="email" >
      Email
    </label>
    <input type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
<button type="submit"> Add user?</button>

</div>

<div className="form">
    {people.map((value, index)=>{
        const[firstName, lastName, email] = value;
        return <div>
            <h1 style={{color:"black"}}> {firstName}</h1>

            </div>

    })}

</div>




</form>

</article>

</>
};

export default ControlledInputs;
