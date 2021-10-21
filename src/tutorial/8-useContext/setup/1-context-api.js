

import React from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';
import ComponentC from './ComponentC';


export const userContext =  React.createContext();
export const secondContext = React.createContext();

const ContextAPI= () => {
  return (
    <div>

      <userContext.Provider value={"Kripu"}>
        <ComponentA/>
    

      </userContext.Provider>
      <secondContext.Provider value={"Second Context"}>

        <ComponentB/>
      </secondContext.Provider>
      
    </div>
  )
}

export default ContextAPI;
