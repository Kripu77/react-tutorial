import React, {useState} from 'react';

const ErrorExample = () => {

 const [text, setText] = useState("Hey my name is Kripu");
  return (<div className="container"> 
  
  
<h1> Click the button to generate new title</h1>
<h2 id="changing"> {text}</h2>
<button className="btn" > Click me</button>
  
  
  </div>);
};

export default ErrorExample;
