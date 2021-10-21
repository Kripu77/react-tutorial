import React, { useEffect, useState } from 'react';
import Modal from "react-modal"
Modal.setAppElement('#root')

const ModalX = ({modalContent, isModalOpen, dispatch}) => {


  console.log(isModalOpen)
  return <div>
<Modal isOpen={isModalOpen}>
  <h1>hello</h1>
  <button onClick={()=>dispatch({type:"closeModal"})}> Close</button>

</Modal>

  </div>;
};

export default ModalX;
 m,nbcv