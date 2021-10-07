import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Hello you =have cliked me")
    }
 return <>
 <article>
     <form className="form" onSubmit={handleSubmit}>
         <div className="form-control">

             <label htmlFor="firstName">Name:</label>
             <input type="text" id="firstName" name="firstName"/>
         </div>
          <div className="form-control">

             <label htmlFor="Email">Name:</label>
             <input type="text" id="email" name="email"/>
         </div>
{/* in react we have two options we can either add onSubmit on the form if we use submit on the button whereas we can also use onclick on the button */}
<button type="submit"> Add Person?</button>
     </form>


 </article>
 </>
};

export default ControlledInputs;
