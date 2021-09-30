import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  // conditional rendering means to do or return something if certain condition is met run certain component if block condition meets else run the other block component

  const [isLoading, setIsLoading] = useState(true); //initally true 
  const[isError, setIsError] =useState(false); //initially false
}

export default MultipleReturns;
