import React from 'react';

const ErrorExample = () => {

  const btnClick =()=>{
    document.getElementById('changing').innerHTML="changed";
  }
  return (<div className="container"> 
  
  
<h1> Click the button to generate new title</h1>
<h2 id="changing"> Hey</h2>
<button className="btn" onClick={btnClick}> Click me</button>
  
  
  </div>);
};

export default ErrorExample;
