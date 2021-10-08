import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
const [details, setDetails] = useState({firstName:'', lastName:'', email:''})
const [people, setPeople]  = useState([])
  const handleSubmit = (e)=>{
e.preventDefault();
const{firstName,lastName,email} = details;
if(firstName && lastName && email){
const allPeople =  {id: new Date().getTime().toString()  , ...details}
setPeople((prevState)=>[...prevState, allPeople])
console.log(people)
setDetails({firstName:'', lastName:'', email:''})
}
  }

  //fn to handle change
  const handleChange = (e)=>{

    const name= e.target.name;
    // name will dynamically refer to the value that we are typing
    const value= e.target.value;
    setDetails({...details, [name]:value})


  
  }

  //remove studnet

  const removeStudent  = (id)=>{
setPeople(people.filter((value)=>{
  return value.id != id;
}))
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
  <div>
    {people.map((value, index)=>{
      const{id, firstName, lastName, email} = value;
      return <div key={id} className="form">
        <h1> {firstName}</h1>
        <h2>{lastName}</h2>
        <h3>{email}</h3>
        <button onClick={()=>removeStudent(id)} > remove</button>



        </div>
    })}
  </div>


</div>
</>
};

export default ControlledInputs;
