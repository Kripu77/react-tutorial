import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {

    //store all the inputs that we will take in a state variable
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[people, setPeople] = useState([]);

    //the handleclick function prevents the default behaviour of the button i.e. refresh

    const handleClick =(e)=>{
        e.preventDefault();
        //to add mapping fucntionality we first convert the value into an object then an array
      const person = {firstName, lastName}
      const allPeople  = [person]
     
      //use setmethod to populate people
    }
return <article>
   
        {/* on the onsubmit method we just provide a reference we donot invoke it */}
<div className="form" onSubmit={handleClick}>
     <form >
    <label htmlFor="firstName">First Name:</label>
    <input type="text" id="firstName" name="lastName" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
    <br/>
    <br/>
    <label htmlFor="lastName">Last Name:</label>
    <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
    <br></br>
<button type="submit">submit</button>
</form>
</div>



</article>


};

export default ControlledInputs;
