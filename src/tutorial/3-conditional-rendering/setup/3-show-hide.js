import React, { useState, useEffect } from 'react';
import Item from './Item';

const ShowHide = () => {
  const[show, setShow] = useState(false);
  return <>

  <button className="btn" onClick={()=>{setShow(!show)}}> Show/Hide</button>
    {show && <Item/>}
  </>

}
export default ShowHide;
