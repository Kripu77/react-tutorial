import React from 'react';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div>
     <h1> Error, this page doesnot exist. Click on the button below to go back to home...</h1>
     <Link to="/">
     <button className='btn'>Home</button>
     </Link>
    </div>
  );
};

export default Error;
