import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const[person, setPerson] = useState({firstName:'', lastName:'', email:''});
  const[totalPeople, setPeople] = useState([])
  const handleSubmit= (e)=>{
    e.preventDefault();

  }

  const handleClick = (e)=>{
    const name = e.target.name
    const value = e.target.value
    console.log(name, value)
  }
return <>
<article>
<div className="form" onSubmit={handleSubmit}>
  <form>
    <label htmlFor="firstName"> First Name:
    </label>
    <input type="text" name="firstName" id="firstName" value={person.firstName} onChange = {handleClick}></input>
    <br/>
    <br/>
     <label htmlFor="lastName"> Last Name:
    </label>
    <input type="text" name="lastName" id="lastName" value={person.lastName} onChange= {handleClick}></input>
    <br/>
    <br/>
     <label htmlFor="email"> email:
    </label>
    <input type="text" name="email" id="email" value={person.email} onChange={handleClick}></input>
    <br/>
    <button type="submit">Submit?</button>
  </form>

</div>
</article>
</>
};

export default ControlledInputs;
